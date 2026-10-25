# Fernando Sousa — Portfólio

**Desenvolvedor Full Stack**

> Do componente à API, construo aplicações completas com JavaScript e TypeScript.

Meu foco é o desenvolvimento de ponta a ponta com JavaScript e TypeScript: da interface à construção e integração de APIs. Tenho interesse em automação e em soluções que simplifiquem processos de negócios.

## Contato

- **LinkedIn:** [Fernando Sousa](https://www.linkedin.com/in/nandocastro/)
- **GitHub:** [@nando-castro](https://github.com/nando-castro)
- **E-mail:** [sousa.fernandocastro@gmail.com](mailto:sousa.fernandocastro@gmail.com)
- **WhatsApp:** [+55 (98) 98406-0181](https://wa.me/5598984060181)

## Sobre o portfólio

Portfólio em português do Brasil, com interface inspirada em uma IDE. Apresentação imediata, explorador de arquivos, abas, projetos com filtros e detalhes, habilidades, contato e terminal opcional. Layout responsivo, navegação por hash, tema verde/ciano persistido e identidade visual feita com CSS e ícones.

A apresentação inicial destaca apenas **Flora e Flow**. A seção Projetos reúne também **Duelo dos Números**, **Agendamento • App e API** e **Sistema da Sedallis**. Cada item informa seu status; conceitos demonstrativos não são apresentados como entregas comerciais. Experiências profissionais vazias e links não configurados ficam ocultos.

## Stack e requisitos

- React, TypeScript e Vite.
- CSS com variáveis de tema e Lucide para ícones.
- Oxlint, Vitest, Testing Library e Prettier no desenvolvimento.
- Node.js **22.12 ou superior** e npm. Sem backend, autenticação, chaves ou serviços pagos.
- Fontes Google Fonts com fallback local: o site continua funcional sem carregá-las.

## Tecnologias do perfil

| Área                      | Tecnologias                                                |
| ------------------------- | ---------------------------------------------------------- |
| Linguagens                | TypeScript, JavaScript, Java, Python                       |
| Frontend                  | React, Next.js, HTML5, CSS3, Ant Design, Styled-components |
| Mobile                    | React Native, Expo                                         |
| Backend                   | Node.js, NestJS, Express, Spring, Prisma, APIs REST        |
| Bancos de dados           | PostgreSQL, MongoDB, MySQL, Redis                          |
| Testes e infraestrutura   | Jest, Cypress, Docker, Linux, Nginx, Vercel                |
| Ferramentas e integrações | Git, GitHub, APIs REST                                     |

Essa é a stack apresentada no perfil. As dependências utilizadas para construir este site estão listadas na seção anterior e no `package.json`.

## Executar localmente

```sh
npm ci
npm run dev
```

Abra a URL informada pelo Vite, normalmente `http://localhost:5173`.

No PowerShell com scripts bloqueados, use `npm.cmd ci` e `npm.cmd run dev`, sem alterar a política de segurança do sistema.

| Comando                | Uso                                          |
| ---------------------- | -------------------------------------------- |
| `npm run dev`          | Desenvolvimento com atualização automática   |
| `npm run build`        | Verificação TypeScript e produção em `dist/` |
| `npm run preview`      | Servir o build localmente                    |
| `npm run typecheck`    | Verificar tipos                              |
| `npm run lint`         | Análise estática com Oxlint                  |
| `npm test`             | Testes de comportamento                      |
| `npm run format`       | Formatar código e documentação               |
| `npm run format:check` | Verificar formatação                         |

## Organização dos dados

Os arquivos em `src/data/` são a fonte dos dados pessoais:

- `profile.ts`: nome, iniciais, cargo, apresentação, sobre, e-mail, URLs de GitHub, LinkedIn e WhatsApp, e caminho do currículo.
- `skills.ts`: linguagens, frontend, backend, bancos de dados, testes e infraestrutura, ferramentas e integrações. Tecnologias configuradas conforme a stack informada, sem porcentagens de domínio.
- `projects.ts`: projetos tipados, categoria, descrição, problema, solução/participação, funcionalidades, decisões, stack, status, imagem, repositório e demonstração.
- `experience.ts`: experiência na SEAP — Maranhão, exibida na linha do tempo, no explorador e pelo comando `experience`.

Use URLs completas `https://...` nos contatos, repositórios e demonstrações. Em `email`, informe apenas o endereço. Para WhatsApp, use `https://wa.me/` seguido do número internacional real. Mantenha campos desconhecidos como string vazia; não use `#` como link provisório.

### Experiência profissional

**SEAP — Maranhão · Desenvolvedor Full Stack**

**Período:** 03/2023 — atual, com término previsto em dezembro de 2026.

**Tecnologias:** React, Node.js, Java e Python.

- Atuação em diversos sistemas do Estado do Maranhão, do desenvolvimento de APIs às interfaces frontend.
- Refatoração de sistemas legados.
- Participação na construção de um sistema de reconhecimento facial implementado nas unidades prisionais.

A experiência permanece em andamento. Dezembro é uma previsão de término, não uma saída já ocorrida.

## Projetos e imagens

| Projeto                  | Categoria  | Escopo e participação                                                                                                | Status                                            |
| ------------------------ | ---------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| Flora • Catálogo digital | Frontend   | Desenvolvimento integral para a Floricultura Mistérios, cliente real                                                 | Projeto para cliente                              |
| Flow • Atendimento       | Automação  | Automação de atendimento, desenvolvimento particular e individual                                                    | Projeto pessoal em desenvolvimento                |
| Duelo dos Números        | Mobile     | Desenvolvimento integral com React Native e Expo; descobrir a combinação de números do adversário primeiro           | Disponível para Android; expansão web planejada   |
| Agendamento • App e API  | Full Stack | App e API desenvolvidos integralmente; registro, cadastro e agendamento de horários, pagamentos com Mercado Pago Pix | Projeto pessoal com funcionalidades implementadas |
| Sistema da Sedallis      | Full Stack | Gestão de clínica particular de sedação; API, integração Google Calendar, partes do frontend e site institucional    | Projeto para empresa                              |

**Stack da Sedallis:** React, NestJS e PostgreSQL, com integração ao Google Calendar.

**Stack do agendamento:** React, TypeScript, NestJS, Prisma e PostgreSQL, com integração Mercado Pago Pix. Uso por clientes não foi informado; o projeto é apresentado como pessoal.

Links configurados:

- Floricultura Mistérios: [site](https://floricultura-misterios.vercel.app/) e [repositório](https://github.com/nando-castro/floricultura-misterios).
- Duelo dos Números: [prévia web](https://duelo-numeros-web.vercel.app/) e [repositório](https://github.com/nando-castro/duelo-dos-numeros-game).
- Agendamento: [site](https://app-agendamento-saas.vercel.app/), [repositório do app](https://github.com/nando-castro/app-agendamento-saas) e [repositório da API](https://github.com/nando-castro/api-agendamento-saas).
- [Site da Sedallis](https://sedallis.com.br/), site institucional também desenvolvido por Fernando Sousa. O link não é apresentado como acesso ao sistema interno de gestão.

Na consulta pública desta atualização, os repositórios do jogo e da floricultura retornaram 404, e o site da Sedallis não pôde ser consultado. Os links fornecidos foram preservados; isso não confirma se os repositórios são privados ou foram movidos. A stack do agendamento foi conferida nos arquivos `package.json` dos repositórios públicos.

Adicione objetos à lista `projects`, respeitando a interface `Project`. As categorias aceitas são Frontend, Full Stack, Automação e Mobile. O filtro Todos reúne os itens. Uma categoria sem itens exibe uma mensagem apropriada.

Coloque imagens reais em `public/images/` e use um caminho relativo, por exemplo `image: 'images/meu-projeto.webp'`, com `imageAlt` descritivo. O prefixo do GitHub Pages é aplicado automaticamente. Não inclua `public/` no caminho. Sem imagem, ou se seu carregamento falhar, aparece a composição gráfica. Essas artes são conceitos visuais, não capturas de aplicações entregues.

O campo `featured: true` controla quais projetos aparecem na apresentação inicial; apenas Flora e Flow estão destacados. O status de cada card e modal vem de `status`. O campo `additionalRepositories` permite links adicionais, como a API do agendamento; `demoLabel` permite distinguir um site empresarial de uma demonstração. Links vazios ficam ocultos.

Flora é um trabalho para cliente real. Flow é um projeto pessoal em desenvolvimento individual, com funcionalidades planejadas identificadas nos detalhes. O jogo está disponível para Android; o link web é mantido como prévia, pois a expansão web está planejada.

## Currículo

Coloque o PDF em `public/curriculo.pdf` e configure `resume: 'curriculo.pdf'` em `profile.ts`. O botão de download só aparece quando esse campo está preenchido. Verifique se o arquivo existe antes de publicar. O PDF não foi fornecido nesta versão.

## Terminal

Abra pelo botão Terminal na barra inferior. Ele começa fechado em todas as telas e não recebe foco automaticamente.

O terminal também responde a conversas simples, sem IA ou serviços externos:

| Entrada                               | Resposta                                         |
| ------------------------------------- | ------------------------------------------------ |
| `Heloo`, `hello` ou `hi`              | `hello world`                                    |
| `olá`, `ola` ou `oi`                  | `Olá mundo`                                      |
| `tudo bem?` ou `como vai?`            | Saudação e sugestão para explorar os projetos    |
| `bom dia`, `boa tarde` ou `boa noite` | Boas-vindas                                      |
| `quem é você?`                        | Explica o terminal e indica o perfil do Fernando |
| `obrigado`, `obrigada` ou `valeu`     | Agradecimento e indicação do contato             |
| `tchau`, `até mais` ou `bye`          | Despedida                                        |
| `café`                                | Uma resposta sobre café e código                 |

Maiúsculas, acentos e espaços extras são normalizados. As respostas ficam em `src/data/conversations.ts` e aparecem como sugestões no `help`. O autocompletar e o histórico também funcionam com essas frases. As conversas não executam ações nem simulam uma mensagem enviada ao Fernando.

Comandos: `help`, `whoami`, `about`, `projects`, `skills`, `experience`, `contact`, `github`, `linkedin`, `clear` e `theme`. Setas recuperam o histórico; Tab completa um prefixo conhecido; comandos desconhecidos mostram ajuda. A lógica fica em `src/lib/terminal.ts` e usa um mapa explícito de funções, sem `eval` ou execução de entrada arbitrária. Histórico e saída existem apenas em memória; somente a preferência de cor vai para `localStorage`, com tratamento de falhas.

## GitHub Pages

O projeto está preparado, mas **nenhum repositório foi criado, nenhum push foi feito e nada foi publicado automaticamente**.

1. Crie seu repositório no GitHub e envie este projeto para a branch `main` quando estiver pronto. Não envie `node_modules/` nem `dist/`.
2. No repositório, abra **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. O workflow `.github/workflows/deploy.yml` roda lint, tipos, testes e build antes do deploy. Ele é acionado por push na `main` ou manualmente pela aba Actions. Ajuste a branch no YAML se usar outro nome.
4. `actions/configure-pages` informa o `base_path` usado no build. Isso atende tanto `usuario.github.io/repositorio/` quanto sites na raiz e domínio personalizado configurado no Pages.
5. Se houver regras de aprovação no ambiente `github-pages`, conclua-as na interface do GitHub.

A navegação usa fragmentos (`#projects`, `#about`), evitando 404 de rotas internas ao recarregar. O arquivo `vite.config.ts` aceita `BASE_PATH`; sem ela, usa `/`.

Simular uma subpasta no PowerShell:

```powershell
$env:BASE_PATH = '/portfolio/'
npm.cmd run build
npm.cmd run preview
# Acesse http://localhost:4173/portfolio/
Remove-Item Env:BASE_PATH
```

## Estado atual do conteúdo

- **Configurados:** nome, cargo, apresentação, tecnologias, e-mail, GitHub, LinkedIn e WhatsApp.
- **Projetos:** cinco itens, com Flora e Flow na apresentação inicial; links informados configurados e status individual, sem resultados ou entregas comerciais inventados.
- **Currículo:** PDF não fornecido; botão de download oculto.
- **Experiência profissional:** Desenvolvedor Full Stack na SEAP — Maranhão desde 03/2023; término previsto em 12/2026; React, Node.js, Java e Python.
- **Jogo mobile:** React Native e Expo, autoria integral, Android disponível e expansão web planejada.

O portfólio funciona com essa configuração. Currículo e imagens são opcionais. As funcionalidades planejadas do Flow e as decisões técnicas propostas da Flora estão identificadas nos detalhes; não há métricas ou resultados inventados.

## Acessibilidade e validação

HTML semântico, link para pular ao conteúdo, foco visível, labels, menu recolhível com Escape e retorno de foco, modal nativo com contenção de foco e Escape, respeito a `prefers-reduced-motion` e feedback de cópia de e-mail. Contatos são links reais quando configurados; não há formulário de envio simulado.

Os testes cobrem navegação, filtros e categoria vazia, abertura/fechamento de detalhes, comandos, proteção contra nomes herdados, histórico, autocompletar, tema e falhas de armazenamento, menu e cópia de e-mail com sucesso/erro. JSDOM não calcula layout nem comprova contraste, foco nativo do modal ou renderização em dispositivos.

Nesta entrega, o navegador controlável não estava disponível. A revisão visual em desktop/celular e a execução real do workflow no GitHub continuam pendentes. Antes da publicação, confira em navegador real a 390 px e em desktop: ausência de rolagem horizontal, leitura dos cards, menu, Tab/Escape no modal e terminal. O deploy depende da configuração do seu repositório.
