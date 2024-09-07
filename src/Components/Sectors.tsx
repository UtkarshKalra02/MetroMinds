
import { ChevronDown } from "lucide-react";

const sectors = [
  'Agriculture & Cooperation', 
  'Animal Husbandry & Dairying', 
  'Art & Culture', 
  'Chemical & Petrochemical', 
  'Coal & Mine', 
  'Commerce & Industry', 
  'Communications & Information Technology', 
  'Defence', 
  'Education & Training', 
  'Employment & Labour', 
  'Energy & Power', 
  'Environment & Natural Resources'
];

const Sectors = () => {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Sectors</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {sectors.map((sector, index) => (
          <div key={index} className="flex flex-col items-center text-center p-4 bg-gray-100 rounded-lg">
            <img src="/api/placeholder/48/48" alt={sector} className="w-12 h-12 mb-2" />
            <span className="text-sm">{sector}</span>
          </div>
        ))}
      </div>
      <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center mx-auto">
        View All Sectors
        <ChevronDown className="ml-2 h-4 w-4" />
      </button>
    </section>
  );
};

export default Sectors;