"use client";
import { useState, useRef, useEffect, useCallback } from "react";

const WORD_LIST = ["cascade", "nostalgie", "volcan", "symphonie", "algorithme"];

function getDailyWord() {
  const day = Math.floor(Date.now() / 86400000);
  return WORD_LIST[day % WORD_LIST.length];
}

function getDayNumber() {
  const origin = Math.floor(new Date("2024-01-01").getTime() / 86400000);
  return Math.floor(Date.now() / 86400000) - origin + 1;
}

const DAILY_WORD = getDailyWord();
const DAY_NUMBER = getDayNumber();

export default function Home() {
  const [guesses, setGuesses] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [won, setWon] = useState(false);
  const [error, setError] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [showShare, setShowShare] = useState(false);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => { inputRef.current?.focus(); }, []);

  const getColor = (score) => {
    if (score >= 950) return "#ff2d55";
    if (score >= 700) return "#ff6b35";
    if (score >= 450) return "#ffa500";
    if (score >= 250) return "#ffd60a";
    if (score >= 100) return "#7ecba1";
    return "#4a5568";
  };

  const getHeat = (score) => {
    if (score >= 950) return { emoji: "🔥", label: "BRÛLANT" };
    if (score >= 700) return { emoji: "♨️", label: "CHAUD" };
    if (score >= 450) return { emoji: "🌡️", label: "TIÈDE" };
    if (score >= 250) return { emoji: "🌤️", label: "FRAIS" };
    if (score >= 100) return { emoji: "❄️", label: "FROID" };
    return { emoji: "🧊", label: "GLACIAL" };
  };

  const buildShareText = useCallback(() => {
    const top = guesses[0]?.score || 0;
    const lines = [
      `🎮 SÉMANTICA #${DAY_NUMBER}`,
      won ? `✅ Trouvé en ${attempts} essai${attempts > 1 ? "s" : ""} !` : `❌ Non trouvé (${attempts} essais)`,
      `🏆 Meilleur : ${top}/1000`,
      ``,
      guesses.slice(0, 5).map(g => {
        const h = getHeat(g.score);
        return `${h.emoji} ${g.word} — ${g.score}`;
      }).join("\n"),
      ``,
      `👉 semantica.vercel.app`,
    ].join("\n");
    return lines;
  }, [guesses, won, attempts]);

  const handleShare = async () => {
    const text = buildShareText();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setShowShare(true);
    }
  };

  const handleGuess = async () => {
    const word = input.trim().toLowerCase();
    if (!word || loading || won) return;
    if (guesses.find(g => g.word === word)) {
      setError("Déjà essayé !");
      return;
    }
    setError("");
    setLoading(true);
    setInput("");
    setAttempts(a => a + 1);

    if (word === DAILY_WORD) {
      const g = { word, score: 1000, rank: 1, known: true, id: Date.now() };
      setGuesses(prev => [g, ...prev].sort((a, b) => b.score - a.score));
      setWon(true);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ word, secretWord: DAILY_WORD }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);

      const g = {
        word,
        score: data.score,
        rank: data.rank,
        known: data.known,
        id: Date.now(),
      };
      setGuesses(prev => [g, ...prev].sort((a, b) => (b.score ?? -1) - (a.score ?? -1)));
    } catch (e) {
      setError("Erreur, réessaie.");
    }
    setLoading(false);
  };

  const handleKey = (e) => { if (e.key === "Enter") handleGuess(); };
  const bestScore = guesses.filter(g => g.score != null)[0]?.score ?? 0;
  const progressPct = Math.min(100, (bestScore / 1000) * 100);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#080810",
      fontFamily: "'Courier New', monospace",
      color: "#ddd",
    }}>
      {/* Ambient */}
      <div style={{
        position: "fixed", top: 0, left: "50%", transform: "translateX(-50%)",
        width: "800px", height: "300px", pointerEvents: "none",
        background: "radial-gradient(ellipse at 50% 0%, rgba(255,107,53,0.07) 0%, transparent 70%)",
      }} />

      <div style={{ maxWidth: "620px", margin: "0 auto", padding: "32px 16px", position: "relative" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <div style={{ fontSize: "10px", letterSpacing: "5px", color: "#444", marginBottom: "10px" }}>
            #{DAY_NUMBER} · JEU SÉMANTIQUE
          </div>
          <div style={{
            fontSize: "clamp(40px, 10vw, 60px)", fontWeight: "900", letterSpacing: "-3px",
            lineHeight: 1,
            background: "linear-gradient(135deg, #ff6b35, #ffd60a 50%, #ff2d55)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            SÉMANTICA
          </div>
          <div style={{ fontSize: "12px", color: "#444", marginTop: "8px", letterSpacing: "2px" }}>
            500 MOTS ASSOCIÉS · TROUVE LE MOT SECRET
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ marginBottom: "28px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "10px", letterSpacing: "2px", color: "#444", marginBottom: "6px" }}>
            <span>TEMPÉRATURE</span>
            <span style={{ color: getColor(bestScore) }}>{bestScore}/1000</span>
          </div>
          <div style={{ height: "4px", background: "rgba(255,255,255,0.05)", borderRadius: "2px", overflow: "hidden" }}>
            <div style={{
              height: "100%", borderRadius: "2px",
              width: `${progressPct}%`,
              background: `linear-gradient(90deg, #7ecba1, #ffd60a, #ff6b35, #ff2d55)`,
              backgroundSize: "1000px 100%",
              backgroundPosition: `${100 - progressPct}% 0`,
              transition: "width 0.5s ease",
            }} />
          </div>
        </div>

        {/* Stats */}
        <div style={{
          display: "flex", justifyContent: "center", gap: "24px",
          marginBottom: "28px", fontSize: "11px", letterSpacing: "2px", color: "#444",
        }}>
          <span>ESSAIS <b style={{ color: "#ddd" }}>{attempts}</b></span>
          <span>CONNUS <b style={{ color: "#ddd" }}>{guesses.filter(g => g.known).length}</b></span>
          <span>INCONNUS <b style={{ color: "#ff6b35" }}>{guesses.filter(g => !g.known).length}</b></span>
        </div>

        {/* Win */}
        {won && (
          <div style={{
            background: "rgba(255,107,53,0.08)", border: "1px solid rgba(255,107,53,0.3)",
            borderRadius: "12px", padding: "20px", marginBottom: "20px", textAlign: "center",
          }}>
            <div style={{ fontSize: "32px", marginBottom: "8px" }}>🎉</div>
            <div style={{ fontWeight: "700", color: "#ff6b35", letterSpacing: "1px" }}>
              TROUVÉ en {attempts} essai{attempts > 1 ? "s" : ""}
            </div>
            <div style={{ fontSize: "12px", color: "#666", margin: "6px 0 16px" }}>
              Le mot était <b style={{ color: "#ffd60a" }}>{DAILY_WORD}</b>
            </div>
            <button onClick={handleShare} style={{
              background: "linear-gradient(135deg, #ff6b35, #ff2d55)",
              border: "none", borderRadius: "8px", padding: "10px 20px",
              color: "#fff", fontFamily: "'Courier New', monospace",
              fontWeight: "700", fontSize: "12px", letterSpacing: "2px", cursor: "pointer",
            }}>
              {copied ? "✓ COPIÉ !" : "📤 PARTAGER"}
            </button>
          </div>
        )}

        {/* Input */}
        {!won && (
          <div style={{ marginBottom: "28px" }}>
            <div style={{ display: "flex", gap: "8px" }}>
              <input
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Entre un mot..."
                disabled={loading}
                autoComplete="off"
                autoCapitalize="none"
                style={{
                  flex: 1,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px", padding: "14px 16px",
                  fontSize: "16px", color: "#ddd", outline: "none",
                  fontFamily: "'Courier New', monospace",
                }}
              />
              <button onClick={handleGuess} disabled={loading || !input.trim()} style={{
                background: loading || !input.trim()
                  ? "rgba(255,107,53,0.2)"
                  : "linear-gradient(135deg, #ff6b35, #ff2d55)",
                border: "none", borderRadius: "8px", padding: "14px 20px",
                color: "#fff", fontSize: "18px", cursor: loading ? "wait" : "pointer",
                minWidth: "56px", transition: "opacity 0.2s",
              }}>
                {loading ? "·" : "→"}
              </button>
            </div>
            {error && <div style={{ color: "#ff6b35", fontSize: "11px", marginTop: "6px", letterSpacing: "1px" }}>{error}</div>}
          </div>
        )}

        {/* Guess list */}
        {guesses.length > 0 && (
          <div>
            <div style={{ fontSize: "10px", letterSpacing: "4px", color: "#333", marginBottom: "12px" }}>
              RÉSULTATS — TRIÉS PAR SCORE
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {guesses.map((g, i) => (
                <div key={g.id} style={{
                  display: "grid",
                  gridTemplateColumns: "36px 1fr auto auto",
                  alignItems: "center", gap: "10px",
                  padding: "10px 14px",
                  background: i === 0 && g.score ? "rgba(255,107,53,0.07)" : "rgba(255,255,255,0.02)",
                  border: `1px solid ${i === 0 && g.score ? "rgba(255,107,53,0.2)" : "rgba(255,255,255,0.05)"}`,
                  borderRadius: "8px",
                  opacity: g.known === false ? 0.5 : 1,
                }}>
                  <div style={{ fontSize: "18px", textAlign: "center" }}>
                    {g.known === false ? "❓" : getHeat(g.score ?? 0).emoji}
                  </div>
                  <div>
                    <div style={{
                      fontWeight: "700", fontSize: "14px", letterSpacing: "0.5px",
                      color: g.known === false ? "#555" : getColor(g.score ?? 0),
                    }}>
                      {g.word}
                    </div>
                    {g.known === false && (
                      <div style={{ fontSize: "10px", color: "#444", marginTop: "1px" }}>mot inconnu</div>
                    )}
                    {g.rank && g.known && g.score < 1000 && (
                      <div style={{ fontSize: "10px", color: "#444", marginTop: "1px" }}>
                        top {g.rank} des mots associés
                      </div>
                    )}
                  </div>
                  {g.known && (
                    <>
                      <div style={{ fontSize: "10px", color: "#444", letterSpacing: "1px" }}>
                        {getHeat(g.score ?? 0).label}
                      </div>
                      <div style={{
                        fontSize: "16px", fontWeight: "900",
                        color: getColor(g.score ?? 0),
                        minWidth: "44px", textAlign: "right",
                      }}>
                        {g.score ?? "—"}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {guesses.length === 0 && (
          <div style={{ textAlign: "center", color: "#222", fontSize: "12px", marginTop: "48px", letterSpacing: "2px" }}>
            {WORD_LIST.length * 500}+ associations · 0 essai
          </div>
        )}

        {/* Share modal fallback */}
        {showShare && (
          <div style={{
            position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)",
            display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100,
          }} onClick={() => setShowShare(false)}>
            <div style={{
              background: "#111", border: "1px solid #333", borderRadius: "12px",
              padding: "24px", maxWidth: "360px", width: "90%",
            }} onClick={e => e.stopPropagation()}>
              <div style={{ fontWeight: "700", marginBottom: "12px", color: "#ff6b35" }}>PARTAGER</div>
              <textarea readOnly value={buildShareText()} style={{
                width: "100%", height: "160px", background: "#0a0a0f",
                border: "1px solid #333", borderRadius: "8px", padding: "12px",
                color: "#ddd", fontFamily: "'Courier New', monospace", fontSize: "12px",
                resize: "none",
              }} />
              <button onClick={() => setShowShare(false)} style={{
                marginTop: "12px", background: "none", border: "1px solid #333",
                borderRadius: "8px", padding: "8px 16px", color: "#666",
                cursor: "pointer", fontFamily: "'Courier New', monospace",
              }}>Fermer</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
