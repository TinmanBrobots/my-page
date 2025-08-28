import { degree, university, graduationPeriod, gpa } from "@/constants";

export default function Experience() {
  const experiences = [
    {
      title: "Full-Stack Software Engineer",
      company: "Ognomy Sleep (Startup)",
      location: "New York, NY (Remote)",
      period: "January 2023 - Present",
      description:
        "Collaborate with engineers to build and maintain features for a web-based healthcare platform, leading initiatives to modernize the codebase and ensure optimal performance.",
      achievements: [
        "Lead initiatives to revamp, document, and debug codebase with modern practices",
        "Implemented infrastructure around LLMs to automate core tasks for healthcare providers",
        "Interface with third-party healthcare services using REST APIs ensuring HIPAA compliance",
        "Work cross-functionally with Product Managers to translate complex healthcare requirements",
      ],
    },
    {
      title: "President",
      company: "Duke Effective Altruism",
      location: "Durham, NC",
      period: "January 2021 - May 2023",
      description:
        "Led organizational strategy and community building for Duke's Effective Altruism chapter, focusing on introducing students to impactful career paths and AI Safety concepts.",
      achievements: [
        "Ran 4 semester-long fellowships in Effective Altruism, each with ~25 students",
        "Allocated responsibilities for an executive board of ~10 students",
        "Led workshops on AI Safety and coordinated weekly community-building events",
        "Received grant and support through Open Philanthropy's University Organizer Fellowship",
      ],
    },
    {
      title: "Student Researcher",
      company: "DOMath Program, Duke University",
      location: "Durham, NC",
      period: "Summer 2022",
      description:
        "Conducted mathematical research on model order reduction in dynamic systems, focusing on proving mathematical guarantees of smoothness for various reduction methods.",
      achievements: [
        "Worked with a small team to prove mathematical guarantees of smoothness",
        "Built a Python package for accurate and efficient reduced order model predictions",
        "Debugged code and produced empirical results of model accuracy",
        "Contributed to understanding of dynamic systems modeling",
      ],
    },
    {
      title: "Student Researcher",
      company: "DATA+ Program, Duke University",
      location: "Durham, NC (Remote)",
      period: "Summer 2020",
      description:
        "Applied deep learning techniques to satellite imagery analysis for energy infrastructure detection, contributing to policy guidance tools for developing countries.",
      achievements: [
        "Trained and fine-tuned deep learning object detection models for satellite imagery",
        "Located energy infrastructure (wind turbines) using human/crowd annotations",
        "Generated synthetic imagery using CityEngine world-generation modeling software",
        "Created ML tools to help guide policy decisions in developing countries",
      ],
    },
    {
      title: "Teaching Assistant",
      company: "Computer Vision (Graduate Program), Duke University",
      location: "Durham, NC",
      period: "Spring 2021",
      description:
        "Supported graduate students in advanced computer vision coursework through office hours and technical guidance.",
      achievements: [
        "Led office hours for graduate-level computer vision course",
        "Answered technical questions and provided guidance on complex topics",
        "Helped students understand advanced computer vision algorithms",
        "Supported learning in graduate-level academic environment",
      ],
    },
  ];

  const education = [
    {
      degree: degree,
      school: university,
      period: graduationPeriod,
      gpa: gpa,
      description: `Relevant Courses: Operating Systems, Data Structures & Algorithms, NLP, Computer Vision, Neuro-Symbolic ML, AI, High-Dimensional Data Analysis, Real Analysis, Stochastic Calculus, Probability, and Linear Algebra.`,
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Experience
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            My professional journey and educational background
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {exp.title}
                    </h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                    {exp.location && (
                      <p className="text-gray-500 text-sm">{exp.location}</p>
                    )}
                  </div>
                  <span className="text-gray-500 text-sm mt-1 sm:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    Key Achievements:
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {edu.degree}
                    </h3>
                    <p className="text-blue-600 font-medium">{edu.school}</p>
                    <p className="text-gray-500 text-sm">GPA: {edu.gpa}</p>
                  </div>
                  <span className="text-gray-500 text-sm mt-1 sm:mt-0">
                    {edu.period}
                  </span>
                </div>
                <p className="text-gray-600">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-600 mb-6">
            I'm always interested in new opportunities and challenges. Feel free
            to reach out if you'd like to discuss potential collaborations.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
}
