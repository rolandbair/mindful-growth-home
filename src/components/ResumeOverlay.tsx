import { X, Download, Share2, Printer } from "lucide-react";
import { useState } from "react";
import ResumeContent from "./ResumeContent";

interface ResumeOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeOverlay = ({ isOpen, onClose }: ResumeOverlayProps) => {
  const [showShareOptions, setShowShareOptions] = useState(false);

  const handlePrint = () => {
    // Open a new window for printing
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Lebenslauf - Roland Bair</title>
          <style>
            body { 
              font-family: 'Inter', sans-serif; 
              line-height: 1.6; 
              margin: 0; 
              padding: 20px; 
              background: white;
            }
            .no-print { display: none !important; }
            h1 { 
              font-size: 28px; 
              font-weight: bold; 
              text-align: center; 
              margin-bottom: 10px; 
            }
            h2 { 
              font-size: 18px; 
              font-weight: 600; 
              border-bottom: 2px solid #e5e7eb; 
              padding-bottom: 8px; 
              margin-bottom: 16px; 
            }
            h3 { 
              font-size: 16px; 
              font-weight: 600; 
              margin-bottom: 8px; 
            }
            .contact-info { 
              text-align: center; 
              margin-bottom: 30px; 
              color: #666; 
            }
            .section { 
              margin-bottom: 24px; 
            }
            ul { 
              padding-left: 20px; 
            }
            li { 
              margin-bottom: 8px; 
            }
            .job-title { 
              font-weight: 600; 
            }
            .job-meta { 
              color: #666; 
              font-size: 14px; 
            }
            .grid { 
              display: grid; 
              grid-template-columns: 1fr 1fr; 
              gap: 32px; 
            }
            @media print { 
              .grid { 
                grid-template-columns: 1fr; 
                gap: 16px; 
              }
              /* Page break before Berufserfahrung section */
              .page-break-before-print {
                page-break-before: always;
              }
            }
          </style>
        </head>
        <body>
      `);
      
      // Get the resume content and inject it
      const resumeContent = document.getElementById('resume-content');
      if (resumeContent) {
        printWindow.document.write(resumeContent.innerHTML);
      }
      
      printWindow.document.write('</body></html>');
      printWindow.document.close();
      
      // Set up print event handlers
      printWindow.onload = () => {
        printWindow.print();
        
        // Simply close the print window after printing (no redirect needed)
        printWindow.onafterprint = () => {
          printWindow.close();
        };
        
        // Fallback for browsers that don't support onafterprint
        setTimeout(() => {
          if (!printWindow.closed) {
            printWindow.close();
          }
        }, 1000);
      };
    }
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

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
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
};

export default ResumeOverlay;
