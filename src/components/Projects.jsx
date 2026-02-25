// src/components/Projects.jsx
import { motion } from 'framer-motion';
// Importações essenciais do Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, FreeMode } from 'swiper/modules';

// Estilos obrigatórios do Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

const Projects = () => {
  // Mock Data: Depois você pode trocar as imagens e textos pelos reais
  const mockProjects = [
    {
      id: 1,
      title: 'Reppy - Moradia Estudantil',
      desc: 'Plataforma SaaS completa para gestão de moradias. Arquitetura escalável construída do zero, focada em alta performance e experiência do usuário premium.',
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop', // Imagem temporária
      tags: ['React', 'Node.js', 'Tailwind']
    },
    {
      id: 2,
      title: 'DeFi Staking Protocol',
      desc: 'Smart Contract descentralizado para staking de tokens. Focado em segurança, baixas taxas e integração perfeita com wallets Web3.',
      img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1632&auto=format&fit=crop',
      tags: ['Solana', 'Rust', 'Web3']
    },
    {
      id: 3,
      title: 'Reppy Mobile App',
      desc: 'Aplicativo híbrido para facilitar o acesso de estudantes e proprietários. UI/UX responsivo e integração em tempo real com o backend.',
      img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1470&auto=format&fit=crop',
      tags: ['React Native', 'Expo', 'API']
    },
    {
      id: 4,
      title: 'Sui NFT Marketplace',
      desc: 'Marketplace experimental para cunhagem e negociação de NFTs utilizando a rede Sui, garantindo transações super rápidas.',
      img: 'https://images.unsplash.com/photo-1644361566696-3d442b5b482a?q=80&w=1566&auto=format&fit=crop',
      tags: ['Sui', 'Move', 'DApp']
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
          className="w-full cursor-grab active:cursor-grabbing" // Muda o cursor ao arrastar
        >
          <Swiper
            modules={[Pagination, Navigation, FreeMode]}
            spaceBetween={30}
            freeMode={true} // Permite um arraste mais solto/livre
            pagination={{ 
              clickable: true,
              dynamicBullets: true // Estilo moderno de bolinhas de paginação
            }}
            breakpoints={{
              // Mobile (1 card)
              320: { slidesPerView: 1.1, spaceBetween: 20 },
              // Tablet (2 cards)
              768: { slidesPerView: 2.2, spaceBetween: 24 },
              // Desktop (3 cards)
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="pb-16" // Espaço em baixo para os bullets de paginação não colarem nos cards
          >
            {mockProjects.map((project) => (
              <SwiperSlide key={project.id} className="h-auto"> {/* h-auto força cards da mesma altura */}
                {/* O Card do Projeto (Glassmorphism + Efeitos) */}
                <div className="group h-full flex flex-col bg-white/[0.02] border border-white/[0.05] rounded-3xl overflow-hidden transition-all duration-500 hover:bg-white/[0.04] hover:border-accent/40 hover:shadow-[0_10px_40px_-15px_rgba(56,189,248,0.2)]">
                  
                  {/* Container da Imagem */}
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-white/[0.05]">
                    {/* Overlay de cor inicial para garantir o tom escuro no dark mode */}
                    <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                    />
                  </div>

                  {/* Container do Texto */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted text-base leading-relaxed flex-grow">
                      {project.desc}
                    </p>
                    
                    {/* Tags das Tecnologias */}
                    <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/5">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 text-xs font-mono font-medium text-muted/80 bg-white/5 rounded-md border border-white/10">
                          {tag}
                        </span>
                      ))}
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