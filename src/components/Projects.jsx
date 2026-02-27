// src/components/Projects.jsx

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

// Ícone do GitHub (SVG inline, sem dependência extra)
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577
      0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755
      -1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305
      3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93
      0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176
      0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405
      1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23
      .645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22
      0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22
      0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57
      C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const Projects = () => {
  const projects = [
  {
    id: 1,
    title: 'Reppy SaaS',
    // Foco: PDF Parsing, CRM e Monetização
    desc: 'Ecossistema B2B para gestão de moradias. Desenvolvi um motor de PDF Parsing que automatiza a extração de dados de editais, alimentando um CRM com pipeline de vendas, indexação performática e checkout automatizado via Mercado Pago.',
    img: '/reppy.png',
    tags: ['React', 'FastAPI', 'Supabase', 'PostgreSQL', 'Mercado Pago API', 'PDF-Parsing'],
    github: 'https://github.com/marcelomeloni/reppy',
  },
  {
    id: 2,
    title: 'Reppy Repúblicas',
    // Foco: SEO, Onboarding (Wizard) e Cloud Storage
    desc: 'Plataforma B2C de busca de repúblicas. Implementei uma arquitetura de slugs dinâmicos para otimização de SEO e um wizard de onboarding de 6 etapas com gestão de mídia escalável via Supabase Storage e geolocalização.',
    img: '/republicas.png',
    tags: ['React', 'FastAPI', 'Supabase Storage', 'PostgreSQL', 'SEO/Slugs', 'Responsive'],
    github: 'https://github.com/marcelomeloni/reppyrepublicas',
  },
  {
    id: 3,
    title: 'ApostolicChain',
    // Foco: Blockchain, Grafos e Consultas Recursivas (Complexidade de Dados)
    desc: 'Visualizador de sucessão histórica descentralizada. Utiliza Smart Contracts em Rust (Solana) para garantir a imutabilidade dos dados, processados por um backend Java com queries recursivas (WITH RECURSIVE) e visualização em grafo D3.js.',
    img: '/apostolic.png',
    tags: ['Solana/Rust', 'Spring Boot', 'Java 17', 'PostgreSQL', 'D3.js', 'JWT'],
    github: 'https://github.com/marcelomeloni/apostolicChain',
  },
  {
    id: 4, // Novo projeto
    title: 'Reppy Maps',
    desc: 'Ferramenta de busca geoespacial para o ecossistema Reppy. Implementei clusterização de dados em tempo real e filtros dinâmicos (vibe, preço, gênero) integrados a um mapa customizado, otimizando a descoberta de moradias por região.',
    img: 'mapa.png', // Certifique-se de salvar a imagem do mapa com esse nome
    tags: ['React', 'Mapbox GL JS', 'FastAPI', 'Geolocation', 'Clusterization'],
    github: 'https://github.com/marcelomeloni/reppy', // Ou o link específico se houver
    demo: 'https://mapa.reppy.app.br' // Adicionei campo de demo
  },
{
    id: 5,
    title: 'Heyssy Corporation',
    desc: 'E-commerce de moda underground com design brutalista. Opera integralmente no Front-End com estados complexos e persistência local (localStorage), incluindo gestão dinâmica de carrinho, autenticação mock, checkout com ViaCEP e sistema completo de pedidos.',
    img: 'heyssy.png', // Certifique-se de salvar a imagem do projeto com esse nome
    tags: ['Next.js 15', 'Tailwind CSS', 'Context API', 'E-commerce', 'Front-State'],
    github: 'https://github.com/marcelomeloni/heyssy-store', // Atualize se o nome do repositório for diferente
    demo: 'https://heyssycorporation.vercel.app' // Adicione o link do deploy aqui
  }
];

  return (
    <section className="min-h-screen flex flex-col justify-center py-24 relative overflow-hidden" id="projetos">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-accent/5 rounded-full filter blur-[250px] pointer-events-none"></div>

      <div className="z-10 w-full max-w-[1400px] mx-auto px-8 lg:px-24">

        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Projetos em <span className="text-accent">Destaque</span>
            </h2>
          </div>
          <p className="text-muted text-lg max-w-md">
            Arraste para o lado para explorar algumas das soluções que construí.
          </p>
        </motion.div>

        {/* Carrossel Swiper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full cursor-grab active:cursor-grabbing"
        >
          <Swiper
            modules={[Pagination, Navigation, FreeMode]}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              320:  { slidesPerView: 1.1, spaceBetween: 20 },
              768:  { slidesPerView: 2.2, spaceBetween: 24 },
              1024: { slidesPerView: 3,   spaceBetween: 30 },
            }}
            className="pb-16"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className="h-auto">
                <div className="group h-full flex flex-col bg-white/[0.02] border border-white/[0.05] rounded-3xl overflow-hidden transition-all duration-500 hover:bg-white/[0.04] hover:border-accent/40 hover:shadow-[0_10px_40px_-15px_rgba(56,189,248,0.2)]">

                  {/* Imagem */}
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-white/[0.05]">
                    <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cotransition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                    />
                  </div>

                  {/* Texto */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted text-base leading-relaxed flex-grow">
                      {project.desc}
                    </p>

                    {/* Tags + Botão GitHub */}
                    <div className="flex flex-wrap items-center gap-2 mt-6 pt-6 border-t border-white/5">
  <div className="flex flex-wrap gap-2 flex-grow">
    {project.tags.map((tag, i) => (
      <span key={i} className="px-3 py-1 text-xs font-mono font-medium text-muted/80 bg-white/5 rounded-md border border-white/10">
        {tag}
      </span>
    ))}
  </div>

  <div className="flex gap-2">
    {project.demo && (
      <a
        href={project.demo}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-accent/20 border border-accent/40 hover:bg-accent/30 transition-all duration-300"
      >
        Ver Site
      </a>
    )}
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-foreground bg-white/5 border border-white/10 hover:border-accent/60 transition-all duration-300"
    >
      <GithubIcon />
    </a>
  </div>
</div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

      </div>
    </section>
  );
};


export default Projects;

