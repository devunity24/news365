import React from "react";
import { Star, Flame } from "lucide-react";


const Badge = ({
    type,
    children,
}: {
    type: "featured" | "latest" | "psu";
    children: React.ReactNode;
}) => {
    if (type === "featured") {
        return (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2">
                <Star size={12} className="text-yellow-500" /> {children}
            </span>
        );
    }

    if (type === "psu") {
        return (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-100 text-green-800 text-xs font-semibold mr-2">
                <Star size={12} className="text-green-500" /> {children}
            </span>
        );
    }

    return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-100 text-red-700 text-xs font-semibold mr-2">
            <Flame size={12} className="text-red-500" /> {children}
        </span>
    );
};

const PSU = () => {
    return (
        <section className="px-2 gap-4 mt-4 ">
            <div className="rounded-lg shadow-lg p-0 overflow-hidden bg-white">
                <div
                    className="text-center text-xl font-bold py-3 border-b border-[#c94b43] text-black"
                    style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}
                >
                    <span>PSU Watch</span>
                </div>
                {/* News Card */}
                <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2 leading-tight" style={{ fontFamily: "'Lato', 'Arial', sans-serif", color: "#2F3137"}}>
                        Office of the Principal Scientific Adviser to the Government of India Releases Inaugural Edition of India’s International Technology Engagement Strategy (ITES) for Quantum Technologies
                    </h2>
                    <div className="flex items-center gap-3 text-sm mb-4">
                        <Badge type="psu">PSU NEWS 365</Badge>
                        <span className="text-black/80">|</span>
                        <span className="text-black/80">April 15, 2025</span>
                    </div>
                    <div className="mb-4 group">
                        <img src="../images/psu.png" alt="PSU News" className="w-full rounded-md object-cover transition duration-300 group-hover:scale-105 group-hover:shadow-lg" />
                    </div>
                    <p className="text-black/90 text-base" style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}>
                        The Office of the Principal Scientific Adviser to the Government of India today released the first edition of International Technology Engagement Strategy for Quantum, marking a significant step toward articulating India’s outward-facing strategy in Quantum Science,...
                    </p>
                </div>
                {/* Second Card Example */}
                <div className="p-6 border-t border-black/10">
                    <h2 className="text-xl font-extrabold leading-tight text-black mb-2" style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}>
                        Finance Secretary (GOI)
                    </h2>
                    <div className="flex items-center gap-3 text-sm mb-4">
                        <span className="font-semibold tracking-wide text-black">DOPT ACC NOTIFICATIONS</span>
                        <span className="text-black/80">|</span>
                        <span className="text-black/80">March 24, 2025</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PSU;
