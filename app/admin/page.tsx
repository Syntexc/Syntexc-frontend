"use client";
import { useState } from "react";
import styles from "../login.module.scss";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // Handle login logic here
    if (email !== "admin" && password !== "pass@123") {
    alert("Invalid email or password");
  }
  router.push("/admin/dashboard");
  };
 
  

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>Login</h2>
        <label className={styles.label}>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            required
          />
        </label>
        <label className={styles.label}>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            required
          />
        </label>
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
