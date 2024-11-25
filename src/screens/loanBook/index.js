import React, { useState } from "react";
import { styles } from "./styles"; // Import your styles

function LoanBook() {
  const [renovar, setRenovar] = useState(false);

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

      <div style={styles.emprestimoContainer}>
        <h2>Aluno</h2>
        <div style={styles.tabBar}>
          <button style={styles.tabButton}>Dados</button>
          <button style={styles.activeTabButton}>Empréstimo</button>
          <button style={styles.tabButton}>Histórico</button>
        </div>

        <div style={styles.formSection}>
          {/* Livro em Posse e Data de Devolução */}
          <div style={styles.formRow}>
            <div style={styles.formField}>
              <label>Livro em Posse:</label>
              <input type="text" placeholder="Livro em Posse" style={styles.input} />
            </div>
            <div style={styles.formField}>
              <label>Data de Devolução:</label>
              <input type="date" placeholder="DD/MM/AAAA" style={styles.input} />
            </div>
          </div>

          {/* Deseja Renovar o Empréstimo */}
          <div style={styles.formRow}>
            <p>Deseja Renovar o empréstimo?</p>
            <div style={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  value="sim"
                  checked={renovar === true}
                  onChange={() => setRenovar(true)}
                />
                Sim
              </label>
              <label>
                <input
                  type="radio"
                  value="nao"
                  checked={renovar === false}
                  onChange={() => setRenovar(false)}
                />
                Não
              </label>
            </div>
          </div>

          {/* Nova Data de Devolução */}
          {renovar && (
            <div style={styles.formRow}>
              <div style={styles.formField}>
                <label>Nova data de devolução:</label>
                <input type="date" placeholder="DD/MM/AAAA" style={styles.input} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoanBook;
