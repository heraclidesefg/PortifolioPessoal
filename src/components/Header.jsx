import logo from "../assets/react.svg";

export default function Header() {
  return (
    <header className="cabecalho">
       <a className="logo" href="#inicio">
        <img
          src={logo}
          alt="Logo do portfólio"
          className="logo-imagem"
        />

        <span className="logo-texto">
          MeuPortfólio<span className="ponto">.</span>
        </span>
      </a>

      <nav aria-label="Navegação principal">
        <a href="#sobre">Sobre</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  );
}