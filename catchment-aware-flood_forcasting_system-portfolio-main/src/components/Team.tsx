'use client';

const Team = () => {
  const teamMembers = [
    {
      name: "Prof. Pradeep Abeygunawardhane",
      role: "Supervisor",
      department: "Faculty of Computing | Information Technology",
      institution: "Sri Lanka Institute of Information Technology",
      email: "pradeep.a@sliit.lk",
      linkedin: "https://linkedin.com/in/johnsmith",
      image: "/images/pradeep.jpg"
    },
    {
      name: "Mrs. Narmada Gamage", 
      role: "Co-Supervisor",
      department: "Faculty of Computing | Computer Systems Engineering",
      institution: "Sri Lanka Institute of Information Technology",
      email: "narmada.g@sliit.lk",
      linkedin: "https://linkedin.com/in/sarahjohnson",
      image: "/images/narmada.jpg"
    },
    {
      name: "Perera B.T.S",
      role: "Group Leader", 
      department: "Faculty of Computing | Information Technology",
      institution: "Sri Lanka Institute of Information Technology",
      email: "michael.chen@weather.gov",
      linkedin: "https://www.linkedin.com/in/thilina-perera-8ba24825b",
      image: "/images/thilina.jpg"
    },
    {
      name: "Amarasekara S.K",
      role: "Group Member",
      department: "Faculty of Computing | Information Technology",
      institution: "Sri Lanka Institute of Information Technology",
      email: "sandarukalhara09@gmail.com",
      linkedin: "https://www.linkedin.com/in/sandaru-amarasekara-17b546203",
      image: "/images/Sandaru.jpg"
    },
    {
      name: "Dias A.H.S.G",
      role: "Group Member",
      department: "Faculty of Computing | Information Technology",
      institution: "Sri Lanka Institute of Information Technology", 
      email: "sandaligeethmadias@gmail.com",
      linkedin: "https://www.linkedin.com/in/sandali-geethma",
      image: "/images/sandali.jpg"
    },
    {
      name: "Samaranayake N.A.S.R",
      role: "Group Member",
      department: "Faculty of Computing | Information Technology",
      institution: "Sri Lanka Institute of Information Technology", 
      email: "sadeepasamaranayake.2@gmail.com",
      linkedin: "https://www.linkedin.com/in/ravisara-samaranayake-1a84b3283",
      image: "/images/ravisara.jpg"
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#54416d] mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dedicated researchers and developers working together to advance flood forecasting technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gradient-to-br from-[#75b4e3]/5 to-[#54416d]/5 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-center">
                {/* IMAGE */}
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-2 border-[#75b4e3]">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-xl font-semibold text-[#54416d] mb-1">{member.name}</h3>
                <p className="text-[#75b4e3] font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm mb-1">{member.department}</p>
                <p className="text-gray-500 text-xs mb-4">{member.institution}</p>
                
                <div className="flex justify-center space-x-3">
                  <a 
                    href={`mailto:${member.email}`}
                    className="text-[#75b4e3] hover:text-[#54416d] transition-colors"
                    title="Email"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </a>
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#75b4e3] hover:text-[#54416d] transition-colors"
                    title="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Expertise */}
        <div className="mt-16 bg-gradient-to-r from-[#75b4e3] to-[#54416d] rounded-lg p-8 text-white">
          <h3 className="text-2xl font-semibold mb-6 text-center">Team Expertise</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🌊</div>
              <h4 className="font-semibold mb-1">Hydrology</h4>
              <p className="text-blue-100 text-sm">Water systems & flood dynamics</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🤖</div>
              <h4 className="font-semibold mb-1">Machine Learning</h4>
              <p className="text-blue-100 text-sm">AI & predictive modeling</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">💻</div>
              <h4 className="font-semibold mb-1">Software Engineering</h4>
              <p className="text-blue-100 text-sm">System development & deployment</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📊</div>
              <h4 className="font-semibold mb-1">Data Science</h4>
              <p className="text-blue-100 text-sm">Analytics & visualization</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
