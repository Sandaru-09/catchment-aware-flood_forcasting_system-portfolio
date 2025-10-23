'use client';

const Downloads = () => {
  const documents = [
    {
      title: "Topic Assessment",
      date: "2024/02/25",
      type: "Group",
      status: "Submitted",
      downloadUrl: "#"
    },
    {
      title: "Project Charter", 
      date: "2024/02/25",
      type: "Group",
      status: "Submitted",
      downloadUrl: "#"
    },
    {
      title: "Project Proposal",
      date: "2024/03/22", 
      type: "Individual",
      status: "Submitted",
      downloadUrl: "#"
    },
    {
      title: "Status Documents I",
      date: "2024/07/05",
      type: "Individual", 
      status: "Submitted",
      downloadUrl: "#"
    },
    {
      title: "Status Documents II",
      date: "2024/09/15",
      type: "Individual",
      status: "Submitted", 
      downloadUrl: "#"
    },
    {
      title: "Research Paper",
      date: "2024/07/30",
      type: "Group",
      status: "Submitted",
      downloadUrl: "#"
    },
    {
      title: "Final Report",
      date: "2024/10/13",
      type: "Group",
      status: "Submitted",
      downloadUrl: "#"
    },
    {
      title: "Poster",
      date: "2024/10/13", 
      type: "Group",
      status: "Submitted",
      downloadUrl: "#"
    }
  ];

  const presentations = [
    {
      title: "Project Proposal",
      date: "2024/03/14",
      type: "Group",
      status: "Submitted",
      downloadUrl: "#"
    },
    {
      title: "Progress Presentation I",
      date: "2024/07/08",
      type: "Group", 
      status: "Submitted",
      downloadUrl: "#"
    },
    {
      title: "Progress Presentation II",
      date: "2024/10/18",
      type: "Group",
      status: "Submitted",
      downloadUrl: "#"
    },
    {
      title: "Final Presentation",
      date: "2024/11/15",
      type: "Group",
      status: "Submitted",
      downloadUrl: "#"
    }
  ];

  return (
    <section id="downloads" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#54416d] mb-4">Downloads</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Access all project documents, reports, and presentations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Documents Section */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-[#54416d] mb-6">Documents</h3>
            <div className="space-y-4">
              {documents.map((doc, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#54416d]">{doc.title}</h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>Submitted: {doc.date}</span>
                      <span className="px-2 py-1 bg-[#75b4e3]/20 text-[#75b4e3] rounded-full text-xs">
                        {doc.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-green-600 text-sm font-medium">{doc.status}</span>
                    <button className="px-4 py-2 bg-[#75b4e3] text-white rounded-lg hover:bg-[#54416d] transition-colors text-sm">
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Presentations Section */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-[#54416d] mb-6">Presentations</h3>
            <div className="space-y-4">
              {presentations.map((pres, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#54416d]">{pres.title}</h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>Submitted: {pres.date}</span>
                      <span className="px-2 py-1 bg-[#54416d]/20 text-[#54416d] rounded-full text-xs">
                        {pres.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-green-600 text-sm font-medium">{pres.status}</span>
                    <button className="px-4 py-2 bg-[#54416d] text-white rounded-lg hover:bg-[#75b4e3] transition-colors text-sm">
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#75b4e3] to-[#54416d] rounded-lg p-8 text-white">
          <h3 className="text-2xl font-semibold mb-6 text-center">Research Outputs</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">8</div>
              <p className="text-blue-100">Documents</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">4</div>
              <p className="text-blue-100">Presentations</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">1</div>
              <p className="text-blue-100">Research Paper</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100%</div>
              <p className="text-blue-100">Completion</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Downloads;
