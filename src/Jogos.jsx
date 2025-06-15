import React, { useState } from "react";

const tituloStyle = {
  color: "#fff",
  fontSize: "32px",
  textShadow: "0 0 8px rgba(160, 3, 3, 0.9)",
  borderBottom: "3px solid #a00303",
  paddingBottom: "10px",
  marginBottom: "20px",
  fontFamily: "Orbitron, sans-serif",
  letterSpacing: "2px",
  textAlign: "center",
  textTransform: "uppercase",
};

const dados = {
  "ESL Pro League": {
    classificacao: [
      { pos: 1, time: "Faze", pontos: 15 },
      { pos: 2, time: "NAVI", pontos: 12 },
      { pos: 3, time: "FURIA", pontos: 9 },
    ],
    proximos: [
      { data: "20/06", hora: "18h", adversario: "NAVI" },
      { data: "22/06", hora: "17h", adversario: "Faze" },
    ],
    resultados: [
      { data: "10/06", adversario: "G2", resultado: "Vitória 2x1" },
      { data: "05/06", adversario: "Vitality", resultado: "Derrota 0x2" },
    ],
  },
  "BLAST Premier": {
    classificacao: [
      { pos: 1, time: "Vitality", pontos: 18 },
      { pos: 2, time: "FURIA", pontos: 12 },
      { pos: 3, time: "G2", pontos: 9 },
    ],
    proximos: [
      { data: "25/06", hora: "19h", adversario: "G2" },
      { data: "28/06", hora: "16h", adversario: "Vitality" },
    ],
    resultados: [
      { data: "12/06", adversario: "NAVI", resultado: "Vitória 2x0" },
      { data: "07/06", adversario: "Faze", resultado: "Derrota 1x2" },
    ],
  },
  "PGL Bucharest 2025": {
    classificacao: [
      { pos: 1, time: "FURIA", pontos: 10 },
      { pos: 2, time: "Pain", pontos: 8 },
      { pos: 3, time: "Legacy", pontos: 6 },
    ],
    proximos: [
      { data: "06/04", hora: "18h", adversario: "Pain" },
      { data: "08/04", hora: "20h", adversario: "Legacy" },
    ],
    resultados: [
      { data: "04/04", adversario: "NAVI", resultado: "Vitória 2x0" },
    ],
  },
  "PGL Astana 2025": {
    classificacao: [
      { pos: 1, time: "FURIA", pontos: 12 },
      { pos: 2, time: "Astralis", pontos: 9 },
      { pos: 3, time: "NAVI", pontos: 7 },
    ],
    proximos: [
      { data: "10/04", hora: "19h", adversario: "Astralis" },
      { data: "12/04", hora: "21h", adversario: "NAVI" },
    ],
    resultados: [
      { data: "07/04", adversario: "FaZe", resultado: "Vitória 2x1" },
    ],
  },
  "IEM Dallas 2025": {
    classificacao: [
      { pos: 1, time: "FaZe", pontos: 15 },
      { pos: 2, time: "NAVI", pontos: 13 },
      { pos: 3, time: "FURIA", pontos: 11 },
    ],
    proximos: [
      { data: "15/04", hora: "18h", adversario: "FaZe" },
      { data: "17/04", hora: "20h", adversario: "NAVI" },
    ],
    resultados: [{ data: "13/04", adversario: "G2", resultado: "Derrota 1x2" }],
  },
  "BLAST.tv Major Austin 2025": {
    classificacao: [
      { pos: 1, time: "NAVI", pontos: 20 },
      { pos: 2, time: "FURIA", pontos: 18 },
      { pos: 3, time: "FaZe", pontos: 15 },
    ],
    proximos: [
      { data: "10/06", hora: "19h", adversario: "NAVI" },
      { data: "12/06", hora: "21h", adversario: "FaZe" },
    ],
    resultados: [{ data: "08/06", adversario: "G2", resultado: "Vitória 2x1" }],
  },
  "Rainbow Six Siege": {
    classificacao: [
      { pos: 1, time: "FURIA", pontos: 25 },
      { pos: 2, time: "CAG Osaka", pontos: 20 },
      { pos: 3, time: "Ninjas", pontos: 18 },
    ],
    proximos: [
      { data: "05/07", hora: "18h", adversario: "CAG Osaka" },
      { data: "10/07", hora: "20h", adversario: "Ninjas" },
    ],
    resultados: [
      { data: "01/07", adversario: "CAG Osaka", resultado: "Vitória 3x2" },
    ],
  },
  Valorant: {
    classificacao: [
      { pos: 1, time: "FURIA", pontos: 14 },
      { pos: 2, time: "Sentinels", pontos: 13 },
      { pos: 3, time: "Cloud9", pontos: 11 },
    ],
    proximos: [
      { data: "20/07", hora: "19h", adversario: "Sentinels" },
      { data: "22/07", hora: "21h", adversario: "Cloud9" },
    ],
    resultados: [
      { data: "15/07", adversario: "100 Thieves", resultado: "Vitória 2x0" },
    ],
  },
  "League of Legends": {
    classificacao: [
      { pos: 1, time: "paiN Gaming", pontos: 30 },
      { pos: 2, time: "FURIA", pontos: 28 },
      { pos: 3, time: "LOUD", pontos: 25 },
    ],
    proximos: [
      { data: "05/08", hora: "18h", adversario: "LOUD" },
      { data: "07/08", hora: "20h", adversario: "paiN Gaming" },
    ],
    resultados: [
      { data: "30/07", adversario: "INTZ", resultado: "Vitória 2x1" },
    ],
  },
  "Rocket League": {
    classificacao: [
      { pos: 1, time: "FURIA", pontos: 40 },
      { pos: 2, time: "K1CK", pontos: 35 },
      { pos: 3, time: "Team BDS", pontos: 30 },
    ],
    proximos: [
      { data: "15/08", hora: "18h", adversario: "K1CK" },
      { data: "17/08", hora: "20h", adversario: "Team BDS" },
    ],
    resultados: [
      { data: "10/08", adversario: "Team Vitality", resultado: "Vitória 3x2" },
    ],
  },
  "Kings League": {
    classificacao: [
      { pos: 1, time: "FC Barcelona Kings", pontos: 45 },
      { pos: 2, time: "FURIA Kings", pontos: 40 },
      { pos: 3, time: "ElXteam", pontos: 35 },
    ],
    proximos: [
      { data: "20/08", hora: "18h", adversario: "FC Barcelona Kings" },
      { data: "22/08", hora: "20h", adversario: "ElXteam" },
    ],
    resultados: [
      { data: "15/08", adversario: "Rayo Kings", resultado: "Vitória 4x1" },
    ],
  },
};

