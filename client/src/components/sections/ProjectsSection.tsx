import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import HolographicCard from "@/components/ui/HolographicCard";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-jetbrains font-bold text-center text-space-teal mb-16"
        >
          Cosmic Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <HolographicCard key={project.id} delay={index * 0.2}>
              <div className="p-8">
                <div className="mb-6">
                  <div 
                    className="w-full h-48 bg-cover bg-center rounded-xl mb-4 relative overflow-hidden"
                    style={{ backgroundImage: `url('${project.image}')` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  
                  <h3 className="text-2xl font-jetbrains font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech.name}
                        className={`text-xs px-3 py-1 bg-${tech.color}/20 text-${tech.color} rounded-full border border-${tech.color}/30`}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-space-teal hover:text-white transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                  </div>
                </div>
              </div>
            </HolographicCard>
          ))}
        </div>
      </div>
    </section>
  );
}
