import Link from "next/link";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="card text-center max-w-2xl">
        <div className="mb-6">
          <div className="text-8xl mb-4">🔍</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-4">
            404 - Page Not Found
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => router.back()}
            className="btn btn-outline"
          >
            <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Go Back
          </button>
          <Link href="/" className="btn btn-primary">
            <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Go Home
          </Link>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-300 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Quick Links:
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/projects" className="text-cyan-600 dark:text-cyan-400 hover:underline">
              Projects
            </Link>
            <Link href="/certifications" className="text-cyan-600 dark:text-cyan-400 hover:underline">
              Certifications
            </Link>
            <Link href="/about" className="text-cyan-600 dark:text-cyan-400 hover:underline">
              About
            </Link>
            <Link href="/contact" className="text-cyan-600 dark:text-cyan-400 hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
