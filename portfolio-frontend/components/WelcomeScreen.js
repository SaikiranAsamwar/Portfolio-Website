import { useEffect, useState } from "react";

export default function WelcomeScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [animateContent, setAnimateContent] = useState(false);

  useEffect(() => {
    // Start content animation after a brief delay
    const contentTimer = setTimeout(() => {
      setAnimateContent(true);
    }, 100);

    // Start fade out after 2 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    // Complete and hide after 3 seconds (giving 1s for fade transition)
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 3000);

    return () => {
      clearTimeout(contentTimer);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-opacity duration-1000 ease-in-out ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className={`text-center space-y-6 px-4 transform transition-all duration-700 ease-out ${
        animateContent ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-95"
      }`}>
        {/* Animated Logo/Icon */}
        <div className="relative inline-block">
          <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-2xl transform transition-all duration-500 hover:scale-110 hover:rotate-3">
            <svg
              className="w-12 h-12 text-white animate-pulse"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              />
            </svg>
          </div>
          {/* Animated glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 rounded-2xl blur-2xl opacity-40 animate-pulse"></div>
          {/* Rotating ring */}
          <div className="absolute inset-0 border-4 border-cyan-400/30 rounded-2xl animate-spin" style={{ animationDuration: "3s" }}></div>
        </div>

        {/* Welcome Text with staggered animation */}
        <div className={`space-y-2 transition-all duration-500 delay-100 ${
          animateContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
              Welcome
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 font-light">
            to my portfolio
          </p>
        </div>

        {/* Name with delayed animation */}
        <div className={`pt-4 transition-all duration-500 delay-200 ${
          animateContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}>
          <p className="text-2xl sm:text-3xl font-bold text-black dark:text-white tracking-tight">
            Saikiran Asamwar
          </p>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mt-2">
            AWS Solutions Architect Associate & DevOps Engineer
          </p>
        </div>

        {/* Enhanced loading indicator with wave animation */}
        <div className={`flex justify-center pt-8 transition-all duration-500 delay-300 ${
          animateContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}>
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full animate-bounce shadow-lg" style={{ animationDelay: "0ms", animationDuration: "1s" }}></div>
            <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full animate-bounce shadow-lg" style={{ animationDelay: "150ms", animationDuration: "1s" }}></div>
            <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full animate-bounce shadow-lg" style={{ animationDelay: "300ms", animationDuration: "1s" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
