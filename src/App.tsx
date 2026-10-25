import { useEffect, useRef, useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Check,
  ChevronDown,
  ChevronRight,
  Code2,
  Copy,
  Download,
  FileCode2,
  FileJson,
  FileText,
  Files,
  Folder,
  GitBranch,
  CodeXml as Github,
  BriefcaseBusiness as Linkedin,
  Mail,
  Menu,
  MessageCircle,
  PanelLeftClose,
  Terminal as TerminalIcon,
  X,
} from 'lucide-react'
import { profile } from './data/profile'
import {
  categories,
  filterProjects,
  featuredProjects,
  projects,
  type Category,
  type Project,
} from './data/projects'
import { skills } from './data/skills'
import { experience } from './data/experience'
import type { Section } from './lib/terminal'
import { Terminal } from './components/Terminal'
import { ProjectVisual, ProjectCard } from './components/ProjectCard'
import './App.css'

const pages = [
  { id: 'home', file: 'README.md', title: 'Início', icon: FileText },
  { id: 'about', file: 'about.ts', title: 'Sobre', icon: FileCode2 },
  { id: 'skills', file: 'skills.json', title: 'Habilidades', icon: FileJson },
  ...(experience.length
    ? [
        {
          id: 'experience',
          file: 'experience.ts',
          title: 'Experiência',
          icon: FileCode2,
        },
      ]
    : []),
  { id: 'projects', file: 'projects/', title: 'Projetos', icon: Folder },
  { id: 'contact', file: 'contact.ts', title: 'Contato', icon: FileCode2 },
] as const
const readSection = (): Section =>
  (pages.find((page) => page.id === window.location.hash.slice(1))
    ?.id as Section) || 'home'
