'use client';
import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactPopupProps {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function ContactPopup({ show, onClose, children }: ContactPopupProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#0e0e0e] bg-opacity-10 flex justify-center items-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="bg-white max-w-3xl w-full rounded-lg shadow-lg overflow-auto max-h-[90vh] p-4 relative"
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-black font-bold text-lg"
            >
              ✕
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
