"use client";

import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { getLenis } from "@/lib/lenis";
import PdfPreview from "./PdfPreview";

interface DocumentModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  previewUrl: string;
  viewUrl: string;
  downloadUrl: string;
}

const DocumentModal = ({
  open,
  onClose,
  title,
  previewUrl,
  viewUrl,
  downloadUrl,
}: DocumentModalProps) => {
  useEffect(() => {
    if (!open) return;

    const lenis = getLenis();
    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    lenis?.stop();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      lenis?.start();
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-bg-page/80 backdrop-blur-md"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.6, 0.05, 0.2, 0.9] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto"
            data-lenis-prevent
          >
            <button
              onClick={onClose}
              aria-label="Close document preview"
              className="absolute right-3 top-3 z-10 w-10 h-10 rounded-full bg-bg-section/80 border border-border-subtle text-text-muted hover:text-primary hover:border-primary/30 transition-all flex items-center justify-center cursor-pointer backdrop-blur"
            >
              <FaTimes className="w-4 h-4" />
            </button>

            <PdfPreview
              previewUrl={previewUrl}
              viewUrl={viewUrl}
              downloadUrl={downloadUrl}
              title={title}
              heightClass="h-[65vh] min-h-[400px]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DocumentModal;
