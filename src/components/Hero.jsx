export default function Hero({ perfil }) {
  return (
    <section id="inicio" className="hero">
      <p className="sobretitulo">PORTFÓLIO DIGITAL</p>

      <h1>
        Olá, eu sou <span>{perfil.nome}</span>
      </h1>

      <h2>{perfil.area}</h2>

      <p className="hero-texto">{perfil.frase}</p>

      <a className="botao" href="#projetos">
        Conheça meus projetos
      </a>
    </section>
  );
}