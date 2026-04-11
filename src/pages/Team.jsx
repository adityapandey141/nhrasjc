import { Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Mr. Rajesh Kumar",
    role: "Founder & Chairman",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    description:
      "Visionary leader with 20+ years of experience in social welfare and human rights advocacy.",
  },
  {
    name: "Mrs. Priya Sharma",
    role: "Vice Chairperson",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    description:
      "Dedicated activist working for women empowerment and gender equality.",
  },
  {
    name: "Mr. Amit Patel",
    role: "Secretary General",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    description:
      "Expert in organizational management and community development programs.",
  },
  {
    name: "Dr. Sunita Verma",
    role: "Director - Programs",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    description:
      "PhD in Social Work with expertise in designing impactful community programs.",
  },
  {
    name: "Mr. Vikram Singh",
    role: "Legal Advisor",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    description:
      "Senior advocate specializing in human rights law and anti-corruption cases.",
  },
  {
    name: "Mrs. Anjali Desai",
    role: "Treasurer",
    image:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&q=80",
    description:
      "Chartered Accountant ensuring transparent and efficient financial management.",
  },
  {
    name: "Mr. Rahul Mehta",
    role: "Youth Coordinator",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
    description:
      "Young leader driving youth engagement and skill development initiatives.",
  },
  {
    name: "Mrs. Kavita Joshi",
    role: "Women Wing Head",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&q=80",
    description:
      "Passionate advocate for women rights and empowerment programs.",
  },
];

const advisoryBoard = [
  { name: "Justice R.K. Agarwal (Retd.)", role: "Legal Patron" },
  { name: "Prof. Dr. S.N. Mishra", role: "Academic Advisor" },
  { name: "IPS M.K. Sharma (Retd.)", role: "Security Advisor" },
  { name: "Dr. Meena Kumari", role: "Health Advisor" },
];

const Team = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-r from-purple-700 via-red-600 to-orange-500 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Core Team
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Meet the dedicated leaders driving our mission forward
          </p>
        </div>
      </section>

      {/* Core Team */}
      {/* <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">Leadership</span>
            <h2 className="section-title mt-2">Executive Committee</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm card-hover group text-center"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                    <div className="flex gap-3">
                      <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-purple-700 transition-all">
                        <Linkedin size={18} />
                      </a>
                      <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-purple-700 transition-all">
                        <Mail size={18} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-lg text-gray-800">{member.name}</h3>
                  <p className="text-purple-700 font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Advisory Board */}
      {/* <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">Guidance</span>
            <h2 className="section-title mt-2">Advisory Board</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advisoryBoard.map((advisor, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm text-center card-hover"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-700 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  {advisor.name.charAt(0)}
                </div>
                <h3 className="font-heading font-bold text-gray-800">{advisor.name}</h3>
                <p className="text-purple-700 text-sm">{advisor.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Join Us CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-700 via-red-600 to-orange-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Join Our Team
          </h2>
          <p className="text-purple-100 max-w-2xl mx-auto mb-8">
            Be part of a movement that is changing lives. We welcome volunteers,
            activists, and professionals who share our vision for a just
            society.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="btn-white">Become a Volunteer</button>
            <button className="bg-white/20 px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors">
              Partner With Us
            </button>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">
              Our Culture
            </span>
            <h2 className="section-title mt-2">What Drives Us</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="font-heading font-bold text-xl text-gray-800 mb-3">
                Mission-Driven
              </h3>
              <p className="text-gray-600">
                Every member is committed to our core mission of protecting
                rights and fighting corruption.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="font-heading font-bold text-xl text-gray-800 mb-3">
                Collaborative
              </h3>
              <p className="text-gray-600">
                We believe in teamwork and collective action to achieve greater
                impact.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="font-heading font-bold text-xl text-gray-800 mb-3">
                Innovative
              </h3>
              <p className="text-gray-600">
                We embrace new ideas and approaches to solve complex social
                challenges.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
