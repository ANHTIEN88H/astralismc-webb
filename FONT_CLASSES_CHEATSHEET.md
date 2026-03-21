/\*\*

- ═════════════════════════════════════════════════════════════════════════════
- MINECRAFT FONTS - QUICK REFERENCE CHEAT SHEET
- ═════════════════════════════════════════════════════════════════════════════
-
- Um guia rápido de quais classes usar em cada situação.
- Coloque isso em seu editor ou imprima como referência.
- \*/

/_ ─────────────────────────────────────────────────────────────────────────── _/
/_ 🏁 TÍTULOS GRANDES (H1, Headings principais) _/
/_ ─────────────────────────────────────────────────────────────────────────── _/

<h1 className="server-status-title">SERVER STATUS</h1>
/* Font: Press Start 2P / VT323
   Size: clamp(18px, 2.2vw, 28px)
   Use: Apenas para títulos MÃO (SERVER STATUS, LIVE OVERVIEW) */

/_ Tailwind alternative _/

<h1 className="font-pixel text-xl md:text-2xl">Título Pixelado</h1>

/_ ─────────────────────────────────────────────────────────────────────────── _/
/_ 📋 TÍTULOS SEÇÕES (GAME MODES, FEATURES, STORE, etc.) _/
/_ ─────────────────────────────────────────────────────────────────────────── _/

<h2 className="section-title uppercase tracking-widest">GAME MODES</h2>
/* Font: VT323
   Size: 14px
   Use: Títulos de seções grandes */

/_ Tailwind alternative _/

<h2 className="font-minecraft text-sm font-semibold">SECTION TITLE</h2>

/_ ─────────────────────────────────────────────────────────────────────────── _/
/_ 🎯 CARD LABELS (Rótulos de Cards) _/
/_ ─────────────────────────────────────────────────────────────────────────── _/

<div className="card-label">Trạng thái</div>
<div className="card-label">Java IP</div>
<div className="card-label">Bedrock IP</div>
/* Font: VT323
   Size: 13px
   Letter-spacing: 0.3px
   Use: Labels muito visíveis, mas pequenos */

/_ ─────────────────────────────────────────────────────────────────────────── _/
/_ 📊 CARD VALUES (Dados / IP / Versão) _/
/_ ─────────────────────────────────────────────────────────────────────────── _/

<p className="card-value">astralismc.xyz (1.21+)</p>
<p className="card-value">Phiên bản: 1.21 → 1.21.10</p>
<p className="card-value">Port: 19132</p>
/* Font: JetBrains Mono (Monospace)
   Size: 14px
   Weight: 600 (bold)
   Use: IPs, versões, dados técnicos (MUITO LEGÍVEL) */

/_ Tailwind alternative _/

<p className="font-mono font-semibold text-sm">astralismc.xyz</p>

/_ ─────────────────────────────────────────────────────────────────────────── _/
/_ 🔴 STATUS LINE (OFFLINE / ONLINE) _/
/_ ─────────────────────────────────────────────────────────────────────────── _/

<div className="status-line">
  <span className="dot"></span>
  <span>OFFLINE</span>
</div>
/* Font: VT323
   Size: 18px
   Weight: 700
   Use: Status grande do servidor */

/_ ─────────────────────────────────────────────────────────────────────────── _/
/_ 📝 DESCRIÇÕES (Mô tả, texto explicativo) _/
/_ ─────────────────────────────────────────────────────────────────────────── _/

<p className="status-description">
  Kiểm tra trạng thái server và thông tin phiên bản.
</p>

<p className="section-description">
  Nhiều chế độ chơi để bạn không bao giờ chán.
</p>

<p className="card-description">
  Sinh tồn cổ điển, nhiệm vụ hằng ngày, boss, dungeon & economy.
</p>

/_ Font: Plus Jakarta Sans
Size: 12-14px
Weight: 400 (normal)
Opacity: 0.68 - 0.85
Use: Texto explicativo, mô tả _/

/_ ─────────────────────────────────────────────────────────────────────────── _/
/_ ⏰ AUTO-UPDATE LABEL _/
/_ ─────────────────────────────────────────────────────────────────────────── _/

<div className="auto-update-label">Tự động cập nhật mỗi 30 giây</div>
/* Font: Plus Jakarta Sans
   Size: 12px
   Weight: 400
   Opacity: 0.55 (muito mute)
   Use: Info extra, helper text */

/_ ─────────────────────────────────────────────────────────────────────────── _/
/_ ❌ ERROR MESSAGE _/
/_ ─────────────────────────────────────────────────────────────────────────── _/

