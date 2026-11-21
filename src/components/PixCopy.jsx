import { useState } from "react";
import "./PixCopy.css";

export default function PixCopy({ pixKey }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(pixKey);
    } catch {
      // plano B para navegadores antigos
      const el = document.createElement("textarea");
      el.value = pixKey;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

  return (
    <button
      type="button"
      className={`pix-copy btn ${copied ? "is-copied" : ""}`}
      onClick={handleCopy}
    >
      {copied ? "Chave copiada! ✓" : "Copiar chave Pix"}
    </button>
  );
}