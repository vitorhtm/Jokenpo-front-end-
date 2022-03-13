import React, { useState } from "react";

import Api from "./Api";
import "./container.css";
import "./Botao";
import Botao from "./Botao";
import { icons } from "./Botao";

function App() {
  const [jogadausuario, setJogadaUsuario] = useState("");
  const [jogadapc, setJogadaPc] = useState("");
  const [contadorPc, setContadorPC] = useState(0);
  const [contadorUsuario, setContadorUsario] = useState(0);
  const [mensagem, setMensagem] = useState("");

  const jogar = async (icon) => {
    const response = await Api.post("/jogar", {
      jogada: icon,
    });

    console.log(response.data);
    setJogadaPc(response.data.pc);

    setTimeout(() => {
      setMensagem(response.data.mensagem);
      if (response.data.vencedor === "VC") {
        setContadorPC(contadorPc + 1);
      }
      if (response.data.vencedor === "PC") {
        setContadorUsario(contadorUsuario + 1);
      }
    }, 500);
    setTimeout(() => {
      const empty = "";
      setJogadaUsuario(empty);
      setMensagem(empty);
      setJogadaPc(empty);
    }, 3000);
  };

  const newGame = () => {
    setContadorPC(0);
    setContadorUsario(0);
  };

  const criaBotao = (item, tipo, selecionado) => {
    return (
      <Botao
        selecionado={selecionado}
        icon={item}
        click={() => {
          if (mensagem) {
            return;
          }
          if (tipo === "usuario") {
            setJogadaUsuario(item);
            jogar(item);
          }
        }}
      ></Botao>
    );
  };

  return (
    <div className="container">
      <div className="div1">
        <div className="contadorpc">{contadorPc}</div>
        <div>USUARIO </div>
        {icons.map((item) =>
          criaBotao(item, "usuario", jogadausuario === item)
        )}
      </div>
      <div className="mensagem">
        {mensagem ? mensagem : "Nova jogada"}
        <div>
          <button className="zerar" onClick={newGame}>
            zerar pontos
          </button>
        </div>
      </div>
      <div className="div2">
        <div className="contadorusuario">{contadorUsuario}</div>
        <div>COMPUTADOR</div>
        {icons.map((item) => criaBotao(item, "PC", jogadapc === item))}
      </div>
    </div>
  );
}
export default App;
