import type { Questions } from "../Questions";

export const Codingquestions: Questions[] = [
  {
    question:
      "Which keyword is used to declare a variable that can't be reassigned in JavaScript?",
    answer: "const",
    options: ["var", "let", "const", "static"],
  },
  {
    question: "What does JSX stand for in React?",
    answer: "JavaScript XML",
    options: [
      "Java Syntax Extension",
      "JavaScript XML",
      "JSON Extension",
      "JSX Module",
    ],
  },
  {
    question:
      "Which hook is used to manage state in React functional components?",
    answer: "useState",
    options: ["useEffect", "useContext", "useState", "useRef"],
  },
  {
    question: "In TypeScript, what symbol is used to define a type annotation?",
    answer: ":",
    options: ["=", ":", "->", "::"],
  },
  {
    question: "Which Tailwind class would you use to make text bold?",
    answer: "font-bold",
    options: ["text-bold", "bold", "font-weight", "font-bold"],
  },
  {
    question: "What command is used to create a new React app?",
    answer: "npx create-react-app my-app",
    options: [
      "npm install react",
      "npx create-react-app my-app",
      "npm new react",
      "yarn start react",
    ],
  },
  {
    question:
      "Which JavaScript array method is used to create a new array from existing elements?",
    answer: "map()",
    options: ["forEach()", "filter()", "map()", "reduce()"],
  },
  {
    question: "What is the default port that React apps run on?",
    answer: "3000",
    options: ["8080", "4000", "3000", "5000"],
  },
  {
    question: "Which Tailwind class adds a margin of 4 units?",
    answer: "m-4",
    options: ["margin-4", "p-4", "m-4", "space-4"],
  },
  {
    question: "In TypeScript, what does 'any' type mean?",
    answer: "It disables type checking for that variable",
    options: [
      "It means number type",
      "It disables type checking for that variable",
      "It's a null type",
      "It restricts to string only",
    ],
  },
];
