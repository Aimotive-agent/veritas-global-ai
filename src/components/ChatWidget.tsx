"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hello! I'm Veritas AI. Ask me anything about our enterprise AI platform — deployment, security, capabilities, or how we work with your infrastructure." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/.netlify/functions/veritas-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });
      const data = await response.json();
      const reply = data.response || "I'm sorry, I couldn't process that. Please try again.";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "I'm experiencing technical difficulties. Please try again or contact us directly." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-navy text-paper shadow-lg hover:bg-navy-deep transition-all flex items-center justify-center"
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? (
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] max-h-[560px] h-[500px] bg-white border border-line shadow-2xl rounded-xl flex flex-col">
          {/* Header */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-line shrink-0 bg-navy rounded-t-xl">
            <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center shrink-0">
              <svg width="16" height="16" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-paper">Veritas AI</p>
              <p className="text-[11px] text-paper/70">Enterprise AI Assistant</p>
            </div>
          </div>

          {/* Messages */}
          <div ref={chatRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-paper">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] px-4 py-2.5 rounded-lg text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-navy text-paper rounded-br-sm"
                      : "bg-white border border-line text-ink rounded-bl-sm"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-line text-slate text-sm px-4 py-2.5 rounded-lg rounded-bl-sm flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="px-4 py-3 border-t border-line bg-white rounded-b-xl shrink-0">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask about Veritas Global AI..."
                className="flex-1 px-3 py-2 text-sm bg-paper border border-line rounded-lg text-ink placeholder-muted focus:outline-none focus:border-navy transition-colors"
              />
              <button
                onClick={send}
                disabled={loading || !input.trim()}
                className="shrink-0 w-9 h-9 rounded-lg bg-gold text-white flex items-center justify-center hover:bg-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </div>
            <p className="mt-2 text-[10px] text-muted text-center">
              Veritas Global AI — Enterprise Intelligence
            </p>
          </div>
        </div>
      )}
    </>
  );
}
