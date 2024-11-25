import React from "react";
import { styles } from "./styles"; // Supondo que você tenha um arquivo styles.js
// Supondo que o arquivo de estilos esteja configurado adequadamente

function Books() {
  const livros = [
    // Exemplo de dados de livros (isso seria vindo de uma API ou estado)
    { id: 1, nome: "Livro 1", disponivel: 0 },
    { id: 2, nome: "Livro 2", disponivel: 0 },
    { id: 3, nome: "Livro 3", disponivel: 0 },
    { id: 4, nome: "Livro 4", disponivel: 0 },
    { id: 5, nome: "Livro 5", disponivel: 0 },
    { id: 6, nome: "Livro 6", disponivel: 0 },
    { id: 7, nome: "Livro 7", disponivel: 0 },
    { id: 8, nome: "Livro 8", disponivel: 0 },
  ];

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logo}>
          <span role="img" aria-label="Logo">
            📚
          </span>{" "}
          Biblioteca
        </div>
        <nav style={styles.nav}>
          <a href="#livros" style={styles.navLink}>
            Livros
          </a>
          <a href="#emprestimos" style={styles.navLink}>
            Empréstimos
          </a>
          <a href="#alunos" style={styles.navLink}>
            Alunos
          </a>
        </nav>
        <div style={styles.searchIcon}>🔍</div>
      </header>

      {/* Botão Cadastrar Livro */}
      <div style={styles.actionBar}>
        <button style={styles.cadastrarButton}>Cadastrar Livro</button>
        <button style={styles.filtrarButton}>
          <span role="img" aria-label="Filter">
            🧹
          </span>{" "}
          Filtrar
        </button>
      </div>

      {/* Grid de Livros */}
      <div style={styles.livrosGrid}>
        {livros.map((livro) => (
          <div key={livro.id} style={styles.livroCard}>
            <div style={styles.livroCapa}>Capa do livro</div>
            <div style={styles.livroInfo}>
              <p>{livro.nome}</p>
              <p>Disponível: {livro.disponivel}</p>
            </div>
            <button style={styles.verMaisButton}>Ver mais</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;
