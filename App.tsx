import React from 'react';
import { 
  ClipboardList, 
  WifiOff, 
  ShieldCheck, 
  Heart, 
  Clock, 
  CalendarDays, 
  Zap, 
  AlertTriangle, 
  Box,
  Globe,
  Quote,
  ArrowUpRight,
  Lock,
  Ban
} from 'lucide-react';
import { BarChart, Bar, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';

// --- Data for Charts ---
const intensityData = [
  { name: 'S1', val: 4 },
  { name: 'S2', val: 5 },
  { name: 'S3', val: 3 },
  { name: 'S4', val: 6 },
  { name: 'S5', val: 5 },
  { name: 'S6', val: 4 },
  { name: 'S7', val: 5 },
];

const attritionData = [
  { name: 'Remaining', value: 91 },
  { name: 'Attrited', value: 9 },
];

const COLORS = ['#334155', '#94a3b8']; 

// --- Components ---

const Button = ({ children, variant = 'outline', className = '' }: { children?: React.ReactNode, variant?: 'outline' | 'ghost', className?: string }) => {
  const baseStyles = "px-5 py-2 text-sm font-medium transition-colors duration-200 flex items-center gap-2";
  const variants = {
    outline: "border border-white/20 hover:bg-white/5 text-slate-200",
    ghost: "text-slate-400 hover:text-white"
  };
  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const Card = ({ icon: Icon, title, description, children, className = '' }: { icon?: React.ElementType, title?: string, description?: React.ReactNode, children?: React.ReactNode, className?: string }) => (
  <div className={`bg-tutor-card border border-tutor-border p-6 md:p-8 flex flex-col justify-between h-full backdrop-blur-sm ${className}`}>
    <div>
      {Icon && <Icon className="w-10 h-10 text-slate-400 mb-6 stroke-[1.5]" />}
      {title && <h3 className="text-lg md:text-xl font-medium text-slate-100 mb-2">{title}</h3>}
      {description && <div className="text-sm md:text-base text-slate-300 leading-relaxed">{description}</div>}
    </div>
    {children}
  </div>
);

const Section = ({ children, className = '', id = '' }: { children?: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`relative px-6 py-16 md:py-24 max-w-7xl mx-auto w-full ${className}`}>
    {children}
  </section>
);

const StatCard = ({ icon: Icon, title, subtitle, value, viz }: { icon: React.ElementType, title: string, subtitle: string, value?: string, viz: React.ReactNode }) => (
  <div className="bg-tutor-card border border-tutor-border p-5 flex flex-col h-64">
    <div className="flex items-start gap-3 mb-4">
      <Icon className="w-5 h-5 text-slate-400 mt-1 stroke-[1.5]" />
      <div>
        <h4 className="text-slate-200 font-medium leading-tight">{title}</h4>
        <p className="text-xs text-slate-400 mt-1">{subtitle}</p>
      </div>
    </div>
    <div className="flex-1 flex flex-col justify-end">
        {value && <div className="text-4xl font-light text-slate-200 mb-2">{value}</div>}
        <div className="h-24 w-full relative">
          {viz}
        </div>
    </div>
  </div>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-tutor-bg text-tutor-text font-sans selection:bg-slate-700 selection:text-white">
      {/* Background Noise/Grain Overlay */}
      <div className="fixed inset-0 bg-grain pointer-events-none z-50 mix-blend-overlay opacity-20"></div>

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/5 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Box className="w-6 h-6 text-slate-300 stroke-[1.5]" />
            <span className="text-lg font-semibold tracking-wide text-slate-200 uppercase">Tutor</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/1033/2000/1200?grayscale" 
            alt="City Infrastructure" 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity grayscale" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-tutor-bg/90 via-tutor-bg/80 to-tutor-bg"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 leading-tight tracking-tight">
            A primeira solução para a falha da última milha educacional
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed mb-10">
            O Tutor garante que a rotina da lição de casa realmente aconteça — especialmente para crianças que não têm apoio educacional fora da escola.
          </p>
          {/* Button Removed */}
        </div>
      </div>

      {/* Section: A Falha Invisível */}
      <Section className="border-t border-white/5">
        <h2 className="text-2xl md:text-3xl font-medium mb-8 text-white">
          A falha invisível da educação
        </h2>
        <div className="space-y-4 max-w-3xl text-slate-300 text-lg md:text-xl leading-relaxed">
          <p>A educação básica investe em escolas, livros, professores e programas.</p>
          <p>Mas não possui um instrumento mínimo que verifique se a execução da rotina de estudo acontece no ambiente domiciliar.</p>
          <p>Essa lacuna entre investimento educacional e execução real é conhecida como <strong className="text-white font-medium">falha da última milha</strong>.</p>
          <p className="text-slate-400 text-base mt-4">Ela afeta principalmente crianças de famílias menos favorecidas, ampliando desigualdades e gerando abandono silencioso.</p>
        </div>
      </Section>

      {/* Section: Reconhecimento Internacional */}
      <Section className="border-t border-white/5 bg-white/[0.01]">
        <h2 className="text-2xl md:text-3xl font-medium mb-12 text-white">
          O problema é reconhecido internacionalmente
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card 
            icon={Globe}
            title="UNESCO"
            description={
              <>
                <p className="mb-4">As lacunas educacionais geram perdas econômicas globais massivas, resultantes da falha entre acesso à educação e execução real.</p>
                <blockquote className="border-l-2 border-slate-600 pl-4 italic text-slate-400 text-sm mb-4">
                  “Out-of-school children and educational gaps cost the global economy US$ 10 trillion a year.”
                </blockquote>
                <a href="https://www.unesco.org/en/articles/out-school-children-and-educational-gaps-cost-global-economy-10000-billion-year" target="_blank" rel="noopener noreferrer" className="flex items-center text-xs text-slate-400 hover:text-white transition-colors uppercase tracking-wider">
                  Ler artigo <ArrowUpRight className="w-3 h-3 ml-1" />
                </a>
              </>
            }
          />
          <Card 
            icon={AlertTriangle}
            title="Banco Mundial"
            description={
              <>
                <p className="mb-4">O Banco Mundial reconhece explicitamente que o aumento do gasto educacional não está se convertendo em aprendizagem efetiva.</p>
                <blockquote className="border-l-2 border-slate-600 pl-4 italic text-slate-400 text-sm mb-4">
                  “Despite increased education spending, Latin America and the Caribbean face a profound learning crisis.”
                </blockquote>
                <a href="https://www.worldbank.org/pt/news/press-release/2022/06/23/education-latin-america" target="_blank" rel="noopener noreferrer" className="flex items-center text-xs text-slate-400 hover:text-white transition-colors uppercase tracking-wider">
                  Ler comunicado <ArrowUpRight className="w-3 h-3 ml-1" />
                </a>
              </>
            }
          />
          <Card 
            icon={Quote}
            title="PNUD (UNDP)"
            description={
              <>
                <p className="mb-4">O PNUD identifica a última milha como o gargalo estrutural recorrente na execução de políticas públicas.</p>
                <blockquote className="border-l-2 border-slate-600 pl-4 italic text-slate-400 text-sm mb-4">
                  “The ‘last mile’ is often where otherwise well-designed public policies fail.”
                </blockquote>
                <a href="https://www.undp.org/sites/g/files/zskgke326/files/publications/getting-to-the-last-mile-oct-2016.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center text-xs text-slate-400 hover:text-white transition-colors uppercase tracking-wider">
                  Ver publicação <ArrowUpRight className="w-3 h-3 ml-1" />
                </a>
              </>
            }
          />
        </div>
      </Section>

      {/* Section: O Que é o Tutor */}
      <Section className="border-t border-white/5">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-medium mb-6 text-white">
            O que é o Tutor
          </h2>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-4">
            O Tutor é uma infraestrutura de execução educacional domiciliar.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Ele não ensina conteúdos novos, não avalia desempenho e não substitui a escola ou o professor.
            Sua função é simples: garantir que a criança tente estudar todos os dias, usando o material definido pela escola.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card 
            icon={ClipboardList} 
            title="Execução diária" 
            description="Garante que a lição de casa e o reforço aconteçam." 
          />
          <Card 
            icon={WifiOff} 
            title="Offline-first" 
            description="Funciona sem internet e em hardware legado." 
          />
          <Card 
            icon={ShieldCheck} 
            title="Regra impessoal" 
            description="Sem conflito familiar, sem negociação emocional." 
          />
          <Card 
            icon={Heart} 
            title="Falha graciosa" 
            description="Detecta fadiga e encerra com dignidade." 
          />
        </div>

        {/* Exclusion Principles Section */}
        <div className="border-t border-white/5 pt-10">
          <h3 className="text-white text-lg font-medium mb-6">Princípios de Integridade</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3 text-slate-400">
               <Ban className="w-5 h-5 text-red-400/80 mt-0.5 shrink-0" />
               <span className="text-sm">Sem gamificação, ranking ou disputa de atenção.</span>
            </div>
            <div className="flex items-start gap-3 text-slate-400">
               <Ban className="w-5 h-5 text-red-400/80 mt-0.5 shrink-0" />
               <span className="text-sm">Sem anúncios, propaganda ou interrupções comerciais.</span>
            </div>
             <div className="flex items-start gap-3 text-slate-400">
               <Ban className="w-5 h-5 text-red-400/80 mt-0.5 shrink-0" />
               <span className="text-sm">Não avalia, não julga e não classifica o aluno.</span>
            </div>
             <div className="flex items-start gap-3 text-slate-400">
               <Ban className="w-5 h-5 text-red-400/80 mt-0.5 shrink-0" />
               <span className="text-sm">Não é Edtech, não visa M&A. É infraestrutura.</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Section: Como funciona na prática */}
      <Section className="border-t border-white/5 bg-white/[0.01]">
        <h2 className="text-2xl md:text-3xl font-medium mb-12 text-white">
          Como funciona na prática
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-slate-300">
          <div className="space-y-4">
            <h3 className="text-white text-lg font-medium flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-800 text-xs text-white">1</span>
              Na escola
            </h3>
            <p>A professora explica o conteúdo em sala e passa a lição.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-white text-lg font-medium flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-800 text-xs text-white">2</span>
              Em casa
            </h3>
            <p>O Tutor organiza a rotina:</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-400">
              <li>15 minutos de reforço inicial</li>
              <li>7 minutos de pausa guiada para descanso</li>
              <li>15 minutos para a criança tentar fazer a lição</li>
              <li>5 minutos de pausa guiada de finalização</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-white text-lg font-medium flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-800 text-xs text-white">3</span>
              O apoio
            </h3>
            <p>Quando a criança trava, o Tutor explica apenas o processo, com exemplos mais simples, sem fornecer respostas prontas, sem avaliar e sem julgar.</p>
          </div>
        </div>
      </Section>

      {/* Section: Impacto / Reduzindo a Desigualdade */}
      <Section className="border-t border-white/5">
        <div className="mb-12 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-medium mb-6 text-white">
            Reduzindo a desigualdade educacional
          </h2>
          <div className="text-lg md:text-xl text-slate-300 leading-relaxed space-y-4">
            <p>Crianças com apoio em casa recebem explicações individuais. Crianças sem esse apoio ficam sem amparo educacional, causando defasagem de aprendizado e desigualdade social.</p>
            <p>O Tutor atua exatamente nesse ponto, oferecendo o mínimo necessário para que a criança mantenha uma rotina diária saudável de aprendizado orientado, mesmo em ambientes caóticos.</p>
            <p className="text-slate-400 text-base">O foco é melhorar a qualidade do aprendizado das crianças menos favorecidas e reduzir o salto social do aprendizado.</p>
          </div>
        </div>

        <h3 className="text-xl font-medium mb-8 text-white flex items-center gap-3">
          Impacto Sistêmico <span className="text-base font-normal text-slate-400">(dados agregados)</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Stat 1 */}
          <StatCard 
            icon={Clock}
            title="Tempo médio diário de estudo"
            subtitle=""
            value="47 minutos"
            viz={
              <div className="flex gap-1 items-end h-full opacity-50 pb-2">
                {[20, 40, 60, 50, 80, 55, 65].map((h, i) => (
                  <div key={i} className="bg-slate-500 w-full" style={{ height: `${h}%` }}></div>
                ))}
              </div>
            }
          />
          
          {/* Stat 2 */}
          <StatCard 
            icon={CalendarDays}
            title="Frequência"
            subtitle="de sessões concluídas"
            viz={
              <div className="w-full h-full flex flex-col justify-end pb-2 opacity-70">
                 <div className="grid grid-cols-7 gap-1">
                    {[...Array(35)].map((_, i) => {
                      const isActive = ![2, 9, 16, 23, 30, 6, 13, 27].includes(i); 
                      return (
                        <div 
                          key={i} 
                          className={`h-1.5 w-full rounded-sm ${isActive ? 'bg-slate-500' : 'bg-slate-800'}`}
                        ></div>
                      )
                    })}
                 </div>
              </div>
            }
          />

          {/* Stat 3 */}
          <StatCard 
            icon={Zap}
            title="Intensidade média"
            subtitle="de pedidos pedagógicos"
            value="5 / semana"
            viz={
               <ResponsiveContainer width="100%" height="100%">
                <BarChart data={intensityData}>
                  <Bar dataKey="val">
                    {intensityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={'#334155'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            }
          />

          {/* Stat 4 */}
          <StatCard 
            icon={AlertTriangle}
            title="Taxa de encerramento"
            subtitle="por fadiga cognitiva"
            value="9%"
            viz={
              <div className="flex items-center justify-between h-full w-full">
                <div className="flex-1 opacity-20">
                    <div className="grid grid-cols-4 gap-1">
                        {[...Array(8)].map((_,i) => <div key={i} className="h-4 bg-slate-500"></div>)}
                    </div>
                </div>
                <div className="w-24 h-24">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={attritionData}
                        innerRadius={25}
                        outerRadius={35}
                        paddingAngle={5}
                        dataKey="value"
                        stroke="none"
                      >
                        {attritionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            }
          />
        </div>
        
        <div className="mt-12 p-8 bg-slate-900/40 border border-tutor-border rounded-sm relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-slate-500"></div>
          <div className="flex items-start gap-4">
             <div className="p-2 bg-slate-800/50 rounded-full mt-1">
               <Lock className="w-5 h-5 text-slate-300 stroke-[1.5]" />
             </div>
             <div>
                <h4 className="text-white text-lg font-medium mb-3">Informação útil, sem dados pessoais</h4>
                <p className="text-base text-slate-300 leading-relaxed mb-4">
                  O Tutor gera apenas informações agregadas e impessoais sobre a execução da rotina de estudo.
                  <strong className="text-white font-medium"> Não solicita e-mail, não pede cadastro, não requer login social.</strong>
                </p>
                <p className="text-sm text-slate-400">
                  Todas as métricas são <span className="text-slate-300">públicas e auditáveis</span>, permitindo uma gestão transparente e aberta ao acompanhamento da sociedade e órgãos de controle, seguindo rigorosas normas de conformidade.
                </p>
             </div>
          </div>
        </div>
      </Section>

      {/* Footer / CTA Section */}
      <footer className="relative py-24 border-t border-white/5 overflow-hidden">
        {/* Abstract Background Texture */}
        <div className="absolute inset-0 bg-[url('https://picsum.photos/id/192/2000/1200?grayscale')] opacity-5 mix-blend-overlay bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-tutor-bg via-transparent to-tutor-bg"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-slate-200 mb-6 leading-relaxed">
            O Tutor não cria atalhos. <br />
            Ele garante que o caminho seja percorrido todos os dias.
          </h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
            Projeto Tutor é uma infraestrutura independente. O criador atua como guardião do propósito, não como operador político ou comercial.
          </p>

          <div className="flex flex-col items-center gap-6">
            <a href="mailto:contato@tutor.org" className="text-slate-400 hover:text-slate-200 transition-colors">
              contato@tutor.org
            </a>
          </div>
        </div>

        <div className="relative z-10 mt-24 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <div>© 2024 Tutor</div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>Todos os direitos reservados</span>
            <a href="#" className="hover:text-slate-400">Privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  );
}