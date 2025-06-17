import React from "react";
import TopBar from "../components/TopBar";
import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";

const JoinUs = () => (
  <div className="bg-white min-h-screen font-sans">
    <TopBar />
    <MainNavigation />
    <main className="max-w-screen-xl mx-auto px-4 py-10">
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg p-8 md:p-14 mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-6 tracking-tight">
          Join Our Team as a Community Ambassador!
        </h1>
        <div className="space-y-8">
          {/* About the Role */}
          <div>
            <h2 className="text-2xl font-bold text-blue-800 mb-2">About the Role</h2>
            <p className="text-base text-gray-700 mb-3">
              As a Community Ambassador, you will play a vital role in bridging the gap between our news channel and the community.
              Your responsibilities will include:
            </p>
            <ul className="list-disc pl-6 text-base text-gray-700 space-y-1">
              <li>Representing our news channel at community events and functions</li>
              <li>Building relationships with local organizations, businesses, and individuals</li>
              <li>Gathering feedback and insights from the community to help shape our content</li>
              <li>Collaborating with our team to develop engaging and relevant content</li>
              <li>Promoting our news channel and its initiatives within the community</li>
            </ul>
          </div>
          {/* What We're Looking For */}
          <div>
            <h2 className="text-2xl font-bold text-blue-800 mb-2">What We’re Looking For</h2>
            <ul className="list-disc pl-6 text-base text-gray-700 space-y-1">
              <li>Passionate and enthusiastic individuals with a strong connection to the community</li>
              <li>Excellent communication and interpersonal skills</li>
              <li>Ability to work independently and as part of a team</li>
              <li>Strong organizational and time management skills</li>
              <li>Familiarity with social media platforms and content creation</li>
            </ul>
          </div>
          {/* What We Offer */}
          <div>
            <h2 className="text-2xl font-bold text-blue-800 mb-2">What We Offer</h2>
            <ul className="list-disc pl-6 text-base text-gray-700 space-y-1">
              <li>Opportunity to be part of a dynamic and growing news channel</li>
              <li>Professional development and training</li>
              <li>Networking opportunities with community leaders and organizations</li>
              <li>Recognition and rewards for outstanding performance</li>
            </ul>
          </div>
          {/* How to Apply */}
          <div>
            <h2 className="text-2xl font-bold text-blue-800 mb-2">How to Apply</h2>
            <p className="text-base text-gray-700 mb-2">
              If you’re interested in joining our team as a Community Ambassador, please submit your application, including:
            </p>
            <ul className="list-disc pl-6 text-base text-gray-700 space-y-1">
              <li>A brief introduction and explanation of why you’d be a great fit for this role</li>
              <li>Your resume or CV</li>
              <li>Contact information for two professional references</li>
            </ul>
            <p className="mt-4 text-base font-semibold text-pink-600">
              Don’t miss this opportunity to make a difference in your community and join our team as a Community Ambassador. Apply now!
            </p>
          </div>
        </div>
      </section>
      {/* Application Form */}
      <section className="bg-white rounded-2xl shadow-lg p-8 md:p-14 mb-10">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">Application Form</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-1" htmlFor="firstName">
                First Name*
              </label>
              <input
                id="firstName"
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 text-base"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1" htmlFor="lastName">
                Last Name*
              </label>
              <input
                id="lastName"
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 text-base"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1" htmlFor="dob">
                Date of Birth *
              </label>
              <input
                id="dob"
                type="date"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 text-base"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1" htmlFor="qualification">
                Qualification *
              </label>
              <input
                id="qualification"
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 text-base"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1" htmlFor="permanentAddress">
              Permanent Address *
            </label>
            <textarea
              id="permanentAddress"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 text-base min-h-[100px]"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-1" htmlFor="aadhaar">
                Adhaar Number *
              </label>
              <input
                id="aadhaar"
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 text-base"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1" htmlFor="mediaName">
                Name of Media *
              </label>
              <input
                id="mediaName"
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 text-base"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1" htmlFor="website">
                Website URL *
              </label>
              <input
                id="website"
                type="url"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 text-base"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1" htmlFor="designation">
                Designation *
              </label>
              <input
                id="designation"
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 text-base"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1" htmlFor="officeAddress">
              Office Address *
            </label>
            <textarea
              id="officeAddress"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 text-base min-h-[100px]"
              required
            />
          </div>
          <div className="mb-2">
            <span className="block text-gray-700 font-semibold mb-1">
              Whether any Membership in Similar Organization *
            </span>
            <div className="flex gap-6">
              <label className="inline-flex items-center">
                <input type="radio" name="membership" value="yes" className="form-radio text-blue-600" required />
                <span className="ml-2 text-gray-700">YES</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" name="membership" value="no" className="form-radio text-blue-600" required />
                <span className="ml-2 text-gray-700">NO</span>
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-1" htmlFor="contactNumber">
                Contact Number *
              </label>
              <input
                id="contactNumber"
                type="tel"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 text-base"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1" htmlFor="email">
                Email *
              </label>
              <input
                id="email"
                type="email"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 text-base"
                required
              />
            </div>
          </div>
          <div className="mb-2">
            <span className="block text-gray-700 font-semibold mb-1">
              Declaration *
            </span>
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox text-blue-600" required />
              <span className="ml-2 text-gray-700">I accept all terms and conditions</span>
            </label>
          </div>
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-8 rounded-md transition-colors shadow mt-2"
          >
            Submit
          </button>
        </form>
      </section>
    </main>
    <Footer />
  </div>
);

export default JoinUs;
