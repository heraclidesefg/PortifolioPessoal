export default function Skills({ habilidades }) {
  return (
    <section id="habilidades" className="secao">
      <p className="sobretitulo">O QUE ESTOU APRENDENDO</p>

      <h2>Minhas habilidades</h2>

      <div className="lista-habilidades">
        {habilidades.map((habilidade) => (
          <article
            className="habilidade"
            key={habilidade.nome}
          >
            <h3>{habilidade.nome}</h3>
            <p>{habilidade.nivel}</p>
          </article>
        ))}
      </div>
    </section>
  );
}