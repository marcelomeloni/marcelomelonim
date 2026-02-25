// src/components/Footer.jsx
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const NAV_LINKS = [
  { label: 'Início',    href: '#hero' },
  { label: 'Sobre',     href: '#sobre' },
  { label: 'Skills',    href: '#skills' },
  { label: 'Projetos',  href: '#projetos' },
  { label: 'Contato',   href: '#contato' },
];

const SOCIALS = [
  { icon: <FaGithub size={18} />,    href: 'https://github.com/marcelomeloni',         label: 'GitHub'   },
  { icon: <FaLinkedinIn size={18} />, href: 'https://linkedin.com/in/marcelommasson',   label: 'LinkedIn' },
  { icon: <FaWhatsapp size={18} />,  href: 'https://wa.me/19996833077',                label: 'WhatsApp' },
  { icon: <FiMail size={18} />,      href: 'mailto:marcelomeloni022@gmail.com',              label: 'E-mail'   },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.05] bg-[#09090b]">

      {/* Glow de fundo */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-accent/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-8 lg:px-24 py-16">

        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">

          {/* Coluna 1 — Marca */}
          <div className="flex flex-col gap-4">
           <div className="flex flex-col gap-1">
  <span
    className="text-foreground font-bold tracking-widest uppercase text-xs text-accent/70"
    style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: '0.3em' }}
  >
    Portfólio
  </span>
  <span
    className="text-foreground leading-none"
    style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', fontWeight: 300, letterSpacing: '0.05em' }}
  >
    Marcelo Meloni
  </span>
</div>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              Desenvolvedor Full‑Stack & entusiasta de Web3. Construindo produtos reais desde os laboratórios da faculdade.
            </p>
          
          </div>

          {/* Coluna 2 — Navegação */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold tracking-[0.15em] text-muted/60 uppercase">Navegação</span>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-muted text-sm hover:text-accent transition-colors duration-300"
                  >
                    <span className="w-0 h-px bg-accent transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 — Contato rápido */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold tracking-[0.15em] text-muted/60 uppercase">Contato</span>
            <a
              href="mailto:marcelomeloni022@gmail.com"
              className="text-muted text-sm hover:text-accent transition-colors duration-300"
            >
              marcelomeloni022@gmail.com
            </a>
            <a
              href="https://wa.me/19996833077"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted text-sm hover:text-accent transition-colors duration-300"
            >
              +55 (19) 99683-3077
            </a>
            <span className="text-muted text-sm">Limeira, SP — Brasil</span>

            {/* Socials */}
            <div className="flex items-center gap-3 mt-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl border border-white/10 bg-white/[0.02] flex items-center justify-center text-muted hover:text-accent hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-white/[0.05] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-muted/50 text-xs">
            © {year} Marcelo Meloni. Todos os direitos reservados.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;