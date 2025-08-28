import { degree, university, gpa, graduationPeriod, location } from '@/constants';

export default function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            About Me
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                My Story
              </h2>
              <p className="text-gray-600 mb-6">
                I'm a highly motivated engineer with expertise in scalable
                software development and machine learning, combined with a deep
                commitment to AI safety. I'm passionate about leveraging
                technology to solve meaningful problems and create positive
                impact.
              </p>

              <p className="text-gray-600 mb-6">
                Currently working as a Full-Stack Software Engineer at{" "}
                <a
                  href="https://www.ognomy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Ognomy Sleep
                </a>
                , where I build and maintain features for a telehealth startup
                focused on personalized sleep apnea care. I lead initiatives to
                modernize codebases with best practices, implement LLM
                infrastructure to automate core tasks, and integrate with 
                third-party healthcare services while ensuring HIPAA compliance.
              </p>

              <p className="text-gray-600 mb-6">
                My background includes research experience in machine learning,
                computer vision, and mathematical modeling during my time at
                Duke University. I'm particularly interested in AI safety and
                interpretability tools that help enable the safe and intentional
                design of advanced AI systems.
              </p>

              <p className="text-gray-600 mb-6">
                Beyond technical work, I have experience in leadership and
                community building, having served as President of Duke Effective
                Altruism where I ran fellowships and workshops to help students
                explore impactful career paths and think critically about cause
                prioritization.
              </p>

              <p className="text-gray-600 mb-6">
                Outside of work, I enjoy exercising (currently training for{" "}
                <a
                  href="https://hyrox.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  HYROX
                </a>
                ), listening to music, watching sports, and playing poker.
              </p>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Skills & Technologies
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  "Python",
                  "PyTorch",
                  "React",
                  "Node.js",
                  "TypeScript",
                  "JavaScript",
                  "AWS",
                  "MongoDB",
                  "Git",
                  "HuggingFace",
                  "C",
                  "CI/CD",
                  "Machine Learning",
                  "Computer Vision",
                  "NLP",
                  "AI Safety",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="bg-gray-100 rounded-lg px-3 py-2 text-center"
                  >
                    <span className="text-gray-800 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Facts
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">📍</span>
                  <span className="text-gray-600">Based in Boston, MA</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🎓</span>
                  <span className="text-gray-600">
                    {degree} from {university} (GPA: {gpa})
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">💼</span>
                  <span className="text-gray-600">
                    2+ years of professional experience
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🌟</span>
                  <span className="text-gray-600">
                    Passionate about AI safety and impactful technology
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-8 bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Interests
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• AI Safety & Interpretability</li>
                <li>• Machine Learning Research</li>
                <li>• Effective Altruism</li>
                <li>• Healthcare Technology</li>
                <li>• Health & Fitness</li>
                <li>• Indie/Experimental Music</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}