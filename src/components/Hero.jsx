import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { useTypewriter } from '../hooks/useTypewriter';
import { motion } from 'framer-motion';

const Hero = () => {
  const typedText = useTypewriter([
    'Olá, Eu sou\nMarcelo Meloni',
    'Desenvolvedor\nFull Stack.'
  ], 150, 50, 2500);

  const socialLinks = [
    { icon: <FaLinkedinIn size={22} />, href: "https://www.linkedin.com/in/marcelommasson/", label: "linkedin" },
    { icon: <FaGithub size={22} />, href: "https://github.com/marcelomeloni", label: "github" },
    { icon: <FaWhatsapp size={22} />, href: "https://wa.me/19996833077", label: "WhatsApp" },
  ];

  return (
    <section className="min-h-[720px] h-screen flex flex-col justify-center px-8 lg:px-24 relative overflow-hidden">
      
      {/* Glow de fundo principal */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-accent/10 rounded-full filter blur-[150px] opacity-50 pointer-events-none"></div>
      
      {/* Glow secundário para a área da direita */}
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full filter blur-[120px] opacity-40 pointer-events-none"></div>

      {/* Container Grid modificado para 12 colunas */}
      <div className="z-10 w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-12">
        
        {/* LADO ESQUERDO: Ocupa 7 colunas em telas grandes, 8 em telas gigantes */}
        <div className="flex flex-col lg:col-span-7 xl:col-span-8">
          <div className="min-h-[180px] md:min-h-[250px] flex items-end mb-16">
            {/* Reduzi levemente o max text no md para 7xl para garantir que caiba com folga */}
            <h1 className="text-6xl md:text-7xl xl:text-8xl font-bold text-foreground tracking-tight leading-[1.1] whitespace-pre-line drop-shadow-sm">
              {typedText}
              <span className="blinking-cursor border-r-4 border-foreground ml-1 -mb-2 inline-block h-[0.85em]"></span>
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-5 md:gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="group relative flex items-center gap-3 px-7 py-3.5 md:px-8 md:py-4 
                           bg-white/[0.02] border border-white/[0.05] rounded-2xl backdrop-blur-md 
                           transition-all duration-300 ease-out
                           hover:-translate-y-1.5 hover:bg-white/[0.05] hover:border-accent/40 
                           hover:shadow-[0_10px_30px_-10px_rgba(56,189,248,0.3)]
                           active:translate-y-0 active:scale-95 focus:outline-none focus:ring-2 focus:ring-accent/50"
              >
                <span className="text-muted group-hover:text-accent transition-all duration-300 transform group-hover:scale-110">
                  {link.icon}
                </span>
                <span className="text-muted group-hover:text-foreground font-semibold text-xs md:text-[13px] tracking-[0.2em] uppercase transition-colors duration-300 mt-0.5">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* LADO DIREITO: Ocupa o restante das colunas (5 ou 4) */}
        <motion.div 
          className="hidden lg:flex justify-end relative perspective-1000 lg:col-span-5 xl:col-span-4"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        >
          {/* Mudei de w-[420px] fixo para w-full max-w-[420px] para ele se adaptar ao espaço menor */}
          <div className="w-full max-w-[420px] bg-[#0d0d0f]/80 border border-white/10 rounded-2xl backdrop-blur-xl shadow-2xl overflow-hidden transform rotate-y-[-10deg] rotate-x-[5deg]">
            
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <span className="ml-2 text-xs text-muted/50 font-mono">marcelo@portfolio:~</span>
            </div>

            <div className="p-6 font-mono text-[13px] xl:text-sm leading-loose text-muted">
              <p><span className="text-purple-400">const</span> <span className="text-accent">developer</span> = {'{'}</p>
              <p className="pl-6">name: <span className="text-green-400">'Marcelo Meloni'</span>,</p>
              <p className="pl-6">role: <span className="text-green-400">'Full Stack & Web3'</span>,</p>
              <p className="pl-6">skills: [<span className="text-yellow-300">'React'</span>, <span className="text-yellow-300">'Node'</span>, <span className="text-yellow-300">'Solana'</span>],</p>
              <p className="pl-6">passion: <span className="text-green-400">'Building solutions'</span></p>
              <p>{'}'};</p>
              <br/>
              <p><span className="text-purple-400">await</span> developer.<span className="text-blue-400">init</span>();</p>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-green-500">➜</span> 
                <span className="text-white/80">System initialized...</span>
                <span className="w-2 h-4 bg-white/50 animate-pulse inline-block"></span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;