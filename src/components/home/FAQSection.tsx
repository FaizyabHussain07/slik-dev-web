import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "What exactly is Slik?",
    answer: "Slik is an open-source CLI tool that scaffolds complete applications in under 60 seconds. Unlike other boilerplates, Slik supports multiple frameworks (Next.js, React, HTML) and multiple UI themes (Bento, Frost, Mono) so you can choose the path that fits your project best."
  },
  {
    question: "How do I install the create-slik cli?",
    answer: "You don't need to install it globally. Simply run 'npx create-slik@latest' in your terminal, and it will guide you through the interactive setup process."
  },
  {
    question: "Is Slik an open-source SaaS boilerplate?",
    answer: "Yes, Slik is 100% open-source and free to use. It provides a robust SaaS starter kit inspired by premium boilerplates, but without the cost. You can customize every part of the generated code."
  },
  {
    question: "Which frameworks and themes are supported?",
    answer: "Currently, Slik supports Next.js (App Router), Vite + React, and Vanilla HTML/CSS. For each framework, you can choose from three premium themes: Bento (Modern/Grid), Frost (Glassmorphism), and Mono (Minimalist/Developer-first)."
  },
  {
    question: "How does Slik compare to Create T3 App or other boilerplates?",
    answer: "While T3 is great for type-safety, Slik focuses on 'SaaS speed'. We provide handcrafted Bento-style UI components, landing pages, and dashboard layouts out of the box, which many other starters leave for you to build from scratch."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white dark:bg-[#000000] relative z-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[#09090b] dark:text-white">
            Frequently Asked <span className="text-gradient">Questions.</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Common questions about the Slik SaaS starter kit and CLI.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 text-left flex justify-between items-center bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/[0.07] transition-colors"
                aria-expanded={openIndex === idx}
              >
                <span className="font-semibold text-[#09090b] dark:text-gray-200">{faq.question}</span>
                {openIndex === idx ? (
                  <Minus className="w-5 h-5 text-emerald-500" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-400" />
                )}
              </button>
              {openIndex === idx && (
                <div className="px-6 py-5 bg-white dark:bg-transparent text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
