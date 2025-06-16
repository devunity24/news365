import fs from "fs";
import AWS from "aws-sdk";

// Load configuration
const config = JSON.parse(fs.readFileSync("config.json", "utf-8"));

// Configure AWS SDK
const s3 = new AWS.S3({
  accessKeyId: config.ACCESS_KEY_ID,
  secretAccessKey: config.SECRET_ACCESS_KEY,
  region: config.REGION,
});

const cloudfront = new AWS.CloudFront({
  accessKeyId: config.ACCESS_KEY_ID,
  secretAccessKey: config.SECRET_ACCESS_KEY,
  region: config.REGION,
});
const BUILD_DIR = config.BUILD_DIR;
const env = process.argv[2] || "TEST";
const BUCKET_NAME = config[env].BUCKET_NAME;
const DISTRIBUTION_ID = config[env]?.DISTRIBUTION_ID; // Optional for environments without CloudFront

/**
 * 
 * Delete the local build directory
 */
const deleteLocalBuildFiles = () => {
  // Using the recursive option to delete the dist directory  
  fs.rmSync(`./${BUILD_DIR}`, { recursive: true });
  console.log(`Build has been Successfully deployed in ${process.argv[2]}-Server ✅`)
  console.log('Local Build folder has been successfully deleted ✅')
}
/**
 * Get the MIME type of a file based on its extension
 */
const getContentType = (fileName) => {
  const ext = fileName.split(".").pop().toLowerCase();
  const mimeTypes = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
    png: "image/png",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    svg: "image/svg+xml",
  };
  return mimeTypes[ext] || "application/octet-stream";
};

/**
 * Upload a single file to S3
 */
const uploadFile = async (filePath, bucketName, s3Key) => {
  const fileData = fs.readFileSync(filePath);
  const contentType = getContentType(filePath);

  const params = {
    Bucket: bucketName,
    Key: s3Key,
    Body: fileData,
    ContentType: contentType,
  };

  console.log(`Uploading ${filePath} to S3 as ${s3Key}...`);
  await s3.upload(params).promise();
  console.log(`Uploaded ${filePath}`);
};

/**
 * Recursively upload files and directories to S3
 */
const uploadDirectory = async (dirPath, bucketName, s3PathPrefix = "") => {
  const items = fs.readdirSync(dirPath);

  for (const item of items) {
    const itemPath = `${dirPath}/${item}`;
    const stats = fs.statSync(itemPath);

    if (stats.isFile()) {
      const s3Key = `${s3PathPrefix}${item}`;
      await uploadFile(itemPath, bucketName, s3Key);
    } else if (stats.isDirectory()) {
      const newS3PathPrefix = `${s3PathPrefix}${item}/`;
      console.log(`Entering directory: ${itemPath}`);
      await uploadDirectory(itemPath, bucketName, newS3PathPrefix);
    }
  }
};

/**
 * Invalidate CloudFront cache
 */
const invalidateCache = async (distributionId, paths) => {
  const params = {
    DistributionId: distributionId,
    InvalidationBatch: {
      CallerReference: `${Date.now()}`, // Unique identifier
      Paths: {
        Quantity: paths.length,
        Items: paths,
      },
    },
  };

  console.log(`Invalidating CloudFront cache for paths: ${paths.join(", ")}`);
  try {
    const data = await cloudfront.createInvalidation(params).promise();
    console.log(
      `Cache invalidated successfully. Invalidation ID: ${data.Invalidation.Id}`
    );
  } catch (error) {
    console.error(`Error invalidating cache: ${error.message}`);
  }
};

/**
 * Main function to upload files and invalidate cache
 */
const main = async () => {
  try {
    console.log(`Starting upload to S3 bucket: ${BUCKET_NAME}`);
    await uploadDirectory(BUILD_DIR, BUCKET_NAME, "");
    console.log("All files uploaded successfully.");

    if (env === "PRODUCTION" && DISTRIBUTION_ID) {
      console.log("Invalidating CloudFront cache...");
      await invalidateCache(DISTRIBUTION_ID, ["/*"]);
    }
    deleteLocalBuildFiles();
  } catch (error) {
    console.error(
      `Error during upload or cache invalidation ❌ ❌ : ${error.message}`
    );
  }
};

main();