export default function Contact({ perfil }) {
  return (
    <section id="contato" className="secao contato">
      <p className="sobretitulo">PERFIL PROFISSIONAL</p>

      <h2>Vamos nos conectar?</h2>

      <div className="perfil-contato">
        <div className="avatar">
          {perfil.nome
            .split(" ")
            .map((parte) => parte[0])
            .slice(0, 2)
            .join("")}
        </div>

        <h3>{perfil.nome}</h3>

        <p className="area-contato">{perfil.area}</p>

        <p>{perfil.sobre}</p>

        <p className="objetivo-contato">{perfil.objetivo}</p>

        <div className="contato-acoes">
          <a
            className="botao"
            href={`mailto:${perfil.email}`}
          >
            Entrar em contato
          </a>

          <a
            className="botao botao-secundario"
            href={perfil.github}
            target="_blank"
            rel="noreferrer"
          >
            Acessar GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}