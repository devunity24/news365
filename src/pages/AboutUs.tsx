import React from "react";
import TopBar from "../components/Header";
import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";

const AboutUs = () => (
  <div className="bg-white min-h-screen font-sans">
    <TopBar />
    <MainNavigation />
    <main className="max-w-screen-xl mx-auto px-4 py-10">
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg p-8 md:p-14 mb-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src="../images/logo.png"
            alt="Rashtrashabdam Logo"
            className="h-24 w-auto mb-4 md:mb-0 md:mr-8 drop-shadow-lg"
          />
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-3 tracking-tight">
              About Rashtrashabdam
            </h1>
            <p className="text-lg text-gray-700 mb-4 max-w-2xl">
              Rashtrashabdam is South India\'s mouthpiece news channel that brings the latest news, updates, and analysis from the region. The channel is committed to delivering unbiased, accurate, and timely news to our viewers. We are a registered and accredited official media agency to Government of Kerala.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                Unbiased
              </span>
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                Accredited
              </span>
              <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                Multilingual
              </span>
              <span className="bg-pink-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                Digital First
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Our Mission & Vision</h2>
        <p className="text-gray-700 text-base leading-relaxed">
          To empower the people of South India with factual, timely, and unbiased news in their own languages. We strive to be a trusted source for news and analysis, upholding the highest standards of journalism and public service. 
          To become the most trusted and respected news channel in South India, known for our commitment to truth, integrity, and journalistic excellent.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Accreditation & Trust</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <img
            src="../images/JMAGC.png"
            alt="JMAGC"
            className="h-20 md:h-24 w-auto mb-4 md:mb-0"
          />
          <div>
            <p className="text-gray-700 text-base mb-2">
              <span className="font-semibold">Approved by Ministry of Information & Broadcasting (GOI)</span> Level II Self Regulatory body for News Publishers & Current Affairs.
            </p>
            <p className="text-gray-700 text-base mb-2">
              <span className="font-semibold">Regd No:</span> JMAGC/KL/74
            </p>
            <p className="text-gray-700 text-base mb-2">
              <span className="font-semibold">Level II Self Regulatory Body:</span> Journalist and Media Association Grievances Council (JMAGC)
            </p>
            <a
              href="https://www.jmaindia.org"
              className="text-blue-700 underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.jmaindia.org
            </a>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Our Values</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <li className="bg-white rounded-lg shadow p-4 flex items-start gap-3">
            <span className="bg-blue-100 text-blue-700 rounded-full px-2 py-1 text-base font-bold">1</span>
            <span className="text-gray-700 text-base font-medium">Truthful and Unbiased Reporting</span>
          </li>
          <li className="bg-white rounded-lg shadow p-4 flex items-start gap-3">
            <span className="bg-green-100 text-green-700 rounded-full px-2 py-1 text-base font-bold">2</span>
            <span className="text-gray-700 text-base font-medium">Multilingual Coverage: Malayalam, Tamil, Telugu, Kannada, Hindi</span>
          </li>
          <li className="bg-white rounded-lg shadow p-4 flex items-start gap-3">
            <span className="bg-indigo-100 text-indigo-700 rounded-full px-2 py-1 text-base font-bold">3</span>
            <span className="text-gray-700 text-base font-medium">Digital-First, Accessible Anywhere</span>
          </li>
          <li className="bg-white rounded-lg shadow p-4 flex items-start gap-3">
            <span className="bg-pink-100 text-pink-700 rounded-full px-2 py-1 text-base font-bold">4</span>
            <span className="text-gray-700 text-base font-medium">Community Engagement & Social Responsibility</span>
          </li>
          <li className="bg-white rounded-lg shadow p-4 flex items-start gap-3">
            <span className="bg-yellow-100 text-yellow-700 rounded-full px-2 py-1 text-base font-bold">5</span>
            <span className="text-gray-700 text-base font-medium">Comprehensive coverage of news from Tamil Nadu, Karnataka, Kerala, Telangana, and Andhra Pradesh</span>
          </li>
          <li className="bg-white rounded-lg shadow p-4 flex items-start gap-3">
            <span className="bg-blue-100 text-blue-700 rounded-full px-2 py-1 text-base font-bold">6</span>
            <span className="text-gray-700 text-base font-medium">In-depth analysis and debate on current issues and events</span>
          </li>
          <li className="bg-white rounded-lg shadow p-4 flex items-start gap-3">
            <span className="bg-green-100 text-green-700 rounded-full px-2 py-1 text-base font-bold">7</span>
            <span className="text-gray-700 text-base font-medium">Exclusive interviews with newsmakers and thought leaders</span>
          </li>
          <li className="bg-white rounded-lg shadow p-4 flex items-start gap-3">
            <span className="bg-indigo-100 text-indigo-700 rounded-full px-2 py-1 text-base font-bold">8</span>
            <span className="text-gray-700 text-base font-medium">Breaking news and live updates from the region</span>
          </li>
          <li className="bg-white rounded-lg shadow p-4 flex items-start gap-3">
            <span className="bg-pink-100 text-pink-700 rounded-full px-2 py-1 text-base font-bold">9</span>
            <span className="text-gray-700 text-base font-medium">Special programming on business, sports, and entertainment</span>
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <div className="space-y-4">
          <div>
            <span className="font-bold text-blue-700 text-base">
              Languages covered
            </span>
            <span className="text-base font-medium text-gray-700 ml-1">
              : Tamil, Telugu, Kannada, Malayalam (with English translation )
            </span>
          </div>
          <div>
            <span className="font-bold text-blue-700 text-base">
              Audience
            </span>
            <span className="text-base font-medium text-gray-700 ml-1">
              : South Indian residents, NRIs, and anyone interested in news from the region.
            </span>
          </div>
          <div>
            <span className="font-bold text-blue-700 text-base">
              Availability
            </span>
            <span className="text-base font-medium text-gray-700 ml-1">
              : Rashtrashabdam News is available on all major Digital platforms and online streaming services.
            </span>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Contact & Grievance Redressal</h2>
        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Email:</span> <a href="mailto:info@rashtrashabdam.com" className="text-blue-700 underline">info@rashtrashabdam.com</a>
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Grievance Officer:</span> Mr. Rajesh Kumar
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Phone:</span> +91 98765 43210
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Address:</span> Rashtrashabdam, 2nd Floor, Media Tower, Kochi, Kerala, India
          </p>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default AboutUs;
