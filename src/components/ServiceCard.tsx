const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-[#D4AF37]" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}; 