// This file contains all the data for your portfolio
// Replace the placeholder values with your actual information

export const personalInfo = {
  name: "Dhrumil Pipaliya",
  title: "Masters Student",
  specialization: "Computer Science",
  summary: "Dedicated Masters student with a passion for technology and innovation. Experienced in full-stack development and machine learning, seeking opportunities in software engineering.",
  location: "Jersey city, USA",
  email: "dp66107n@pace.edu",
  phone: "+1 201 920 1944",
  photo: "https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png", // Replace with your actual photo
};

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/dhrumil-pipaliya/",
    icon: "Linkedin"
  },
  {
    name: "GitHub",
    url: "https://github.com/dhrumil-ui",
    icon: "Github"
  },
  
];

export const education = [
  {
    degree: "MS in Computer Science",
    institution: "Pace University",
    location: "New York , USA",
    duration: "2024 - 2026",
    description: "Focusing on Artificial Intelligence and Machine Learning. Maintaining a 3.7 GPA.",
    logo: "https://tse3.mm.bing.net/th?id=OIP.39Ac7u3QBBTwgz-j5D9YIQHaHa&pid=Api&P=0&h=180https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    degree: "BS  in Computer Engineering",
    institution: "KJSIT",
    location: "Mumbai, India",
    duration: "2020 - 2024",
    description: "Graduated with honors. Specialized in Computer Networks and Security.",
    logo: "https://www.careerindia.com/college-logo/128x128/29/Logo_1501486207.png"
  }
];

export const experience = [
  {
    position: "Web Development Intern",
    company: "GoldenmaceITsolutions",
    location: "Navsari, India",
    duration: "June 2023 - August 2023",
    description: "Developed and optimized RESTful APIs using Node.js and Express. Implemented new features in React frontend applications. Collaborated with senior engineers on database optimization.",
    logo: "https://tse4.mm.bing.net/th?id=OIP.8QYKsuZhe-AX_eOVZqR3wQHaG8&pid=Api&P=0&h=180"
  },
  {
    position: "Research Assistant",
    company: "University AI Lab",
    location: "City, Country",
    duration: "January 2022 - May 2023",
    description: "Assisted in developing machine learning algorithms for natural language processing. Implemented data processing pipelines and visualization tools. Published a research paper on sentiment analysis.",
    logo: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    position: "Teaching Assistant",
    company: "University Name",
    location: "City, Country",
    duration: "August 2021 - December 2021",
    description: "Assisted professor in teaching undergraduate programming courses. Conducted weekly tutorial sessions and graded assignments. Mentored students on projects and assignments.",
    logo: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

export const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 90 },
      { name: "Java", level: 75 },
      { name: "C++", level: 85 },
    ]
  },
  {
    category: "Web Development",
    items: [
      { name: "React.js", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "HTML/CSS", level: 100 },
      { name: "Express.js", level: 85 },
    ]
  },
  {
    category: "Data Science & ML",
    items: [
      { name: "TensorFlow", level: 90 },
      { name: "PyTorch", level: 90 },
      { name: "Data Analysis", level: 95 },
      { name: "Statistical Modeling", level: 95 },
    ]
  },
  {
    category: "Tools & Technologies",
    items: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 90 },
      { name: "AWS", level: 85 },
      { name: "Database Design", level: 95 },
    ]
  }
];

export const projects = [
  {
    title: "SQL Injection Detection using Reinforcement Learning",
    image: "https://www.thesslstore.com/blog/wp-content/uploads/2020/04/sql-injection-attack.jpg",
    description: "•	Developed a reinforcement learning model using Q-learning and a hybrid CNN-SVM architecture to detect SQL injection attacks, enhancing real-time threat detection and system security",
    technologies: ["Python", "TensorFlow", "Flask","RL"],
    link: "https://github.com/dhrumil-ui/sqli_detection_RL"
  },
  {
    title: "Break-Bite",
    image: "https://miro.medium.com/max/1984/0*7fJU4VtlK5HoQvzy.png",
    description: "•	Engineered a mobile-first application utilizing the Flutter framework to develop a cross-platform canteen ordering system, leveraging Dart language features for UI rendering and state management.",
    technologies: ["React", "Node.js", "DART", "Restfull API","Flutter"],
    link: "https://github.com/yourusername/ecommerce-platform"
  },
  {
    title: "AyurmedAai",
    description: "Created an IoT system for home automation using Raspberry Pi and various sensors.",
    technologies: ["ML", "chatbot", "typescript", "React Native"],
    link: "https://github.com/yourusername/smart-home"
  }
];

export const achievements = [
  
  {
    title: "Research Publication",
    description: "Co-authored a paper on SQL Injection Detection using Reinforcement Learning and published it in ANVESAK journal."
  }
];