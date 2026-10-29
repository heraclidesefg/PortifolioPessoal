export default function Footer({ nome }) {
  return (
    <footer className="rodape">
      <p>
        Desenvolvido por {nome} · 2026
      </p>

      <a href="#inicio">Voltar ao topo ↑</a>
    </footer>
  );
}