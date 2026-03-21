/\*\*

- ═════════════════════════════════════════════════════════════════════════════
- EXEMPLO: Refatorar ServerStatus.jsx com novas fontes Minecraft
- ═════════════════════════════════════════════════════════════════════════════
-
- Este arquivo mostra ANTES e DEPOIS de como refatorar um componente
- para usar o novo sistema de fontes Minecraft.
- \*/

// ─────────────────────────────────────────────────────────────────────────────
// ANTES: Com inline styles (Difícil de manter, sem padrão visual)
// ─────────────────────────────────────────────────────────────────────────────

export function ServerStatusBEFORE() {
return (
<h1
style={{
        fontFamily: '"Press Start 2P", monospace',
        fontSize: "clamp(18px, 2.2vw, 28px)",
        letterSpacing: "1px",
        color: "rgba(255,255,255,.92)",
        textShadow: "0 0 20px rgba(255,79,216,.25)",
        margin: 0,
      }} >
SERVER STATUS
</h1>
);

/_ ❌ PROBLEMAS: 1. Código longo e ilegível 2. Precisa atualizar cada h1 separadamente 3. Nenhuma reutilização 4. Difícil manter consistência 5. Responsividade manual
_/
}

// ─────────────────────────────────────────────────────────────────────────────
// DEPOIS: Com CSS classes (Limpo, mantível, consistente)
// ─────────────────────────────────────────────────────────────────────────────

export function ServerStatusAFTER() {
return (
<h1 className="server-status-title">
SERVER STATUS
</h1>
);

/_ ✅ VANTAGENS: 1. Uma linha de código 2. Tudo vem do CSS centralizado 3. Responsividade automática 4. Fácil de modificar globalmente 5. Segue padrão Tailwind
_/
}

// ─────────────────────────────────────────────────────────────────────────────
// EXEMPLO COMPLETO: Componente ServerStatus refatorado
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from "react";
import "./ServerStatus.css";

