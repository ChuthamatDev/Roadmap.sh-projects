import { useState } from 'react'

export const useFlashCards = (data) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isFlipped, setIsFlipped] = useState(false)

    const totalCards = data.length

    const currentCard = data[currentIndex]
    const progress = ((currentIndex + 1) / totalCards) * 100

    const handleNext = () => {
        if (currentIndex < totalCards - 1) {
            setCurrentIndex((prev) => prev + 1)
            setIsFlipped(false)
        }
    }

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1)
            setIsFlipped(false)
        }
    }

    const toggleFlip = () => setIsFlipped(!isFlipped)

    return {
        currentCard,
        currentIndex,
        totalCards,
        isFlipped,
        progress,
        handleNext,
        handlePrevious,
        toggleFlip,
    }
}
