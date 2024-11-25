import React from "react";
import { styles } from "./styles.js";

function addBook() {
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

      {/* Form */}
      <main style={styles.formContainer}>
        <h1 style={styles.title}>Cadastrar livro</h1>
        <form>
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
              type="text"
              placeholder="Autor"
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <input
              type="data"
              placeholder="Data de publicação 00/00/00"
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <input
              type="number"
              placeholder="Quantidade em estoque"
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <input
              type="text"
              placeholder="Gênero"
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <input
              type="text"
              placeholder="Editora"
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <input
              type="file"
              placeholder="Adicionar capa"
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

export default addBook;
