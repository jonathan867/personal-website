import {
  solar,
  heart,
  koi,
  ocean,
  solarFull,
  heartFull,
  koiFull,
  oceanFull,
  solarModel,
  koiModel,

  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,

  RBC,
  watAI,
  jobster,

  synesthesiac,
  dinefine,
  wordlePlus,
  chess,
  dungeonCrossing,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "blog",
    title: "Blog",
  },
  {
    id: "contacts",
    title: "Contacts",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Engineer",
    company_name: "Royal Bank of Canada \u{1F981}",
    icon: RBC,
    date: "January 2024 - April 2024",
    description: "The Royal Bank of Canada (RBC) is the largest bank in Canada. I worked in Personal & Commercial Banking (P&CB), on the RBC Launch App Team.",
    points: [
      "worked on new app features, including real-time, location-based notifications about partner retailers' sales exclusive to RBC customers.",
      "Developed functions and designed unit tests for related backend microservices. Technologies: SpringBoot (Java)",
      "Updating app user interface. Technologies: Swift",
      "Documented changes and design choices in technical design docs, presented work updates in team agile meetings.",
    ],
  },
  {
    title: "AI/ML Engineer",
    company_name: "Wat.AI \u{1F916}",
    icon: watAI,
    date: "January 2024 - Present",
    description: "WAT.ai is a student-run Artificial Intelligence (AI) Organization at the University of Waterloo and the undergraduate student body of the Waterloo AI Institute and member of the Sedra Student Design Centre (SSDC).",
    points: [
      "Working on a project team creating an LLM that reads Canadian Zoning laws and summerizes them for construction contractors."
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Jobster.io \u{1F99E}",
    icon: jobster,
    date: "April 2023 - August 2023",
    description: "Jobster.io is a Toronto-based startup that builds software products that leverage AI to help users in job searching and matching. I worked as a full-stack developer intern, developing the frontend and REST API for their newest flagship product: an AI powered resume builder and editor.",
    points: [
      "Developed frontend for startup's newest web service. Technologies: React (JS)",
      "Developed data pipeline for user file upload. Technologies: Node (JS)",
      "Documented and reported performance bottlenecks in existing backend infrastructure.",
    ],
  }
];

const projects = [
  {
    name: "Song Classification Neural Network \u{1F300}",
    description:
      "Developed and trained neural network with 2000+ songs to classify emotion, with 73% test accuracy. It is built as a hybrid model that analyses both lyrics and numerical audio data (tempo, loundess, etc). Collected data with Python script using Genius API for lyrics and Spotify API for audio data.",
    tags: [
      {
        name: "Language: Python",
        color: "blue-text-gradient",
      },
      {
        name: "Dev Tools: TensorFlow, Keras, NumPy, Colab Notebook",
        color: "pink-text-gradient",
      }
    ],
    image: synesthesiac,
    source_code_link: "https://github.com/jonathan867/synesthesiac",
    demo: "https://colab.research.google.com/drive/1P7xr095bJbNavheDrmumXypSykjib2CA?usp=sharing"
  },
  {
    name: "DineFine \u{1FAD5}",
    description:
      "DineFine is a full stack web app that helps users search for awarded restaurants by location, price range, and cuisine type. Utilizes a custom backend API and the JS Maps API and Place Photos API from Google Maps Platform.",
    tags: [
      {
        name: "Language: JavaScript, CSS, SQL",
        color: "blue-text-gradient",
      },
      {
        name: "Dev Tools: MySQL, React, BootStrap, Express.JS",
        color: "pink-text-gradient",
      }
    ],
    image: dinefine,
    source_code_link: "https://github.com/jonathan867/dineFine-backend",
    demo: "https://dinefine-explore.netlify.app/"
  },
  {
    name: "Wordle Plus \u{1F4F1}",
    description:
      "Wordle Plus is a recreation of the New York Time's daily word-guessing web game, Wordle. It is a mobile app for iOS and Android. A web demo is attached.",
    tags: [
      {
        name: "Language: Dart ",
        color: "blue-text-gradient",
      },
      {
        name: "Dev Tools: Flutter, Figma",
        color: "pink-text-gradient",
      },
    ],
    image: wordlePlus,
    source_code_link: "https://github.com/jonathan867/Wordle_Plus",
    demo: "https://wordlepremium.web.app/#/"
  },
  {
    name: "Dungeon Crossing \u{1F5E1}",
    description:
      `A dungeon crawler styled game where the player moves from room to room fighting a variety of enemies. Complete with original assets and multithreading. Developed with 
      <a href='https://dorianchen.com/' target='_blank' rel='noopener noreferrer' class='bold-link'>Dorian Chen</a>.`,
    tags: [
      {
        name: "Language: Python",
        color: "blue-text-gradient",
      },
    ],
    image: dungeonCrossing,
    source_code_link: "https://github.com/jonathan867/Slimecraft",
    demo: "https://drive.google.com/file/d/1vn2AWkIYfL_NfXGFJpxwLBxBqos04L6B/view?usp=sharing"
  },
  {
    name: "Desktop Chess \u{1F451}",
    description:
      `This is a two player desktop chess game complete with a scoreboard and two selectable themes. Developed with 
      <a href='https://jacquelineho.ca/' target='_blank' rel='noopener noreferrer' class='bold-link'>Jacqueline Ho</a>.`,
    tags: [
      {
        name: "Language: Java",
        color: "blue-text-gradient",
      },
      {
        name: "Dev Tools: Figma",
        color: "pink-text-gradient",
      },
    ],
    image: chess,
    source_code_link: "https://github.com/jonathan867/Chess-Game",
    demo: ""
  }
];

const embroidery = [
  {
    name: "Solar System",
    image: solar,
    imgArr: [solar, solarFull, solarModel],
    points: [
      "Clothing: Uniqlo Crew Neck Short Sleeve T-Shirt",
      "Inspiration: those medieval artworks with the sun and moon with creepy faces.",
      "This was my first project I've done on clothing, which you can tell by the single loose thread on Saturn.",
      "Fun fact: the embroidery is reinforced with a heavy layer of fabric glue, forming a tough, leather-like piece of armour.",
    ]
  },
  {
    name: "Anatomical Heart",
    image: heart,
    imgArr: [heart, heartFull],
    points: [
      "Clothing: Uniqlo Crew Neck Short Sleeve T-Shirt",
      "Inspiration: I wanted to challenge myself with something detailed!",
      "Fun fact: The position of the embroidery/fabric glue armour protects the actual heart of the person wearing the shirt.",
      "Fun fact: If you return to the gallery view of the projects and repeatedly swipe your cursor on and off the heart, you can make it beat! (a deliberate site design choice)",
    ]
  },
  {
    name: "Koi Pond",
    image: koi,
    imgArr: [koi, koiFull, koiModel],
    points: [
      "Clothing: Uniqlo Slim Fit Chino Pants",
      "Inspiration: Taylor swift’s koi fish guitar",
      "Fun fact: I only hand wash all of these clothing embroidery projects because I'm afraid the designs will just disintegrate in the washer.",
      "Fun fact: I wore these pants during a digital circuits midterm exam for good luck! (it didn\’t work)",
    ]
  },
  {
    name: "Ocean Waves",
    image: ocean,
    imgArr: [ocean, oceanFull],
    points: [
      "Clothing: Old Tommy Hilfiger dress shirt",
      "Inspiration: I wanted to recycle an old dress shirt that I haven’t worn since tenth grade.",
      "This took 2 weeks to make — the longest out of all the projects by far. This is mostly due to the split color armband design, which wraps all around the sleeve. "
    ]
  },
];

export { embroidery, technologies, experiences, projects };