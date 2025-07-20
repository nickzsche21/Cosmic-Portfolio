import { motion } from "framer-motion";
import FloatingAstronaut from "@/components/three/FloatingAstronaut";

export default function AboutSection() {
  const skills = [
    { name: "React", color: "space-teal" },
    { name: "Three.js", color: "space-purple" },
    { name: "GSAP", color: "space-orange" },
    { name: "Node.js", color: "space-blue" },
    { name: "TypeScript", color: "space-teal" },
    { name: "WebGL", color: "space-purple" }
  ];

  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-5xl font-jetbrains font-bold text-space-teal mb-8">
              About Me
            </h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-300"
              >
                I'm a cosmic developer exploring the infinite possibilities of code and creativity. 
                My journey through the digital universe has led me to master various technologies 
                and create stellar experiences.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-300"
              >
                From React galaxies to Node.js nebulae, I navigate through different tech stacks 
                with the curiosity of a space explorer and the precision of a mission commander.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4 mt-8"
              >
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`px-4 py-2 bg-${skill.color}/20 rounded-full text-${skill.color} border border-${skill.color}/30 cursor-default`}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-96"
          >
            <FloatingAstronaut />
            
            {/* Orbital elements */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-8 -right-8 w-16 h-16 border-2 border-space-teal rounded-full"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-8 -left-8 w-12 h-12 border-2 border-space-purple rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
