const sectors = [
    { name: "Projects", color: "bg-purple-500" },
    { name: "Documents", color: "bg-red-500" },
    { name: "Resources", color: "bg-green-400" },
    { name: "Complaints", color: "bg-yellow-500" },
    { name: "Planning", color: "bg-pink-400" },
    { name: "Forums", color: "bg-cyan-400" },
    { name: "Departments", color: "bg-purple-300" },
    { name: "Schemes", color: "bg-blue-600" },
  ];
  
  const IconGrid = () => {
    return (
      <div className="grid grid-cols-4 gap-4 mb-10">
        {sectors.map((sector, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className={`w-16 h-16 ${sector.color} rounded-lg`}></div>
            <span className="mt-2">{sector.name}</span>
          </div>
        ))}
      </div>
    );
  };
  
  export default IconGrid;