import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const completedProjects = [
  {
    title: "School Management Information System",
    description: "A comprehensive system for school data management, including student information, attendance, and grading.",
    tech: ["React.js", "Firebase"],
    link: "https://school-mis-delta.vercel.app/",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071&auto=format&fit=crop"
  },
  {
    title: "Kikuyu Catholic Scores Website",
    description: "Website for Catholic choirs to find and share Kikuyu Catholic music sheets. Features user authentication and file storage.",
    tech: ["React", "Firebase", "Authentication"],
    link: "https://kikuyu-catholic-scores-website.vercel.app/",
    image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Garage Website",
    description: "Modern website design for a local garage, showcasing services and contact information.",
    tech: ["React", "Tailwind CSS"],
    link: "https://proxy-auto-garage-react.vercel.app/",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2072&auto=format&fit=crop"
  }
];

const currentProjects = [
  {
    title: "Automation Learning",
    description: "Exploring various automation tools and techniques to streamline workflows and increase productivity.",
    tech: ["Automation", "Python", "AI"],
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "React Native Transition",
    description: "Transitioning from web development to mobile app development using React Native.",
    tech: ["React Native", "Mobile", "Cross-platform"],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2074&auto=format&fit=crop"
  },
  {
    title: "M-Pesa Integration",
    description: "Learning to integrate M-Pesa payment system into web and mobile applications.",
    tech: ["Fintech", "API", "Payments"],
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Musical Notation and Composition",
    description: "Learning musical notation and exploring the art of music composition to enhance creative skills.",
    tech: ["Music Theory", "Composition", "Creativity"],
    image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=2070&auto=format&fit=crop"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const currentProjectVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4" data-aos="fade-up">
        <div className="flex items-center gap-2 mb-12">
          <Code className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">Projects</h2>
        </div>

        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-semibold mb-8">Completed Projects</h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {completedProjects.map((project, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="group h-full hover:border-primary transition-colors overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                    </div>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        {project.title}
                        {project.link && (
                          <Button variant="ghost" size="icon" asChild>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8">Current Projects</h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {currentProjects.map((project, index) => (
                <motion.div key={index} variants={currentProjectVariants}>
                  <Card className="group h-full hover:border-primary transition-colors overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                    </div>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

