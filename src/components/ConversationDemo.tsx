"use client";

const ConversationDemo = () => {
  const messages = [
    {
      id: 1,
      sender: "cadia",
      text: "Olá! Sou a Cadia. Vamos fazer seu check-in de treino de hoje? 💪",
    },
    {
      id: 2,
      sender: "user",
      text: "Oi! Sim, acabei de treinar.",
    },
    {
      id: 3,
      sender: "cadia",
      text: "Ótimo! Me conta: qual treino você fez hoje?",
    },
    {
      id: 4,
      sender: "user",
      text: "Treino de peito e tríceps.",
    },
    {
      id: 5,
      sender: "cadia",
      text: "Show! 🔥 E como foi a intensidade? (1 a 5)",
    },
    {
      id: 6,
      sender: "user",
      text: "4",
    },
    {
      id: 7,
      sender: "cadia",
      text: "Anotado! Treino de peito e tríceps concluído com intensidade 4/5. Continue assim! 💪✨",
    },
  ];

  return (
    <div className="max-w-md mx-auto bg-cadia-dark/80 rounded-3xl border border-cadia-cream/10 overflow-hidden shadow-2xl">
      {/* Chat Header */}
      <div className="bg-cadia-primary/10 border-b border-cadia-cream/10 px-6 py-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-cadia-primary flex items-center justify-center">
          <svg
            className="w-5 h-5 text-cadia-dark"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </div>
        <div>
          <h3 className="font-manrope text-cadia-cream font-semibold text-sm">
            Cadia
          </h3>
          <p className="font-inter text-cadia-cream/50 text-xs">
            Assistente de treino
          </p>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="px-4 py-6 space-y-4 min-h-[400px]">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                message.sender === "user"
                  ? "bg-cadia-primary text-cadia-dark rounded-br-md"
                  : "bg-cadia-dark/60 border border-cadia-cream/10 text-cadia-cream rounded-bl-md"
              }`}
            >
              <p className="font-inter text-sm leading-relaxed">
                {message.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Chat Input (visual only) */}
      <div className="border-t border-cadia-cream/10 px-4 py-3 flex items-center gap-2">
        <div className="flex-1 bg-cadia-dark/60 border border-cadia-cream/10 rounded-full px-4 py-2">
          <span className="font-inter text-cadia-cream/30 text-sm">
            Digite sua mensagem...
          </span>
        </div>
        <div className="w-10 h-10 rounded-full bg-cadia-primary flex items-center justify-center flex-shrink-0">
          <svg
            className="w-5 h-5 text-cadia-dark"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ConversationDemo;
