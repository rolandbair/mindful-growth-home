interface CTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref?: string;
  onButtonClick?: () => void;
  variant?: 'default' | 'gradient';
}

const CTA = ({ 
  title, 
  description, 
  buttonText, 
  buttonHref, 
  onButtonClick,
  variant = 'default' 
}: CTAProps) => {
  const baseClasses = "py-20 text-center";
  const bgClasses = variant === 'gradient' 
    ? "bg-gradient-to-br from-blue-50 via-white to-purple-50"
    : "bg-gray-50";

  const handleClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else if (buttonHref) {
      window.location.href = `mailto:office@schulentwickler.at?subject=${encodeURIComponent(title)}`;
    }
  };

  return (
    <section className={`${baseClasses} ${bgClasses}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{title}</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">{description}</p>
          <button 
            onClick={handleClick}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
