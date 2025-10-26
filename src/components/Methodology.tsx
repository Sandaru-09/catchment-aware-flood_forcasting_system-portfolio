'use client';

const Methodology = () => {
  const steps = [
    {
      step: "01",
      title: "Data Collection",
      description:
        "Gather meteorological data, catchment characteristics, historical flood records, and real-time sensor data from multiple sources.",
    },
    {
      step: "02",
      title: "Data Preprocessing",
      description:
        "Clean, normalize, and prepare data for machine learning models, handling missing values and outliers.",
    },
    {
      step: "03",
      title: "Feature Engineering",
      description:
        "Extract relevant features from raw data, including temporal patterns, spatial relationships, and catchment-specific variables.",
    },
    {
      step: "04",
      title: "Model Development",
      description:
        "Develop and train machine learning models using ensemble methods, deep learning, and catchment-specific algorithms.",
    },
    {
      step: "05",
      title: "Validation & Testing",
      description:
        "Validate models using cross-validation, historical data testing, and real-world scenario simulations.",
    },
    {
      step: "06",
      title: "Deployment & Monitoring",
      description:
        "Deploy the system with real-time monitoring, continuous learning capabilities, and performance tracking.",
    },
  ];

  return (
    <section id="methodology" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#54416d] mb-4">
            Methodology
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our systematic approach combines data science, machine learning, and
            hydrological modeling
          </p>
        </div>

        {/* Methodology Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="bg-[#75b4e3] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mr-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-[#54416d]">
                  {step.title}
                </h3>
              </div>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        {/* System Architecture */}
        <div className="relative bg-gradient-to-br from-[#75b4e3]/10 to-[#54416d]/10 rounded-2xl p-12 shadow-xl border border-[#75b4e3]/20 overflow-hidden">
          {/* Decorative background circles */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#75b4e3]/10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 right-0 w-56 h-56 bg-[#54416d]/10 rounded-full blur-3xl" />

          <h3 className="text-3xl font-bold text-[#54416d] mb-10 text-center relative z-10">
            System Architecture
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center relative z-10">
            {/* Data Layer */}
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-md border-t-4 border-[#75b4e3] hover:shadow-lg transition">
              <h4 className="text-lg font-semibold text-[#75b4e3] mb-3">
                Data Layer
              </h4>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Weather API Integration</li>
                <li>• IoT Sensor Networks</li>
                <li>• Satellite Imagery</li>
                <li>• Historical Databases</li>
                <li>• Crowd-sourced Data</li>
              </ul>
            </div>

            {/* Processing Layer */}
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-md border-t-4 border-[#54416d] hover:shadow-lg transition">
              <h4 className="text-lg font-semibold text-[#54416d] mb-3">
                Processing Layer
              </h4>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Real-time Data Processing</li>
                <li>• Machine Learning Models</li>
                <li>• Prediction Algorithms</li>
                <li>• Risk Assessment</li>
                <li>• Alert Generation</li>
              </ul>
            </div>

            {/* Application Layer */}
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-md border-t-4 border-[#75b4e3] hover:shadow-lg transition">
              <h4 className="text-lg font-semibold text-[#75b4e3] mb-3">
                Application Layer
              </h4>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Web Dashboard</li>
                <li>• Mobile Application</li>
                <li>• API Services</li>
                <li>• Notification System</li>
                <li>• Reporting Tools</li>
              </ul>
            </div>

            {/* User Interface */}
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-md border-t-4 border-[#54416d] hover:shadow-lg transition">
              <h4 className="text-lg font-semibold text-[#54416d] mb-3">
                User Interface
              </h4>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Interactive Maps</li>
                <li>• Risk Visualization</li>
                <li>• Alert Management</li>
                <li>• Community Portal</li>
                <li>• Analytics Dashboard</li>
              </ul>
            </div>
          </div>

          {/* Connector line for visual hierarchy */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-16 h-[calc(100%-4rem)] w-0.5 bg-gradient-to-b from-[#75b4e3]/20 to-[#54416d]/20 hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
