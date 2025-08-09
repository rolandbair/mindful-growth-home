import { X, Download, Share2, Printer } from "lucide-react";
import { useState } from "react";
import { createPortal } from "react-dom";
import ResumeContent from "./ResumeContent";

interface ResumeOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeOverlay = ({ isOpen, onClose }: ResumeOverlayProps) => {
  const [showShareOptions, setShowShareOptions] = useState(false);

  const handlePrint = () => {
    const resume = document.getElementById("resume-content");
    if (!resume) {
      window.print();
      return;
    }

    // Create a print-only root and clone the resume content
    const printRoot = document.createElement("div");
    printRoot.id = "print-root";
    const clone = resume.cloneNode(true) as HTMLElement;
    printRoot.appendChild(clone);
    document.body.appendChild(printRoot);

    // Add a class to scope print CSS
    document.documentElement.classList.add("printing");

    const cleanup = () => {
      document.documentElement.classList.remove("printing");
      if (printRoot.parentNode) printRoot.parentNode.removeChild(printRoot);
    };

    // Ensure cleanup runs even if afterprint doesn't fire
    const handleAfterPrint = () => {
      cleanup();
      window.removeEventListener("afterprint", handleAfterPrint);
    };
    window.addEventListener("afterprint", handleAfterPrint);

    // Give the DOM a moment to attach before printing
    setTimeout(() => {
      window.print();
      // Fallback cleanup
      setTimeout(() => handleAfterPrint(), 1000);
    }, 50);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Roland Bair - Lebenslauf',
          text: 'Schulentwickler & Digitalisierungsberater',
          url: window.location.origin + '/ueber-mich'
        });
      } catch (err) {
        console.log('Error sharing:', err);
        setShowShareOptions(true);
      }
    } else {
      setShowShareOptions(true);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.origin + '/ueber-mich');
      setShowShareOptions(false);
      // Could add a toast notification here
    } catch (err) {
      console.log('Failed to copy to clipboard:', err);
    }
  };

  if (!isOpen) return null;

  const overlay = (
    <div className="resume-overlay-container fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Overlay */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
          {/* Header with controls */}
          <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between no-print">
            <h2 className="text-xl font-semibold text-gray-900">Lebenslauf - Roland Bair</h2>
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrint}
                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                title="Drucken"
              >
                <Printer size={20} />
              </button>
              <div className="relative">
                <button
                  onClick={handleShare}
                  className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  title="Teilen"
                >
                  <Share2 size={20} />
                </button>
                {showShareOptions && (
                  <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-2 min-w-[150px]">
                    <button
                      onClick={copyToClipboard}
                      className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                    >
                      Link kopieren
                    </button>
                    <button
                      onClick={() => window.open(`mailto:?subject=Lebenslauf - Roland Bair&body=Hier ist der Link zum Lebenslauf: ${window.location.origin}/ueber-mich`)}
                      className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                    >
                      Per E-Mail teilen
                    </button>
                  </div>
                )}
              </div>
              <button
                onClick={onClose}
                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                title="Schließen"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="overflow-y-auto max-h-[calc(90vh-80px)] p-6">
            <ResumeContent isPreview={false} />
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(overlay, document.body);
};

export default ResumeOverlay;
