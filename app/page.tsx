"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import {
  Target,
  Rocket,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Menu,
  X,
  Zap,
  Lock,
  Play,
  ExternalLink,
  Star,
} from "lucide-react"
import type { RoleFeature, ComparisonItem, ProcessStep, ChatMessage } from "@/types"
import VantaBackground from "@/components/vanta-background"
import Link from "next/link"

const FadeInSection: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({
  children,
  delay = 0,
  className = "",
}) => {
  const [isVisible, setVisible] = useState(false)
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setVisible(entry.isIntersecting))
      },
      { threshold: 0.1 },
    )

    const currentElement = domRef.current
    if (currentElement) observer.observe(currentElement)

    return () => {
      if (currentElement) observer.unobserve(currentElement)
    }
  }, [])

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

const SectionHeader: React.FC<{ title: string; subtitle?: string; centered?: boolean }> = ({
  title,
  subtitle,
  centered = false,
}) => (
  <div className={`mb-16 md:mb-24 ${centered ? "text-center flex flex-col items-center" : ""}`}>
    <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">{title}</h2>
    {subtitle && <div className="w-24 h-1 bg-white mb-6"></div>}
    {subtitle && <p className="text-xl text-kult-muted max-w-2xl font-light">{subtitle}</p>}
  </div>
)

const PROJECTS_SIMPLE = [
  {
    name: "SpeakyGo",
    desc: "Практикуем язык, общаясь с ИИ собеседником",
    status: "active",
    hasMoney: true,
  },
  {
    name: "ChallengeLife",
    desc: "Сервис челленджей (испытания, марафоны)",
    status: "soon",
    hasMoney: false,
  },
  {
    name: "SkyPay/Capital",
    desc: "Карта, где крипта работает законно как обычные деньги",
    status: "soon",
    hasMoney: true,
  },
  {
    name: "Find The Job",
    desc: "Поиск работы и сотрудников с помощью ИИ",
    status: "active",
    hasMoney: true,
  },
  {
    name: "Мяудза",
    desc: "Командный чат и задачи",
    status: "active",
    hasMoney: false,
  },
]

const PROJECTS_ENTERPRISE = [
  {
    name: "Metadoor-dev",
    desc: "Финмодели и прогнозы для больших компаний",
    status: "active",
    hasMoney: true,
  },
  {
    name: "Claritech",
    desc: "Контроль и анализ расходов",
    status: "soon",
    hasMoney: true,
  },
  {
    name: "SciArticle",
    desc: "Автоматические бизнес-отчёты и аналитика",
    status: "soon",
    hasMoney: true,
  },
  {
    name: "CRMChat",
    desc: "Автоматические аутрич рассылки в telegram с модулем AI и CRM",
    status: "soon",
    hasMoney: true,
  },
  {
    name: "Spell-book",
    desc: "Платформа ИИ-ассистентов нового поколения для малого бизнеса",
    status: "soon",
    hasMoney: true,
  },
]

const TRUST_CASES = [
  {
    title: "+206 млн в первый год",
    subtitle: "Почти без бюджета и без зарплат",
    desc: "С 30к бюджета на старте за год в новом канале трафика с командой маркетологов в партнерстве",
  },
  {
    title: "+200 млн за год",
    subtitle: "Магазин парфюма в Telegram",
    desc: "С бюджета 240к на старте за год в новом канале трафика с командой маркетологов в партнерстве",
  },
  {
    title: "700 млн совокупно",
    subtitle: "",
    desc: "Суммарный результат проектов комьюнити",
  },
]

