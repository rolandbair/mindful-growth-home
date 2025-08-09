interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

const ProcessStep = ({ number, title, description, isLast = false }: ProcessStepProps) => {
  return (
    <div className="relative">
      {/* Step Number */}
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
          {number}
        </div>
        {!isLast && (
          <div className="flex-1 h-0.5 bg-gray-300 ml-4"></div>
        )}
      </div>
      
      {/* Content */}
      <div className="pb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ProcessStep;
