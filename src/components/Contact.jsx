// src/components/Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FiMail, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi';

const Contact = () => {
  // Estados para controlar os inputs e preparar para integração com API (ex: EmailJS / Resend)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Função pronta para receber a lógica de envio de email no futuro
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulação de chamada de API (Substitua isso pelo fetch real depois)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: '', email: '', message: '' }); // Limpa o formulário

    // Tira a mensagem de sucesso depois de 5 segundos
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-24 px-8 lg:px-24 relative overflow-hidden" id="contato">
      
      {/* Background Glows para dar profundidade */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full filter blur-[150px] opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full filter blur-[150px] opacity-40 pointer-events-none"></div>

      <div className="z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LADO ESQUERDO: Textos e Informações Diretas */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col space-y-8"
        >
          <div>
        
            <h2 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight leading-[1.1] mb-6">
              Vamos construir algo <span className="text-accent italic">incrível?</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed max-w-md">
              Seja para uma nova oportunidade, um projeto freelance ou apenas para trocar uma ideia sobre tecnologia e Web3. Minha caixa de entrada está sempre aberta.
            </p>
          </div>

          {/* Cards de Info Direta */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-muted group-hover:text-accent group-hover:bg-accent/10 transition-all duration-300">
                <FiMail size={20} />
              </div>
              <div>
                <p className="text-sm text-muted/70 font-medium">E-mail Profissional</p>
                <a href="mailto:seuemail@exemplo.com" className="text-foreground text-lg font-medium hover:text-accent transition-colors">
                  marcelo@reppy.app.br
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-muted group-hover:text-accent group-hover:bg-accent/10 transition-all duration-300">
                <FiMapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-muted/70 font-medium">Localização</p>
                <p className="text-foreground text-lg font-medium">Limeira, SP - Brasil</p>
              </div>
            </div>
          </div>

          {/* Botão Gigante do WhatsApp (UI Premium) */}
          <a 
            href="https://wa.me/19996833077" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 relative group overflow-hidden rounded-2xl p-[1px]"
          >
            {/* Borda animada usando gradiente de fundo */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#25D366]/40 via-[#25D366] to-[#25D366]/40 rounded-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></span>
            
            <div className="relative flex items-center gap-4 bg-[#0d0d0f] px-6 py-5 rounded-2xl transition-all duration-300 group-hover:bg-[#25D366]/10">
              <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center text-[#0d0d0f] shadow-[0_0_20px_rgba(37,211,102,0.4)] group-hover:scale-110 transition-transform duration-300">
                <FaWhatsapp size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-[#25D366] font-semibold text-sm uppercase tracking-wider mb-0.5">Resposta Rápida</span>
                <span className="text-foreground font-medium text-xl">Me chame no WhatsApp</span>
              </div>
            </div>
          </a>

        </motion.div>

        {/* LADO DIREITO: Formulário Glassmorphism Master Design */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="bg-white/[0.02] border border-white/[0.05] p-8 md:p-10 rounded-3xl backdrop-blur-xl shadow-2xl relative">
            
            {/* Formulário com labels flutuantes não convencionais, focado no placeholder clean */}
            <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
              
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-muted ml-1">Seu nome</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Ex: João Silva"
                  // Magia do UX: Transição de background, borda e ring neon no focus
                  className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-foreground placeholder:text-muted/40 
                             focus:outline-none focus:border-accent/60 focus:bg-white/[0.05] focus:ring-4 focus:ring-accent/10 transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-muted ml-1">E-mail corporativo</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="joao@empresa.com"
                  className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-foreground placeholder:text-muted/40 
                             focus:outline-none focus:border-accent/60 focus:bg-white/[0.05] focus:ring-4 focus:ring-accent/10 transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-muted ml-1">Como posso te ajudar?</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Conte um pouco sobre o projeto..."
                  rows="4"
                  className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-foreground placeholder:text-muted/40 resize-none
                             focus:outline-none focus:border-accent/60 focus:bg-white/[0.05] focus:ring-4 focus:ring-accent/10 transition-all duration-300 min-h-[140px]"
                ></textarea>
              </div>

              {/* Botão de Envio com Efeito Magnético / Brilho */}
              <motion.button 
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full relative group overflow-hidden font-semibold rounded-xl px-8 py-4 flex items-center justify-center gap-3 transition-all duration-300 
                  ${isSuccess 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/50' 
                    : 'bg-accent text-[#09090b] hover:shadow-[0_0_30px_rgba(56,189,248,0.4)]'
                  }`}
              >
                {/* Efeito de feixe de luz passando pelo botão */}
                {!isSuccess && (
                  <span className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] group-hover:animate-shine"></span>
                )}
                
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-[#09090b]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </span>
                ) : isSuccess ? (
                  <span className="flex items-center gap-2">
                    <FiCheckCircle size={20} />
                    Mensagem Enviada!
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Enviar Mensagem
                    <FiSend size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;