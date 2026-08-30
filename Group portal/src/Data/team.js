// Helper: turns a name like "Lydia Jepleting" into initials like "LJ"
function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export const teamMembers = [
  {
    id: 1,
    name: "Lydia Jepleting",
    role: "Frontend Lead",
    bio: "React specialist with 5+ years of experience building responsive web applications.",
    skills: ["React", "JavaScript", "CSS", "UI/UX"],
    github: "https://github.com/jepletin",
    linkedin: "https://linkedin.com/in/lydiajepleting",
    photo: getInitials("Lydia Jepleting")
  },
  {
    id: 2,
    name: "Bryan Rono Kipchumba",
    role: "Backend Architect",
    bio: "Node.js & Python expert focused on scalable microservices and cloud infrastructure.",
    skills: ["Node.js", "Python", "MongoDB", "AWS"],
    github: "https://github.com/rizz-mangwai",
    linkedin: "https://linkedin.com/in/bobsmith",
    photo: getInitials("Bryan Rono Kipchumba")
  },
  {
    id: 3,
    name: "James Kipleting Sang",
    role: "UI/UX Designer",
    bio: "Creative designer passionate about creating intuitive and beautiful user experiences.",
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
    github: "https://github.com/jaymoh34",
    linkedin: "https://linkedin.com/in/caroldavis",
    photo: getInitials("James Kipleting Sang")
  },
  {
    id: 4,
    name: "Zacheous Bett",
    role: "DevOps Engineer",
    bio: "Automation expert ensuring smooth deployment pipelines and cloud infrastructure.",
    skills: ["Docker", "Kubernetes", "CI/CD", "Linux"],
    github: "https://github.com/zkbett",
    linkedin: "https://linkedin.com/in/davewilson",
    photo: getInitials("Zacheous Bett")
  },
  {
    id: 5,
    name: "Evans Kiprotich",
    role: "Full Stack Developer",
    bio: "Versatile developer working across the entire stack with a focus on performance.",
    skills: ["React", "Node.js", "PostgreSQL", "GraphQL"],
    github: "https://github.com/evanskiprotich",
    linkedin: "https://linkedin.com/in/evamartinez",
    photo: getInitials("Evans Kiprotich")
  }
];
