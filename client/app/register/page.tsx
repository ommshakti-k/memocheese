export default function RegisterPage() {
  return (
    <main style={styles.container}>
      <h1 style={styles.title}>Create your Memocheese account 🧀</h1>

      <form style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Register
        </button>
      </form>

      <p style={styles.text}>
        Already have an account? Login
      </p>
    </main>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fffaf3",
  },
  title: {
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column" as const,
    width: "320px",
  },
  input: {
    padding: "10px",
    marginBottom: "12px",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#ffcc66",
    border: "none",
  },
  text: {
    marginTop: "14px",
    fontSize: "14px",
  },
};
