export default function About({ perfil }) {
  return (
    <section id="sobre" className="secao">
      <p className="sobretitulo">QUEM SOU EU</p>

      <h2>Sobre mim</h2>

      <p>{perfil.sobre}</p>

      <p>{perfil.objetivo}</p>
    </section>
  );
}