<div className="error-message">
  <svg>...</svg>
  <span>HTTP 404</span>
</div>
/* Font: JetBrains Mono
   Size: 13px
   Weight: 500
   Color: rgba(255, 120, 120, 0.95) (vermelho claro)
   Use: Mensagens de erro bem visíveis */

/_ ─────────────────────────────────────────────────────────────────────────── _/
/_ 🎨 BUTTONS _/
/_ ─────────────────────────────────────────────────────────────────────────── _/

<button className="btn-glow">⛏ Copy IP • astralismc.xyz</button>
<button className="pixel-title">▶ Play Now</button>
/_ Font: VT323
Size: Variável (clamp)
Use: Buttons com estilo pixel _/

/_ ─────────────────────────────────────────────────────────────────────────── _/
/_ 🔔 TOAST NOTIFICATION _/
/_ ─────────────────────────────────────────────────────────────────────────── _/

<div className={`toast ${showToast ? "show" : ""}`}>
  {toastMessage}
</div>
/* Font: JetBrains Mono
   Size: 13px
   Weight: 500
   Use: Notificações popup */

/_ ─────────────────────────────────────────────────────────────────────────── _/
/_ 🏷️ GENERIC CLASSES (Fallback) _/
/_ ─────────────────────────────────────────────────────────────────────────── _/

/_ Se precisar de algo não listado acima, use as classes genéricas: _/

<p className="font-pixel">Algo com Press Start 2P</p>
<p className="font-minecraft">Algo com VT323</p>
<p className="font-mono">Algo monospace (JetBrains Mono)</p>
<p className="font-sans">Algo normal (Plus Jakarta Sans)</p>

/_ ─────────────────────────────────────────────────────────────────────────── _/
/_ 🎯 QUICK DECISION TREE _/
/_ ─────────────────────────────────────────────────────────────────────────── _/

/_ É um TITLE grande tipo "SERVER STATUS"? _/
→ Use: className="server-status-title"
→ Font: Press Start 2P / VT323

/_ É um TÍTULO de SECTION tipo "GAME MODES"? _/
→ Use: className="section-title"
→ Font: VT323

/_ É um LABEL de CARD tipo "Java IP"? _/
→ Use: className="card-label"
→ Font: VT323

/_ É um DADO TÉCNICO tipo "astralismc.xyz" ou "1.21.10"? _/
→ Use: className="card-value"
→ Font: JetBrains Mono

/_ É DESCRIÇÃO ou EXPLICAÇÃO? _/
→ Use: className="status-description" ou "section-description" ou "card-description"
→ Font: Plus Jakarta Sans

/_ É um STATUS tipo "OFFLINE" ou "ONLINE"? _/
→ Use: className="status-line"
→ Font: VT323

/_ É um ERRO ou NOTIFICAÇÃO IMPORTANTE? _/
→ Use: className="error-message" ou "toast"
→ Font: JetBrains Mono

/_ ─────────────────────────────────────────────────────────────────────────── _/
/_ 📱 RESPONSIVE BEHAVIOR (Automático) _/
/_ ─────────────────────────────────────────────────────────────────────────── _/

/\* Fonts minecraft.css already handles:

- Mobile (480px): Símilla vs adjustment
- Tablet (768px): Ligeiro ajuste
- Desktop: Tamanho apto \*/

/_ NÃO precisa fazer nada extra - tudo é automático! _/

/_ ─────────────────────────────────────────────────────────────────────────── _/
/_ ✅ CHECKLIST PARA IMPLEMENTAÇÃO _/
/_ ─────────────────────────────────────────────────────────────────────────── _/

□ fonts-minecraft.css foi importado em index.html?
□ tailwind.config.cjs foi atualizado com novas fontFamily?
□ index.css foi atualizado com base font styles?
□ Console do navegador não mostra erros de font?
□ As classes CSS aparecem quando você inspeciona elementos (F12)?
□ Fonte "VT323" aparece em heading elements?
□ Fonte "JetBrains Mono" em card values?
□ Responsive funciona em mobile (480px)?

Se tudo checkado: ✅ Implementação completa!

/_ ─────────────────────────────────────────────────────────────────────────── _/
/_ 💾 SALVAR ISSO COMO REFERÊNCIA _/
/_ ─────────────────────────────────────────────────────────────────────────── _/

Este foi deve ser mantido como referência no projeto.
Coloque um bookmark dele quando estiver editando components!

\*/
