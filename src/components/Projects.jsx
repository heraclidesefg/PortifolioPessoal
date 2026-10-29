import { useState } from "react";
import ProjectCard from "./ProjectCard";

export default function Projects({ projetos }) {
  const [categoriaAtiva, setCategoriaAtiva] =
    useState("Todos");

  const categorias = [
    "Todos",
    ...new Set(projetos.map((projeto) => projeto.categoria)),
  ];

  const projetosFiltrados =
    categoriaAtiva === "Todos"
      ? projetos
      : projetos.filter(
          (projeto) => projeto.categoria === categoriaAtiva
        );

  return (
    <section id="projetos" className="secao">
      <p className="sobretitulo">MEU TRABALHO</p>

      <h2>Projetos desenvolvidos</h2>

      <p className="introducao-projetos">
        Conheça alguns dos meus projetos e experiências
        durante o aprendizado.
      </p>

      <div className="filtros">
        {categorias.map((categoria) => (
          <button
            key={categoria}
            type="button"
            className={
              categoriaAtiva === categoria
                ? "filtro ativo"
                : "filtro"
            }
            onClick={() => setCategoriaAtiva(categoria)}
          >
            {categoria}
          </button>
        ))}
      </div>

      <div className="lista-projetos">
        {projetosFiltrados.map((projeto) => (
          <ProjectCard
            key={projeto.id}
            projeto={projeto}
          />
        ))}
      </div>

      {projetosFiltrados.length === 0 && (
        <p>Nenhum projeto encontrado nesta categoria.</p>
      )}
    </section>
  );
}