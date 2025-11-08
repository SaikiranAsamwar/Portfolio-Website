import "../styles/globals.css";
import Head from "next/head";
import Nav from "../components/Nav";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <>
      <Head>
        <title>Saikiran Asamwar — AWS DevOps Engineer</title>
        <meta
          name="description"
          content="Saikiran Asamwar — AWS DevOps Engineer. Cloud automation, CI/CD, Kubernetes, Docker, Terraform."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default MyApp;
