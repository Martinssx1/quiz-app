import type { Questions } from "../Questions";

export const CodingquestionsMedium: Questions[] = [
  {
    question: "What does the 'this' keyword refer to in JavaScript?",
    answer: "The object it belongs to",
    options: [
      "The global object",
      "The object it belongs to",
      "The parent function",
      "The window",
    ],
  },
  {
    question: "In React, what hook is used for side effects?",
    answer: "useEffect",
    options: ["useState", "useEffect", "useContext", "useMemo"],
  },
  {
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheets",
    options: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Syntax",
      "Colorful Style Sheets",
    ],
  },
  {
    question:
      "Which array method creates a new array with all elements that pass a test?",
    answer: "filter()",
    options: ["map()", "filter()", "reduce()", "find()"],
  },
  {
    question: "What is the difference between '==' and '===' in JavaScript?",
    answer: "=== checks type and value, == only checks value",
    options: [
      "No difference",
      "=== is faster",
      "=== checks type and value, == only checks value",
      "== is deprecated",
    ],
  },
  {
    question: "In Git, what command is used to create a new branch?",
    answer: "git branch",
    options: ["git new", "git branch", "git create", "git checkout -b"],
  },
  {
    question: "What does API stand for?",
    answer: "Application Programming Interface",
    options: [
      "Application Process Integration",
      "Application Programming Interface",
      "Automated Programming Interface",
      "Advanced Programming Integration",
    ],
  },
  {
    question: "Which HTTP method is used to update data?",
    answer: "PUT or PATCH",
    options: ["GET", "POST", "DELETE", "PUT or PATCH"],
  },
  {
    question: "What is the purpose of 'npm install'?",
    answer: "Install project dependencies",
    options: [
      "Start the server",
      "Install project dependencies",
      "Build the project",
      "Run tests",
    ],
  },
  {
    question: "In React, what are props?",
    answer: "Data passed from parent to child component",
    options: [
      "CSS properties",
      "Data passed from parent to child component",
      "State variables",
      "HTML attributes",
    ],
  },
];
