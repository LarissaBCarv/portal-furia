import { Link } from "react-router-dom";
import "./index.css";

function Home() {
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
        <source src="/furia.mp4" type="video/mp4" />
        Seu navegador não suporta vídeo.
      </video>
      <img
        src="/letreiro.gif"
        alt="Logo"
        style={{
          width: "1000px",
          position: "absolute",
          top: "250px",
          left: "60%",
          transform: "translateX(-50%)",
          zIndex: 2,
        }}
      />

      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: "10px 0",
          zIndex: 10,
        }}
      >
        <Link to="/chat" className="link-button">
          ChatBoot
        </Link>
        <Link to="/jogos" className="link-button">
          Próximos Jogos
        </Link>
        <Link to="/estatisticas" className="link-button">
          Notícias
        </Link>
        <Link to="/contato" className="link-button">
          Página do Fã
        </Link>
      </div>
    </>
  );
}

export default Home;
