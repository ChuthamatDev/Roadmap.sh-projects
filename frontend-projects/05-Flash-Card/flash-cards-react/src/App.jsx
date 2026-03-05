import { FLASHCARD_DATA } from './constants/flashcards';
import { useFlashCards } from './hooks/useFlashCards';
import ProgressBar from './components/ui/ProgressBar';
import { FlashCard } from './components/FlashCard/FlashCard';
import './App.css';

function App() {
    const {
        currentCard,
        currentIndex,
        totalCards,
        isFlipped,
        handleNext,
        handlePrevious,
        toggleFlip
    } = useFlashCards(FLASHCARD_DATA);

    return (
        <div className="min-h-screen w-full flex flex-col mt-10 md:mt-20 items-center px-4 font-[var(--font-answer)]">
            <div className="w-full max-w-4xl flex flex-col items-center">

                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 pt-8">
                    Flash Cards: JavaScript
                </h1>

                <ProgressBar
                    current={currentIndex + 1}
                    total={totalCards}
                />

                <FlashCard
                    card={currentCard}
                    isFlipped={isFlipped}
                    toggleFlip={toggleFlip}
                    handleNext={handleNext}
                    handlePrevious={handlePrevious}
                />

                <div className="mt-8 text-slate-500 font-medium pb-10 text-sm">
                    Made by Chuthamat
                </div>

            </div>
        </div>
    );
}

export default App;
