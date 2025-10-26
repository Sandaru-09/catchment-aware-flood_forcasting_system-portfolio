'use client';

import Image from 'next/image';
import { FaEnvelope, FaLinkedin, FaWater, FaRobot, FaLaptopCode, FaChartBar } from 'react-icons/fa';

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
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-2 border-[#75b4e3] relative">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    width={96}
                    height={96}
                    className="object-cover"
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
                    aria-label={`Email ${member.name}`}
                    title="Email"
                  >
                    <FaEnvelope className="w-5 h-5" />
                  </a>
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#75b4e3] hover:text-[#54416d] transition-colors"
                    aria-label={`Visit ${member.name}'s LinkedIn profile`}
                    title="LinkedIn"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Expertise */}
        <div className="mt-16 bg-gradient-to-r from-[#75b4e3] to-[#54416d] rounded-lg p-8 text-white">
          <h3 className="text-3xl font-semibold mb-10 text-center">Team Expertise</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <FaWater className="text-3xl" />
              </div>
              <h4 className="font-semibold mb-1">Hydrology</h4>
              <p className="text-blue-100 text-sm">Water systems & flood dynamics</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <FaRobot className="text-3xl" />
              </div>
              <h4 className="font-semibold mb-1">Machine Learning</h4>
              <p className="text-blue-100 text-sm">AI & predictive modeling</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <FaLaptopCode className="text-3xl" />
              </div>
              <h4 className="font-semibold mb-1">Software Engineering</h4>
              <p className="text-blue-100 text-sm">System development & deployment</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <FaChartBar className="text-3xl" />
              </div>
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
