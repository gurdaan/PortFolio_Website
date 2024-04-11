/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Gurdaan Walia",
  title: "Hi all, I'm Gurdaan Walia",
  subTitle: emoji(
    "Results-driven Software Engineer with more than 4 years of experience in the IT and services industry, specializing in software development, system engineering, and AI technologies. Proficient in delivering high-level programming solutions, sophisticated database design, and strategic system architecture improvements, with a special emphasis on AI, .NET Core, API development, ETL processes, and dynamic dashboard development."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1buMYQOTX2GZHxTcfM8lPDIgy-sKL3aol/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/gurdaan",
  linkedin: "https://www.linkedin.com/in/gurdaan-walia/",
  gmail: "gurdaan.walia7@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Passionate Software/ AI-ML Engineer who loves to explore and learn different technologies.",
  skills: [
    emoji("⚡ Develop sophisticated software solutions using Python, C#, and JavaScript, with a strong emphasis on AI, .NET Core, and API development."),
    emoji("⚡ Leverage advanced data science libraries (NumPy, Pandas, Keras, TensorFlow) and ETL processes (SSIS) for insightful data analysis and dynamic dashboard development."),
    emoji("⚡ Experience in developing, deploying, and managing applications in containerized environments using Docker, complemented by CI/CD pipelines with GitHub Actions."),
    emoji("⚡ Design and implement AI models for data-driven insights and decision-making, with experience in machine learning algorithms, LLM’s (e.g., Autogen, Langchain, MemGPT), and RAG strategies."),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Lambton College, Canada",
      logo: require("./assets/images/lambtonLogo.jpeg"),
      subHeader: "Post Graduation In Artificial Intelligence And Machine Learning.",
      duration: "September 2022 - April 2024",
      desc: "Help create AI-chatbot for Precise-Parklink for Kiosk Machines.",
      descBullets: [
        "Completed AI Internship with Knovatek Inc",
        "Worked on different data analytics projects."
      ]
    },
    {
      schoolName: "Guru Gobind Singh Indraprastha University, India",
      logo: require("./assets/images/ggsipuLogo.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "Jul 2014 - Jun 2018",
      desc: "Have written a research paper on sixth sense technology.",
      descBullets: [
      "Have won inter-college tech fest competitions",
      "Have scored a 3.2 GPA in Academics."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Large System Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "AI/ML",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "AI Engineer",
      company: "Knovatek Inc",
      companylogo: require("./assets/images/knovatekLogo.jpeg"),
      date: "Jan 2024 – Present",
      desc: "Designed and implemented advanced machine learning strategies for investment insights, optimizing strategies through algorithmic analysis and enhancing decision-making by integrating AI insights into user-friendly tools.",
      descBullets: [
        "Platforms used– Autogen, Langchain, MemGPT,  LLM(Large Language Model), RAG(Retrieval Augmented Generation), Tensorflow, Trello, Github",
      ]
    },
    {
      role: "Software Developer",
      company: "Grapecity",
      companylogo: require("./assets/images/grapecityLogo.png"),
      date: "Aug 2021 – Aug 2022",
      desc: "Developed and enhanced UI/UX with .NET WPF GUI controls and built robust, scalable applications using Visual Studio and .NET Core, along with creating consumable .NET APIs for seamless application integration.",
      descBullets: [
        "Platforms used– WPF, .NET Core, selenium, javascript, Angular, Confluence, Github",
      ]
    },
    {
      role: "Senior System Engineer",
      company: "Infosys",
      companylogo: require("./assets/images/infosysLogo.jpg"),
      date: "Nov 2018 – Jul 2021",
      desc: "Developed and enhanced a WPF-based Windows application for efficient work order management, integrated with consumable APIs for system-wide usability. Automated essential operations using UI-Path, Python, C#, and SQL Server, achieving a 30% reduction in manual tasks. Engineered dynamic dashboards for data analysis, crafted Python scripts for data security, and built Django-JavaScript web portals for client order tracking, utilizing SQL Server for database management.",
      descBullets: [
        "●	Platforms used– WPF, Python, C sharp, Django, SSIS, SQL Server, IDashboard, Javascript, Visual Studio, Assist Edge [Automation Studio], Excel VBA, PowerShell, Jira, Github",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Azure For Data Scientist Certificate",
      subtitle:
        "",
      image: require("./assets/images/AzureDataScientist.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Certificate of Appreciation from Infosys for outstanding work.",
      subtitle:
        "",
      image: require("./assets/images/Infosys.jpeg"),
      // imageAlt: "Google Assistant Action Logo",
      footerLink: [
        // {
        //   // name: "View Google Assistant Action",
        //   // url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        // }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Certified Ui-Path developer.",
      image: require("./assets/images/RPA.jpeg"),
      // imageAlt: "PWA Logo",
      footerLink: [
        // {name: "Certification", url: ""},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE on my You-Tube channel 😇."
  ),

  talks: [
    {
      title: "TechnoGurdaan",
      subtitle: "AI/ML channel",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://youtube.com/@TechnoGurdaan?si=F1LtV6KlsiK6EbwY"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-4372369588",
  email_address: "gurdaan.walia7@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
