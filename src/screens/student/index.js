import React from "react";
import { styles } from "./styles.js"; // Import your styles

function Students() {
  const students = [
    // Example student data (this would come from an API or state)
    { id: 1, nome: "Estudante 1", emprestimos: 0 },
    { id: 2, nome: "Estudante 2", emprestimos: 0 },
    { id: 3, nome: "Estudante 3", emprestimos: 0 },
    { id: 4, nome: "Estudante 4", emprestimos: 0 },
    { id: 5, nome: "Estudante 5", emprestimos: 0 },
    { id: 6, nome: "Estudante 6", emprestimos: 0 },
    { id: 7, nome: "Estudante 7", emprestimos: 0 },
    { id: 8, nome: "Estudante 8", emprestimos: 0 },
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

      {/* Button to Register New Student */}
      <div style={styles.actionBar}>
        <button style={styles.cadastrarButton}>Cadastrar Estudante</button>
        <button style={styles.filtrarButton}>
          <span role="img" aria-label="Filter">
            🧹
          </span>{" "}
          Filtrar
        </button>
      </div>

      {/* Grid of Students */}
      <div style={styles.studentsGrid}>
        {students.map((student) => (
          <div key={student.id} style={styles.studentCard}>
            <div style={styles.studentAvatar}>Avatar</div>
            <div style={styles.studentInfo}>
              <p>Nome do usuário: {student.nome}</p>
              <p>Empréstimos: {student.emprestimos}</p>
            </div>
            <button style={styles.verMaisButton}>Ver mais</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Students;
