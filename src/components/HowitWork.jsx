import {stepsData} from "../constants";

const iconMap = {
  upload: <i className="fa-solid fa-upload"></i>,
  magic: <i class="fa-solid fa-wand-magic-sparkles"></i>,
  download: <i class="fa-solid fa-cloud-arrow-down"></i>,
};

const HowitWork = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">How it works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {stepsData.map((step, index) => (
          <div key={index} className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <div className="mb-4">{iconMap[step.iconName]}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowitWork;