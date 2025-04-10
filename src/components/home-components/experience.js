import './experience.styles.scss';

const experienceData = [
    {
      company: "2Logical",
      role: "Tech & Business Tools Assistant",
      date: "September 2020 - Present",
      description: [
        "Led the development and management of multiple technological projects, including creating and maintaining SQL databases, client-specific C# .NET MVC websites focused on virtual events (webinars) and health professionals' daily information, as well as developing tools to automate workflows and improve operational efficiency across teams.",
        "Developed Python scripts to automate workflows, optimize processes, and enhance team productivity, reducing manual workloads.",
        "Provided IT support across the company, including configuring, installing, and troubleshooting hardware and software, ensuring seamless operations.",
        "Designed and implemented marketing emails using HTML, enabling efficient communication with clients through automated campaigns.",
        "Delivered high-quality results under tight deadlines, ensuring client satisfaction while adapting to evolving requirements."
      ]
    },
    {
      company: "2Logical",
      role: "Curricular Internship",
      date: "March 2020 - July 2020",
      description:
        ["During my curricular internship at 2Logical, I developed an internal web application using C# and .NET to support the codification of veterinary products for a pharmaceutical consulting project.",
          "As part of the same project above, I also built a custom dashboard using Pentaho, which combined SQL for data retrieval and HTML/CSS/JavaScript for the visual layer — allowing users to analyze and interpret product data more efficiently.",
          "Started building some Python scripts to automate some of the tasks it was being done manually, such as data extraction and transformation, which helped me understand the importance of automation in improving efficiency and accuracy in data handling.",
        ],
    }
  ];

const Experience = () => {

    return (
        <div className="experience-container" id="experience">
          <div className="experience-title">
            <h1>Professional Experience</h1>
          </div>
    
          <ul className="timeline">
            {experienceData.map((item, index) => (
              <li key={index} className="timeline-item">
                <div className="timeline-header">
                  <div className="timeline-role">
                    <strong>{item.company}</strong> – {item.role}
                  </div>
                  <div className="timeline-date">{item.date}</div>
                </div>
                {Array.isArray(item.description) && (
                    <ul className="timeline-description">
                        {item.description.map((point, i) => (
                        <li key={i}>{point}</li>
                        ))}
                    </ul>
                    )}
              </li>
            ))}
          </ul>
        </div>
      );
}

export default Experience;