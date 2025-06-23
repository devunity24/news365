import React from "react";

const AdvertisementPage = () => {
  return (
    <div className="min-h-[120px] flex flex-col items-center justify-center py-10 px-2">
      <div
        className="rounded-xl shadow-lg border border-gray-200 bg-gradient-to-r from-[#f8fafc] to-[#e0e7ef] p-6 md:p-8 flex flex-col items-center "
        style={{
          transition: "box-shadow 0.2s",
        }}
      >
        <div className="text-center text-base md:text-lg font-semibold text-[#2e3cb0] tracking-wide mb-2">
          Approved by Ministry of Information &amp; Broadcasting (GOI)
        </div>
        <div className="text-center text-sm md:text-base font-medium text-gray-700">
          Level II Self Regulatory body for Digital News Publishers.
          Journalist Media and Grievances Council (JMAGC)
        </div>
        <div className="text-center text-xs md:text-sm mt-3 text-gray-500 font-semibold tracking-wider">
          Regd No : JMAGC/HR/00072
        </div>
      </div>
    </div>
  );
};

export default AdvertisementPage;
