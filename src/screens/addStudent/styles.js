export const styles = {
    container: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#f8f8f8",
    },
    header: {
      position: "absolute",
      top: 0,
      width: "97.2%",
      backgroundColor: "#a3dbe0",
      padding: "10px 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    },
    logo: {
      display: "flex",
      alignItems: "center",
      fontSize: "18px",
      fontWeight: "bold",
    },
    nav: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "30px", // Espaçamento entre os links
    },
    navLink: {
      textDecoration: "none",
      color: "#333",
      fontWeight: "bold",
      fontSize: "16px",
      padding: "5px 10px",
      borderRadius: "4px",
      transition: "background-color 0.3s ease",
      cursor: "pointer",
    },
    searchIcon: {
      fontSize: "20px",
      cursor: "pointer",
    },
    formContainer: {
      backgroundColor: "#fff",
      padding: "50px 40px",
      borderRadius: "8px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      width: "600px", // Mais largo para acomodar duas colunas de inputs
      marginTop: "100px", // Para evitar sobreposição com o header
    },
    title: {
      marginBottom: "20px",
      height: "8vh",
      fontSize: "24px",
      fontWeight: "bold",
    },
    formRow: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "15px",
    },
    formGroup: {
      width: "48%", // Para que dois inputs caibam lado a lado
    },
    input: {
      width: "100%",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "25px",
      fontSize: "16px",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    },
    button: {
      width: "25%",
      padding: "10px",
      backgroundColor: "#76c1d3",
      border: "none",
      borderRadius: "25px",
      color: "f2f2f2",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
      marginTop: "35px",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#5a9aa9", // Cor de fundo ao passar o mouse
    },
  };
  