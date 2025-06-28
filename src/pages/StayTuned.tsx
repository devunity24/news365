import React from "react";


const StayTuned = () => {
  return (
    <aside className="w-full bg-[#f5f8ff] rounded-2xl shadow-lg p-6 flex flex-col items-center border-2 border-blue-700">
      <h2 className="text-2xl font-extrabold text-[#2346a9] mb-6" style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}>
        Stay tuned
      </h2>
      <p className="text-center text-[#2346a9] text-base mb-1 font-medium">
        Subscribe to our newsletter and never miss the latest news!
      </p>
      <p className="text-center text-blue-700 text-xs mb-4">
        Our newsletter is sent once a week, every Monday.
      </p>
      <form className="w-full max-w-xs flex flex-col gap-3">
        <div>
          <label className="block text-[#2346a9] text-xs mb-1 font-semibold" htmlFor="firstName">
            First name
          </label>
          <input
            id="firstName"
            type="text"
            className="w-full rounded-lg px-3 py-2 bg-white text-black border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
            autoComplete="given-name"
          />
        </div>
        <div>
          <label className="block text-[#2346a9] text-xs mb-1 font-semibold" htmlFor="lastName">
            Last name
          </label>
          <input
            id="lastName"
            type="text"
            className="w-full rounded-lg px-3 py-2 bg-white text-black border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
            autoComplete="family-name"
          />
        </div>
        <div>
          <label className="block text-[#2346a9] text-xs mb-1 font-semibold" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full rounded-lg px-3 py-2 bg-white text-black border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
            autoComplete="email"
          />
        </div>
        <div className="flex items-center mt-1">
          <input
            id="privacy"
            type="checkbox"
            className="mr-2 accent-blue-600"
            required
          />
          <label htmlFor="privacy" className="text-[#2346a9] text-xs">
            I accept the privacy policy
          </label>
        </div>
        <button
          type="submit"
          className="mt-2 bg-gradient-to-r from-[#2346a9] to-[#4f8cff] hover:from-[#1c2566] hover:to-[#2e3cb0] text-white font-bold px-4 py-2 rounded-lg shadow transition text-base"
        >
          Subscribe
        </button>
      </form>
    </aside>
  );
};

export default StayTuned;
