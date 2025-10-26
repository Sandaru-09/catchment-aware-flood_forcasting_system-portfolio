'use client';

const Technologies = () => {
  const technologies = [
    { name: "Python", category: "Backend", description: "Core programming language for data processing and ML models" },
    { name: "TensorFlow", category: "Machine Learning", description: "Deep learning framework for neural network models" },
    { name: "React", category: "Frontend", description: "Modern web framework for user interface development" },
    { name: "Next.js", category: "Frontend", description: "React framework for server-side rendering and optimization" },
    { name: "MongoDB", category: "Database", description: "NoSQL database for storing time-series and spatial data" },
    { name: "AWS", category: "Cloud", description: "Cloud platform for scalable deployment and data processing" },
    { name: "Google Maps API", category: "Mapping", description: "Geospatial visualization and location services" },
    { name: "GeoJSON", category: "Data Formatting", description: "GeoJSON for data mapping, editing and formatting" },
    { name: "Firebase", category: "Backend", description: "Real-time database and authentication services" },
    { name: "Google Cloud", category: "Cloud", description: "Cloud computing services for ML and data analytics" },
    { name: "JWT", category: "Security", description: "JSON Web Tokens for secure authentication" },
    { name: "Flutter", category: "Mobile Frontend", description: "Flutter for mobile app frontend" },
    { name: "GitHub", category: "Version Control", description: "GitHub is for version controlling and collaboration" }

  ];

  const categories = ["Backend", "Frontend", "Machine Learning", "Database", "Cloud", "Mapping", "Data Formatting", "Version Control", "Security", "Mobile Frontend"];

  return (
    <section id="technologies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#54416d] mb-4">Technologies Used</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Modern technology stack powering our flood forecasting system
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-gradient-to-br from-[#75b4e3]/5 to-[#54416d]/5 rounded-lg p-6 hover:shadow-lg transition-shadow border border-[#75b4e3]/20">
              <div className="flex items-center mb-3">
                <div className="bg-[#75b4e3] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm mr-3">
                  {tech.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#54416d]">{tech.name}</h3>
                  <span className="text-sm text-[#75b4e3] font-medium">{tech.category}</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm">{tech.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#75b4e3] to-[#54416d] rounded-lg p-8 text-white">
          <h3 className="text-2xl font-semibold mb-6 text-center">Technology Highlights</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h4 className="text-lg font-semibold mb-2">Machine Learning</h4>
              <p className="text-blue-100">Advanced ML algorithms for pattern recognition and prediction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">☁️</div>
              <h4 className="text-lg font-semibold mb-2">Cloud Computing</h4>
              <p className="text-blue-100">Scalable cloud infrastructure for real-time processing</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📱</div>
              <h4 className="text-lg font-semibold mb-2">Modern UI/UX</h4>
              <p className="text-blue-100">Responsive web and mobile interfaces for all users</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
