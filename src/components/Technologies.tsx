'use client';

import { 
  FaPython, FaReact, FaAws, FaLock, FaGithub, FaRobot, FaCloud, FaMobileAlt
} from "react-icons/fa";
import { 
  SiTensorflow, SiGooglecloud, SiGooglemaps, SiMqtt, SiGooglecolab, SiJupyter 
} from "react-icons/si";
import { DiMysql } from "react-icons/di";

const Technologies = () => {
  const technologies = [
    { name: "Python", category: "Backend", description: "Core programming language for data processing and ML models", icon: <FaPython className="text-[#3776AB] text-2xl" /> },
    { name: "TensorFlow", category: "Machine Learning", description: "Deep learning framework for neural network models", icon: <SiTensorflow className="text-[#FF6F00] text-2xl" /> },
    { name: "Jupyter Notebook", category: "Development", description: "Interactive environment for data exploration and model prototyping", icon: <SiJupyter className="text-[#F37626] text-2xl" /> },
    { name: "Google Colab", category: "Development", description: "Cloud-based platform for training and running ML models", icon: <SiGooglecolab className="text-[#F9AB00] text-2xl" /> },
    { name: "React", category: "Frontend", description: "Modern web framework for user interface development", icon: <FaReact className="text-[#61DAFB] text-2xl" /> },
    { name: "MySQL", category: "Database", description: "MySQL database for storing time-series and spatial data", icon: <DiMysql className="text-[#00758F] text-2xl" /> },
    { name: "MQTT", category: "IoT Communication", description: "Lightweight messaging protocol for IoT data transfer", icon: <SiMqtt className="text-[#660066] text-2xl" /> },
    { name: "AWS", category: "Cloud", description: "Cloud platform for scalable deployment and data processing", icon: <FaAws className="text-[#FF9900] text-2xl" /> },
    { name: "Google Maps API", category: "Mapping", description: "Geospatial visualization and location services", icon: <SiGooglemaps className="text-[#4285F4] text-2xl" /> },
    { name: "Google Cloud", category: "Cloud", description: "Cloud computing services for ML and data analytics", icon: <SiGooglecloud className="text-[#4285F4] text-2xl" /> },
    { name: "JWT", category: "Security", description: "JSON Web Tokens for secure authentication", icon: <FaLock className="text-[#54416d] text-2xl" /> },
    { name: "GitHub", category: "Version Control", description: "Platform for code collaboration, versioning, and CI/CD integration", icon: <FaGithub className="text-black text-2xl" /> },
  ];

  return (
    <section id="technologies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#54416d] mb-4">Technologies Used</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Modern technology stack powering our flood forecasting system
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-[#75b4e3]/5 to-[#54416d]/5 rounded-lg p-6 hover:shadow-lg transition-shadow border border-[#75b4e3]/20"
            >
              <div className="flex items-center mb-3">
                <div className="flex items-center justify-center w-10 h-10 mr-3">
                  {tech.icon}
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

        {/* Highlights Section */}
        <div className="mt-16 bg-gradient-to-r from-[#75b4e3] to-[#54416d] rounded-lg p-8 text-white">
          <h3 className="text-2xl font-semibold mb-6 text-center">Technology Highlights</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <FaRobot className="text-4xl" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Machine Learning</h4>
              <p className="text-blue-100">Advanced ML algorithms for pattern recognition and prediction</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <FaCloud className="text-4xl" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Cloud Computing</h4>
              <p className="text-blue-100">Scalable cloud infrastructure for real-time processing</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <FaMobileAlt className="text-4xl" />
              </div>
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
