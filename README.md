# Fernando Sousa — Portfólio

Portfólio em português do Brasil, com interface inspirada em uma IDE. Apresentação imediata, explorador de arquivos, abas, projetos com filtros e detalhes, habilidades, contato e terminal opcional. Layout responsivo, navegação por hash, tema verde/ciano persistido e identidade visual feita com CSS e ícones.

Os três projetos iniciais são **conteúdo demonstrativo a revisar**. Não representam entregas, publicações ou resultados comprovados. Experiências profissionais vazias e links não configurados ficam ocultos.

## Stack e requisitos

- React, TypeScript e Vite.
- CSS com variáveis de tema e Lucide para ícones.
- Oxlint, Vitest, Testing Library e Prettier no desenvolvimento.
- Node.js **22.12 ou superior** e npm. Sem backend, autenticação, chaves ou serviços pagos.
- Fontes Google Fonts com fallback local: o site continua funcional sem carregá-las.

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

## Editar os dados

Os arquivos em `src/data/` são a fonte dos dados pessoais:

- `profile.ts`: nome, iniciais, cargo, apresentação, sobre, e-mail, URLs de GitHub, LinkedIn e WhatsApp, e caminho do currículo.
- `skills.ts`: grupos e tecnologias. Não há porcentagens de domínio. Banco de dados está explicitamente a confirmar.
- `projects.ts`: projetos tipados, categoria, descrição, problema, solução/participação, funcionalidades, decisões, stack, status, imagem, repositório e demonstração.
- `experience.ts`: lista tipada inicialmente vazia. Ao adicionar itens, a seção, o explorador e o comando `experience` passam a exibi-la automaticamente.

Use URLs completas `https://...` nos contatos, repositórios e demonstrações. Em `email`, informe apenas o endereço. Para WhatsApp, use `https://wa.me/` seguido do número internacional real. Mantenha campos desconhecidos como string vazia; não use `#` como link provisório.

Modelo de experiência (substitua todos os campos por informações reais):

```ts
{
  id: 'identificador-unico',
  role: 'CARGO REAL',
  company: 'EMPRESA REAL',
  period: 'PERÍODO REAL',
  responsibilities: ['RESPONSABILIDADE REAL'],
  technologies: ['TECNOLOGIA UTILIZADA'],
}
```

## Projetos e imagens

Adicione objetos à lista `projects`, respeitando a interface `Project`. As categorias aceitas são Frontend, Full Stack, Automação e Mobile. O filtro Todos reúne os itens. Uma categoria sem itens exibe uma mensagem apropriada.

Coloque imagens reais em `public/images/` e use um caminho relativo, por exemplo `image: 'images/meu-projeto.webp'`, com `imageAlt` descritivo. O prefixo do GitHub Pages é aplicado automaticamente. Não inclua `public/` no caminho. Sem imagem, ou se seu carregamento falhar, aparece a composição gráfica. Essas artes são conceitos visuais, não capturas de aplicações entregues.

Antes de publicar projetos reais, revise também os textos de introdução demonstrativa em `src/App.tsx`. O status de cada card e modal vem do campo `status`. Links vazios ficam ocultos. Os nomes Flora, Flow e Orbit são títulos ilustrativos editáveis.

## Currículo

Coloque o PDF em `public/curriculo.pdf` e configure `resume: 'curriculo.pdf'` em `profile.ts`. O botão de download só aparece quando esse campo está preenchido. Verifique se o arquivo existe antes de publicar. O PDF não foi fornecido nesta versão.

## Terminal

Abra pelo botão Terminal na barra inferior. Ele começa fechado em todas as telas e não recebe foco automaticamente.

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

## Placeholders a preencher

- E-mail, GitHub e LinkedIn.
- WhatsApp, se desejar.
- PDF do currículo e respectivo caminho.
- Conteúdo real dos três projetos: nome, escopo, participação, status, tecnologias, funcionalidades, decisões, imagens e URLs.
- Stack do jogo mobile e tecnologias de banco de dados, ainda a confirmar.
- Histórico profissional, somente quando houver informações completas.
- Revisão final dos textos de apresentação e das referências a conteúdo demonstrativo.

## Acessibilidade e validação

HTML semântico, link para pular ao conteúdo, foco visível, labels, menu recolhível com Escape e retorno de foco, modal nativo com contenção de foco e Escape, respeito a `prefers-reduced-motion` e feedback de cópia de e-mail. Contatos são links reais quando configurados; não há formulário de envio simulado.

Os testes cobrem navegação, filtros e categoria vazia, abertura/fechamento de detalhes, comandos, proteção contra nomes herdados, histórico, autocompletar, tema e falhas de armazenamento, menu e cópia de e-mail com sucesso/erro. JSDOM não calcula layout nem comprova contraste, foco nativo do modal ou renderização em dispositivos.

Nesta entrega, o navegador controlável não estava disponível. A revisão visual em desktop/celular e a execução real do workflow no GitHub continuam pendentes. Antes da publicação, confira em navegador real a 390 px e em desktop: ausência de rolagem horizontal, leitura dos cards, menu, Tab/Escape no modal e terminal. O deploy depende da configuração do seu repositório.
