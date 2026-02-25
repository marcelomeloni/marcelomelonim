// src/components/About.jsx
import { motion } from 'framer-motion';

const About = () => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-8 lg:px-24 py-20 relative overflow-hidden" id="sobre">
      
      <div className="z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        
        {/* LADO ESQUERDO: FOTO */}
        <motion.div 
          className="relative w-full max-w-md mx-auto md:mx-0 group"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }} // Modificado aqui: ida e volta
          variants={fadeLeft}
        >
          <div className="absolute -inset-1  rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative aspect-[4/5] rounded-2xl  backdrop-blur-sm">
            <img 
              src="/profile.png" 
              alt="Marcelo Meloni" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-background/10 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
        </motion.div>

        {/* LADO DIREITO: TEXTO HUMANO E DIRETO */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }} // Modificado aqui: ida e volta
          variants={fadeRight}
          className="flex flex-col space-y-6"
        >
       
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            O que me move é <span className="text-accent">construir</span>.
          </h2>

          <div className="space-y-5 text-muted text-lg leading-relaxed">
            <p>
              Como graduando em Sistemas de Informação pela Unicamp, construí minha trajetória unindo o desenvolvimento de software robusto à vanguarda da Web3. Movido por um perfil essencialmente <strong>"builder"</strong>, meu foco é traduzir problemas complexos em soluções tecnológicas funcionais e escaláveis.
            </p>
            <p>
              Atualmente, dedico minha energia à <strong>Reppy</strong>, uma plataforma SaaS voltada ao mercado de moradia estudantil da qual sou fundador. Nesse projeto, lidero a arquitetura e o desenvolvimento de ponta a ponta, garantindo uma experiência premium e de alta performance nas plataformas web e mobile.
            </p>
            <p>
              Em paralelo à criação de produtos SaaS, possuo forte imersão no ecossistema descentralizado, desenvolvendo desde dApps a Smart Contracts focados em finanças descentralizadas (DeFi).
            </p>
            <p>
              Com fluência em inglês e foco em liderança técnica, acredito que o código é apenas o meio. Meu objetivo final é sempre alinhar engenharia de excelência a uma visão estratégica, entregando impacto real aos negócios.
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default About;