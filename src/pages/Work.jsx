import { useState } from "react";
import { Calendar, MapPin, Users } from "lucide-react";

const categories = [
  "All",
  "Awareness Programs",
  "Social Campaigns",
  "Training Programs",
];

const projects = [
  {
    image: "/activity4.jpg",
    title: "Human Rights Awareness Camp",
    category: "Awareness Programs",
    description:
      "A comprehensive camp to educate citizens about their fundamental rights and legal protections.",
    date: "15 March 2024",
    location: "Vadodara",
    beneficiaries: "5000+",
  },
  {
    image: "/activity5.jpg",
    title: "Women Skill Workshop",
    category: "Training Programs",
    description:
      "Empowering women through vocational training in tailoring, handicrafts, and digital literacy.",
    date: "28 February 2024",
    location: "Ahmedabad",
    beneficiaries: "500+",
  },
  {
    image: "/activity7.jpg",
    title: "Youth Leadership Summit",
    category: "Social Campaigns",
    description:
      "Annual summit bringing together young leaders to discuss social issues and community development.",
    date: "10 February 2024",
    location: "Mumbai",
    beneficiaries: "1000+",
  },
  {
    image: "/activity8.jpg",
    title: "Anti-Corruption Rally",
    category: "Awareness Programs",
    description:
      "Street plays, workshops, and rallies to raise awareness about corruption and its impact.",
    date: "26 January 2024",
    location: "New Delhi",
    beneficiaries: "3000+",
  },
];

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-r from-purple-700 via-red-600 to-orange-500 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Our Work
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Explore our initiatives and projects that are making a difference
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-purple-700 to-red-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm card-hover group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    {/* <span className="bg-gradient-to-r from-purple-700 to-red-600 text-white text-xs px-3 py-1 rounded-full">
                      {project.category}
                    </span> */}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl text-gray-800 mb-3 group-hover:text-purple-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    {/* <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {project.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users size={14} />
                      {project.beneficiaries}
                    </span> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Summary */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-purple-700 via-red-600 to-orange-500 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">150+</div>
                <div className="text-purple-100">Projects</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">12</div>
                <div className="text-purple-100">States</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100K+</div>
                <div className="text-purple-100">Lives Impacted</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5000+</div>
                <div className="text-purple-100">Volunteers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">
              Our Focus
            </span>
            <h2 className="section-title mt-2">Key Areas of Work</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📢</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-gray-800 mb-3">
                Awareness Programs
              </h3>
              <p className="text-gray-600">
                Conducting workshops, seminars, and campaigns to educate
                citizens about their rights and responsibilities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">✊</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-gray-800 mb-3">
                Social Campaigns
              </h3>
              <p className="text-gray-600">
                Organizing rallies, drives, and community events to address
                social issues and bring positive change.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎓</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-gray-800 mb-3">
                Training Programs
              </h3>
              <p className="text-gray-600">
                Skill development and vocational training programs to empower
                youth and women for better livelihoods.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
