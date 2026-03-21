# GUIA IMPLEMENTAÇÃO - SISTEMA FONT MINECRAFT

## 📋 RESUMO DO QUE FOI FEITO

Foi criado um sistema completo de fontes Minecraft-style com:

- ✅ **VT323** - Font pixel retro para tiêu đề
- ✅ **JetBrains Mono** - Font monospace sạch para dados técnicos
- ✅ **Plus Jakarta Sans** - Font modern para conteúdo
- ✅ **Press Start 2P** - Font pixelada ultra para headings grandes
- ✅ Arquivo principal: `src/styles/fonts-minecraft.css`
- ✅ Tailwind integrado com novas famílias de font
- ✅ Classes CSS prontas para uso

---

## 🚀 PRÓXIMOS PASSOS - APLICAR FONTS NOS COMPONENTES

### 1️⃣ SERVER STATUS COMPONENT

**Arquivo:** `src/components/MinecraftDashboard/ServerStatus.jsx`

**Mudar de inline styles para CSS classes:**

```jsx
// ANTES (com inline styles):
<h1 style={{
  fontFamily: '"Press Start 2P", monospace',
  fontSize: "clamp(18px, 2.2vw, 28px)",
  letterSpacing: "1px",
  color: "rgba(255,255,255,.92)",
  textShadow: "0 0 20px rgba(255,79,216,.25)",
  margin: 0,
}}>
  SERVER STATUS
</h1>

// DEPOIS (com classes CSS):
<h1 className="server-status-title">
  SERVER STATUS
</h1>
```

**Todos os elementos do ServerStatus:**

```jsx
// Título principal
<h1 className="server-status-title">SERVER STATUS</h1>

// Descrição
<p className="status-description">
  Kiểm tra trạng thái server và thông tin phiên bản.
</p>

// Label de Auto-update
<div className="auto-update-label">Tự động cập nhật mỗi 30 giây</div>

// Status line (OFFLINE/ONLINE)
<div className="status-line">
  <span className="dot" aria-hidden="true"></span>
  <span id="statusText">OFFLINE</span>
</div>

// Mensagem de erro
<div className="error-message">
  <svg>...</svg>
  <span id="errorText">HTTP 404</span>
</div>

// Card labels
<div className="card-label">Trạng thái</div>

// Card values (IPs, versions)
<p className="card-value">astralismc.xyz (1.21+)</p>
<p className="card-value">Phiên bản: 1.21 → 1.21.10</p>

// Toast
<div className={`toast-motto toast ${showToast ? "show" : ""}`}>
  {toastMessage}
</div>
```

---

### 2️⃣ AUTRES SECTIONS (Hero, ServerInfo, GameModes, etc.)

**Arquivo padrão para seções:** `src/components/*.jsx`

```jsx
// Título da seção (GAME MODES, FEATURES, STORE, etc.)
<h2 className="section-title">GAME MODES</h2>

// Descrição da seção
<p className="section-description">
  Nhiều chế độ chơi để bạn không bao giờ chán.
</p>

// Título do card dentro da seção
<h3 className="card-title">Survival RPG</h3>

// Descrição do card
<p className="card-description">
  Sinh tồn cổ điển, nhiệm vụ hằng ngày, boss, dungeon & economy.
</p>
```

---

### 3️⃣ HEADER COMPONENT

**Arquivo:** `src/components/Layout/Header.jsx`

```jsx
// Logo/Brand name
<div className="pixel-title text-xs">AstralisMC</div>

// Nav items
<nav className="... text-xs">
  <a href="#hero">Home</a>
  <a href="#modes">Game Modes</a>
  {/* etc */}
</nav>

// Play button
<button className="btn-glow">▶ Play Now</button>
```

---

### 4️⃣ FOOTER COMPONENT

**Arquivo:** `src/components/Layout/Footer.jsx`

```jsx
// Copyright text - já herda src/styles/index.css
<p>© {new Date().getFullYear()} AstralisMC Network...</p>

// Footer links
<a href="#" className="text-sm hover:text-[#ADD8E6]">Home</a>
```

---

## 📝 CLASSES CSS DISPONÍVEIS

