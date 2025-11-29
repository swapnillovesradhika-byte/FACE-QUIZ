import React, { useMemo } from 'react';
import { Question } from '../types';

interface QuizProps {
  question: Question;
  currentNumber: number;
  totalQuestions: number;
  selectedAnswer: number | null;
  onSelectAnswer: (index: number) => void;
  onNext: () => void;
  onPrevious: () => void;
  isLast: boolean;
}

const Quiz: React.FC<QuizProps> = ({
  question,
  currentNumber,
  totalQuestions,
  selectedAnswer,
  onSelectAnswer,
  onNext,
  onPrevious,
  isLast
}) => {
  
  const progressPercentage = useMemo(() => {
    return ((currentNumber - 1) / totalQuestions) * 100;
  }, [currentNumber, totalQuestions]);

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden flex flex-col min-h-[600px]">
      {/* Header / Progress */}
      <div className="bg-slate-900 text-white p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold tracking-wide">UPSC Mock Test</h2>
          <span className="text-slate-400 font-medium">
            Question {currentNumber} of {totalQuestions}
          </span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-2">
          <div 
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 md:p-8 overflow-y-auto">
        <div className="mb-8">
          {question.instruction && (
            <p className="text-slate-600 mb-4 italic border-l-4 border-blue-500 pl-4">
              {question.instruction}
            </p>
          )}

          {/* Table Rendering */}
          {question.tableHeaders && question.tableRows && (
            <div className="overflow-x-auto mb-6 border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-slate-50">
                  <tr>
                    {question.tableHeaders.map((header, idx) => (
                      <th key={idx} className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {question.tableRows.map((row, rIdx) => (
                    <tr key={rIdx}>
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className="px-4 py-3 text-sm text-slate-700">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* List Statements Rendering */}
          {question.statements && (
            <ol className="list-decimal list-outside ml-5 space-y-2 mb-6 text-slate-800">
              {question.statements.map((stmt, idx) => (
                <li key={idx} className="pl-1 leading-relaxed">
                  {stmt}
                </li>
              ))}
            </ol>
          )}

          <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-6 leading-relaxed">
            {question.questionText}
          </h3>

          <div className="space-y-3">
            {question.options.map((option, idx) => {
               const labels = ['(a)', '(b)', '(c)', '(d)'];
               const isSelected = selectedAnswer === idx;
               
               return (
                <button
                  key={idx}
                  onClick={() => onSelectAnswer(idx)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 flex items-start group ${
                    isSelected 
                      ? 'border-blue-600 bg-blue-50' 
                      : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <span className={`font-semibold mr-3 shrink-0 ${isSelected ? 'text-blue-700' : 'text-slate-500 group-hover:text-slate-700'}`}>
                    {labels[idx]}
                  </span>
                  <span className={`${isSelected ? 'text-slate-900 font-medium' : 'text-slate-700'}`}>
                    {option}
                  </span>
                </button>
               );
            })}
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="bg-slate-50 p-6 border-t border-slate-200 flex justify-between items-center">
        <button
          onClick={onPrevious}
          disabled={currentNumber === 1}
          className={`px-6 py-2.5 rounded-lg font-medium transition-colors ${
            currentNumber === 1
              ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
              : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-100'
          }`}
        >
          Previous
        </button>

        <button
          onClick={onNext}
          disabled={selectedAnswer === null} // Require answer to proceed? No, usually mock tests allow skip, but for this simple app lets allow skip or force? Let's allow Next regardless but maybe highlight if skipped. Actually, sticking to "Standard Quiz" often implies marking. Let's allow movement.
          className={`px-8 py-2.5 rounded-lg font-medium shadow-md transition-all ${
             selectedAnswer === null
             ? 'bg-slate-300 text-slate-500' // Visual cue that they haven't picked
             : 'bg-blue-900 text-white hover:bg-blue-800 hover:shadow-lg'
          }`}
        >
          {isLast ? 'Submit Test' : 'Next Question'}
        </button>
      </div>
    </div>
  );
};

export default Quiz;
