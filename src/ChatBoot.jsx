import React, { useState } from "react";

const perguntas = [
  "Quem é a FURIA?",
  "Como posso me tornar fã?",
  "Onde assistir as partidas?",
  "Quem são os jogadores atuais?",
  "Qual a história da FURIA?",
  "Quais títulos a FURIA já ganhou?",
  "Onde fica a sede da FURIA?",
  "Como acompanhar as notícias do time?",
  "Quais jogos a FURIA joga além do CS:GO?",
];

const respostas = {
  "Quem é a FURIA?":
    "A FURIA é um time brasileiro de esports focado em CS:GO e outros jogos.",
  "Como posso me tornar fã?":
    "Você pode nos seguir nas redes sociais e participar da nossa comunidade de fãs.",
  "Onde assistir as partidas?":
    "As partidas são transmitidas ao vivo no YouTube e Twitch oficiais da FURIA.",
  "Quem são os jogadores atuais?":
    "Os jogadores atuais são KSCERATO, arT, yuurih, VINI e chelo.",
  "Qual a história da FURIA?":
    "Fundada em 2017, a FURIA rapidamente se tornou uma potência nos esports brasileiros.",
  "Quais títulos a FURIA já ganhou?":
    "A FURIA venceu vários campeonatos nacionais e internacionais de CS:GO.",
  "Onde fica a sede da FURIA?": "A sede da FURIA fica em São Paulo, Brasil.",
  "Como acompanhar as notícias do time?":
    "Você pode acompanhar as notícias no site oficial e nas redes sociais da FURIA.",
  "Quais jogos a FURIA joga além do CS:GO?":
    "Além do CS:GO, a FURIA também compete em jogos como Valorant e Fortnite.",
};

function ChatBoot() {
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Eai! Ta querendo saber oque hoje?",
    },
  ]);

  function handleClick(pergunta) {
    // adiciona pergunta do usuário
    setMessages((msgs) => [...msgs, { from: "user", text: pergunta }]);

    // resposta do bot após 1s
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        {
          from: "bot",
          text: respostas[pergunta] || "Desculpe, não sei responder.",
        },
      ]);
    }, 1000);
  }

  return (
    <>
      <video
        className="background-video"
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src="/background2.mp4" type="video/mp4" />
        Seu navegador não suporta vídeo.
      </video>
      <img
        src="/chat.png"
        alt="Logo"
        style={{
          width: "920px",
          position: "absolute",
          top: "200px",
          right: "-200px",
          zIndex: 2,
        }}
      />
      <img
        src="/chatboot.gif"
        alt="Animação"
        style={{
          width: "700px",
          height: "200px",
          objectFit: "cover",
          zIndex: 1,
          borderRadius: "10px",
          position: "absolute", // se quiser fixo na tela
          top: "-15px",
          left: "5px",
        }}
      />

      <div
        style={{
          maxWidth: 900,
          margin: "160px 0 0 50px",
          display: "flex",
          gap: 20,
          backgroundColor: "rgba(26, 26, 26, 0.9)",
          borderRadius: 10,
          padding: 20,
          height: "79vh",
          color: "#fff",
          zIndex: 3,
          position: "relative",
        }}
      >
        <div
          style={{
            flex: 2,
            display: "flex",
            flexDirection: "column",
            border: "1px solid #555",
            borderRadius: 10,
            padding: 15,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              marginBottom: 20,
              paddingRight: 10,
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  marginBottom: 12,
                  textAlign: msg.from === "user" ? "right" : "left",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: "8px 12px",
                    borderRadius: 20,
                    backgroundColor: msg.from === "user" ? "#c50000" : "#444",
                    maxWidth: "70%",
                    wordWrap: "break-word",
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Área dos botões - perguntas */}
        <div
          style={{
            flex: 1, // ocupa 1/3 do container
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          {perguntas.map((pergunta) => (
            <button
              key={pergunta}
              onClick={() => handleClick(pergunta)}
              style={{
                padding: "10px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                backgroundColor: "#c50000",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "14px",
                transition: "background-color 0.3s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#7c0404";
                e.target.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#c50000";
                e.target.style.transform = "scale(1)";
              }}
            >
              {pergunta}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
export default ChatBoot;
