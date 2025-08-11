const projects = [
  {
    id: 1,
    title: "WordSpark",
    description:
      "A modern language learning platform built with React, TypeScript, and Vite",
    technologies: [
      "Vite",
      "TypeScript",
      "React",
      "shadcn-ui",
      "Tailwind CSS",
      "Supabase",
      "Gemini API",
      "Fal API",
      "ElevenLabs API",
      "AWS S3",
    ],
    githubLink: "https://github.com/artemu78/wordspark-linguify-learn",
    appLink: "https://wordspark.online/",
    detailedDescription:
      "A comprehensive language learning application that leverages modern web technologies to provide an interactive and engaging learning experience. Built with Vite for fast development, TypeScript for type safety, and React for component-based architecture. The UI is crafted using shadcn-ui components and styled with Tailwind CSS for a modern, responsive design.",
    icon: "globe",
    screenshots: ["wordspark1.png", "wordspark2.png", "wordspark3.png"],
    externalIcon: "react",
  },
  {
    id: 2,
    title: "Infinite LLM Dialogue",
    description:
      "An advanced chat application with infinite dialogue capabilities",
    technologies: [
      "Vite",
      "TypeScript",
      "React",
      "shadcn-ui",
      "Tailwind CSS",
      "AWS Lambda",
    ],
    githubLink: "https://github.com/artemu78/infinite-llm-dialogue",
    appLink: "https://artemu78.github.io/infinite-llm-dialogue/",
    detailedDescription:
      "A sophisticated chat application that enables infinite dialogue sessions with large language models. Features real-time communication, advanced UI components, and seamless user experience. Built with modern React patterns and TypeScript for robust type checking and maintainability.",
    icon: "zap",
    externalIcon: "react",
  },
  {
    id: 3,
    title: "Tech Assessment",
    description:
      "A comprehensive technical assessment platform built with React",
    technologies: ["React", "JavaScript"],
    githubLink: "https://github.com/artemu78/tech_assessment",
    appLink: "https://artemu78.github.io/tech_assessment",
    detailedDescription:
      "A technical assessment platform designed to evaluate programming skills and knowledge. Features interactive coding challenges, real-time feedback, and comprehensive reporting. Built with Create React App and follows modern web development best practices.",
    icon: "code",
    externalIcon: "react",
  },
  {
    id: 4,
    title: "OpenAI API Explorer",
    description:
      "Chrome extension for text summarization using OpenAI ChatGPT API",
    technologies: ["TypeScript", "Chrome Extensions", "OpenAI API"],
    githubLink: "https://github.com/artemu78/openai-api-explorer",
    appLink:
      "https://chromewebstore.google.com/detail/openai-api-explorer/cancnnlepmbfaegpklfklajlfglbdcan",
    detailedDescription:
      "A Chrome extension called TextAigist that integrates with the OpenAI ChatGPT API to provide text summarization capabilities. Users can select text on any webpage and get instant summaries. Features secure API key management, OAuth 2.0 authentication, and privacy-focused design.",
    icon: "cpu",
    externalIcon: "extensions",
  },
  {
    id: 5,
    title: "Todoist Chrome Extension",
    description: "Enhanced Todoist experience with completed tasks display",
    technologies: ["JavaScript", "Chrome Extensions", "Todoist API"],
    githubLink: "https://github.com/artemu78/todoist-chrome-extension",
    appLink:
      "https://chromewebstore.google.com/detail/todoist-completed-tasks/paapllajhpnafedjcijfpapmlnioiggc",
    detailedDescription:
      "A Chrome extension that enhances the Todoist web application by displaying completed tasks directly on the interface. Features automatic updates every 10 seconds, manual refresh capability, and OAuth 2.0 integration for secure access to Todoist API. Designed with user privacy in mind.",
    icon: "globe",
    externalIcon: "extensions",
  },
  {
    id: 6,
    title: "Creato",
    description:
      "Desktop Electron app for Text-to-Speech & Character animation APIs",
    technologies: [
      "JavaScript",
      "React",
      "Electron",
      "Hedra",
      "ElevenLabs API",
      "OpenAI",
      "Node.js",
    ],
    githubLink: "https://github.com/artemu78/Creato",
    appLink: "",
    detailedDescription:
      "A desktop application built with Electron that provides Text-to-Speech capabilities and character animation features. Integrates with various APIs to deliver multimedia content creation tools. Features audio file generation, character animations, and a user-friendly interface.",
    icon: "monitor-check",
    externalIcon: "electron",
  },
  {
    id: 7,
    title: "TeamSkillBooster",
    description: "Single-page teamwork skills course web application",
    technologies: ["TypeScript", "Lucide-react", "Tailwind CSS", "Vite"],
    githubLink: "https://github.com/artemu78/TeamSkillBooster",
    appLink: "https://team-skill-booster.netlify.app/",
    detailedDescription:
      "An educational web application focused on improving teamwork skills through interactive courses and progress tracking. Features a game-like progress tracker, comprehensive course content, and modern UI design. Built with TypeScript for enhanced development experience.",
    icon: "code",
    externalIcon: "react",
  },
  {
    id: 8,
    title: "Sahibinden Price Converter",
    description:
      "Chrome extension for currency conversion on Turkish marketplace",
    technologies: ["JavaScript", "Chrome Extensions"],
    githubLink: "https://github.com/artemu78/sahibinden-price-converter",
    appLink:
      "https://chromewebstore.google.com/detail/sahibinden-price-converte/kpiookihfmpoafgpinllpddglandpiml",
    detailedDescription:
      "A Chrome extension that automatically converts Turkish Lira (TL) prices to US Dollars (USD) on sahibinden.com using real-time exchange rates. Features automatic price detection, real-time conversion, and privacy-focused design with no data collection.",
    icon: "globe",
    externalIcon: "extensions",
  },
  {
    id: 9,
    title: "Prompt Play Pictures",
    description:
      "A project for generating and manipulating images based on prompts.",
    technologies: [
      "Vite",
      "TypeScript",
      "React",
      "shadcn-ui",
      "Tailwind CSS",
      "Fal API",
      "Supabase",
    ],
    githubLink: "https://github.com/artemu78/prompt-play-pictures",
    appLink: "https://veo3videogenerator.netlify.app/",
    detailedDescription:
      "A web application designed for creative exploration of image generation using AI prompts. Users can input text prompts to generate unique images, and further manipulate them with various tools and effects. Built with Vite for a fast development experience, TypeScript for robust code, and React for a dynamic user interface. Styling is handled with shadcn-ui and Tailwind CSS for a modern and responsive design.",
    icon: "image",
    externalIcon: "react",
  },
  {
    id: 10,
    title: "Events N Feedbacks",
    description: "React web app for managing events and attendee feedback",
    technologies: ["Next.js", "TypeScript", "React", "Firebase", "Material UI"],
    githubLink: "https://github.com/artemu78/events-n-feedbacks",
    appLink: "https://events-n-feedbacks.vercel.app", // Live app available
    detailedDescription:
      "A comprehensive event management web application built with Next.js 14 for managing events and collecting attendee feedback. Features include event creation, attendee management, feedback collection, voice feedback capabilities, and real-time analytics. The application uses Firebase for backend services and is deployed on Vercel for optimal performance.",
    icon: "calendar",
    externalIcon: "nextdotjs",
  },
  {
    id: 11,
    title: "AWS S3 MCP Server",
    description: "Locally run MCP Server to upload files to S3 bucket",
    technologies: ["Node.js", "AWS S3", "MCP"],
    githubLink: "https://github.com/artemu78/mcp-server-s3-uploader",
    appLink: "",
    detailedDescription:
      "A comprehensive event management web application built with Next.js 14 for managing events and collecting attendee feedback. Features include event creation, attendee management, feedback collection, voice feedback capabilities, and real-time analytics. The application uses Firebase for backend services and is deployed on Vercel for optimal performance.",
    icon: "calendar",
    externalIcon: "modelcontextprotocol",
  },
];

export default projects;
