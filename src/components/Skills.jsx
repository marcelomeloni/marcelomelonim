// src/components/Skills.jsx
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaBrain, FaRegComments, FaLightbulb, FaUsers, FaSyncAlt, FaRocket, FaWater } from 'react-icons/fa';
import { FaMobileScreen } from 'react-icons/fa6';
import { SiSpringboot, SiFastapi, SiTailwindcss, SiSolana, SiRust } from 'react-icons/si';
import { MdOutlineDesignServices } from 'react-icons/md';
import { IoIosWater } from "react-icons/io";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  // Hard Skills atualizadas com as brabas de Web3!
  const hardSkills = [
    { name: 'React.js', icon: <FaReact size={32} className="text-[#61DAFB] group-hover:drop-shadow-[0_0_8px_rgba(97,218,251,0.5)] transition-all" /> },
    { name: 'React Native', icon: <FaMobileScreen size={32} className="text-[#61DAFB] group-hover:drop-shadow-[0_0_8px_rgba(97,218,251,0.5)] transition-all" /> },
    { name: 'Node.js', icon: <FaNodeJs size={32} className="text-[#339933] group-hover:drop-shadow-[0_0_8px_rgba(51,153,51,0.5)] transition-all" /> },
    { name: 'Spring Boot', icon: <SiSpringboot size={32} className="text-[#6DB33F] group-hover:drop-shadow-[0_0_8px_rgba(109,179,63,0.5)] transition-all" /> },
    { name: 'Fast API', icon: <SiFastapi size={32} className="text-[#009688] group-hover:drop-shadow-[0_0_8px_rgba(0,150,136,0.5)] transition-all" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={32} className="text-[#06B6D4] group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.5)] transition-all" /> },
    { name: 'Solana', icon: <SiSolana size={32} className="text-[#14F195] group-hover:drop-shadow-[0_0_8px_rgba(20,241,149,0.5)] transition-all" /> },
    { name: 'Rust', icon: <SiRust size={32} className="text-[#DEA584] group-hover:drop-shadow-[0_0_8px_rgba(222,165,132,0.5)] transition-all" /> },
    { name: 'Sui', icon: <IoIosWater size={32} className="text-[#4CA2FF] group-hover:drop-shadow-[0_0_8px_rgba(76,162,255,0.5)] transition-all" /> },
    { name: 'Prompt Eng.', icon: <FaBrain size={32} className="text-[#F472B6] group-hover:drop-shadow-[0_0_8px_rgba(244,114,182,0.5)] transition-all" /> },
    { name: 'UI / UX', icon: <MdOutlineDesignServices size={32} className="text-[#A855F7] group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] transition-all" /> },
  ];

  const softSkills = [
    { name: 'Comunicação', icon: <FaRegComments size={24} /> },
    { name: 'Resolução de Problemas', icon: <FaLightbulb size={24} /> },
    { name: 'Trabalho em Equipe', icon: <FaUsers size={24} /> },
    { name: 'Adaptabilidade', icon: <FaSyncAlt size={24} /> },
    { name: 'Proatividade', icon: <FaRocket size={24} /> },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center px-8 lg:px-24 py-20 relative overflow-hidden" id="skills">
      
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full filter blur-[200px] -translate-y-1/2 pointer-events-none"></div>

      <div className="z-10 w-full max-w-6xl mx-auto space-y-20">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Minhas <span className="text-accent">Habilidades</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            As ferramentas e conceitos que utilizo para transformar complexidade em soluções intuitivas e de alta performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* HARD SKILLS */}
          <motion.div 
            className="lg:col-span-8 space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-foreground border-b border-white/10 pb-4 flex items-center gap-3">
              <span className="w-2 h-8 bg-accent rounded-full"></span>
              Hard Skills
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {hardSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group flex flex-col items-center justify-center gap-4 p-6 bg-white/[0.02] border border-white/[0.05] rounded-2xl backdrop-blur-sm 
                             hover:-translate-y-2 hover:bg-white/[0.06] hover:border-white/20 hover:shadow-[0_10px_30px_-15px_rgba(255,255,255,0.1)] transition-all duration-300"
                >
                  <div className="p-3 bg-background/50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <span className="text-muted group-hover:text-foreground font-medium text-sm tracking-wide transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* SOFT SKILLS */}
          <motion.div 
            className="lg:col-span-4 space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-foreground border-b border-white/10 pb-4 flex items-center gap-3">
              <span className="w-2 h-8 bg-muted rounded-full"></span>
              Soft Skills
            </h3>
            
            <div className="flex flex-col gap-3">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group flex items-center gap-4 p-4 bg-white/[0.01] border border-white/[0.03] rounded-xl 
                             hover:bg-white/[0.04] hover:border-white/10 transition-colors duration-300"
                >
                  <div className="text-muted/50 group-hover:text-accent transition-colors duration-300">
                    {skill.icon}
                  </div>
                  <span className="text-muted group-hover:text-foreground font-medium transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Skills;