export default function Hero({ perfil }) {
  return (
    <section id="inicio" className="hero">

      <div className="hero-conteudo">

        <p className="sobretitulo">PORTFÓLIO DIGITAL</p>

        <h1>
          Olá, eu sou <span>{perfil.nome}</span>
        </h1>

        <h2>{perfil.area}</h2>

        <p className="hero-texto">
          {perfil.frase}
        </p>

        <div className="botao-contato">

          <a className="botao" href="#projetos">
            Conheça meus projetos
          </a>

          <a
            className="botao"
            href={perfil.instagram}
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

        </div>

      </div>

      <div className="hero-foto">

        <img
          src="/perfilSF.png"
          alt={`Foto de perfil de ${perfil.nome}`}
        />

      </div>

    </section>
  );
}