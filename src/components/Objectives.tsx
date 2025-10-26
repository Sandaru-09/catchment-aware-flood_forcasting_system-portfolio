'use client';

import { FaWater, FaMapMarkedAlt, FaExclamationTriangle, FaUsers, FaChartLine, FaBolt } from 'react-icons/fa';

const Objectives = () => {
  const objectives = [
    {
      title: "Real-time Flood Prediction",
      description: "Develop machine learning models that can predict flood events in real-time using meteorological data, catchment characteristics, and historical patterns.",
      icon: FaWater,
      color: "#4285F4"
    },
    {
      title: "Catchment-Specific Modeling",
      description: "Create adaptive models that account for unique catchment characteristics including topography, soil type, vegetation, and drainage patterns.",
      icon: FaMapMarkedAlt,
      color: "#0F9D58"
    },
    {
      title: "Early Warning System",
      description: "Implement an intelligent early warning system that provides timely alerts to communities and emergency services with appropriate lead times.",
      icon: FaExclamationTriangle,
      color: "#F4B400"
    },
    {
      title: "Community Engagement Platform",
      description: "Build user-friendly web and mobile interfaces that enable community participation in flood monitoring and response coordination.",
      icon: FaUsers,
      color: "#DB4437"
    },
    {
      title: "Data Integration Framework",
      description: "Integrate multiple data sources including weather stations, satellite imagery, IoT sensors, and crowd-sourced information.",
      icon: FaChartLine,
      color: "#6C5CE7"
    },
    {
      title: "Performance Optimization",
      description: "Optimize prediction accuracy and system performance through continuous learning and model refinement based on real-world feedback.",
      icon: FaBolt,
      color: "#FFA502"
    }
  ];

  return (
    <section id="objectives" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#54416d] mb-4">Research Objectives</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our research aims to address critical challenges in flood forecasting through innovative approaches
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectives.map((objective, index) => {
            const IconComponent = objective.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-[#75b4e3]/10 to-[#54416d]/10 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">
                  <IconComponent style={{ color: objective.color }} />
                </div>
                <h3 className="text-xl font-semibold text-[#54416d] mb-3">{objective.title}</h3>
                <p className="text-gray-600">{objective.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Objectives;
