import { Bot, MessageCircle, Minimize2, Send, Sparkles, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const SPAKNATION_SYSTEM_PROMPT = `You are Spak, the friendly AI assistant for Spaknation — an elite creative development institution and performing arts academy in Port Harcourt, Rivers State, Nigeria, dedicated to helping kids discover their greatness.

About Spaknation:
- Founded by Frank Robert, a highly acclaimed dance instructor and choreographer with 25+ years of experience
- An Elite Creative Development Academy — not just a dance class, but a development institution
- Headquarters: Port Harcourt, Rivers State, Nigeria
- 8+ years of excellence in performing arts education
- 500+ young champions trained
- 50+ school partners
- Over 200,000 TikTok followers and 50,000 Facebook followers
- Contact: hello@spaknation.com

Programs offered:
1. Ballet – Classical ballet foundation and technique
2. Acrobatics – High-energy tumbling, flips, and acrobatic artistry (Most Popular)
3. Gymnastics – Strength, flexibility, and discipline
4. Hip Hop – Urban dance styles and street performance
5. Music – Vocal training, rhythm, and musical expression
6. Singing – Individual vocal coaching and performance
7. Taekwondo – Martial arts discipline and self-defense
8. Swimming – Competitive swimming training
9. Public Speaking – Confidence, articulation, and presentation skills

Class Schedule:
- Wednesdays: 4:00pm – 6:00pm
- Fridays: 4:00pm – 6:00pm
- Saturdays: 9:00am – 2:00pm
- Summer Holiday School available
- Online classes available

The Spaknation Method™:
S – Structure | P – Presence | A – Artistry | K – Knowledge | N – Nurture | A – Accountability | T – Transformation | I – Identity | O – Opportunity | N – Next-Level Leadership

Core values: Discipline, Integrity, Excellence, Purpose
Zero compromise on child protection. Safe, structured environment.

Be warm, encouraging, and enthusiastic. Keep responses concise (2–4 sentences max). If asked something you don't know, suggest contacting hello@spaknation.com. Always encourage parents to enroll their children.`;

function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm Spak 👋 Ask me anything about our programs, enrollment, or how we can help your child discover their greatness!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const callAI = async (msgHistory) => {
    const apiMessages = msgHistory
      .filter((m) => m.role !== "system")
      .map((m) => ({ role: m.role, content: m.content }));

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "openai/gpt-3.5-turbo", // free/cheap model
          messages: [
            { role: "system", content: SPAKNATION_SYSTEM_PROMPT },
            ...apiMessages,
          ],
          max_tokens: 300,
        }),
      },
    );

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err?.error?.message || `HTTP ${response.status}`);
    }

    const data = await response.json();

    return (
      data?.choices?.[0]?.message?.content ||
      "Sorry, something went wrong. Please email hello@spaknation.com"
    );
  };

  const sendMessage = async (overrideText) => {
    const text = (overrideText ?? input).trim();
    if (!text || isLoading) return;

    const userMsg = { role: "user", content: text };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const reply = await callAI(newMessages);
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
      if (!isOpen) setHasUnread(true);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Oops! Something went wrong. Please reach out to us at hello@spaknation.com 😊",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const QUICK_QUESTIONS = [
    "What programs do you offer?",
    "How do I enroll my child?",
    "What are the class schedules?",
  ];

  return (
    <div className="chat-widget">
      {/* Chat Window */}
      <div className={`chat-window ${isOpen ? "visible" : "hidden"}`}>
        {/* Header */}
        <div className="chat-header">
          <div className="chat-avatar">
            <Bot size={20} color="#fff" />
          </div>
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontWeight: 700,
                color: "#fff",
                fontSize: "0.9rem",
                letterSpacing: 0.3,
              }}
            >
              Spak — AI Assistant
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                marginTop: 2,
              }}
            >
              <div
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#4ADE80",
                }}
              />
              <span
                style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.85)" }}
              >
                Online · Spaknation
              </span>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            style={{
              background: "rgba(255,255,255,0.2)",
              border: "none",
              cursor: "pointer",
              borderRadius: "50%",
              width: 30,
              height: 30,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Minimize2 size={14} color="#fff" />
          </button>
        </div>

        {/* Messages */}
        <div className="chat-messages">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`msg-row ${msg.role === "user" ? "user" : "bot"}`}
            >
              {msg.role === "assistant" && (
                <div className="bot-icon">
                  <Sparkles size={12} color="#fff" />
                </div>
              )}
              <div
                className={`msg-bubble ${msg.role === "user" ? "msg-user" : "msg-bot"}`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="msg-row bot">
              <div className="bot-icon">
                <Sparkles size={12} color="#fff" />
              </div>
              <div
                className="msg-bubble msg-bot"
                style={{
                  display: "flex",
                  gap: 4,
                  alignItems: "center",
                  padding: "12px 16px",
                }}
              >
                <div className="typing-dot" />
                <div className="typing-dot" />
                <div className="typing-dot" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Questions */}
        {messages.length <= 1 && (
          <div className="quick-btns">
            {QUICK_QUESTIONS.map((q) => (
              <button
                key={q}
                className="quick-btn"
                onClick={() => sendMessage(q)}
              >
                {q}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="chat-input-row">
          <textarea
            ref={inputRef}
            className="chat-input"
            rows={1}
            placeholder="Ask about programs, enrollment..."
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              e.target.style.height = "auto";
              e.target.style.height =
                Math.min(e.target.scrollHeight, 90) + "px";
            }}
            onKeyDown={handleKey}
          />
          <button
            className="send-btn"
            onClick={() => sendMessage()}
            disabled={!input.trim() || isLoading}
          >
            <Send size={15} color="#fff" />
          </button>
        </div>
        <div className="chat-powered">Powered by AI</div>
      </div>

      {/* Toggle Button */}
      <button className="chat-toggle" onClick={() => setIsOpen((o) => !o)}>
        {isOpen ? (
          <X size={24} color="#fff" />
        ) : (
          <MessageCircle size={26} color="#fff" fill="rgba(255,255,255,0.3)" />
        )}
        {hasUnread && !isOpen && <div className="chat-unread">1</div>}
      </button>
    </div>
  );
}

export default AIChatbot;
