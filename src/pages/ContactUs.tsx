import React from "react";
import TopBar from "../components/Header";
import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Globe, Rss } from "lucide-react";

const ContactUs = () => (
  <div className="bg-white min-h-screen font-sans">
    <TopBar />
    <MainNavigation />
    <main className="max-w-screen-xl mx-auto px-4 py-10">
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg p-8 md:p-14 mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-6 tracking-tight">
          Contact Us
        </h1>
        <div className="flex flex-col md:flex-row gap-10">
          {/* Contact Form */}
          <form
            className="flex-1 bg-white rounded-xl shadow p-6 flex flex-col gap-4"
            autoComplete="off"
          >
            <div>
              <label className="block text-gray-700 font-semibold mb-1" htmlFor="name">
                Your name
              </label>
              <input
                id="name"
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 text-base"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1" htmlFor="email">
                Your email
              </label>
              <input
                id="email"
                type="email"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 text-base"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1" htmlFor="subject">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 text-base"
                placeholder="Subject"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1" htmlFor="message">
                Your message (optional)
              </label>
              <textarea
                id="message"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 text-base min-h-[120px]"
                placeholder="Type your message here..."
              />
            </div>
            <button
              type="submit"
              className="mt-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 rounded-md transition-colors shadow"
            >
              Send Message
            </button>
          </form>
          {/* Contact Info */}
          <div className="flex-1 flex flex-col gap-6 justify-center">
            <div>
              <h2 className="text-xl font-bold text-blue-800 mb-3">Contact Information</h2>
              <div className="space-y-2 text-base">
                <div>
                  <span className="font-semibold text-gray-700">Email:</span>{" "}
                  <a
                    href="mailto:Rashtrashabdam@gmail.com"
                    className="text-blue-700 underline"
                  >
                    Rashtrashabdam@gmail.com
                  </a>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Phone:</span>{" "}
                  <a href="tel:+919942913257" className="text-blue-700 underline">
                    +91 99429 13257
                  </a>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Address:</span>{" "}
                  <span className="text-gray-700">
                    Gandhari Amman Kovil Road, Statue, Trivandrum, Kerala 695 001.
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-2">Follow us</h3>
              <div className="flex gap-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#1877F3] hover:text-blue-700 transition-colors text-2xl">
                  <Facebook size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#1DA1F2] hover:text-sky-600 transition-colors text-2xl">
                  <Twitter size={24} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#E4405F] hover:text-pink-600 transition-colors text-2xl">
                  <Instagram size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#0077B5] hover:text-blue-800 transition-colors text-2xl">
                  <Linkedin size={24} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-[#FF0000] hover:text-red-700 transition-colors text-2xl">
                  <Youtube size={24} />
                </a>
                <a href="https://rashtrashabdam.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors text-2xl">
                  <Globe size={24} />
                </a>
                <a href="/rss.xml" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600 transition-colors text-2xl">
                  <Rss size={24} />
                </a>
              </div>
            </div>
            <div>
              <img
                src="../images/google.png"
                alt="Get it on Google Play"
                className="h-10 w-auto mt-2"
                style={{ minWidth: 120 }}
              />
            </div>
            {/* Google Map */}
            <div className="mt-4 rounded-xl overflow-hidden shadow">
              <iframe
                title="Rashtrashabdam Location"
                src="https://www.google.com/maps?q=Gandhari+Amman+Kovil+Road,+Statue,+Trivandrum,+Kerala+695001&output=embed"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default ContactUs;