const TRACK_MAPS = {
  founder: {
    title: "Фаундер",
    icon: Rocket,
    steps: [
      { stage: "Старт", desc: "Идея + MVP без команды", profit: "0" },
      { stage: "Челлендж", desc: "7-дневная валидация в культуре маркетинга", profit: "0" },
      { stage: "Синергия", desc: "Получаешь команду маркетологов и Лидер мнений", profit: "первые продажи" },
      { stage: "Масштаб", desc: "Profit Share партнерства", profit: "от 1 млн/мес" },
      { stage: "Лидер", desc: "Портфель партнерств в экосистеме", profit: "от 10 млн/мес" },
    ],
    benefits: ["Без венчура и инвесторов", "Команда мотивирована результатом", "Масштаб за недели–месяцы, не годы"],
    traditionalSteps: [
      { stage: "Старт", desc: "Идея + MVP без команды", profit: "0", time: "3 мес" },
      { stage: "Поиск инвесторов", desc: "Питчи, встречи, переговоры", profit: "-500к", time: "6-12 мес" },
      { stage: "Венчур", desc: "Получил деньги, отдал 30-50% компании", profit: "0", time: "12 мес" },
      { stage: "Найм", desc: "Ищешь команду, платишь зарплаты", profit: "-2 млн/мес", time: "18 мес" },
      { stage: "Банкротство", desc: "Деньги кончились, pivot или смерть", profit: "-10 млн", time: "24 мес" },
    ],
  },
  marketer: {
    title: "Маркетолог",
    icon: BarChart3,
    steps: [
      { stage: "Челлендж", desc: "Подключение к проекту за 7 дней. Быстрый вход.", profit: "челлендж" },
      { stage: "Тестовый пилот", desc: "100 часов работы на пилотном проекте", profit: "100-500к" },
      { stage: "Вход в долю бизнеса", desc: "Долгосрочное партнерство с долей", profit: "300к-1.2 млн (x3)" },
      { stage: "Скейл", desc: "Масштабирование кратно результатам", profit: "900к-3.6 млн (x3)" },
      {
        stage: "Скейл-агентство",
        desc: "Строит систему агентства, до 20 проектов",
        profit: "1.8-7.2 млн/год",
      },
    ],
    benefits: [
      "Работа на 100% мощности с равноправным партнерством",
      "Доля в прибыли и компании вместо оклада",
      "Выбор проектов, в которые веришь",
    ],
    traditionalSteps: [
      { stage: "1 год", desc: "Заклад выгорания (рост ~5%/мес)", profit: "100к", time: "12 мес" },
      { stage: "2 года", desc: "Тот же оклад или +20%", profit: "120к", time: "24 мес" },
      { stage: "3 года", desc: "Стагнация, попытка сменить работу", profit: "150к", time: "36 мес" },
      {
        stage: "Финал",
        desc: "Выгорание, увольнение, поиск себя",
        profit: "0",
        time: "48 мес",
      },
      { stage: "Итог", desc: "Потерянные годы на рутину", profit: "0", time: "60 мес" },
    ],
  },
  influencer: {
    title: "Лидер Мнений",
    icon: Target,
    steps: [
      { stage: "Новичок", desc: "Запуск контент-завода", profit: "160к охвата/мес" },
      { stage: "Партнер", desc: "400К пилот: эфир + посты", profit: "охваты 15к/пост" },
      { stage: "Амбасадор", desc: "Продюсирование маркетологом", profit: "1.2 млн/мес (х3)" },
      { stage: "Лидер мнений", desc: "Качает 5 продуктов в месяц", profit: "3 млн/мес" },
      { stage: "Совладелец", desc: "Игра в долгую на млн $", profit: "капитализация" },
    ],
    benefits: ["Доля от прибыли, не разовые копейки", "Продукты под твою аудиторию", "Приоритет после челленджа"],
    traditionalSteps: [
      { stage: "Старт", desc: "Разовые интеграции за 30-100к", profit: "50к", time: "0 мес" },
      { stage: "6 мес", desc: "Ищешь рекламодателей, торгуешься", profit: "100к", time: "6 мес" },
      {
        stage: "1 год",
        desc: "Большинство рекламодателей не возвращаются повторно",
        profit: "80к",
        time: "12 мес",
      },
      { stage: "2 года", desc: "Падение охватов, меньше заказов", profit: "50к", time: "24 мес" },
      { stage: "Забвение", desc: "Аудитория ушла, нет дохода", profit: "0", time: "36 мес" },
    ],
  },
}

const Marquee: React.FC<{ text: string; reverse?: boolean }> = ({ text, reverse = false }) => (
  <div className="w-full overflow-hidden bg-kult-text text-kult-black py-3 select-none relative z-20">
    <div
      className={`flex whitespace-nowrap ${reverse ? "animate-scroll-reverse" : "animate-scroll"}`}
      style={{ animationDirection: reverse ? "reverse" : "normal" }}
    >
      {[...Array(10)].map((_, i) => (
        <span key={i} className="mx-8 font-mono text-sm uppercase tracking-widest font-bold flex items-center gap-4">
          {text} <Zap size={14} className="fill-current" />
        </span>
      ))}
    </div>
  </div>
)

