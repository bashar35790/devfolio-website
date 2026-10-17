"use client";

import React, { useState } from "react";
import { FaExternalLinkAlt, FaDownload, FaFilePdf } from "react-icons/fa";
import Magnetic from "./Magnetic";

interface PdfPreviewProps {
  previewUrl: string;
  viewUrl: string;
  downloadUrl: string;
  title: string;
}

const PdfPreview = ({ previewUrl, viewUrl, downloadUrl, title }: PdfPreviewProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="glass rounded-3xl border border-border-subtle shadow-2xl overflow-hidden">
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 md:p-6 border-b border-border-subtle">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
            <FaFilePdf className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-semibold text-text-main">{title}</p>
            <p className="text-[10px] uppercase tracking-widest text-text-muted">
              PDF Document
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Magnetic range={20} strength={0.3}>
            <a
              href={viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary py-2 px-5 text-xs"
            >
              <FaExternalLinkAlt className="w-3 h-3" />
              Open in Drive
            </a>
          </Magnetic>
          <Magnetic range={20} strength={0.3}>
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary py-2 px-5 text-xs"
            >
              <FaDownload className="w-3 h-3" />
              Download
            </a>
          </Magnetic>
        </div>
      </div>

      {/* Viewer */}
      <div className="relative w-full h-[70vh] min-h-[420px] bg-bg-section">
        {!loaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 pointer-events-none">
            <div className="w-10 h-10 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
            <p className="text-xs uppercase tracking-widest text-text-muted">
              Loading document…
            </p>
          </div>
        )}
        <iframe
          src={previewUrl}
          title={title}
          loading="lazy"
          allow="autoplay"
          onLoad={() => setLoaded(true)}
          className="relative w-full h-full border-0"
        />
      </div>

      {/* Fallback */}
      <div className="p-4 md:p-5 border-t border-border-subtle text-center">
        <p className="text-text-muted text-xs">
          Document not loading?{" "}
          <a
            href={viewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline"
          >
            Open it directly in Google Drive
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default PdfPreview;
