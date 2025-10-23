'use client';

const Achievements = () => {
  const achievements = [
    {
      title: "National ICT Awards 2024",
      description: "Selected as finalists to represent our university at the National Best Quality ICT Awards",
      year: "2024",
      category: "Recognition",
      icon: "🏆"
    },
    {
      title: "E-Swabhumani 2024",
      description: "Chosen to participate in the prestigious E-Swabhumani technology innovation competition",
      year: "2024", 
      category: "Competition",
      icon: "🥇"
    },
    {
      title: "World Summit Award (WSA) 2024",
      description: "Selected as national nominees to represent our country in the World Summit Award",
      year: "2024",
      category: "International",
      icon: "🌍"
    },
    {
      title: "WSA Youth 2024",
      description: "Recognized in the WSA Youth category for innovative technology solutions",
      year: "2024",
      category: "Youth",
      icon: "👨‍💻"
    },
    {
      title: "Research Excellence Award",
      description: "Awarded for outstanding contribution to flood forecasting research and innovation",
      year: "2024",
      category: "Research",
      icon: "🔬"
    },
    {
      title: "Best Innovation Project",
      description: "Recognized for developing innovative solutions in water resource management",
      year: "2024",
      category: "Innovation",
      icon: "💡"
    }
  ];

  const stats = [
    { label: "Awards Won", value: "6", icon: "🏆" },
    { label: "International Recognition", value: "2", icon: "🌍" },
    { label: "Research Publications", value: "3", icon: "📄" },
    { label: "Conference Presentations", value: "5", icon: "🎤" }
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#54416d] mb-4">Achievements</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Recognition and awards received for our innovative flood forecasting research
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-gradient-to-br from-[#75b4e3]/5 to-[#54416d]/5 rounded-lg p-6 hover:shadow-lg transition-shadow border border-[#75b4e3]/20">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{achievement.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-[#75b4e3] bg-[#75b4e3]/20 px-2 py-1 rounded-full">
                      {achievement.category}
                    </span>
                    <span className="text-sm text-gray-500">{achievement.year}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#54416d] mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-[#75b4e3] to-[#54416d] rounded-lg p-8 text-white mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Project Statistics</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <p className="text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recognition Highlights */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-[#54416d] mb-6 text-center">Recognition Highlights</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-[#75b4e3] mb-3">🏆 National Recognition</h4>
              <p className="text-gray-600 mb-4">
                Our flood forecasting system has been recognized at the national level for its innovative approach 
                to water resource management and disaster preparedness.
              </p>
              <ul className="text-gray-600 space-y-1">
                <li>• National ICT Awards Finalist</li>
                <li>• E-Swabhumani Participant</li>
                <li>• Research Excellence Recognition</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#75b4e3] mb-3">🌍 International Impact</h4>
              <p className="text-gray-600 mb-4">
                The project has gained international recognition for its potential to address global flood 
                forecasting challenges and improve community resilience.
              </p>
              <ul className="text-gray-600 space-y-1">
                <li>• World Summit Award Nominee</li>
                <li>• WSA Youth Recognition</li>
                <li>• Global Innovation Impact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
