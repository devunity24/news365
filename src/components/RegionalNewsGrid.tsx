import NewsCard from "./NewsCard";
import FeaturedNewsCard from "./FeaturedNewsCard";
import SmallNewsCard from "./SmallNewsCard";

const regionalNews = [
	{
		language: "malayalam",
		stories: [
			{
				image: "../images/malayalam_news_2.avif",
				category: "Malayalam",
				headline: "ബോയിങ് 787 ഡ്രീംലൈനറിലെ സുരക്ഷാ വീഴ്ചകൾ ചൂണ്ടിക്കാട്ടി, ദുരൂഹമരണം; ചർച്ചകളിൽ നിറഞ്ഞ് ജോൺ ബാർനെറ്റ്",
				publishedAt: "2024-06-10",
			},
			{
				image: "../images/malayalam_news_1.jpg",
				category: "Malayalam",
				headline: "ശമ്പളകുടിശിക ആവശ്യപ്പെട്ട് കിറ്റെക്‌സ് കമ്പനിക്ക് മുന്നില്‍ തൊഴിലാളികള്‍ സമരത്തിലെന്ന് റിപ്പോര്‍ട്ട്",
				publishedAt: "2024-06-09",
			},
			{
				image: "../images/malayalam_news_3.avif",
				category: "Malayalam",
				headline: "യുവതി കിടപ്പുമുറിയിൽ തൂങ്ങിമരിച്ച നിലയിൽ; വിവാഹം കഴിഞ്ഞത് ഒരു വർഷം മുൻപ്",
				publishedAt: "2024-06-08",
			},
			{
				image: "../images/malayalam_news_4.jpg",
				category: "Malayalam",
				headline: "ഇറാനില്‍ വീണ്ടും ഇസ്രഈല്‍ ആക്രമണം; ലക്ഷ്യമിട്ടത് സുപ്രധാന ആണവ കേന്ദ്രത്തെ",
				publishedAt: "2024-06-07",
			},
			{
				image: "../images/malayalam_news_5.jpg",
				category: "Malayalam",
				headline: "ജമാഅത്തെ ഇസ്‌ലാമി ആളുകള്‍ അകറ്റി നിര്‍ത്തുന്ന വിഭാഗം; വര്‍ഗീയ ശക്തികളുടെ പിന്തുണ എല്‍.ഡി.എഫിന് വേണ്ട: മുഖ്യമന്ത്രി",
				publishedAt: "2024-06-06",
			},
			{
				image: "../images/malayalam_news_1.jpg",
				category: "Malayalam",
				headline: "ശമ്പളകുടിശിക ആവശ്യപ്പെട്ട് കിറ്റെക്‌സ് കമ്പനിക്ക് മുന്നില്‍ തൊഴിലാളികള്‍ സമരത്തിലെന്ന് റിപ്പോര്‍ട്ട്",
				publishedAt: "2024-06-09",
			},
			{
				image: "../images/malayalam_news_3.avif",
				category: "Malayalam",
				headline: "യുവതി കിടപ്പുമുറിയിൽ തൂങ്ങിമരിച്ച നിലയിൽ; വിവാഹം കഴിഞ്ഞത് ഒരു വർഷം മുൻപ്",
				publishedAt: "2024-06-08",
			},
			{
				image: "../images/malayalam_news_4.jpg",
				category: "Malayalam",
				headline: "ഇറാനില്‍ വീണ്ടും ഇസ്രഈല്‍ ആക്രമണം; ലക്ഷ്യമിട്ടത് സുപ്രധാന ആണവ കേന്ദ്രത്തെ",
				publishedAt: "2024-06-07",
			},
			{
				image: "../images/malayalam_news_5.jpg",
				category: "Malayalam",
				headline: "ജമാഅത്തെ ഇസ്‌ലാമി ആളുകള്‍ അകറ്റി നിര്‍ത്തുന്ന വിഭാഗം; വര്‍ഗീയ ശക്തികളുടെ പിന്തുണ എല്‍.ഡി.എഫിന് വേണ്ട: മുഖ്യമന്ത്രി",
				publishedAt: "2024-06-06",
			},
		],
	},
	{
		language: "kannada",
		stories: [
			{
				image: "../images/kannada_news_1.jpg",
				category: "Kannada",
				headline: "ಮೈಸೂರು ಅರಮನೆ ಬೆಳಕು ಪ್ರದರ್ಶನ ಜನರ ಗಮನ ಸೆಳೆಯಿತು",
				publishedAt: "2024-06-10",
			},
			{
				image: "../images/top_news_1.jpg",
				category: "Kannada",
				headline: "ಬೆಂಗಳೂರು ಮೆಟ್ರೋ ಐಟಿ ಹಬ್‌ಗಳನ್ನು ಸಂಪರ್ಕಿಸುವ ಹೊಸ ಮಾರ್ಗವನ್ನು ಆರಂಭಿಸಿದೆ",
				publishedAt: "2024-06-09",
			},
			{
				image: "../images/top_news_4.jpg",
				category: "Kannada",
				headline: "ನಟ ಕಮಲ್ ಹಾಸನ್ ಇನ್ನೂ ಕ್ಷಮೆ ಕೇಳಿಲ್ವಾ ? ಹೈಕೋರ್ಟ್ ಪ್ರಶ್ನೆ : ಅರ್ಜಿ ವಿಚಾರಣೆ ಮುಂದೂಡಿಕೆ",
				publishedAt: "2024-06-08",
			},
			{
				image: "../images/kannada_news_2.jpg",
				category: "Kannada",
				headline: "ವಿಮಾನ ದುರಂತದ ಬಗ್ಗೆ ಉನ್ನತ ಮಟ್ಟದ ತನಿಖೆ, 3 ತಿಂಗಳಲ್ಲಿ ವರದಿ-ಕೇಂದ್ರ ಸಚಿವ ರಾಮ್ ಮೋಹನ್ ನಾಯ್ಡು",
				publishedAt: "2024-06-10",
			},
      {
				image: "../images/top_news_1.jpg",
				category: "Kannada",
				headline: "ಬೆಂಗಳೂರು ಮೆಟ್ರೋ ಐಟಿ ಹಬ್‌ಗಳನ್ನು ಸಂಪರ್ಕಿಸುವ ಹೊಸ ಮಾರ್ಗವನ್ನು ಆರಂಭಿಸಿದೆ",
				publishedAt: "2024-06-09",
			},
			{
				image: "../images/top_news_4.jpg",
				category: "Kannada",
				headline: "ನಟ ಕಮಲ್ ಹಾಸನ್ ಇನ್ನೂ ಕ್ಷಮೆ ಕೇಳಿಲ್ವಾ ? ಹೈಕೋರ್ಟ್ ಪ್ರಶ್ನೆ : ಅರ್ಜಿ ವಿಚಾರಣೆ ಮುಂದೂಡಿಕೆ",
				publishedAt: "2024-06-08",
			},
		],
	},
	{
		language: "tamil",
		stories: [
			{
				image: "../images/tamil_news_1.jpg",
				category: "Tamil",
				headline: "மதுரையின் பழமையான கோவில் புதுப்பிப்பு வேலை முடிவடைந்தது",
				publishedAt: "2024-06-10",
			},
			{
				image: "https://www.rashtrashabdam.com/wp-content/uploads/2024/06/pondy-monsoon-thumb.jpg",
				category: "Tamil",
				headline: "Pondicherry Braces for Monsoon Showers",
				publishedAt: "2024-06-09",
			},
			{
				image: "https://www.rashtrashabdam.com/wp-content/uploads/2024/06/trichy-sports-thumb.jpg",
				category: "Tamil",
				headline: "Trichy Hosts National Youth Games",
				publishedAt: "2024-06-08",
			},
		],
	},
];

