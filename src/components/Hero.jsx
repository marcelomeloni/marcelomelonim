// src/components/Hero.jsx
import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { useTypewriter } from '../hooks/useTypewriter';
import { motion } from 'framer-motion';

const Hero = () => {
  const typedText = useTypewriter([
    'Olá, Eu sou\nMarcelo Meloni',
    'Desenvolvedor\nFull Stack.',
  ], 150, 50, 2500);

  const socialLinks = [
    { icon: <FaLinkedinIn size={20} />, href: 'https://www.linkedin.com/in/marcelommasson/', label: 'LinkedIn' },
    { icon: <FaGithub size={20} />,     href: 'https://github.com/marcelomeloni',           label: 'GitHub'   },
    { icon: <FaWhatsapp size={20} />,   href: 'https://wa.me/19996833077',                  label: 'WhatsApp' },
  ];

  return (
    <section
      className="min-h-screen flex flex-col justify-center px-6 sm:px-10 lg:px-24 pt-24 pb-12 lg:pt-0 lg:pb-0 relative overflow-hidden"
      id="hero"
    >
      {/* Glows */}
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] bg-accent/10 rounded-full filter blur-[150px] opacity-50 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-blue-500/10 rounded-full filter blur-[120px] opacity-40 pointer-events-none" />

      <div className="z-10 w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-12">

        {/* ── ESQUERDA ── */}
        <div className="flex flex-col lg:col-span-7 xl:col-span-8">

          {/* Título */}
          <div className="min-h-[140px] sm:min-h-[200px] md:min-h-[240px] flex items-end mb-10 sm:mb-14">
            <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-bold text-foreground tracking-tight leading-[1.1] whitespace-pre-line drop-shadow-sm">
              {typedText}
              <span className="blinking-cursor border-r-4 border-foreground ml-1 -mb-2 inline-block h-[0.85em]" />
            </h1>
          </div>

          {/* Social links */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="group relative flex items-center gap-2.5 px-5 py-3 sm:px-7 sm:py-3.5
                           bg-white/[0.02] border border-white/[0.05] rounded-2xl backdrop-blur-md
                           transition-all duration-300 ease-out
                           hover:-translate-y-1.5 hover:bg-white/[0.05] hover:border-accent/40
                           hover:shadow-[0_10px_30px_-10px_rgba(56,189,248,0.3)]
                           active:translate-y-0 active:scale-95 focus:outline-none focus:ring-2 focus:ring-accent/50"
              >
                <span className="text-muted group-hover:text-accent transition-all duration-300 transform group-hover:scale-110">
                  {link.icon}
                </span>
                <span className="text-muted group-hover:text-foreground font-semibold text-[11px] sm:text-xs tracking-[0.2em] uppercase transition-colors duration-300">
                  {link.label}
                </span>
              </a>
            ))}
          </div>

          {/* Card terminal mobile — só aparece em telas pequenas */}
          <motion.div
            className="flex lg:hidden mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <TerminalCard compact />
          </motion.div>

        </div>

        {/* ── DIREITA (desktop) ── */}
        <motion.div
          className="hidden lg:flex justify-end relative lg:col-span-5 xl:col-span-4"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        >
          <TerminalCard />
        </motion.div>

      </div>

     
    </section>
  );
};

/* ── Terminal Card ─────────────────────────────── */
const TerminalCard = ({ compact = false }) => (
  <div className={`
    w-full bg-[#0d0d0f]/80 border border-white/10 rounded-2xl
    backdrop-blur-xl shadow-2xl overflow-hidden
    ${compact ? '' : 'max-w-[420px] transform rotate-y-[-10deg] rotate-x-[5deg]'}
  `}>
    {/* Barra superior */}
    <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
      <div className="w-3 h-3 rounded-full bg-red-500/80" />
      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
      <div className="w-3 h-3 rounded-full bg-green-500/80" />
      <span className="ml-2 text-xs text-muted/50 font-mono">marcelo@portfolio:~</span>
    </div>

    {/* Código */}
    <div className={`font-mono leading-loose text-muted ${compact ? 'p-4 text-[11px]' : 'p-6 text-[13px] xl:text-sm'}`}>
      <p><span className="text-purple-400">const</span> <span className="text-accent">developer</span> = {'{'}</p>
      <p className={compact ? 'pl-4' : 'pl-6'}>name: <span className="text-green-400">'Marcelo Meloni'</span>,</p>
      <p className={compact ? 'pl-4' : 'pl-6'}>role: <span className="text-green-400">'Full Stack & Web3'</span>,</p>
      <p className={compact ? 'pl-4' : 'pl-6'}>
        skills: [
        <span className="text-yellow-300">'React'</span>,{' '}
        <span className="text-yellow-300">'Node'</span>,{' '}
        <span className="text-yellow-300">'Solana'</span>],
      </p>
      {!compact && (
        <p className="pl-6">passion: <span className="text-green-400">'Building solutions'</span></p>
      )}
      <p>{'}'}</p>
      {!compact && <br />}
      <p><span className="text-purple-400">await</span> developer.<span className="text-blue-400">init</span>();</p>
      <div className={`flex items-center gap-2 ${compact ? 'mt-1.5' : 'mt-2'}`}>
        <span className="text-green-500">➜</span>
        <span className="text-white/80">System initialized...</span>
        <span className="w-2 h-4 bg-white/50 animate-pulse inline-block" />
      </div>
    </div>
  </div>
);


export default Hero;
