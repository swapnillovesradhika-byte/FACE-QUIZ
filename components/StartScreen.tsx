import React from 'react';

interface StartScreenProps {
  onStart: () => void;
  totalQuestions: number;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart, totalQuestions }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-blue-900 p-10 text-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-blue-900 shadow-lg">
            F
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">FACE ACADEMY</h1>
          <p className="text-blue-200 font-medium tracking-wide text-lg">UPSC PRELIMS MOCK TEST</p>
        </div>
        
        <div className="p-10">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
            <h2 className="text-lg font-bold text-slate-800 mb-4 border-b pb-2">Test Instructions</h2>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start">
                <span className="mr-3 text-blue-500">•</span>
                <span><strong>Total Questions:</strong> {totalQuestions}</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-500">•</span>
                <span><strong>Subject:</strong> Ancient History</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-500">•</span>
                <span><strong>Level:</strong> Tougher Level (UPSC Standard)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-500">•</span>
                <span><strong>Topics:</strong> Caves, Stupas, and Inscriptions.</span>
              </li>
            </ul>
          </div>

          <button 
            onClick={onStart}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold py-4 rounded-xl shadow-lg transform transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Start Test
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
