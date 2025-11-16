import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  Zap,
  Building2,
  Home as HomeIcon,
  Factory,
  CheckCircle2,
  Shield,
  Clock,
  Award,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Lightbulb,
  MessageCircle,
} from 'lucide-react';
import { Button } from './components/ui/button.jsx';
import { Input } from './components/ui/input.jsx';
import { Textarea } from './components/ui/textarea.jsx';
import { Card } from './components/ui/card.jsx';

const services = [
  {
    icon: HomeIcon,
    title: 'Residencial',
    description:
      'Instalações elétricas completas, manutenção preventiva e corretiva, automação residencial e projetos personalizados.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
  },
  {
    icon: Building2,
    title: 'Empresarial',
    description:
      'Soluções elétricas para escritórios, lojas e ambientes corporativos com foco em eficiência e continuidade.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
  },
  {
    icon: Factory,
    title: 'Predial',
    description:
      'Projetos e manutenção de infraestrutura elétrica para condomínios, edifícios e parques industriais.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
  },
];

const projects = [
  {
    category: 'residencial',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    title: 'Residência Moderna',
  },
  {
    category: 'empresarial',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    title: 'Escritório Corporativo',
  },
  {
    category: 'predial',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    title: 'Edifício Comercial',
  },
  {
    category: 'residencial',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    title: 'Casa de Alto Padrão',
  },
  {
    category: 'predial',
    image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80',
    title: 'Condomínio Residencial',
  },
  {
    category: 'empresarial',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80',
    title: 'Centro Empresarial',
  },
];

const differentials = [
  {
    icon: Shield,
    title: 'Segurança Garantida',
    description: 'Todas as normas técnicas e regulamentações seguidas rigorosamente.',
  },
  {
    icon: Clock,
    title: 'Atendimento Rápido',
    description: 'Equipe disponível 24/7 para emergências e suporte técnico.',
  },
  {
    icon: Award,
    title: 'Profissionais Certificados',
    description: 'Equipe qualificada com certificações atualizadas e treinamento constante.',
  },
  {
    icon: CheckCircle2,
    title: 'Garantia de Qualidade',
    description: 'Monitoramento contínuo e garantia estendida para cada serviço.',
  },
];

const testimonials = [
  {
    name: 'Camila Silveira',
    role: 'Síndica - Condomínio Horizonte',
    quote:
      'A Infratech entregou o retrofit elétrico sem interrupções para os moradores. Equipe extremamente profissional.',
    rating: 5,
    badge: 'Projeto Predial',
  },
  {
    name: 'Eduardo Martins',
    role: 'CEO - Integra Data Center',
    quote:
      'Reduzimos 18% do consumo energético em seis meses com o plano de manutenção e monitoramento 24/7.',
    rating: 5,
    badge: 'Operação Empresarial',
  },
  {
    name: 'Helena Albuquerque',
    role: 'Residência Alphaville',
    quote:
      'Automação completa, energia solar e suporte dedicado. A Infratech é nossa parceira para upgrades contínuos.',
    rating: 4.5,
    badge: 'Residencial Premium',
  },
];

const projectSteps = [
  {
    title: 'Diagnóstico técnico',
    description: 'Inspeção em campo, levantamentos termográficos e análise de risco para definir prioridades.',
    duration: 'D+3 dias',
  },
  {
    title: 'Projeto executivo',
    description: 'Modelagem BIM, memória de cálculo e compatibilização com normas NBR/NFPA.',
    duration: 'D+10 dias',
  },
  {
    title: 'Execução integrada',
    description: 'Instalação, retrofits e testes intermediários com equipes certificadas NR10 e NR35.',
    duration: 'D+25 dias',
  },
  {
    title: 'Comissionamento e monitoramento',
    description: 'Checklists de conformidade, dashboards de telemetria e plano de manutenção.',
    duration: 'D+30 dias',
  },
];

const faqs = [
  {
    question: 'Qual é o prazo médio para iniciar um projeto após a contratação?',
    answer:
      'Após a aprovação do orçamento, iniciamos em até 5 dias úteis com a etapa de diagnóstico técnico e mobilização da equipe.',
  },
  {
    question: 'A Infratech possui certificações e ART?',
    answer:
      'Sim. Nossos engenheiros possuem CREA-SP ativo e emitimos ART para cada projeto. Equipes certificadas em NR10, NR12 e NR35.',
  },
  {
    question: 'Existe atendimento emergencial 24/7?',
    answer:
      'Contamos com plantão 24 horas para ocorrências críticas. O número direto é +55 (11) 98810-2130.',
  },
  {
    question: 'Qual a garantia dos serviços?',
    answer:
      'Garantia estendida de 12 meses com possibilidade de extensão via contratos de manutenção preventiva.',
  },
];

