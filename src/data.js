const data = {
    projects: [
        {
            id: 1,
            title: "HuberMind AI",
            description: "Created an AI tool inspired by Dr. Andrew Huberman that transcribes and organizes YouTube podcasts into a dataset for a RAG system. Built using Pathway, Streamlit, Docker, and OpenAI API.",
            technologies: ["Pathway", "Streamlit", "Docker", "OpenAI API"],
            githubLink: "https://github.com/arjun-ms/HuberMind-AI",
            demoLink: "https://youtu.be/BILcnys0luY",
            image: "/projects/hubermind-ai.jpg"
        },
        {
            id: 2,
            title: "SQL Ease",
            description: "Built a GPT-3 powered web app using Next.js to convert natural language into SQL queries via OpenAI API. Designed for developers to quickly generate and copy SQL queries.",
            technologies: ["React", "Next.js", "OpenAI"],
            githubLink: "https://github.com/arjun-ms/sql-ease",
            demoLink: "https://sqlease.buildnship.in/",
            image: "/projects/sql-ease.jpg"
        },
        {
            id: 3,
            title: "20-20",
            description: "Developed a CNN-based image classifier that differentiates between Malayalam actors Mammootty and Mohanlal with high accuracy using TensorFlow and Flask.",
            technologies: ["Python", "TensorFlow", "Flask", "HTML", "CSS"],
            githubLink: "https://github.com/arjun-ms/20-20",
            demoLink: "https://two0-20.onrender.com/",
            image: "/projects/20-20.jpg"
        },
        {
            id: 4,
            title: "Pre-Owned",
            description: "Built a machine learning model using Python and Flask to predict the price of used cars in India. Designed a simple frontend with HTML/CSS for user interaction.",
            technologies: ["Python", "Flask", "HTML", "CSS"],
            githubLink: "https://github.com/arjun-ms/pre-owned",
            demoLink: "https://pre-owned-axxr.onrender.com/",
            image: "/projects/pre-owned.jpg"
        }
    ],
    skillCategories: [
        {
            category: 'Languages',
            skills: [
                { name: 'Python', proficiency: 90 },
                { name: 'SQL', proficiency: 85 },
                { name: 'HTML/CSS', proficiency: 85 },
                { name: 'JavaScript', proficiency: 80 },
                { name: 'C', proficiency: 80 },
                { name: 'Java', proficiency: 80 }
            ]
        },
        {
            category: 'Frameworks & Libraries',
            skills: [
                { name: 'React.js', proficiency: 90 },
                { name: 'Next.js', proficiency: 85 },
                { name: 'Flask', proficiency: 85 },
                { name: 'Langchain', proficiency: 80 },
                { name: 'ChromaDB', proficiency: 75 },
                { name: 'Django', proficiency: 75 }
            ]
        },
        {
            category: 'Developer Tools & Cloud',
            skills: [
                { name: 'Git', proficiency: 90 },
                { name: 'Docker', proficiency: 85 },
                { name: 'AWS', proficiency: 80 },
                { name: 'Jupyter Notebook', proficiency: 85 },
                { name: 'Cursor', proficiency: 80 },
                { name: 'Hoppscotch / Postman', proficiency: 75 }
            ]
        }
    ],
    testimonials: [
        {
            id: 1,
            name: "Client One",
            feedback: "Great work on the project!"
        },
        {
            id: 2,
            name: "Client Two",
            feedback: "Very professional and timely."
        }
    ],
    experiences: [
        {
            position: "AI Developer Consultant",
            company: "The Apprentice Project (TAP)",
            duration: "Jun 2024 - Present",
            location: "Remote",
            responsibilities: [
                "Developed and implemented AI-driven solutions to improve personalized learning experiences for students from different backgrounds",
                "Researched and introduced new AI technologies and methods to enhance the platform's capabilities",
                "Optimized and fine-tuned AI models to ensure they perform well and can scale as needed",
                "Created and maintained clear documentation for AI models, processes, and systems to support ongoing use and development"
            ],
            technologies: ["AI", "Machine Learning", "Documentation", "Model Optimization"]
        },
        {
            position: "AI Researcher",
            company: "DocketGo",
            duration: "Jan 2023 - May 2023",
            location: "Ernamkulam, Kerala",
            responsibilities: [
                "Conducted in-depth research on Vector databases, exploring efficient and scalable ways to store the vast array of laws in the Indian Law system",
                "Significantly improved law point extraction accuracy by 25% through advanced tuning of Large Language Models (LLMs)",
                "Enabled deeper insights and analysis of legal documents specific to the Indian context"
            ],
            technologies: ["Vector Databases", "LLMs", "NLP", "Legal Tech"]
        },
        {
            position: "Bot Developer & AI Interest Group Lead",
            company: "GTech Mulearn",
            duration: "Jan 2022 - June 2023",
            location: "Trivandrum, Kerala",
            responsibilities: [
                "Developed and integrated advanced chat moderation and user engagement features into Discord bot for 1600+ community members",
                "Managed Mulearn AI learning circles across Kerala, promoting peer-to-peer learning and collaborative growth",
                "Structured multiple bootcamps and courses to engage students in AI learning",
                "Connected mentors and students by organizing weekly office hours and sessions for doubt clearing",
                "Conducted Think Tank meetings with mentors and interest group leads for future planning",
                "Hosted weekly virtual sessions titled 'Grab Your Super Powers', showcasing new AI tools and technologies"
            ],
            technologies: ["Discord Bot", "AI", "Community Management", "Education Technology"]
        },
        {
            position: "Technical Writer",
            company: "LambdaTest",
            duration: "Oct 2022 - Present",
            location: "Freelance",
            responsibilities: [
                "Authored comprehensive technical guides including 'What Is pytest: Complete Guide With Best Practices'",
                "Created documentation to help developers understand and implement testing tools and practices"
            ],
            technologies: ["Technical Writing", "pytest", "Documentation", "Testing Frameworks"]
        },
        {
            position: "Campus Lead",
            company: "TinkerHub Foundation",
            duration: "May 2021 - April 2023",
            location: "Ernamkulam, Kerala",
            responsibilities: [
                "Managed a team to oversee the development and engagement of 150+ students",
                "Fostered a collaborative learning environment focused on technical and social skills"
            ],
            technologies: ["Team Management", "Community Building", "Technical Training"]
        },
        
    ]
};

export default data;