| Classe CSS             | Uso                                               | Font                 | Tamanho                  |
| ---------------------- | ------------------------------------------------- | -------------------- | ------------------------ |
| `.server-status-title` | Título "SERVER STATUS"                            | Press Start 2P/VT323 | clamp(18px, 2.2vw, 28px) |
| `.status-description`  | Descrição do server status                        | Plus Jakarta Sans    | 14px                     |
| `.card-label`          | Label de cards (Status, Java IP, etc.)            | VT323                | 13px                     |
| `.card-value`          | Valor/conteúdo de cards (astralismc.xyz, 1.21.10) | JetBrains Mono       | 14px                     |
| `.status-line`         | Status INLINE/OFFLINE                             | VT323                | 18px                     |
| `.auto-update-label`   | "Tự động cập nhật..."                             | Plus Jakarta Sans    | 12px                     |
| `.error-message`       | Mensagem de erro                                  | JetBrains Mono       | 13px                     |
| `.section-title`       | GAME MODES, FEATURES, STORE, etc.                 | VT323                | 14px                     |
| `.section-description` | Descrição de section                              | Plus Jakarta Sans    | 13px                     |
| `.card-title`          | Título dentro de card                             | VT323                | 13px                     |
| `.card-description`    | Descrição dentro de card                          | Plus Jakarta Sans    | 12px                     |
| `.pixel-title`         | Classe Tailwind para títulos pixel                | VT323                | Variável                 |
| `.btn-glow`            | Botão glow                                        | VT323                | Variável                 |
| `.toast`               | Toast notification                                | JetBrains Mono       | 13px                     |

---

## 🎨 CSS VARIABLES (Variáveis de CSS)

Definidas em `:root` no `fonts-minecraft.css`:

```css
--font-heading-xl    → Press Start 2P, VT323 (Títulos GRANDES)
--font-heading-md    → VT323 (Títulos médios, subtítulos)
--font-body-mono     → JetBrains Mono (Dados técnicos)
--font-body         → Plus Jakarta Sans (Texto do corpo)
```

**Usar em custom CSS:**

```css
.meu-elemento {
  font-family: var(--font-heading-md);
}
```

---

## 🔧 TAILWIND CLASSES ATUALIZADAS

Agora disponível no `tailwind.config.cjs`:

```jsx
// Títulos grandes
<h1 className="font-pixel">Títulos pixelados grandes</h1>

// Subtítulos e headings
<h2 className="font-minecraft">Subtítulos Minecraft</h2>

// Dados técnicos
<p className="font-mono">astralismc.xyz</p>

// Texto normal
<p className="font-sans">Descrição do jogo</p>
```

---

## 📱 RESPONSIVIDADE

Sistema de fontes inclui media queries para:

- **Tablet (768px)**: Fontes ligeiramente menores
- **Mobile (480px)**: Revisão maior para legibilidade

As mudanças são **automáticas** via `fonts-minecraft.css`.

---

## 🐛 TESTES & VALIDAÇÃO

Após aplicar as mudanças:

1. **Limpar cache do navegador:** `Ctrl+Shift+R`
2. **Verificar console:** Não deve haver erros de font
3. **Testar em múltiplos tamanhos:** Desktop, Tablet, Mobile
4. **Verificar readability:** IPs e versões legíveis mesmo em 12px

---

## 📦 FALLBACK FONTS

Se Google Fonts não carregar:

- VT323 → Courier New
- JetBrains Mono → Courier New
- Plus Jakarta Sans → System fonts (-apple-system, BlinkMacSystemFont, etc.)

---

## 🎯 PRIORITY DE ATUALIZAÇÕES RECOMENDADA

1. **ALTA PRIORIDADE:** ServerStatus.jsx (componente principal)
2. **MÉDIA:** Header, Footer, seções principais
3. **BAIXA:** Cards secundários (Gallery, Contact, etc.)

---

## 💡 DICAS IMPORTANTES

✅ **Use classes em vez de inline styles** - Mais fácil manter
✅ **Combine com Tailwind** - Ex: `className="card-label text-sm"`
✅ **Use CSS variables** - Para custom components
✅ **Teste em dark mode** - Fonts devem ser legíveis em fundo escuro
✅ **Não misture fonts** - Mantenha consistência visual

---

## 🔍 COMO VERIFICAR SE ESTÁ FUNCIONANDO

No DevTools (F12), selecione um elemento e veja:

```
Computed Font: "VT323", Courier New, monospace
Font Size: 13px
Font Weight: 400
```

Se mostrar "Press Start 2P" ou "Plus Jakarta Sans", está tudo correto! ✅

---

## 📞 SUPORTE

Se alguma font não carregar:

1. Verificar se `fonts-minecraft.css` foi importado no `index.html`
2. Verificar console por erros de CORS
3. Testar em incognito/private mode (sem cache)

---

**Status:** ✅ Sistema pronto para uso
**Versão:** 1.0 (2026-03-21)
