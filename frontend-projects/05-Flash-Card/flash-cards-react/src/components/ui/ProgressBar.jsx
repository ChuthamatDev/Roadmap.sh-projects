import React from 'react';

const ProgressBar = ({ current, total }) => {
    const percentage = Math.round((current / total) * 100);

    return (
        <div className="relative w-full h-10 bg-white/70 rounded-xl border border-slate-700 p-1 flex items-center mb-4">
            {/* The fill */}
            <div
                className="absolute left-1 top-1 bottom-1 bg-[#FFAAB8] rounded-lg transition-all duration-300"
                style={{ width: `max(2.5rem, calc(${percentage}% - 8px))` }}
            ></div>

            <div className="relative z-10 flex w-full justify-between items-center px-3 font-semibold text-slate-800 text-sm font-[var(--font-answer)]">
                <span>{percentage}%</span>
                <span>{current} of {total}</span>
            </div>
        </div>
    );
};

export default ProgressBar;