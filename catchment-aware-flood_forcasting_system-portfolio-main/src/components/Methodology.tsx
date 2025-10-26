'use client';

const Methodology = () => {
  const steps = [
    {
      step: "01",
      title: "Data Collection",
      description: "Gather meteorological data, catchment characteristics, historical flood records, and real-time sensor data from multiple sources."
    },
    {
      step: "02", 
      title: "Data Preprocessing",
      description: "Clean, normalize, and prepare data for machine learning models, handling missing values and outliers."
    },
    {
      step: "03",
      title: "Feature Engineering",
      description: "Extract relevant features from raw data, including temporal patterns, spatial relationships, and catchment-specific variables."
    },
    {
      step: "04",
      title: "Model Development",
      description: "Develop and train machine learning models using ensemble methods, deep learning, and catchment-specific algorithms."
    },
    {
      step: "05",
      title: "Validation & Testing",
      description: "Validate models using cross-validation, historical data testing, and real-world scenario simulations."
    },
    {
      step: "06",
      title: "Deployment & Monitoring",
      description: "Deploy the system with real-time monitoring, continuous learning capabilities, and performance tracking."
    }
  ];

  return (
    <section id="methodology" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#54416d] mb-4">Methodology</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our systematic approach combines data science, machine learning, and hydrological modeling
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-[#75b4e3] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mr-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-[#54416d]">{step.title}</h3>
              </div>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-[#54416d] mb-6 text-center">System Architecture</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-[#75b4e3] mb-3">Data Layer</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Weather API Integration</li>
                <li>• IoT Sensor Networks</li>
                <li>• Satellite Imagery</li>
                <li>• Historical Databases</li>
                <li>• Crowd-sourced Data</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#75b4e3] mb-3">Processing Layer</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Real-time Data Processing</li>
                <li>• Machine Learning Models</li>
                <li>• Prediction Algorithms</li>
                <li>• Risk Assessment</li>
                <li>• Alert Generation</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#75b4e3] mb-3">Application Layer</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Web Dashboard</li>
                <li>• Mobile Application</li>
                <li>• API Services</li>
                <li>• Notification System</li>
                <li>• Reporting Tools</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#75b4e3] mb-3">User Interface</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Interactive Maps</li>
                <li>• Risk Visualization</li>
                <li>• Alert Management</li>
                <li>• Community Portal</li>
                <li>• Analytics Dashboard</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
