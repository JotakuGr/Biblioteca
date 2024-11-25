import React from "react";
import { styles } from "./styles.js";

function addStudent() {
  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        {/* Logo */}
        <div style={styles.logo}>
          <span role="img" aria-label="Logo">
            📚
          </span>{" "}
          Biblioteca
        </div>

        {/* Navigation */}
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

        {/* Search Icon */}
        <div style={styles.searchIcon}>🔍</div>
      </header>

      {/* Formulário de Cadastro de Aluno */}
      <main style={styles.formContainer}>
        <h1 style={styles.title}>Cadastrar Aluno</h1>
        <form>
          <div style={styles.formRow}>
            <div style={styles.formGroup}>
              <input
                type="text"
                placeholder="Nome"
                required
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <input
                type="date"
                placeholder="Data de Nascimento"
                required
                style={styles.input}
              />
            </div>
          </div>
          <div style={styles.formRow}>
            <div style={styles.formGroup}>
              <input
                type="text"
                placeholder="Responsável"
                required
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <input
                type="text"
                placeholder="Telefone"
                required
                style={styles.input}
              />
            </div>
          </div>
          <div style={styles.formGroup}>
            <input
              type="text"
              placeholder="Turma"
              required
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>
            Cadastrar
          </button>
        </form>
      </main>
    </div>
  );
}

export default addStudent;