const languageTitles: any = {
	malayalam: "Malayalam",
	kannada: "Kannada",
	tamil: "Tamil",
	telugu: "Telugu",
	hindi: "Hindi",
};

const RegionalNewsGrid = () => (
	<section id="regional" className="max-w-screen-2xl mx-auto px-4 py-0">
		<h2 className="text-xl md:text-2xl font-bold mb-6 text-indigo-700">Regional News</h2>
		<div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
			{regionalNews.map((region, idx) => {
				if (idx === 0) {
					const featuredStory = region.stories[0];
					const otherStories = region.stories.slice(1);
					return (
						<div key={region.language} className="lg:col-span-2">
							<div className="flex items-center gap-2 mb-4">
								<span className="text-lg font-bold uppercase tracking-wider text-indigo-700">
									{languageTitles[region.language]} NEWS
								</span>
							</div>
							<div className="flex flex-col gap-4">
								<FeaturedNewsCard {...featuredStory} language={region.language as any} />
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
									{otherStories.map((story, i) => (
										<SmallNewsCard key={i} {...story} language={region.language as any} publishedAt={story.publishedAt} />
									))}
								</div>
							</div>
						</div>
					);
				}

				// For idx !== 0: 0th and 3rd news use NewsCard, others use SmallNewsCard
				return (
					<div key={region.language} className="lg:col-span-1">
						<div className="flex items-center gap-2 mb-4">
							<span className="text-lg font-bold uppercase tracking-wider text-indigo-700">
								{languageTitles[region.language]} NEWS
							</span>
						</div>
						<div className="flex flex-col gap-4">
							{region.stories.map((story, i) =>
								i === 0 || i === 3 ? (
									<NewsCard key={i} {...story} language={region.language as any} publishedAt={story.publishedAt} />
								) : (
									<SmallNewsCard key={i} {...story} language={region.language as any} publishedAt={story.publishedAt} />
								)
							)}
						</div>
					</div>
				);
			})}
		</div>
	</section>
);

export default RegionalNewsGrid;
