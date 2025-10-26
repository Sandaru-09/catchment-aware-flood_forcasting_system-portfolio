'use client';

const Timeline = () => {
  const milestones = [
    {
      month: "March 2024",
      title: "Project Proposal",
      description: "Project proposal presented to potential sponsors and stakeholders for funding approval.",
      marks: "6%",
      status: "completed"
    },
    {
      month: "June 2024", 
      title: "Progress Presentation I",
      description: "First progress review demonstrating 50% completion status and initial results.",
      marks: "6%",
      status: "completed"
    },
    {
      month: "July 2024",
      title: "Research Paper",
      description: "Comprehensive research paper documenting methodology, findings, and contributions to the field.",
      marks: "10%",
      status: "completed"
    },
    {
      month: "September 2024",
      title: "Progress Presentation II", 
      description: "Second progress review showcasing 90% completion with system demonstration and poster presentation.",
      marks: "18%",
      status: "completed"
    },
    {
      month: "October 2024",
      title: "Website Assessment",
      description: "Portfolio website evaluation demonstrating project presentation and documentation capabilities.",
      marks: "",
      status: "in progress"
    },
    {
      month: "October 2024",
      title: "Final Presentation & Viva",
      description: "Final project presentation and individual viva voce assessment.",
      marks: "",
      status: "in progress"
    },
    {
      month: "November 2024",
      title: "Logbook & Status Documents",
      description: "Comprehensive project logbook and status documentation validation.",
      marks: "",
      status: "in progress"
    },
    {
      month: "November 2024",
      title: "Final Report",
      description: "Complete final report including individual and group contributions with detailed analysis.",
      marks: "",
      status: "in progress"
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#54416d] mb-4">Project Timeline</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Key milestones and deliverables throughout the research project
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#75b4e3] to-[#54416d]"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-[#75b4e3] rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                {/* Content card */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-[#75b4e3]">{milestone.month}</span>
                      <span className="text-sm font-bold text-[#54416d]">{milestone.marks}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-[#54416d] mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>

                    {/* Status */}
                    <div className="mt-3 flex items-center">
                      <div
                        className={`w-3 h-3 rounded-full mr-2 ${
                          milestone.status.toLowerCase() === "completed" ? "bg-green-500" : "bg-yellow-500"
                        }`}
                      ></div>
                      <span
                        className={`text-sm font-medium ${
                          milestone.status.toLowerCase() === "completed" ? "text-green-600" : "text-yellow-600"
                        }`}
                      >
                        {milestone.status.charAt(0).toUpperCase() + milestone.status.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-[#54416d] mb-6 text-center">Project Summary</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#75b4e3] mb-2">8</div>
              <p className="text-gray-600">Major Milestones</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#75b4e3] mb-2">97%</div>
              <p className="text-gray-600">Completion Rate</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#75b4e3] mb-2">9</div>
              <p className="text-gray-600">Months Duration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
