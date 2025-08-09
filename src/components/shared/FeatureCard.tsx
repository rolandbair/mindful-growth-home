import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: 'default' | 'highlight';
}

const FeatureCard = ({ icon: Icon, title, description, variant = 'default' }: FeatureCardProps) => {
  const cardClasses = variant === 'highlight' 
    ? "bg-white p-8 rounded-xl shadow-lg border-2 border-blue-200 transform hover:scale-105 transition-all duration-200"
    : "bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200";

  const iconClasses = variant === 'highlight'
    ? "w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 flex items-center justify-center"
    : "w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 flex items-center justify-center";

  return (
    <div className={cardClasses}>
      <div className={iconClasses}>
        <Icon size={variant === 'highlight' ? 32 : 24} className="text-white" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{title}</h3>
      <p className="text-gray-600 text-center leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
