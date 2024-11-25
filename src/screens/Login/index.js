import React from "react";
import { styles } from "./styles.js";
import { useNavigate } from "react-router-dom";


function Login() {

  const navigate = useNavigate(); 

  const handleLogin = () => {
    // Aqui você pode adicionar lógica de autenticação
    navigate("./screens/Register"); // Redireciona para a página inicial
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.logo}>📚 Biblioteca</div>
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
      <main style={styles.formContainer}>
        <h1 style={styles.title}>Login</h1>
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
              placeholder="Digite sua senha"
              required
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>
            Entrar
          </button>
        </form>
        <a href="#cadastro" style={styles.registerLink}onClick={handleLogin}>
          Cadastre-se
        </a>
      </main>
    </div>
  );
}

export default Login;
