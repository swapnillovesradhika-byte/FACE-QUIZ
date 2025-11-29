import React, { useState, useCallback } from 'react';
import StartScreen from './components/StartScreen';
import Quiz from './components/Quiz';
import Result from './components/Result';
import { QUESTIONS } from './data/questions';
import { QuizStatus } from './types';

const App: React.FC = () => {
  const [status, setStatus] = useState<QuizStatus>('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});

  const handleStart = () => {
    setStatus('active');
    setCurrentQuestionIndex(0);
    setUserAnswers({});
  };

  const handleSelectAnswer = useCallback((index: number) => {
    setUserAnswers(prev => ({
      ...prev,
      [QUESTIONS[currentQuestionIndex].id]: index
    }));
  }, [currentQuestionIndex]);

  const handleNext = () => {
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setStatus('finished');
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleRetry = () => {
    setStatus('start');
    setUserAnswers({});
    setCurrentQuestionIndex(0);
  };

  return (
    <div className="min-h-screen bg-slate-100 py-6 px-4">
      {status === 'start' && (
        <StartScreen onStart={handleStart} totalQuestions={QUESTIONS.length} />
      )}

      {status === 'active' && (
        <div className="max-w-4xl mx-auto h-full flex items-center justify-center">
          <Quiz
            question={QUESTIONS[currentQuestionIndex]}
            currentNumber={currentQuestionIndex + 1}
            totalQuestions={QUESTIONS.length}
            selectedAnswer={userAnswers[QUESTIONS[currentQuestionIndex].id] ?? null}
            onSelectAnswer={handleSelectAnswer}
            onNext={handleNext}
            onPrevious={handlePrevious}
            isLast={currentQuestionIndex === QUESTIONS.length - 1}
          />
        </div>
      )}

      {status === 'finished' && (
        <Result 
          questions={QUESTIONS} 
          userAnswers={userAnswers} 
          onRetry={handleRetry} 
        />
      )}
    </div>
  );
};

export default App;