const ChatSimulation: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([])

  const script: ChatMessage[] = [
    { sender: "Founder", text: "Продукт готов. Метрики >30%. Нужен масштаб.", time: "10:42" },
    { sender: "System", text: "Поиск партнера...", time: "10:42" },
    { sender: "System", text: "Матч: Продюсер (Tier-1)", time: "10:43" },
    { sender: "Producer", text: "Вижу цифры. Делаем 60/40. Запуск в понедельник.", time: "10:45" },
    { sender: "System", text: "Сделка подтверждена. Profit Share активен.", time: "10:45" },
  ]

  useEffect(() => {
    const timeoutIds: number[] = []
    const runScript = () => {
      setMessages([])
      script.forEach((msg, index) => {
        const id = window.setTimeout(
          () => {
            setMessages((prev) => [...prev, msg])
          },
          index * 1500 + 500,
        )
        timeoutIds.push(id)
      })
    }

    runScript()
    const intervalId = window.setInterval(runScript, 10000)

    return () => {
      timeoutIds.forEach(clearTimeout)
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div className="glass-panel rounded-2xl p-6 w-full max-w-md mx-auto border-l-4 border-l-white/20">
      <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-xs font-mono text-kult-muted uppercase tracking-wider">Live Deal Flow</span>
        </div>
        <Lock size={14} className="text-kult-muted" />
      </div>
      <div className="space-y-4 h-[320px] overflow-hidden relative">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex flex-col animate-float ${
              msg.sender === "System" ? "items-center" : msg.sender === "Founder" ? "items-end" : "items-start"
            }`}
          >
            <div
              className={`max-w-[85%] rounded-lg p-3 text-sm ${
                msg.sender === "System"
                  ? "bg-white/5 text-kult-muted text-xs border border-white/5"
                  : msg.sender === "Founder"
                    ? "bg-white text-black"
                    : "bg-kult-gray border border-white/20 text-white"
              }`}
            >
              {msg.sender !== "System" && (
                <div className="text-[10px] opacity-50 mb-1 font-bold uppercase">{msg.sender}</div>
              )}
              {msg.text}
            </div>
          </div>
        ))}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-kult-black/20 to-transparent pointer-events-none"></div>
      </div>
    </div>
  )
}

const Modal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-full max-w-lg bg-kult-dark border border-white/10 p-8 md:p-12 overflow-hidden">
        <button onClick={onClose} className="absolute top-4 right-4 text-kult-muted hover:text-white">
          <X size={24} />
        </button>

        <div className="text-center animate-float">
          <div className="w-20 h-20 bg-gradient-to-br from-white to-gray-300 rounded-full flex items-center justify-center mx-auto mb-6">
            <Zap size={36} className="text-black" />
          </div>
          <h3 className="text-2xl font-serif text-white mb-4">Вступить в КУЛЬТ</h3>
          <p className="text-kult-muted text-sm mb-8 max-w-sm mx-auto">
            Переходи в Telegram-бот для прохождения челленджа и подачи заявки на вступление в ассамблею.
          </p>

          <a
            href="https://t.me/CultScale_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors flex items-center justify-center gap-3"
          >
            Открыть бота <ExternalLink size={16} />
          </a>

          <div className="mt-6 flex flex-col gap-2 text-xs text-kult-muted">
            <Link href="/privacy" className="hover:text-white transition-colors underline">
              Политика конфиденциальности
            </Link>
            <Link href="/consent" className="hover:text-white transition-colors underline">
              Согласие на обработку ПД
            </Link>
            <Link href="/offer" className="hover:text-white transition-colors underline">
              Оферта
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const ROLES: RoleFeature[] = [
  {
    icon: Target,
    title: "Лидер мнений",
    points: [
      "Личный продюсер растит твою аудиторию и фанатов",
      "База релевантных проектов для долгосрочных партнерств",
      "Доля от прибыли вместо копеек за разовую интеграцию",
      "Приоритет в партнерских связках после прохождения челленджа",
    ],
  },
  {
    icon: Rocket,
    title: "Фаундер",
    points: [
      "Выход на маркетологов для работы за %",
      "Выход на лидеров мнений для работы за %",
      "Экосистема партнёров для роста в долгую",
    ],
  },
  {
    icon: BarChart3,
    title: "Маркетолог",
    points: [
      "Проекты под твои скилы без самостоятельного поиска",
      "Работа на 100% мощности, а не на 40% за фикс",
      "Доля от прибыли = реальный заработок на результате",
      "Выбираешь проекты, в которые веришь",
    ],
  },
]

const COMPARISONS: ComparisonItem[] = [
  {
    company: "Самолет",
    achievement: "обогнал ПИК",
    method: "без денег на землю",
  },
  {
    company: "Uber",
    achievement: "стал гигантом",
    method: "без покупки машин",
  },
  {
    company: "Airbnb",
    achievement: "доминирует",
    method: "не владея недвижимостью",
  },
]

const ProjectsSection: React.FC<{ openModal: () => void }> = ({ openModal }) => (
  <section id="projects" className="py-32 px-6 bg-kult-dark relative">
    <div className="max-w-7xl mx-auto">
      <SectionHeader
        title="ПРОЕКТЫ"
        subtitle="Реальные продукты, которые уже работают или запускаются в экосистеме культуры маркетинга."
        centered={true}
      />

      <div className="flex flex-wrap justify-center gap-6 mb-16 text-xs font-mono tracking-widest text-kult-muted">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          LIVE — проект уже запущен
        </span>
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 border border-white/20 rounded-full"></span>
          SOON — запуск в ближайшее время
        </span>
        <span className="flex items-center gap-2">
          <span className="text-green-400 border border-green-400/30 px-1 py-0.5 rounded text-[10px]">REVENUE</span>
          — проект уже приносит выручку
        </span>
      </div>

      <div className="mb-20">
        <h3 className="text-sm font-mono uppercase tracking-[0.3em] text-kult-muted mb-10 flex items-center gap-3">
          <span className="w-8 h-px bg-kult-muted"></span>
          Для людей и небольших команд
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS_SIMPLE.map((project, idx) => (
            <FadeInSection key={idx} delay={idx * 50}>
              <div className="relative p-8 border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-sm group hover:border-white/20 transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl font-serif font-bold text-white">{project.name}</h4>
                  <div className="flex items-center gap-3">
                    {project.hasMoney && (
                      <span className="text-xs font-mono text-green-400 border border-green-400/30 px-2 py-0.5 rounded-full">
                        REVENUE
                      </span>
                    )}
                    {project.status === "active" ? (
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-xs font-mono text-green-400">LIVE</span>
                      </span>
                    ) : (
                      <span className="text-xs font-mono text-kult-muted border border-white/10 px-2 py-0.5 rounded-full">
                        SOON
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-kult-muted leading-relaxed">{project.desc}</p>
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-white/5 to-transparent"></div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-mono uppercase tracking-[0.3em] text-kult-muted mb-10 flex items-center gap-3">
          <span className="w-8 h-px bg-kult-muted"></span>
          Для бизнеса и крупных компаний
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS_ENTERPRISE.map((project, idx) => (
            <FadeInSection key={idx} delay={idx * 50}>
              <div className="relative p-8 border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-sm group hover:border-white/20 transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl font-serif font-bold text-white">{project.name}</h4>
                  <div className="flex items-center gap-3">
                    {project.hasMoney && (
                      <span className="text-xs font-mono text-green-400 border border-green-400/30 px-2 py-0.5 rounded-full">
                        REVENUE
                      </span>
                    )}
                    {project.status === "active" ? (
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-xs font-mono text-green-400">LIVE</span>
                      </span>
                    ) : (
                      <span className="text-xs font-mono text-kult-muted border border-white/10 px-2 py-0.5 rounded-full">
                        SOON
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-kult-muted leading-relaxed">{project.desc}</p>
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-white/5 to-transparent"></div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>

      <div className="mt-20 text-center">
        <a
          href="https://t.me/CultScale_bot"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-5 border border-white/20 text-white font-bold text-xs tracking-[0.2em] hover:bg-white hover:text-black transition-all uppercase"
        >
          Предложить свой проект
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  </section>
)

const TrustSection: React.FC = () => (
  <section
    id="trust"
    className="py-32 px-6 bg-gradient-to-b from-kult-dark via-kult-gray/30 to-kult-dark relative overflow-hidden"
  >
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-white blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-white blur-3xl"></div>
    </div>

    <div className="max-w-6xl mx-auto relative z-10">
      <SectionHeader title="РЕЗУЛЬТАТЫ" subtitle="Цифры говорят громче слов. Вот что мы уже сделали." centered={true} />

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {TRUST_CASES.map((item, idx) => (
          <FadeInSection key={idx} delay={idx * 100}>
            <div className="relative p-10 border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent text-center group hover:border-white/20 transition-all duration-500">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              <div className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">{item.title}</div>
              <p className="text-kult-muted text-sm leading-relaxed mb-6">{item.desc}</p>
              <div className="inline-block px-4 py-2 border border-white/10 text-xs font-mono text-kult-muted uppercase tracking-widest">
                {item.subtitle}
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>

      <FadeInSection>
        <div className="max-w-4xl mx-auto text-center p-12 md:p-16 border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent relative">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

          <p className="text-2xl md:text-4xl font-serif text-white mb-6 leading-relaxed">Единственное место, где</p>
          <p className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
            фаундер, маркетолог и лидер мнений работают как одна команда
          </p>
          <p className="text-lg text-kult-muted mb-10 max-w-2xl mx-auto">
            Без венчура. Без рекламных бюджетов. На долях от прибыли.
          </p>

          <a
            href="https://youtu.be/tynzX-wg8QI?si=jAtil9a5mukGQtuR"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold text-xs tracking-[0.2em] hover:bg-gray-200 transition-all uppercase"
          >
            <Play size={16} /> Смотреть историю
          </a>
        </div>
      </FadeInSection>
    </div>
  </section>
)

const TrackMapsSection: React.FC<{ openModal: () => void }> = ({ openModal }) => {
  const [activeTrack, setActiveTrack] = useState<"founder" | "marketer" | "influencer">("founder")
  const [showTraditional, setShowTraditional] = useState(false)
  const track = TRACK_MAPS[activeTrack]
  const TrackIcon = track.icon

  return (
    <section id="tracks" className="py-32 px-6 bg-kult-dark relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="ТВОЙ ПУТЬ РОСТА"
          subtitle="Выбери свою роль и посмотри разницу между традиционным путём и культурой маркетинга."
          centered={true}
        />

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {(Object.keys(TRACK_MAPS) as Array<keyof typeof TRACK_MAPS>).map((key) => {
            const t = TRACK_MAPS[key]
            const Icon = t.icon
            return (
              <button
                key={key}
                onClick={() => setActiveTrack(key)}
                className={`flex items-center gap-2 px-6 py-3 border transition-all ${
                  activeTrack === key
                    ? "bg-white text-black border-white"
                    : "border-white/20 text-white hover:border-white/50"
                }`}
              >
                <Icon size={18} />
                <span className="font-bold uppercase text-sm tracking-widest">{t.title}</span>
              </button>
            )
          })}
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setShowTraditional(false)}
            className={`px-8 py-3 border transition-all ${
              !showTraditional
                ? "bg-green-500 text-white border-green-500"
                : "border-white/20 text-white hover:border-white/50"
            }`}
          >
            <span className="font-bold uppercase text-sm tracking-widest">С культурой маркетинга</span>
          </button>
          <button
            onClick={() => setShowTraditional(true)}
            className={`px-8 py-3 border transition-all ${
              showTraditional
                ? "bg-red-500/80 text-white border-red-500"
                : "border-white/20 text-white hover:border-white/50"
            }`}
          >
            <span className="font-bold uppercase text-sm tracking-widest">Традиционный путь</span>
          </button>
        </div>

        <FadeInSection key={`${activeTrack}-${showTraditional}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              {(showTraditional ? track.traditionalSteps : track.steps).map((step, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-6 p-6 border transition-all ${
                    showTraditional
                      ? "border-red-500/30 bg-red-500/5 hover:bg-red-500/10"
                      : "border-white/10 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                      showTraditional ? "bg-red-500/20 text-red-300" : "bg-white/10 text-white"
                    }`}
                  >
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-bold text-white">{step.stage}</h4>
                      <div className="flex flex-col items-end gap-1">
                        <span
                          className={`font-mono text-sm ${
                            showTraditional
                              ? step.profit.includes("-")
                                ? "text-red-400"
                                : "text-red-300"
                              : "text-green-400"
                          }`}
                        >
                          {step.profit}
                        </span>
                        {showTraditional && "time" in step && (
                          <span className="text-xs text-kult-muted font-mono">{step.time}</span>
                        )}
                      </div>
                    </div>
                    <p className="text-kult-muted text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:sticky lg:top-32">
              <div className="p-8 border border-white/20 bg-gradient-to-br from-white/10 to-transparent">
                <div className="flex items-center gap-3 mb-6">
                  <TrackIcon className="text-white" size={32} />
                  <h3 className="text-2xl font-serif text-white">{track.title}</h3>
                </div>

                {activeTrack === "influencer" && !showTraditional && (
                  <p className="text-xs text-green-400 font-mono mb-6 border-l-2 border-green-400 pl-3">
                    От первых 100к охвата до 5 млн руб и долей на млн $ как совладелец
                  </p>
                )}

                {!showTraditional ? (
                  <>
                    <h4 className="text-sm font-bold text-kult-muted uppercase tracking-widest mb-4">
                      Почему проще, быстрее, легче:
                    </h4>
                    <ul className="space-y-3 mb-8">
                      {track.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-white">
                          <CheckCircle2 size={16} className="text-green-400 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="p-4 bg-green-500/10 border border-green-500/20 mb-6">
                      <div className="flex items-center gap-2 text-green-400 text-sm font-bold mb-1">
                        <Star size={14} /> Разница в прибыли
                      </div>
                      <p className="text-white text-sm">
                        {activeTrack === "founder" &&
                          "возможность расти быстро вообще без привлечения денежных инвестиций"}
                        {activeTrack === "marketer" && "От профита 100к до 2+ млн/мес на Profit Share"}
                        {activeTrack === "influencer" && "От 30к/интеграция до 5+ млн/мес как совладелец"}
                      </p>
                    </div>

                    <button
                      onClick={openModal}
                      className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                    >
                      Начать путь <ArrowRight size={16} />
                    </button>
                  </>
                ) : (
                  <>
                    <h4 className="text-sm font-bold text-red-400 uppercase tracking-widest mb-4">
                      Почему традиционный путь не работает:
                    </h4>
                    <ul className="space-y-3 mb-8">
                      {activeTrack === "marketer" ? (
                        <>
                          <li className="flex items-start gap-3 text-white">
                            <X size={16} className="text-red-400 flex-shrink-0 mt-1" />
                            <span>Клянчить бюджеты вместо быстрых тестов по трафику</span>
                          </li>
                          <li className="flex items-start gap-3 text-white">
                            <X size={16} className="text-red-400 flex-shrink-0 mt-1" />
                            <span>Низкая мотивация команды без доли в прибыли</span>
                          </li>
                          <li className="flex items-start gap-3 text-white">
                            <X size={16} className="text-red-400 flex-shrink-0 mt-1" />
                            <span>Стагнация и выгорание без доли в компании</span>
                          </li>
                        </>
                      ) : (
                        <>
                          <li className="flex items-start gap-3 text-white">
                            <X size={16} className="text-red-400 flex-shrink-0 mt-1" />
                            <span>Долгие переговоры вместо быстрых спринтов</span>
                          </li>
                          <li className="flex items-start gap-3 text-white">
                            <X size={16} className="text-red-400 flex-shrink-0 mt-1" />
                            <span>Фиксированные расходы убивают проекты</span>
                          </li>
                          <li className="flex items-start gap-3 text-white">
                            <X size={16} className="text-red-400 flex-shrink-0 mt-1" />
                            <span>Низкая мотивация команды без profit share</span>
                          </li>
                          <li className="flex items-start gap-3 text-white">
                            <X size={16} className="text-red-400 flex-shrink-0 mt-1" />
                            <span>Стагнация и выгорание</span>
                          </li>
                        </>
                      )}
                    </ul>

                    <div className="p-4 bg-red-500/10 border border-red-500/20 mb-6">
                      <div className="flex items-center gap-2 text-red-400 text-sm font-bold mb-1">
                        <X size={14} /> Реальность традиционного пути
                      </div>
                      <p className="text-white text-sm">
                        {activeTrack === "founder" && "90% стартапов умирают в первые 2 года из-за нехватки денег"}
                        {activeTrack === "marketer" &&
                          "Средний маркетолог работает на 40% потенциала за фиксированный оклад"}
                        {activeTrack === "influencer" && "Аудитория выгорает от постоянной рекламы, охваты падают"}
                      </p>
                    </div>

                    <button
                      onClick={() => setShowTraditional(false)}
                      className="w-full py-4 bg-green-500 text-white font-bold uppercase tracking-widest hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                    >
                      Посмотреть путь с культурой маркетинга <ArrowRight size={16} />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={400}>
          <div className="mt-20 max-w-4xl mx-auto p-10 border border-white/10 bg-white/5">
            <h3 className="text-2xl font-serif text-white mb-6 text-center">Честно о рисках</h3>
            <div className="grid md:grid-cols-2 gap-8 text-kult-muted">
              <div>
                <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                  <Lock size={16} /> Что нужно от тебя
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>• Пройти 7-дневный челлендж и доказать компетенции</li>
                  <li>• Работать на результат, а не на процесс</li>
                  <li>• Принять Profit Share модель без гарантий</li>
                  <li>• Быть готовым к быстрым спринтам и итерациям</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                  <Zap size={16} /> Кому НЕ подходит
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>• Тем, кто хочет стабильный оклад без рисков</li>
                  <li>• Тем, кто не готов работать на 100%</li>
                  <li>• Тем, кто ищет быстрые деньги без усилий</li>
                  <li>• Тем, кто не верит в партнерскую модель</li>
                </ul>
              </div>
            </div>
            <p className="text-center text-white mt-8 text-sm">
              Культура маркетинга — это не волшебная таблетка. Это система для тех, кто готов работать на результат и делить прибыль.
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

const STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Челлендж",
    description: "Пройди челлендж, чтобы поймать мэтч с партнёром: маркетолог + фаундер.",
  },
  {
    number: "02",
    title: "Лидер мнений",
    description: "Пройди челлендж по подключению лидера мнений.",
  },
  {
    number: "03",
    title: "Вопросы",
    description: "Приходи на еженедельные мастермайнды; вопросы — в чат.",
  },
  {
    number: "04",
    title: "Запуск",
    description: "Сделай первый запуск, чтобы получить 100–500к за 100 часов.",
  },
  {
    number: "05",
    title: "Масштаб",
    description: "Масштабируй партнерства и прибыль.",
  },
]

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const openModal = () => setIsModalOpen(true)

  return (
    <div className="min-h-screen bg-kult-black text-kult-text font-sans selection:bg-white selection:text-black overflow-x-hidden relative">
      <VantaBackground />
      <div className="bg-noise"></div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <nav className="fixed top-0 left-0 right-0 z-40 bg-kult-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-serif font-bold tracking-tighter text-white z-50">КУЛЬТ</div>

          <div className="hidden md:flex space-x-8 text-xs font-bold tracking-widest uppercase">
            <button onClick={() => scrollToSection("concept")} className="hover:text-white transition-colors">
              КОНЦЕПЦИЯ
            </button>
            <button onClick={() => scrollToSection("projects")} className="hover:text-white transition-colors">
              ПРОЕКТ
            </button>
            <button onClick={() => scrollToSection("trust")} className="hover:text-white transition-colors">
              КЕЙСЫ
            </button>
            <button onClick={() => scrollToSection("tracks")} className="hover:text-white transition-colors">
              ПУТЬ РОСТА
            </button>
          </div>

          <a
            href="https://t.me/CultScale_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block px-6 py-2 border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
          >
            Войти в ассамблею
          </a>

          <button className="md:hidden text-white z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-kult-black z-40 pt-24 px-6 flex flex-col space-y-6">
            <button onClick={() => scrollToSection("concept")} className="text-left text-2xl font-serif text-white">
              КОНЦЕПЦИЯ
            </button>
            <button onClick={() => scrollToSection("projects")} className="text-left text-2xl font-serif text-white">
              ПРОЕКТ
            </button>
            <button onClick={() => scrollToSection("trust")} className="text-left text-2xl font-serif text-white">
              КЕЙСЫ
            </button>
            <button onClick={() => scrollToSection("tracks")} className="text-left text-2xl font-serif text-white">
              ПУТЬ РОСТА
            </button>
          </div>
        )}
      </nav>

      <header className="relative min-h-screen flex items-center justify-center pt-20 px-6 pb-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] -z-10 pointer-events-none animate-pulse-slow"></div>
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] -z-10 pointer-events-none animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center z-10">
          <div className="text-center lg:text-left">
            <FadeInSection>
              <div className="inline-flex items-center gap-2 py-1 px-3 border border-white/10 bg-white/5 rounded-full mb-8 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs font-semibold tracking-widest uppercase text-kult-muted">Набор открыт</span>
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[0.9] md:leading-[1.1] mb-8 tracking-tight">
                МАСШТАБ <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50 italic pr-2">
                  БЕЗ БЮДЖЕТА
                </span>
              </h1>
            </FadeInSection>

            {/* Обновил заголовок в Hero секции */}
            <FadeInSection delay={400}>
              <p className="text-lg md:text-xl text-kult-muted max-w-xl mx-auto lg:mx-0 font-light leading-relaxed mb-12 border-l border-white/20 pl-6 text-left">
                без бюджета на продукт, маркетинг и трафик на старте
              </p>
            </FadeInSection>

            <FadeInSection delay={600}>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection("trust")}
                  className="w-full sm:w-auto px-8 py-5 bg-white text-black font-bold text-xs tracking-[0.2em] hover:bg-gray-200 transition-all uppercase flex items-center justify-center gap-3 group"
                >
                  НАШИ ТОП КЕЙСЫ
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollToSection("concept")}
                  className="w-full sm:w-auto px-8 py-5 border border-white/20 text-white font-bold text-xs tracking-[0.2em] hover:bg-white/5 transition-colors uppercase"
                >
                  Читать Манифест
                </button>
              </div>
            </FadeInSection>
          </div>

          <FadeInSection delay={800} className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-transparent blur opacity-30"></div>
              <ChatSimulation />
              <div className="mt-6 text-center">
                <p className="text-xs text-kult-muted font-mono uppercase tracking-widest">Live Partnership Engine</p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </header>

      <Marquee text="КУЛЬТУРА МАРКЕТИНГА - ПАРТНЁРСТВА ВМЕСТО ЗАРПЛАТ - ДОЛЯ ОТ ПРИБЫЛИ ВМЕСТО БЮДЖЕТОВ" />

      <section id="concept" className="py-32 px-6 bg-kult-black relative">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <h3 className="text-3xl md:text-5xl font-serif mb-12 text-white leading-tight">
              Ты сливаешь свой стартап, <br />
              <span className="text-kult-muted italic font-serif">даже не осознавая этого.</span>
            </h3>

            <div className="grid md:grid-cols-2 gap-12 text-kult-muted text-lg font-light leading-relaxed">
              <p>
                Представь: команда собрана, деньги найдены, реклама запущена. Проходит месяц. Бюджет испаряется.
                Маркетолог работает вполсилы за фикс. Блогеры делают интеграцию и забывают о тебе.
              </p>
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-white"></div>
                <p className="pl-6 text-white">
                  Пока ты сжигаешь кэш на рекламу, твои конкуренты масштабируются без бюджета. Капитал — это архаизм.
                  Современный мир движется за счет партнерств.
                </p>
              </div>
            </div>
          </FadeInSection>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
            {COMPARISONS.map((item, idx) => (
              <FadeInSection key={idx} delay={idx * 150}>
                <div className="p-8 border border-white/10 hover:border-white transition-all duration-500 h-full flex flex-col justify-between bg-white/5 backdrop-blur-sm group hover:-translate-y-2">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">{item.company}</h4>
                    <p className="text-xs text-kult-muted uppercase tracking-wider mb-6">{item.achievement}</p>
                  </div>
                  <div className="pt-6 border-t border-white/10 group-hover:border-white/50 transition-colors">
                    <p className="text-white font-serif italic text-xl">{item.method}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          <div className="mt-24 text-center">
            <p className="text-2xl md:text-5xl font-serif text-white leading-tight">
              Бюджет не требуется. <br />
              <span className="text-kult-muted decoration-1 underline decoration-white/30 underline-offset-8">
                Нужны только партнерства.
              </span>
            </p>
          </div>
        </div>
      </section>

      <ProjectsSection openModal={openModal} />

      <TrustSection />

      <TrackMapsSection openModal={openModal} />

      <section id="roles" className="py-32 px-6 bg-kult-dark relative overflow-hidden">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full opacity-50"></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full opacity-50"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader
            title="ТВОЯ РОЛЬ"
            subtitle="Система вин-вин, где каждый участник мотивирован конечным результатом."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-l border-white/10">
            {ROLES.map((role, idx) => (
              <FadeInSection key={idx} delay={idx * 100}>
                <div className="h-full border-r border-b border-white/10 p-10 md:p-12 group hover:bg-white/5 transition-all duration-500 cursor-default relative">
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="text-white -rotate-45" />
                  </div>

                  <role.icon className="w-12 h-12 mb-8 text-white stroke-1" />
                  <h3 className="text-3xl font-serif text-white mb-8 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                    {role.title}
                  </h3>

                  <ul className="space-y-6">
                    {role.points.map((point, pIdx) => (
                      <li
                        key={pIdx}
                        className="flex items-start text-kult-muted group-hover:text-white transition-colors duration-300"
                      >
                        <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 mr-4 flex-shrink-0 opacity-20 group-hover:opacity-100 transition-opacity"></span>
                        <span className="font-light text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://t.me/CultScale_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-12 inline-block text-xs font-bold uppercase tracking-widest text-white border-b border-white/20 pb-1 hover:border-white transition-colors"
                  >
                    Подать заявку как {role.title}
                  </a>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <Marquee text="NO SALARIES • JUST RESULTS •" reverse={true} />

      <section id="process" className="py-32 px-6 bg-kult-black relative">
        <div className="max-w-5xl mx-auto">
          <SectionHeader title="МЕХАНИКА" subtitle="7-дневные спринты вместо месяцев переговоров." centered={true} />

          <div className="relative mt-20">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block"></div>

            <div className="space-y-24">
              {STEPS.map((step, idx) => (
                <FadeInSection key={idx} delay={idx * 100}>
                  <div
                    className={`flex flex-col md:flex-row items-center ${idx % 2 === 0 ? "md:flex-row-reverse" : ""} gap-12 relative group`}
                  >
                    <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-black border border-white rounded-full z-10 items-center justify-center group-hover:scale-150 transition-transform duration-500">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>

                    <div className="w-full md:w-1/2 px-4">
                      <div className={`text-left ${idx % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                        <div
                          className={`flex items-end gap-4 mb-4 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                        >
                          <span className="text-8xl font-serif font-bold text-white/5 leading-none">{step.number}</span>
                          <h4 className="text-2xl font-bold text-white pb-3">{step.title}</h4>
                        </div>
                        <p className="text-kult-muted font-light leading-relaxed max-w-sm ml-auto mr-auto md:mx-0">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    <div className="w-full md:w-1/2 hidden md:block"></div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="manifesto" className="py-32 px-6 bg-white text-kult-black relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-[0.03] pointer-events-none mix-blend-multiply"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeInSection>
            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-10 leading-none">
              ВРЕМЯ ПРИЗНАТЬ <br />
              <span className="text-kult-gray/80 italic font-serif">ПРАВДУ</span>
            </h2>
            <p className="text-lg md:text-xl text-kult-gray/80 mb-16 font-light max-w-2xl mx-auto leading-relaxed">
              Нас учили, что для бизнеса необходим капитал. Это миф прошлого поколения. Сатоши Накамото с партнерами
              создал Bitcoin на $2 трлн без ICO и рекламы. Команда из 3 новичков сделала 200 млн без зарплат.
            </p>

            <div className="bg-kult-black text-white p-10 md:p-16 w-full shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>

              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">ВСТУПИТЬ В КУЛЬТ</h3>
              <p className="text-kult-muted mb-10 text-sm tracking-wide max-w-md mx-auto">
                Пройди отбор и получи доступ к закрытой базе проектов и продюсеров.
              </p>

              <a
                href="https://t.me/CultScale_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto px-12 py-5 bg-white text-black font-bold uppercase tracking-[0.2em] hover:bg-gray-200 transition-colors inline-flex items-center justify-center gap-3"
              >
                Подать заявку <ArrowRight className="w-4 h-4" />
              </a>

              <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-xs text-white/30">
                <span className="flex items-center gap-2">
                  <Lock size={12} /> Закрытое комьюнити
                </span>
                <span className="flex items-center gap-2">
                  <Zap size={12} /> Выход на партнёров за 7 дней бесплатно
                </span>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      <section id="rules" className="py-16 px-6 bg-kult-dark border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-serif text-white mb-6">Правила атрибуции</h3>
          <div className="p-6 border border-white/10 bg-white/5 text-kult-muted text-sm leading-relaxed">
            <p>
              Привод засчитывается тому, кто первым показал диалог с клиентом и далее была конверсия по этапам. Если до
              захода в бот клиент уже общался с рекомендателем — засчитывается рекомендателю.
            </p>
          </div>
        </div>
      </section>

      <footer className="py-16 px-6 bg-kult-black border-t border-white/5 text-center md:text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <div className="text-4xl font-serif font-bold text-white mb-4">КУЛЬТ</div>
            <p className="text-kult-muted text-sm max-w-xs leading-relaxed">
              Первая в России деловая ассамблея, работающая по модели Profit Sharing.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12">
            <div>
              <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Навигация</h5>
              <div className="flex flex-col gap-4 text-sm text-kult-muted">
                <button
                  onClick={() => scrollToSection("concept")}
                  className="text-left hover:text-white transition-colors"
                >
                  Концепция
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-left hover:text-white transition-colors"
                >
                  Проекты
                </button>
                <button
                  onClick={() => scrollToSection("tracks")}
                  className="text-left hover:text-white transition-colors"
                >
                  Путь роста
                </button>
              </div>
            </div>

            <div>
              <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Документы</h5>
              <div className="flex flex-col gap-4 text-sm text-kult-muted">
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Политика конфиденциальности
                </Link>
                <Link href="/consent" className="hover:text-white transition-colors">
                  Согласие на обработку ПД
                </Link>
                <Link href="/offer" className="hover:text-white transition-colors">
                  Оферта
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-kult-muted/50">
          <p>© 2025 KULT Assembly. All rights reserved.</p>
          <p>Designed for Leaders.</p>
        </div>
      </footer>

      <div className="md:hidden fixed bottom-6 left-6 right-6 z-40">
        <a
          href="https://t.me/CultScale_bot"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center justify-center"
        >
          Подать заявку
        </a>
      </div>
    </div>
  )
}
