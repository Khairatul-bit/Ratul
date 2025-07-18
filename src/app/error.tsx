'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16 flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        <p className="text-gray-600 mb-6">We apologize for the inconvenience. Please try again.</p>
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-suitmedia-orange text-white rounded hover:bg-opacity-90 transition-colors"
        >
          Try again
        </button>
      </main>
      
      <Footer />
    </div>
  );
}