const insights = [
  {
    title: 'Como reduzir custos com eficiência energética em edifícios comerciais',
    excerpt: 'Práticas rápidas para corte de consumo, retrofit de iluminação e monitoramento inteligente.',
    tag: 'Eficiência',
  },
  {
    title: 'NR10: o que muda para equipes terceirizadas em 2025',
    excerpt: 'Checklist de conformidade e responsabilidades para contratantes e executores.',
    tag: 'Normas',
  },
  {
    title: 'Cases de automação elétrica em condomínios residenciais',
    excerpt: 'Integração de painéis solares, baterias e automação para reduzir falhas.',
    tag: 'Inovação',
  },
];

const coverageRegions = [
  {
    region: 'Sudeste',
    bases: 'São Paulo, Campinas, Rio de Janeiro, Belo Horizonte',
  },
  {
    region: 'Sul',
    bases: 'Curitiba, Porto Alegre',
  },
  {
    region: 'Centro-Oeste',
    bases: 'Brasília, Goiânia',
  },
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.2], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  useEffect(() => {
    document.title = 'Infratech - Especialista em Elétrica';
  }, []);

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <section className="relative flex h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/10 via-transparent to-transparent" />
        <motion.div style={{ y, opacity }} className="relative z-10 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 flex items-center justify-center"
          >
            <img
              src="/assets/infratech-logo.png"
              alt="Logo Infratech"
              className="h-48 w-auto md:h-72"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl font-black tracking-tight text-white md:text-8xl"
          >
            Energia com precisão e performance.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-300 md:text-2xl"
          >
            Engenharia elétrica de ponta para residências, empresas e grandes empreendimentos. Projetamos,
            executamos e mantemos sua infraestrutura com excelência.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="px-8 py-4 text-lg"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Solicitar orçamento
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg"
              onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver serviços
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex h-12 w-7 items-center justify-center rounded-full border-2 border-gray-600">
            <div className="mt-2 h-3 w-1 rounded-full bg-[#FFD700]" />
          </div>
        </motion.div>
      </section>

      <section id="servicos" className="bg-white py-24 text-black">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FFD700]">Serviços</p>
            <h2 className="mt-3 text-4xl font-black md:text-6xl">Soluções elétricas completas</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Equipes especializadas para atender demandas residenciais, corporativas e prediais com segurança e
              eficiência.
            </p>
            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#FFD700]" />
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Card className="group relative h-full overflow-hidden border border-black/5">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <service.icon className="absolute bottom-6 left-6 h-12 w-12 text-[#FFD700]" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-black">{service.title}</h3>
                    <p className="mt-3 text-gray-600">{service.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0A0A0A] py-24" id="sobre">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FFD700]">Sobre nós</p>
              <h2 className="mt-3 text-3xl font-black md:text-5xl">Engenharia elétrica orientada a resultados</h2>
              <p className="mt-6 text-lg text-gray-300">
                Há mais de uma década entregando projetos elétricos de alta performance, integrando automação, dados e
                energia para garantir continuidade operacional aos nossos clientes.
              </p>
              <p className="mt-4 text-lg text-gray-300">
                Atendemos todo o território nacional com equipes multidisciplinares certificadas, acompanhando cada
                etapa do ciclo elétrico: diagnóstico, projeto, execução, comissionamento e monitoramento.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-black text-[#FFD700]">500+</div>
                  <p className="mt-2 text-gray-400">Projetos entregues</p>
                </div>
                <div>
                  <div className="text-4xl font-black text-[#FFD700]">15+</div>
                  <p className="mt-2 text-gray-400">Anos de experiência</p>
                </div>
                <div>
                  <div className="text-4xl font-black text-[#FFD700]">98%</div>
                  <p className="mt-2 text-gray-400">Clientes satisfeitos</p>
                </div>
              </div>
              <Button
                variant="outline"
                size="lg"
                className="mt-10 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Fale com nossos engenheiros
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="/assets/infratech-tecnico-painel.jpg"
                  alt="Técnico Infratech analisando painel elétrico"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-[#FFD700]/30 blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAF9] py-24" id="projetos">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FFD700]">Portfólio</p>
            <h2 className="mt-3 text-4xl font-black text-black md:text-6xl">Projetos recentes</h2>
            <div className="mx-auto mt-5 flex flex-wrap justify-center gap-3">
              {['all', 'residencial', 'empresarial', 'predial'].map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  className={
                    selectedCategory === category
                      ? 'bg-[#FFD700] text-black hover:bg-[#FFD700]/90'
                      : 'border-black text-black hover:bg-black hover:text-white'
                  }
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === 'all' ? 'Todos' : category.charAt(0).toUpperCase() + category.slice(1)}
                </Button>
              ))}
            </div>
          </motion.div>

          <motion.div layout className="grid gap-6 md:grid-cols-3">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative h-80 overflow-hidden rounded-2xl shadow-xl"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <p className="mt-2 capitalize text-[#FFD700]">{project.category}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="bg-black py-24" id="diferenciais">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FFD700]">Por que escolher</p>
            <h2 className="mt-3 text-4xl font-black md:text-6xl">Diferenciais competitivos</h2>
            <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-[#FFD700]" />
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {differentials.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl bg-white/5 p-8 backdrop-blur-sm transition hover:bg-white/10"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FFD700]/10">
                    <item.icon className="h-8 w-8 text-[#FFD700]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <p className="mt-2 text-white/70">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0A0A0A] py-24" id="depoimentos">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FFD700]">Depoimentos</p>
            <h2 className="mt-3 text-4xl font-black md:text-6xl">Confiança comprovada</h2>
            <p className="mx-auto mt-4 max-w-3xl text-gray-400">
              Clientes corporativos, prediais e residenciais que contam com a Infratech para manter energia confiável e
              segura.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative rounded-3xl border border-white/10 bg-white/5 p-8 text-left shadow-lg"
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-[#FFD700]/15 px-3 py-1 text-xs font-semibold text-[#FFD700]">
                  <CheckCircle2 className="h-4 w-4" /> {testimonial.badge}
                </span>
                <p className="mt-6 text-lg text-white/80">“{testimonial.quote}”</p>
                <div className="mt-8 flex items-center justify-between text-sm text-white/60">
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p>{testimonial.role}</p>
                  </div>
                  <div className="flex items-center gap-1 text-[#FFD700]">
                    {Array.from({ length: Math.floor(testimonial.rating) }, (_, i) => (
                      <Zap key={i} className="h-4 w-4" />
                    ))}
                    {testimonial.rating % 1 ? <Zap className="h-4 w-4 opacity-50" /> : null}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111827] py-24" id="metodologia">
        <div className="mx-auto max-w-5xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FFD700]">Metodologia</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Linha do tempo do projeto</h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/70">
              Transparência de ponta a ponta, com prazos médios e entregáveis claros em cada etapa.
            </p>
          </motion.div>

          <div className="relative border-l border-[#FFD700]/30 pl-10">
            {projectSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative mb-10 ml-4"
              >
                <div className="absolute -left-11 flex h-8 w-8 items-center justify-center rounded-full bg-[#FFD700] text-black font-bold">
                  {index + 1}
                </div>
                <div className="rounded-2xl bg-white/5 p-6 shadow-lg">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    <span className="rounded-full bg-[#FFD700]/15 px-3 py-1 text-xs font-semibold text-[#FFD700]">
                      {step.duration}
                    </span>
                  </div>
                  <p className="mt-3 text-white/70">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0A0A0A] py-24" id="faq">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 md:grid-cols-2 md:items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FFD700]">FAQ Técnico</p>
              <h2 className="mt-3 text-4xl font-black md:text-5xl">Esclareça suas dúvidas mais comuns</h2>
              <p className="mt-4 text-lg text-gray-300">
                Informações sobre prazos, certificações, garantias e atendimento emergencial. Caso precise de algo mais
                específico, fale direto com nossos especialistas.
              </p>
              <Button
                variant="outline"
                size="lg"
                className="mt-10 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Solicitar atendimento técnico
              </Button>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                  <p className="mt-3 text-white/70">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111111] py-24" id="insights">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FFD700]">Insights</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Blog e atualizações técnicas</h2>
            <p className="mx-auto mt-4 max-w-3xl text-white/70">
              Conteúdo criado pelos nossos engenheiros para orientar gestores de energia, síndicos e responsáveis por
              facilities.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {insights.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <span className="inline-flex rounded-full bg-[#FFD700]/15 px-3 py-1 text-xs font-semibold text-[#FFD700]">
                  {post.tag}
                </span>
                <h3 className="mt-5 text-2xl font-bold text-white">{post.title}</h3>
                <p className="mt-4 text-white/70">{post.excerpt}</p>
                <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#FFD700]">
                  Ler artigo
                  <ArrowRight className="h-4 w-4" />
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0A0A0A] py-24" id="cobertura">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FFD700]">Cobertura</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Presença nacional com bases regionais</h2>
            <p className="mx-auto mt-4 max-w-3xl text-white/70">
              Projetos executados em mais de 24 estados, com bases operacionais estratégicas para resposta rápida.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <h3 className="text-2xl font-bold text-white">Bases operacionais</h3>
              <ul className="mt-6 space-y-4 text-white/70">
                {coverageRegions.map((region) => (
                  <li key={region.region}>
                    <p className="text-white font-semibold">{region.region}</p>
                    <p>{region.bases}</p>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center"
            >
              <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80"
                  alt="Mapa estilizado com rede elétrica"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-black/60 p-4 text-sm text-white">
                  <p className="font-semibold text-[#FFD700]">Atendimento nacional</p>
                  <p>
                    Centros de operação em SP, RJ e MG com times móveis para demais regiões. SLA emergencial em até 4h
                    nas capitais.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      <section id="contato" className="bg-[#FFD700] py-24 text-black">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-black/70">Contato</p>
            <h2 className="mt-3 text-4xl font-black md:text-6xl">Solicite seu orçamento</h2>
            <p className="mt-4 text-lg text-black/70">
              Compartilhe seu projeto e retornaremos em até 1 hora útil com um plano personalizado.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl bg-black p-10 text-white shadow-2xl"
          >
            <iframe name="hidden_gform" className="hidden" title="Resposta Google Forms" />
            <form
              className="space-y-6"
              action="https://docs.google.com/forms/d/e/1FAIpQLSd9RGHDiAVFa10cNLcnMwiAlDxmyPjqhjDq0gWrEwsZ75OlXg/formResponse"
              method="POST"
              target="hidden_gform"
            >
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold" htmlFor="contato-nome">
                    Nome
                  </label>
                  <Input
                    id="contato-nome"
                    name="entry.2062373747"
                    placeholder="Seu nome completo"
                    className="h-12"
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold" htmlFor="contato-telefone">
                    Telefone
                  </label>
                  <Input
                    id="contato-telefone"
                    name="entry.550904680"
                    placeholder="(11) 98810-2130"
                    className="h-12"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold" htmlFor="contato-email">
                  Email
                </label>
                <Input
                  id="contato-email"
                  type="email"
                  name="entry.1708668107"
                  placeholder="contato@empresa.com"
                  className="h-12"
                  required
                />
              </div>

              <div>
                <span className="mb-2 block text-sm font-semibold">Tipo de serviço</span>
                <div className="grid gap-3 md:grid-cols-3">
                  {['Residencial', 'Empresarial', 'Predial'].map((option) => (
                    <label
                      key={option}
                      className="inline-flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium transition hover:border-[#FFD700] hover:bg-white/10"
                    >
                      <input
                        type="radio"
                        name="entry.1274059105"
                        value={option}
                        className="h-4 w-4 border-white/30 bg-black/20 text-[#FFD700] focus:ring-[#FFD700]"
                        required
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold" htmlFor="contato-mensagem">
                  Mensagem
                </label>
                <Textarea
                  id="contato-mensagem"
                  name="entry.942899453"
                  placeholder="Descreva seu projeto ou necessidade"
                  className="min-h-[150px]"
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-[#FFD700] text-black hover:bg-[#FFD700]/90">
                Enviar solicitação
                <ArrowRight className="h-5 w-5" />
              </Button>
            </form>
            <p className="mt-4 text-sm text-white/70">
              Ao enviar, suas informações são registradas com segurança no Google Forms e retornaremos em breve.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="flex items-center gap-3 text-black/80">
              <Phone className="h-5 w-5" />
              <span>+55 (11) 98810-2130</span>
            </div>
            <div className="flex items-center gap-3 text-black/80">
              <Mail className="h-5 w-5" />
              <span>contato@infratechnologia.com.br</span>
            </div>
            <div className="flex items-center gap-3 text-black/80">
              <MapPin className="h-5 w-5" />
              <span>R. Mauro de Araújo Ribeiro, 565 - Cidade D'Abril, São Paulo - SP, 05182-000</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0A0A0A] py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 text-center text-white/60 md:flex-row md:items-center md:justify-between md:text-left">
          <div className="flex items-center justify-center gap-3 md:justify-start">
            <Lightbulb className="h-6 w-6 text-[#FFD700]" />
            <span className="font-semibold tracking-wide">Infratech • Dados e Elétrica</span>
          </div>
          <div className="space-y-2 text-sm">
            <p>R. Mauro de Araújo Ribeiro, 565 - Cidade D'Abril · São Paulo - SP · 05182-000</p>
            <p>contato@infratechnologia.com.br · +55 (11) 98810-2130</p>
            <p>© {new Date().getFullYear()} Infratech. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <motion.a
        href="https://wa.me/5511988102130?text=Olá%20Infratech!%20Quero%20um%20orçamento."
        target="_blank"
        rel="noopener noreferrer"
        className="group fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-[#0A0A0A] shadow-[0_20px_45px_rgba(37,211,102,0.35)] transition hover:shadow-[0_26px_60px_rgba(37,211,102,0.45)]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0A0A0A]/10 transition group-hover:bg-white/20">
          <MessageCircle className="h-6 w-6" />
        </div>
        <div className="pr-2">
          <p className="text-xs font-semibold uppercase tracking-wide opacity-70">Atendimento rápido</p>
          <p className="text-sm font-bold">Fale no WhatsApp</p>
        </div>
      </motion.a>
    </div>
  );
}
