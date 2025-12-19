import "../styles/globals.css";
import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import WelcomeScreen from "../components/WelcomeScreen";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

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

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };

  return (
    <>
      {showWelcome && <WelcomeScreen onComplete={handleWelcomeComplete} />}
      <Head>
        <title>Saikiran Asamwar - AWS DevOps Engineer | Cloud Infrastructure & Automation</title>
        <meta
          name="description"
          content="Saikiran Asamwar — AWS Certified Solutions Architect Associate & DevOps Engineer specializing in cloud infrastructure automation, CI/CD pipelines, Kubernetes, Docker, Terraform, Jenkins, GitHub Actions, and AWS services (EC2, S3, EKS, RDS, Lambda). Expert in Infrastructure as Code and DevOps best practices."
        />
        <meta name="keywords" content="AWS, DevOps, Cloud Engineer, Kubernetes, Docker, Terraform, CI/CD, Jenkins, GitHub Actions, Infrastructure as Code, AWS Solutions Architect" />
        <meta name="author" content="Saikiran Asamwar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
