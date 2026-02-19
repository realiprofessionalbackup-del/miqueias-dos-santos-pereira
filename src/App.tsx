/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  CheckCircle2, 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  Leaf, 
  MessageCircle, 
  HelpCircle, 
  ChevronDown,
  ArrowRight,
  DollarSign,
  Package,
  Video
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-zinc-800">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-orange-500 transition-colors"
      >
        <span className="text-lg font-semibold">{question}</span>
        <ChevronDown className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-zinc-400 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const whatsappNumber = "5573988143062";
  const whatsappMessage = encodeURIComponent("Quero comerça hoje com meu kit para revenda");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-500 selection:text-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden pt-20 pb-32 px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#ff5f0033,transparent_70%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-sm font-bold uppercase tracking-widest mb-8"
            >
              <Zap size={16} /> Oportunidade Única
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-[0.9]"
            >
              SEJA DONO DO SEU <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400">
                PRÓPRIO NEGÓCIO
              </span>
            </motion.h1 >
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto lg:mx-0"
            >
              Comece sua jornada empreendedora com um investimento mínimo e retorno garantido.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-r from-[#ff5f00] to-[#ffcc00] p-8 rounded-3xl shadow-2xl shadow-orange-500/20"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-left">
                  <p className="text-black/70 font-bold uppercase tracking-wider text-sm">Kit Inicial</p>
                  <h2 className="text-black text-4xl font-black">3 UNIDADES</h2>
                </div>
                <div className="h-px w-full md:h-12 md:w-px bg-black/10" />
                <div className="text-center">
                  <p className="text-black/70 font-bold uppercase tracking-wider text-sm">Investimento</p>
                  <h2 className="text-black text-5xl font-black">R$ 297</h2>
                </div>
                <div className="h-px w-full md:h-12 md:w-px bg-black/10" />
                <div className="text-right">
                  <p className="text-black/70 font-bold uppercase tracking-wider text-sm">Custo Unitário</p>
                  <h2 className="text-black text-4xl font-black">R$ 99</h2>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-orange-500/20 blur-3xl rounded-full group-hover:bg-orange-500/30 transition-colors duration-500" />
            <div className="relative rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
              <img 
                src="https://i.ibb.co/zWnk6QKd/Whats-App-Image-2026-02-19-at-12-08-49.jpg" 
                alt="Produto Profissional em Destaque" 
                className="w-full h-auto object-contain block"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-zinc-900 border border-zinc-800 p-4 rounded-2xl shadow-xl hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-bold uppercase">Qualidade</p>
                  <p className="font-bold">100% Profissional</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* How it Works */}
      <section className="py-24 bg-zinc-950 border-y border-zinc-900 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Como funciona?</h2>
            <p className="text-zinc-500">Sem enrolação, direto ao ponto.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Package className="text-orange-500" />, title: "Kit Inicial", desc: "Você entra com R$297 e recebe 3 unidades no atacado." },
              { icon: <ShieldCheck className="text-orange-500" />, title: "Flexibilidade", desc: "Pode comprar no CPF ou CNPJ. Ideal para revenda mesmo sem salão." },
              { icon: <TrendingUp className="text-orange-500" />, title: "Escalabilidade", desc: "Envio para todo Brasil. Comece pequeno, cresça rápido." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-orange-500/50 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Profit Calculator */}
      <section className="py-24 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">
                LUCRO CLARO <br />E DIRETO.
              </h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                    <DollarSign size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 font-bold uppercase">Unidade no Atacado</p>
                    <p className="text-2xl font-bold">R$ 99</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 font-bold uppercase">Revenda Média</p>
                    <p className="text-2xl font-bold">R$ 280 a R$ 350</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-orange-500/20 blur-3xl rounded-full" />
              <div className="relative bg-zinc-900 border border-zinc-800 p-8 rounded-3xl">
                <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                  <Zap className="text-orange-500" size={20} /> Lucro Estimado (Kit 3 un)
                </h3>
                
                <div className="space-y-8">
                  <div className="p-6 rounded-2xl bg-black/40 border border-zinc-800">
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-zinc-400">Revenda a R$ 280</span>
                      <span className="text-2xl font-black text-green-500">+ R$ 543</span>
                    </div>
                    <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '70%' }}
                        className="h-full bg-green-500"
                      />
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-black/40 border border-zinc-800">
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-zinc-400">Revenda a R$ 350</span>
                      <span className="text-2xl font-black text-green-500">+ R$ 753</span>
                    </div>
                    <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        className="h-full bg-green-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-zinc-800 text-center">
                  <p className="text-lg font-bold">
                    Você entra com <span className="text-yellow-400">R$ 297</span> e volta com até <span className="text-green-500 text-2xl">R$ 1.050</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-zinc-950 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Resultado Real — Antes e Depois</h2>
            <p className="text-zinc-500">Veja o efeito no cabelo com apenas uma aplicação.</p>
          </div>
          <div className="max-w-[340px] mx-auto aspect-[9/16] bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden shadow-2xl shadow-orange-500/20">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/5LMYbOCAC9c"
              title="Resultado Real"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Por que esse produto vende fácil?</h2>
            <p className="text-zinc-500">Fórmula profissional focada em resultado e segurança.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Leaf size={24} />, label: "Vegano" },
              { icon: <CheckCircle2 size={24} />, label: "Alisa 100%" },
              { icon: <ShieldCheck size={24} />, label: "Sem Ardência" },
              { icon: <Zap size={24} />, label: "Ácidos Orgânicos" },
              { icon: <CheckCircle2 size={24} />, label: "Sem Formol" },
              { icon: <CheckCircle2 size={24} />, label: "Sem Fumaça" },
              { icon: <CheckCircle2 size={24} />, label: "Sem Petrolato" },
              { icon: <CheckCircle2 size={24} />, label: "Sem Sulfato" },
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex flex-col items-center text-center gap-4 hover:bg-zinc-900 transition-colors">
                <div className="text-orange-500">{feature.icon}</div>
                <span className="font-semibold text-sm">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-zinc-950 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Quem já começou</h2>
            <p className="text-zinc-500">Prova social de quem está lucrando.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Comecei com 3 unidades e vendi no mesmo fim de semana.",
              "Peguei o kit inicial e já fiz o primeiro giro rápido.",
              "Produto de saída fácil porque o resultado convence."
            ].map((text, i) => (
              <div key={i} className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 relative">
                <div className="text-orange-500 mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => <Zap key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="italic text-zinc-300 mb-6">"{text}"</p>
                <p className="text-sm font-bold text-zinc-500">— Cliente revendedor(a)</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
              <HelpCircle className="text-orange-500" /> Principais Dúvidas
            </h2>
          </div>
          
          <div className="space-y-2">
            <FAQItem 
              question="Precisa ter CNPJ?" 
              answer="Não. Você pode realizar sua compra tranquilamente utilizando apenas o seu CPF." 
            />
            <FAQItem 
              question="Começa com quantas unidades?" 
              answer="O kit inicial é composto por 3 unidades, ideal para quem quer testar o mercado com baixo investimento." 
            />
            <FAQItem 
              question="Quanto custa cada unidade no atacado?" 
              answer="No kit inicial, cada unidade sai por apenas R$ 99." 
            />
            <FAQItem 
              question="Quanto dá pra revender?" 
              answer="A média de mercado para este produto profissional varia entre R$ 280 e R$ 350, dependendo da sua região." 
            />
            <FAQItem 
              question="É orgânica?" 
              answer="Sim! Nossa fórmula é baseada em ácidos orgânicos, tendo o ácido glicoxílico como principal ativo alisante." 
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 pb-32">
        <div className="max-w-4xl mx-auto">
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="block w-full bg-gradient-to-r from-[#00c853] to-[#64dd17] p-8 rounded-3xl text-center shadow-2xl shadow-green-500/20 group"
          >
            <div className="flex flex-col items-center gap-4">
              <MessageCircle size={48} className="mb-2 group-hover:animate-bounce" />
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
                Falar com Atendente
              </h2>
              <p className="text-lg font-bold text-black/70 flex items-center gap-2">
                Clique aqui para pedir seu kit inicial <ArrowRight size={20} />
              </p>
            </div>
          </motion.a>
          <p className="text-center mt-8 text-zinc-500 text-sm">
            Ao clicar, você será redirecionado para o WhatsApp com uma mensagem automática.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-900 px-4 text-center">
        <p className="text-zinc-600 text-sm">
          © {new Date().getFullYear()} Oportunidade de Negócio Profissional. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
