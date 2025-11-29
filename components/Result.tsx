import React from 'react';
import { Question } from '../types';

interface ResultProps {
  questions: Question[];
  userAnswers: Record<number, number>; // questionId -> optionIndex
  onRetry: () => void;
}

const Result: React.FC<ResultProps> = ({ questions, userAnswers, onRetry }) => {
  const labels = ['(a)', '(b)', '(c)', '(d)'];
  
  const score = questions.reduce((acc, q) => {
    return acc + (userAnswers[q.id] === q.correctAnswerIndex ? 1 : 0);
  }, 0);

  const percentage = Math.round((score / questions.length) * 100);

  return (
    <div className="w-full max-w-5xl mx-auto p-4 md:p-8">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
        <div className="bg-slate-900 text-white text-center py-10 px-4">
          <h2 className="text-3xl font-bold mb-2">Test Completed</h2>
          <p className="text-slate-300 mb-6">Here is your performance summary</p>
          
          <div className="flex justify-center items-center gap-6">
            <div className="bg-slate-800 rounded-xl p-6 min-w-[140px]">
              <div className="text-4xl font-bold text-blue-400 mb-1">{score} / {questions.length}</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">Score</div>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 min-w-[140px]">
              <div className="text-4xl font-bold text-emerald-400 mb-1">{percentage}%</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">Accuracy</div>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-slate-800">Detailed Analysis</h3>
            <button 
              onClick={onRetry}
              className="px-6 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg transition-colors"
            >
              Retake Test
            </button>
          </div>

          <div className="space-y-6">
            {questions.map((q, index) => {
              const userAnswer = userAnswers[q.id];
              const isCorrect = userAnswer === q.correctAnswerIndex;
              const isSkipped = userAnswer === undefined;

              return (
                <div key={q.id} className={`border rounded-lg p-5 ${isCorrect ? 'border-emerald-200 bg-emerald-50/30' : 'border-red-100 bg-red-50/30'}`}>
                  <div className="flex items-start gap-3">
                    <span className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold shrink-0 ${isCorrect ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                      {index + 1}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-medium text-slate-900">
                           {isCorrect ? (
                             <span className="text-emerald-700 text-sm font-bold uppercase">Correct</span>
                           ) : isSkipped ? (
                             <span className="text-orange-600 text-sm font-bold uppercase">Skipped</span>
                           ) : (
                             <span className="text-red-600 text-sm font-bold uppercase">Incorrect</span>
                           )}
                        </h4>
                      </div>
                      
                      <p className="text-slate-700 mb-4">{q.instruction ? `${q.instruction} ` : ''}{q.questionText}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="text-sm">
                           <span className="block text-xs font-semibold text-slate-500 uppercase mb-1">Your Answer</span>
                           {isSkipped ? (
                             <span className="text-slate-400 italic">No answer selected</span>
                           ) : (
                             <div className={`p-2 rounded border ${isCorrect ? 'border-emerald-200 bg-emerald-100 text-emerald-900' : 'border-red-200 bg-red-100 text-red-900'}`}>
                               <span className="font-bold mr-2">{labels[userAnswer]}</span>
                               {q.options[userAnswer]}
                             </div>
                           )}
                        </div>
                        
                        <div className="text-sm">
                           <span className="block text-xs font-semibold text-slate-500 uppercase mb-1">Correct Answer</span>
                           <div className="p-2 rounded border border-emerald-200 bg-white text-slate-900">
                             <span className="font-bold mr-2 text-emerald-600">{labels[q.correctAnswerIndex]}</span>
                             {q.options[q.correctAnswerIndex]}
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