function App() {
  const [section, setSection] = useState<Section>(readSection)
  const [menu, setMenu] = useState(false)
  const [terminal, setTerminal] = useState(false)
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('portfolio-accent') === 'cyan'
        ? 'cyan'
        : 'green'
    } catch {
      return 'green'
    }
  })
  const [category, setCategory] = useState<Category>('Todos')
  const [selected, setSelected] = useState<Project | null>(null)
  const [copyStatus, setCopyStatus] = useState('')
  const dialog = useRef<HTMLDialogElement>(null)
  const main = useRef<HTMLElement>(null)
  const menuButton = useRef<HTMLButtonElement>(null)
  const terminalButton = useRef<HTMLButtonElement>(null)
  const nav = useRef<HTMLElement>(null)
  useEffect(() => {
    const update = () => setSection(readSection())
    window.addEventListener('hashchange', update)
    return () => window.removeEventListener('hashchange', update)
  }, [])
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('portfolio-accent', theme)
    } catch {
      /* Storage is optional. */
    }
  }, [theme])
  useEffect(() => {
    if (selected) dialog.current?.showModal()
    else dialog.current?.close()
  }, [selected])
  useEffect(() => {
    if (menu) nav.current?.querySelector<HTMLButtonElement>('button')?.focus()
  }, [menu])
  const navigate = (next: Section, moveFocus = true) => {
    window.location.hash = next
    setSection(next)
    setMenu(false)
    main.current?.scrollTo(0, 0)
    if (moveFocus) requestAnimationFrame(() => main.current?.focus())
  }
  const toggleTheme = () =>
    setTheme((old) => (old === 'green' ? 'cyan' : 'green'))
  const active = pages.find((page) => page.id === section) || pages[0]
  const external = (url: string) =>
    window.open(url, '_blank', 'noopener,noreferrer')
  return (
    <div className="ide">
      <a
        className="skip-link"
        href="#main"
        onClick={(event) => {
          event.preventDefault()
          main.current?.focus()
        }}
      >
        Pular para o conteúdo
      </a>
      <header className="titlebar">
        <div className="brand">
          <Braces size={22} />
          <span>
            fs<span className="muted">.dev</span>
          </span>
        </div>
        <div className="window-title">
          {profile.name} <span>/</span> portfolio
        </div>
        <div className="title-right">
          <span className="desktop-only">React + TypeScript</span>
          <button
            onClick={toggleTheme}
            aria-label="Alternar destaque verde e ciano"
            className="theme-button"
          >
            <span /> Tema
          </button>
          <button
            className="mobile-only"
            ref={menuButton}
            onClick={() => setMenu(!menu)}
            aria-expanded={menu}
            aria-controls="explorer"
            aria-label="Abrir navegação"
          >
            <Menu size={21} />
          </button>
        </div>
      </header>
      <div className="workspace">
        <aside className="activitybar" aria-label="Atalhos">
          <button
            className="activity-active"
            onClick={() => navigate('home')}
            aria-label="Página inicial"
          >
            <Files />
          </button>
          <button onClick={() => navigate('projects')} aria-label="Projetos">
            <Code2 />
          </button>
          <button onClick={() => navigate('contact')} aria-label="Contato">
            <Mail />
          </button>
          <span className="activity-bottom">{profile.initials}</span>
        </aside>
        {menu && (
          <button
            className="menu-backdrop"
            aria-label="Fechar navegação"
            onClick={() => {
              setMenu(false)
              menuButton.current?.focus()
            }}
          />
        )}
        <aside
          id="explorer"
          className={`explorer ${menu ? 'is-open' : ''}`}
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              setMenu(false)
              menuButton.current?.focus()
            }
            if (menu && event.key === 'Tab') {
              const buttons = nav.current?.querySelectorAll('button')
              if (
                buttons?.length &&
                ((event.shiftKey && document.activeElement === buttons[0]) ||
                  (!event.shiftKey &&
                    document.activeElement === buttons[buttons.length - 1]))
              ) {
                event.preventDefault()
                menuButton.current?.focus()
              }
            }
          }}
        >
          <div className="explorer-heading">
            EXPLORADOR <PanelLeftClose size={14} />
          </div>
          <div className="folder-name">
            <ChevronDown size={15} /> PORTFOLIO
          </div>
          <nav ref={nav} aria-label="Seções do portfólio">
            {pages.map((page) => (
              <button
                key={page.id}
                aria-current={section === page.id ? 'page' : undefined}
                className={section === page.id ? 'selected' : ''}
                onClick={() => navigate(page.id as Section)}
              >
                <page.icon size={16} className={`file-${page.id}`} />
                {page.file}
              </button>
            ))}
          </nav>
          <div className="explorer-note">
            <span className="tiny-dot" /> JavaScript & TypeScript
            <p>
              Do frontend ao backend.
              <br />
              Cada detalhe conectado.
            </p>
          </div>
        </aside>
        <div className="editor">
          <nav className="tabs" aria-label="Arquivos abertos">
            {pages.map((page) => (
              <button
                key={page.id}
                className={section === page.id ? 'active' : ''}
                aria-current={section === page.id ? 'page' : undefined}
                onClick={() => navigate(page.id as Section)}
              >
                <page.icon size={15} />
                {page.file}
                {section === page.id && <span className="tab-dot" />}
              </button>
            ))}
          </nav>
          <div className="breadcrumbs">
            portfolio <ChevronRight size={13} /> <active.icon size={13} />{' '}
            {active.file}
            <span className="preview-label">PRÉ-VISUALIZAÇÃO</span>
          </div>
          <main id="main" ref={main} tabIndex={-1}>
            {section === 'home' && (
              <>
                <section className="hero">
                  <div className="hero-copy">
                    <div className="eyebrow">
                      <span className="tiny-dot" /> OLÁ, EU SOU FERNANDO
                    </div>
                    <h1>
                      {profile.name.split(' ')[0]}
                      <br />
                      {profile.name.split(' ').slice(1).join(' ')}
                      <span className="accent">.</span>
                    </h1>
                    <p className="role">
                      <span>&lt;</span> {profile.role} <span>/&gt;</span>
                    </p>
                    <p className="headline">{profile.headline}</p>
                    <p className="intro">{profile.introduction}</p>
                    <div className="hero-actions">
                      <button
                        className="button primary"
                        onClick={() => navigate('projects')}
                      >
                        Ver projetos <ArrowRight size={17} />
                      </button>
                      <button
                        className="button secondary"
                        onClick={() => navigate('contact')}
                      >
                        Entrar em contato <ArrowUpRight size={17} />
                      </button>
                    </div>
                    <div className="social-row">
                      {profile.github && (
                        <a
                          href={profile.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Github size={16} /> GitHub <ArrowUpRight size={12} />
                        </a>
                      )}
                      {profile.linkedin && (
                        <a
                          href={profile.linkedin}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Linkedin size={16} /> LinkedIn{' '}
                          <ArrowUpRight size={12} />
                        </a>
                      )}
                      {profile.resume && (
                        <a
                          href={`${import.meta.env.BASE_URL}${profile.resume.replace(/^\//, '')}`}
                          download
                        >
                          <Download size={16} /> Currículo
                        </a>
                      )}
                      <span className="code-caption">
                        // interfaces, lógica e conexões.
                      </span>
                    </div>
                  </div>
                  <div
                    className="identity"
                    aria-label={`Identidade visual ${profile.initials}`}
                  >
                    <div className="identity-top">
                      <span>developer.ts</span>
                      <span>TS</span>
                    </div>
                    <div className="identity-grid">
                      <span className="coordinate">01 / FULL STACK</span>
                      <div className="monogram">
                        {profile.initials[0]}
                        <span>{profile.initials.slice(1)}</span>
                        <i />
                      </div>
                      <div className="identity-bottom">
                        <span>FRONTEND ↔ BACKEND</span>
                        <span className="tiny-dot" />
                      </div>
                    </div>
                    <div className="identity-code">
                      <span className="muted">const</span> developer{' '}
                      <span className="muted">=</span> {'{'}
                      <br />
                      &nbsp; name: <span>'{profile.name}'</span>,<br />
                      &nbsp; stack: [<span>'JavaScript'</span>,{' '}
                      <span>'TypeScript'</span>]<br />
                      {'};'}
                    </div>
                  </div>
                </section>
                <div className="stack-strip">
                  <span>MINHA STACK</span>
                  {[
                    'React',
                    'Next.js',
                    'TypeScript',
                    'Node.js',
                    'APIs REST',
                  ].map((item) => (
                    <span key={item}>
                      <span className="stack-mark">◇</span>
                      {item}
                    </span>
                  ))}
                </div>
                <section className="featured">
                  <div className="section-heading">
                    <div>
                      <div className="eyebrow">01 / EXPLORAR</div>
                      <h2>
                        Ideias que viram projetos
                        <span className="accent">.</span>
                      </h2>
                    </div>
                    <button
                      className="text-button"
                      onClick={() => navigate('projects')}
                    >
                      Todos os projetos <ArrowRight size={16} />
                    </button>
                  </div>
                  <p className="section-description">
                    Flora e Flow: soluções para catálogos digitais e
                    atendimento. Consulte o status e os detalhes de cada
                    projeto.
                  </p>
                  <div className="project-grid featured-grid">
                    {featuredProjects.map((project) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        open={() => setSelected(project)}
                      />
                    ))}
                  </div>
                </section>
                <button
                  className="home-footer"
                  onClick={() => navigate('about')}
                >
                  Além do código: conheça meu perfil <ArrowDown size={16} />
                </button>
              </>
            )}
            {section === 'about' && (
              <section className="page-section">
                <div className="eyebrow">02 / SOBRE MIM</div>
                <h1>
                  Conectando as partes<span className="accent">.</span>
                </h1>
                <p className="lead">{profile.about}</p>
                <div className="about-grid">
                  <div>
                    <h2>Uma visão de ponta a ponta</h2>
                    <p>
                      Interfaces claras, lógica de negócio e integrações
                      precisam trabalhar juntas. É nessa conexão entre frontend
                      e backend que concentro meu desenvolvimento.
                    </p>
                    <h2>Código com propósito</h2>
                    <p>
                      Automações e ferramentas para negócios são áreas que quero
                      explorar: entender processos, reduzir tarefas repetitivas
                      e construir soluções úteis.
                    </p>
                  </div>
                  <pre className="profile-code">
                    <code>{`const perfil = {\n  nome: "${profile.name}",\n  atuação: "Full Stack",\n  linguagens: [\n    "JavaScript",\n    "TypeScript"\n  ],\n  foco: ["Frontend", "Backend", "APIs"],\n  interesses: ["Automação", "Negócios"]\n};`}</code>
                  </pre>
                </div>
              </section>
            )}
            {section === 'skills' && (
              <section className="page-section">
                <div className="eyebrow">03 / FERRAMENTAS</div>
                <h1>
                  A stack por trás das ideias<span className="accent">.</span>
                </h1>
                <p className="lead">
                  Tecnologias organizadas pelo papel que cumprem em uma
                  aplicação.
                </p>
                <div className="skills-grid">
                  {skills.map((group, index) => (
                    <article className="skill-card" key={group.name}>
                      <span className="skill-number">0{index + 1}</span>
                      <h2>{group.name}</h2>
                      <p>{group.description}</p>
                      <div className="tags">
                        {group.items.map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>
                      {!group.items.length && (
                        <p className="placeholder">
                          Nenhuma tecnologia cadastrada nesta categoria.
                        </p>
                      )}
                    </article>
                  ))}
                </div>
              </section>
            )}
            {section === 'projects' && (
              <section className="page-section">
                <div className="eyebrow">04 / PROJETOS</div>
                <h1>
                  Da ideia à implementação<span className="accent">.</span>
                </h1>
                <p className="lead">
                  Aplicações, integrações e conceitos para diferentes negócios.
                </p>
                <p className="notice">
                  Cada projeto informa seu status. Conceitos demonstrativos e
                  informações ainda não detalhadas estão identificados nos
                  cards.
                </p>
                <div className="filters" aria-label="Filtrar projetos">
                  {categories.map((item) => (
                    <button
                      aria-pressed={category === item}
                      key={item}
                      onClick={() => setCategory(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
                <div className="project-grid">
                  {filterProjects(projects, category).map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      open={() => setSelected(project)}
                    />
                  ))}
                </div>
                {!filterProjects(projects, category).length && (
                  <p className="empty-state" role="status">
                    Nenhum projeto nesta categoria por enquanto. Explore as
                    outras categorias.
                  </p>
                )}
              </section>
            )}
            {section === 'experience' && experience.length > 0 && (
              <section className="page-section">
                <div className="eyebrow">05 / TRAJETÓRIA</div>
                <h1>
                  Experiência<span className="accent">.</span>
                </h1>
                <div className="timeline">
                  {experience.map((item) => (
                    <article key={item.id}>
                      {item.period && <span>{item.period}</span>}
                      <h2>{item.role}</h2>
                      <h3>{item.company}</h3>
                      <ul>
                        {item.responsibilities.map((task) => (
                          <li key={task}>{task}</li>
                        ))}
                      </ul>
                      <div className="tags">
                        {item.technologies.map((tech) => (
                          <span key={tech}>{tech}</span>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}
            {section === 'contact' && (
              <section className="page-section contact-section">
                <div className="eyebrow">06 / CONTATO</div>
                <h1>
                  Vamos construir
                  <br />
                  algo juntos<span className="accent">?</span>
                </h1>
                <p className="lead">
                  Uma oportunidade, um projeto ou uma boa conversa sobre
                  tecnologia.
                </p>
                {profile.email ? (
                  <div className="email-box">
                    <a href={`mailto:${profile.email}`}>{profile.email}</a>
                    <button
                      onClick={async () => {
                        try {
                          await navigator.clipboard.writeText(profile.email)
                          setCopyStatus('E-mail copiado!')
                        } catch {
                          setCopyStatus(
                            'Não foi possível copiar. Selecione o e-mail e copie manualmente.',
                          )
                        }
                      }}
                      aria-label="Copiar e-mail"
                    >
                      {copyStatus === 'E-mail copiado!' ? (
                        <Check size={20} />
                      ) : (
                        <Copy size={20} />
                      )}
                    </button>
                  </div>
                ) : (
                  <div className="notice">
                    E-mail a configurar. Os links de contato serão exibidos
                    quando os dados reais forem adicionados.
                  </div>
                )}
                <p role="status">{copyStatus}</p>
                <div className="contact-links">
                  {[
                    { url: profile.github, name: 'GitHub', icon: Github },
                    { url: profile.linkedin, name: 'LinkedIn', icon: Linkedin },
                    {
                      url: profile.whatsapp,
                      name: 'WhatsApp',
                      icon: MessageCircle,
                    },
                  ]
                    .filter((item) => item.url)
                    .map((item) => (
                      <a
                        key={item.name}
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <item.icon /> {item.name} <ArrowUpRight size={18} />
                      </a>
                    ))}
                </div>
                <div className="contact-signature">
                  <Braces size={34} />
                  <span>
                    {profile.name}
                    <small>{profile.role.toUpperCase()}</small>
                  </span>
                </div>
              </section>
            )}
            <footer className="content-footer">
              <span>
                {profile.name} <span className="muted">/ Portfólio</span>
              </span>
              <span>Feito com React & TypeScript</span>
            </footer>
          </main>
          {terminal && (
            <Terminal
              actions={{
                navigate: (next) => navigate(next, false),
                toggleTheme,
                open: external,
                hasExperience: experience.length > 0,
              }}
              close={() => {
                setTerminal(false)
                terminalButton.current?.focus()
              }}
            />
          )}
        </div>
      </div>
      <footer className="statusbar">
        <span>
          <GitBranch size={13} /> portfolio <Check size={13} />
          <span className="desktop-only">React + TypeScript</span>
        </span>
        <span>
          <span className="desktop-only">
            {active.title} <span className="status-divider">|</span> UTF-8
          </span>
          <button
            ref={terminalButton}
            aria-expanded={terminal}
            onClick={() => setTerminal(!terminal)}
          >
            <TerminalIcon size={14} /> Terminal <ChevronDown size={13} />
          </button>
          <span className="desktop-only">PT-BR</span>
        </span>
      </footer>
      <dialog
        ref={dialog}
        onCancel={() => setSelected(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setSelected(null)
        }}
        aria-labelledby="project-title"
      >
        {selected && (
          <>
            <button
              className="dialog-close"
              autoFocus
              onClick={() => setSelected(null)}
              aria-label="Fechar detalhes"
            >
              <X />
            </button>
            <ProjectVisual project={selected} />
            <div className="dialog-content">
              <div className="eyebrow">{selected.category}</div>
              <h2 id="project-title">{selected.name}</h2>
              <p>{selected.subtitle}</p>
              <p className="notice">{selected.status}</p>
              <h3>Problema</h3>
              <p>{selected.problem}</p>
              <h3>Solução e participação</h3>
              <p>{selected.solution}</p>
              <h3>Funcionalidades e escopo</h3>
              <ul>
                {selected.features.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h3>Decisões técnicas</h3>
              <ul>
                {selected.decisions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="tags">
                {selected.technologies.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className="hero-actions">
                {selected.repository && (
                  <a
                    className="button secondary"
                    href={selected.repository}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Repositório <Github size={16} />
                  </a>
                )}
                {selected.demo && (
                  <a
                    className="button primary"
                    href={selected.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {selected.demoLabel || 'Demonstração'}{' '}
                    <ArrowUpRight size={16} />
                  </a>
                )}
                {selected.additionalRepositories?.map((link) => (
                  <a
                    key={link.url}
                    className="button secondary"
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label} <Github size={16} />
                  </a>
                ))}
              </div>
            </div>
          </>
        )}
      </dialog>
    </div>
  )
}
export default App
