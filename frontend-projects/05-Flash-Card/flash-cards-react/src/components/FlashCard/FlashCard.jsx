import React from 'react';

export const FlashCard = ({
    card,
    isFlipped,
    toggleFlip,
    handleNext,
    handlePrevious
}) => {
    return (
        <div className="w-full bg-white/80 p-2 rounded-[1.25rem] border border-slate-700 flex flex-col gap-2 shadow-sm font-[var(--font-answer)]">

            <div
                onClick={toggleFlip}
                className={`relative w-full min-h-[22rem] rounded-xl flex flex-col items-center justify-center p-8 cursor-pointer select-none transition-all duration-500 ease-in-out ${isFlipped ? 'bg-[#A8DF8E]' : 'bg-[#FFD8DF]'
                    }`}
            >
                <h2
                    className={`text-center text-slate-900 drop-shadow-sm ${isFlipped
                            ? 'text-2xl md:text-3xl font-[var(--font-answer)] font-medium'
                            : 'text-4xl md:text-5xl font-[var(--font-question)] tracking-wide'
                        }`}
                >
                    {isFlipped ? card.answer : card.question}
                </h2>
            </div>

            <div className="w-full bg-[#FFD8DF] rounded-xl flex justify-between items-center px-6 py-4 text-slate-700 font-semibold text-lg border border-transparent">
                <button
                    onClick={handlePrevious}
                    className="hover:text-slate-900 transition-colors focus:outline-none flex items-center bg-transparent border-none p-0 w-24 justify-start"
                >
                    &lt; Previous
                </button>

                <button
                    onClick={toggleFlip}
                    className="hover:text-slate-900 transition-colors focus:outline-none bg-transparent border-none p-0 flex-1 text-center"
                >
                    {isFlipped ? 'Show Question' : 'Show Answer'}
                </button>

                <button
                    onClick={handleNext}
                    className="hover:text-slate-900 transition-colors focus:outline-none flex items-center bg-transparent border-none p-0 w-24 justify-end"
                >
                    Next &gt;
                </button>
            </div>

        </div>
    );
};