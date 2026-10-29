export default function ProjectCard({ projeto }) {
  return (
    <article className="projeto-card">
      <div className="projeto-topo">
        <span className="projeto-categoria">
          {projeto.categoria}
        </span>

        <span className="projeto-id">
          #{String(projeto.id).padStart(2, "0")}
        </span>
      </div>

      <h3>{projeto.titulo}</h3>

      <p>{projeto.descricao}</p>

      <div className="tecnologias">
        {projeto.tecnologias.map((tecnologia) => (
          <span key={tecnologia}>
            {tecnologia}
          </span>
        ))}
      </div>

      <div className="projeto-rodape">
        <span className="status">
          {projeto.status}
        </span>

        <a
          href={projeto.link}
          target="_blank"
          rel="noreferrer"
          className="link-projeto"
        >
          Ver projeto ↗
        </a>
      </div>
    </article>
  );
}