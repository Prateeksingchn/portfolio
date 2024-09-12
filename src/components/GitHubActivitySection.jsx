import React, { useState } from 'react';
import { Code, CheckCircle, XCircle } from 'lucide-react';

const CodeChallengesSection = () => {
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [result, setResult] = useState(null);

  const challenges = [
    {
      question: "What's the output of this code?\n\nconst arr = [1, 2, 3];\nconsole.log([...arr, 4, 5]);",
      answer: "[1, 2, 3, 4, 5]"
    },
    {
      question: "Complete this function to return the factorial of n:\n\nfunction factorial(n) {\n  // Your code here\n}",
      answer: "function factorial(n) {\n  return n <= 1 ? 1 : n * factorial(n - 1);\n}"
    }
    // Add more challenges as needed
  ];

  const checkAnswer = () => {
    setResult(userAnswer.trim() === challenges[currentChallenge].answer.trim());
  };

  const nextChallenge = () => {
    setCurrentChallenge((prev) => (prev + 1) % challenges.length);
    setUserAnswer('');
    setResult(null);
  };

  return (
    <div className="ring-1 dark:ring-white/10 ring-primary/5 shadow-xl dark:shadow-thick rounded-3xl p-8 lg:row-start-4 h-full flex flex-col justify-between bg-[#1A1A1A] dark:bg-secondary">
      <h2 className="text-xl tracking-tight font-medium text-primary dark:text-white md:text-4xl mb-6 flex items-center">
        <Code className="mr-2" size={28} />
        Code Challenge
      </h2>
      
      <div className="flex-grow">
        <pre className="bg-gray-800 p-4 rounded-lg text-sm text-zinc-300 whitespace-pre-wrap mb-4">
          {challenges[currentChallenge].question}
        </pre>
        <textarea
          className="w-full bg-gray-700 text-white p-2 rounded-lg"
          rows="4"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Type your answer here..."
        />
        {result !== null && (
          <div className={`mt-2 ${result ? 'text-green-500' : 'text-red-500'} flex items-center`}>
            {result ? <CheckCircle className="mr-2" size={16} /> : <XCircle className="mr-2" size={16} />}
            {result ? 'Correct!' : 'Try again!'}
          </div>
        )}
      </div>
      
      <div className="flex justify-between mt-4">
        <button 
          className="text-sm py-2 px-4 font-semibold rounded-lg bg-primary dark:bg-white dark:text-primary dark:hover:text-white hover:text-primary dark:hover:bg-white/5 hover:bg-primary/10 text-gray-600 flex items-center justify-center duration-200"
          onClick={checkAnswer}
        >
          Check Answer
        </button>
        <button 
          className="text-sm py-2 px-4 font-semibold rounded-lg bg-primary dark:bg-white dark:text-primary dark:hover:text-white hover:text-primary dark:hover:bg-white/5 hover:bg-primary/10 text-gray-600 flex items-center justify-center duration-200"
          onClick={nextChallenge}
        >
          Next Challenge
        </button>
      </div>
    </div>
  );
};

export default CodeChallengesSection;