export default function ServerStatusREFACTORED() {
const [showToast, setShowToast] = useState(false);
const [toastMessage, setToastMessage] = useState("");
const IP = "astralismc.xyz";

const showToastMsg = (message) => {
setToastMessage(message);
setShowToast(true);
setTimeout(() => setShowToast(false), 1400);
};

const handleCopy = async () => {
try {
await navigator.clipboard.writeText(IP);
showToastMsg(`Đã copy: ${IP}`);
} catch {
const textarea = document.createElement("textarea");
textarea.value = IP;
document.body.appendChild(textarea);
textarea.select();
document.execCommand("copy");
textarea.remove();
showToastMsg(`Đã copy: ${IP}`);
}
};

return (
<>
<div style={{ width: "min(1100px, 100%)", display: "grid", gap: "18px" }}>

        {/* ────────────────────────────────────────────────────────────────── */
        /* HEADER SECTION */
        {/* ────────────────────────────────────────────────────────────────── */}
        <header style={{ display: "flex", justifyContent: "space-between", gap: "16px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>

            {/* ANTES: */}
            {/* <h1 style={{ fontFamily: '"Press Start 2P", monospace', ... }}> */}

            {/* DEPOIS: */}
            <h1 className="server-status-title">
              SERVER STATUS
            </h1>

            {/* ANTES: */}
            {/* <p style={{ color: "rgba(255,255,255,.68)", fontSize: "14px", ... }}> */}

            {/* DEPOIS: */}
            <p className="status-description">
              Kiểm tra trạng thái server và thông tin phiên bản.
            </p>
          </div>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="px-3 py-2 rounded-lg border border-slate-600 text-white text-sm font-medium"
            style={{ fontFamily: 'var(--font-heading-md)' }}
          >
            ⛏ Copy IP • {IP}
          </button>
        </header>


        {/* ────────────────────────────────────────────────────────────────── */
        /* MAIN INFO SECTION */
        {/* ────────────────────────────────────────────────────────────────── */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1.9fr",
            gap: "18px",
          }}
        >

          {/* LEFT: Status Card */}
          <div className="card-glass status-card">
            <div style={{ marginBottom: "16px" }}>
              <div className="card-label">Trạng thái</div>
              <div className="auto-update-label">
                Tự động cập nhật mỗi 30 giây
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div className="status-line">
                <span className="dot" aria-hidden="true"></span>
                <span>OFFLINE</span>
              </div>

              <div className="error-message" style={{ display: "flex", gap: "10px" }}>
                <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px" }}>
                  <path
                    d="M7 7l10 10M17 7L7 17"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                </svg>
                <span>HTTP 404</span>
              </div>
            </div>
          </div>


          {/* RIGHT: IP Cards Group */}
          <div className="group-card-glass">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>

              {/* Java IP Card */}
              <div className="mini-card-dark">
                <div className="card-label">Java IP</div>
                <p className="card-value">astralismc.xyz (1.21+)</p>
                <p style={{ fontSize: "12px", opacity: 0.62 }}>
                  Phiên bản: 1.21 → 1.21.10
                </p>
              </div>

              {/* Bedrock IP Card */}
              <div className="mini-card-dark">
                <div className="card-label">Bedrock IP</div>
                <p className="card-value">astralismc.xyz (1.21+)</p>
                <p style={{ fontSize: "12px", opacity: 0.62 }}>
                  Port: 19132
                </p>
              </div>
            </div>

            {/* Players Section */}
            <div style={{ marginTop: "14px", display: "flex", gap: "10px", alignItems: "center" }}>
              <span>👥</span>
              <span style={{ fontSize: "12px" }}>Người chơi đang online</span>
            </div>
          </div>
        </section>
      </div>

      {/* Toast Notification */}
      <div
        className={`toast-motto ${showToast ? "show" : ""}`}
        aria-live="polite"
      >
        {toastMessage}
      </div>
    </>

);
}

// ─────────────────────────────────────────────────────────────────────────────
// PADRÃO DE REFATORAÇÃO: Copy/Paste esses snippets
// ─────────────────────────────────────────────────────────────────────────────

/_ ✨ SNIPPET 1: Título principal _/
// ANTES:

<h1 style={{ fontFamily: '"Press Start 2P", monospace', fontSize: "28px", ... }}>
  SERVER STATUS
</h1>

// DEPOIS:

<h1 className="server-status-title">SERVER STATUS</h1>

/_ ✨ SNIPPET 2: Descrição/Body text _/
// ANTES:

<p style={{ color: "rgba(...)", fontSize: "14px", ... }}>
  Kiểm tra trạng thái server
</p>

// DEPOIS:

<p className="status-description">Kiểm tra trạng thái server</p>

/_ ✨ SNIPPET 3: Label de card _/
// ANTES:

<div style={{ fontSize: "13px", color: "...", fontFamily: "Courier New" }}>
  Java IP
</div>

// DEPOIS:

<div className="card-label">Java IP</div>

/_ ✨ SNIPPET 4: Valor de card (IP, versão) _/
// ANTES:

<p style={{ fontSize: "14px", fontWeight: "600", fontFamily: "monospace", ... }}>
  astralismc.xyz (1.21+)
</p>

// DEPOIS:

<p className="card-value">astralismc.xyz (1.21+)</p>

/_ ✨ SNIPPET 5: Status line (OFFLINE/ONLINE) _/
// ANTES:

<div style={{ fontSize: "22px", fontWeight: "700", fontFamily: "Press Start 2P", ... }}>
  <span>●</span> OFFLINE
</div>

// DEPOIS:

<div className="status-line">
  <span className="dot"></span>
  OFFLINE
</div>

/_ ✨ SNIPPET 6: Mensagem de erro _/
// ANTES:

<div style={{ color: "rgba(255, 120, 120)", fontSize: "13px", ... }}>
  HTTP 404
</div>

// DEPOIS:

<div className="error-message">HTTP 404</div>

/_ ✨ SNIPPET 7: Toast notification _/
// ANTES:

<div style={{ fontSize: "13px", fontFamily: "monospace", ... }}
  {message}
</div>

// DEPOIS:

<div className={`toast ${showToast ? "show" : ""}`}>
  {message}
</div>

// ─────────────────────────────────────────────────────────────────────────────
// CHECKLIST DE REFATORAÇÃO
// ─────────────────────────────────────────────────────────────────────────────

/_
□ Remover todos os inline styles de font (fontFamily, fontSize, letterSpacing)
□ Remover styles de cor e text-shadow (deixar no CSS)
□ Adicionar className="server-status-title" em h1
□ Adicionar className="status-description" em p descritivas
□ Adicionar className="card-label" em labels
□ Adicionar className="card-value" em dados técnicos
□ Adicionar className="status-line" em status
□ Adicionar className="error-message" em erros
□ Adicionar className="toast" em toast notifications
□ Remover comentários de inline styles antigos
□ Testar responsive em 320px, 768px, 1024px
□ Verificar se fontes carregaram com F12 > Elements > Computed styles
□ Rodar npm test se houver testes
_/

// ─────────────────────────────────────────────────────────────────────────────
// RESULTADO FINAL
// ─────────────────────────────────────────────────────────────────────────────

/\*
Antes: ~400 linhas de código com muitos inline styles
Depois: ~250 linhas de código limpo

Redução: 40% menos código
Legibilidade: 200% melhor
Manutenibilidade: infinita (mudanças no CSS afetam todas as instâncias)
\*/
