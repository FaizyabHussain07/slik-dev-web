import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-9xl font-bold text-gray-200 dark:text-gray-800 tracking-tight">404</h1>
          <h2 className="text-3xl font-bold tracking-tight text-[#09090b] dark:text-white mt-4 -translate-y-6">Page Not Found</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2 mb-8 max-w-md mx-auto">
            We couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 text-sm font-semibold rounded-full text-white bg-gradient-premium hover:scale-105 transition-transform shadow-lg shadow-emerald-500/20"
          >
            Go back home
          </Link>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
