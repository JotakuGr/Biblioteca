import React from "react";
import { styles } from "./styles.js";
//import { useNavigate } from "react-router-dom";


function Register() {
  
  //const navigate = useNavigate();

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
        <h1 style={styles.title}>Registrar-se</h1>
        <form>
          <div style={styles.formGroup}>
            <input
              type="email"
              placeholder="Digite seu email"
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <input
              type="password"
              placeholder="Digite uma senha"
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <input
              type="password"
              placeholder="Confirmar senha"
              required
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>
            Entrar
          </button>
        </form>
      </main>
    </div>
  );
}

export default Register;