function Jogos() {
  const campeonatos = Object.keys(dados);
  const [campeonatoSelecionado, setCampeonatoSelecionado] = useState(
    campeonatos[0]
  );

  const info = dados[campeonatoSelecionado];

  return (
    <div>
      {/* Background */}
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
        <source src="/backgroungJogos.mp4" type="video/mp4" />
        Seu navegador não suporta vídeo.
      </video>

      <img
        src="/jogos.gif"
        alt="Animação"
        style={{
          width: "700px",
          height: "190px",
          objectFit: "cover",
          zIndex: 1,
          borderRadius: "10px",
          position: "absolute",
          top: "-15px",
          left: "5px",
        }}
      />

      {/* Conteúdo */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          padding: "40px",
          marginTop: "120px",
          fontFamily: "Orbitron, sans-serif",
          color: "black",
        }}
      >
        {/* Seletor */}
        <div
          style={{
            gridColumn: "span 2",
            backgroundColor: "rgba(160, 3, 3, 0.7)",
            padding: "20px",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center", // Alinha verticalmente ao centro
            gap: "20px", // Espaçamento entre os elementos
            justifyContent: "center", // Centraliza horizontalmente (opcional)
            color: "black",
            fontSize: "30px",
            textShadow: "0 0 8px rgba(160, 3, 3, 0.9)",
            paddingBottom: "10px",
            fontFamily: "Orbitron, sans-serif",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          <h2>Escolha o Campeonato</h2>
          <select
            value={campeonatoSelecionado}
            onChange={(e) => setCampeonatoSelecionado(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "none",
              fontSize: "16px",
              marginLeft: 0, // Remova o marginLeft para evitar deslocamento
              minWidth: "200px", // largura mínima para o select, opcional
            }}
          >
            {campeonatos.map((camp) => (
              <option key={camp} value={camp}>
                {camp}
              </option>
            ))}
          </select>
        </div>

        {/* Próximos Jogos */}
        <div
          style={{
            backgroundColor: "rgba(160, 3, 3, 0.7)",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h2 style={tituloStyle}>Próximos Jogos</h2>
          {info.proximos.length > 0 ? (
            <ul>
              {info.proximos.map((jogo, i) => (
                <li key={i}>
                  {jogo.data} às {jogo.hora} - FURIA x {jogo.adversario}
                </li>
              ))}
            </ul>
          ) : (
            <p>Sem jogos futuros</p>
          )}
        </div>

        {/* Resultados Anteriores */}
        <div
          style={{
            backgroundColor: "rgba(160, 3, 3, 0.7)",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h2 style={tituloStyle}>Resultados Anteriores</h2>
          {info.resultados.length > 0 ? (
            <ul>
              {info.resultados.map((jogo, i) => (
                <li key={i}>
                  {jogo.data} - FURIA x {jogo.adversario} - {jogo.resultado}
                </li>
              ))}
            </ul>
          ) : (
            <p>Sem resultados anteriores</p>
          )}
        </div>

        {/* Classificação */}
        <div
          style={{
            backgroundColor: "rgba(160, 3, 3, 0.7)",
            padding: "20px",
            borderRadius: "10px",
            gridColumn: "span 2",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "separate",
              borderSpacing: 0,
              backgroundColor: "#111",
              borderRadius: "12px",
              boxShadow: "0 0 10px black",
              overflow: "hidden",
              fontFamily: "Orbitron, sans-serif",
            }}
          >
            <thead>
              <tr
                style={{
                  background: "linear-gradient(90deg, #a00303, #600000)",
                  color: "white",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  boxShadow: "0 4px 8px rgba(160, 3, 3, 0.7)",
                }}
              >
                <th style={{ padding: "12px 15px", textAlign: "center" }}>
                  Posição
                </th>
                <th style={{ padding: "12px 15px", textAlign: "center" }}>
                  Time
                </th>
                <th style={{ padding: "12px 15px", textAlign: "center" }}>
                  Pontos
                </th>
              </tr>
            </thead>
            <tbody>
              {info.classificacao.map((time, i) => (
                <tr
                  key={time.pos}
                  style={{
                    backgroundColor: i % 2 === 0 ? "#222" : "#1a1a1a",
                    color: "white",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease, color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#a00303";
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      i % 2 === 0 ? "#222" : "#1a1a1a";
                    e.currentTarget.style.color = "white";
                  }}
                >
                  <td style={{ padding: "12px 15px", textAlign: "center" }}>
                    {time.pos}
                  </td>
                  <td style={{ padding: "12px 15px", textAlign: "center" }}>
                    {time.time}
                  </td>
                  <td style={{ padding: "12px 15px", textAlign: "center" }}>
                    {time.pontos}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Jogos;
