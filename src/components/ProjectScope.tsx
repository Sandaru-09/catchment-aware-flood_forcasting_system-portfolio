'use client';

const ProjectScope = () => {
  return (
    <section id="project-scope" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#54416d] mb-4">Project Scope</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Understanding the challenges and opportunities in flood forecasting through comprehensive research
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-[#54416d] mb-4">Literature Survey</h3>
            <p className="text-gray-600 mb-4">
              Traditional flood forecasting methods rely heavily on historical data and simple hydrological models, 
              often failing to capture the complex interactions between meteorological conditions and catchment characteristics.
            </p>
            <p className="text-gray-600">
              Current systems lack real-time adaptability and catchment-specific modeling capabilities, 
              leading to inaccurate predictions and delayed warnings.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-[#54416d] mb-4">Research Gap</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Lack of real-time flood forecasting systems</li>
              <li>• Insufficient catchment-specific modeling</li>
              <li>• Limited integration of meteorological data</li>
              <li>• Poor early warning system effectiveness</li>
              <li>• Inadequate community engagement tools</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-[#54416d] mb-4">Research Problem</h3>
            <p className="text-gray-600 mb-4">
              How can we develop an intelligent flood forecasting system that provides accurate, 
              real-time predictions tailored to specific catchment characteristics?
            </p>
            <p className="text-gray-600">
              The challenge lies in creating a system that integrates multiple data sources, 
              adapts to changing conditions, and provides actionable warnings to communities.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-[#54416d] mb-6 text-center">Proposed Solution</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-[#75b4e3] mb-3">Machine Learning Approach</h4>
              <p className="text-gray-600 mb-4">
                Our catchment-aware flood forecasting system uses advanced machine learning algorithms 
                to analyze meteorological data, catchment characteristics, and historical flood patterns.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Real-time data processing and analysis</li>
                <li>• Catchment-specific model training</li>
                <li>• Multi-variable prediction algorithms</li>
                <li>• Adaptive learning capabilities</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#75b4e3] mb-3">System Features</h4>
              <p className="text-gray-600 mb-4">
                The system provides comprehensive flood monitoring and early warning capabilities 
                with user-friendly interfaces for different stakeholders.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Web and mobile application interfaces</li>
                <li>• Real-time alert notifications</li>
                <li>• Interactive flood risk maps</li>
                <li>• Community engagement platform</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectScope;
