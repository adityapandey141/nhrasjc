import { useState } from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

const categories = ['All', 'Awareness Programs', 'Social Campaigns', 'Training Programs'];

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&q=80',
    title: 'Human Rights Awareness Campaign',
    category: 'Awareness Programs',
    description: 'A comprehensive campaign to educate citizens about their fundamental rights and legal protections.',
    date: 'March 2024',
    location: 'Gujarat',
    beneficiaries: '5000+',
  },
  {
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80',
    title: 'Women Skill Development Program',
    category: 'Training Programs',
    description: 'Empowering women through vocational training in tailoring, handicrafts, and digital literacy.',
    date: 'February 2024',
    location: 'Maharashtra',
    beneficiaries: '500+',
  },
  {
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&q=80',
    title: 'Youth Leadership Summit',
    category: 'Social Campaigns',
    description: 'Annual summit bringing together young leaders to discuss social issues and community development.',
    date: 'January 2024',
    location: 'New Delhi',
    beneficiaries: '1000+',
  },
  {
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&q=80',
    title: 'Anti-Corruption Awareness Drive',
    category: 'Awareness Programs',
    description: 'Street plays, workshops, and seminars to raise awareness about corruption and its impact.',
    date: 'December 2023',
    location: 'Rajasthan',
    beneficiaries: '3000+',
  },
  {
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80',
    title: 'Community Health Camp',
    category: 'Social Campaigns',
    description: 'Free health check-ups and medical consultations for underprivileged communities.',
    date: 'November 2023',
    location: 'Uttar Pradesh',
    beneficiaries: '2000+',
  },
  {
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80',
    title: 'Digital Literacy Program',
    category: 'Training Programs',
    description: 'Teaching basic computer skills and internet usage to rural youth and women.',
    date: 'October 2023',
    location: 'Bihar',
    beneficiaries: '800+',
  },
  {
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&q=80',
    title: 'Legal Aid Workshop',
    category: 'Awareness Programs',
    description: 'Workshops providing free legal consultation and guidance on rights protection.',
    date: 'September 2023',
    location: 'Madhya Pradesh',
    beneficiaries: '1500+',
  },
  {
    image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=600&q=80',
    title: 'Cultural Heritage Festival',
    category: 'Social Campaigns',
    description: 'Celebrating and preserving Indian cultural heritage through art, music, and dance.',
    date: 'August 2023',
    location: 'Gujarat',
    beneficiaries: '10000+',
  },
];

const Work = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div>
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-r from-purple-700 via-red-600 to-orange-500 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Work</h1>
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
                    ? 'bg-gradient-to-r from-purple-700 to-red-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
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
                    <span className="bg-gradient-to-r from-purple-700 to-red-600 text-white text-xs px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl text-gray-800 mb-3 group-hover:text-purple-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
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
                    </span>
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
            <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">Our Focus</span>
            <h2 className="section-title mt-2">Key Areas of Work</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📢</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-gray-800 mb-3">Awareness Programs</h3>
              <p className="text-gray-600">
                Conducting workshops, seminars, and campaigns to educate citizens about their rights 
                and responsibilities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">✊</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-gray-800 mb-3">Social Campaigns</h3>
              <p className="text-gray-600">
                Organizing rallies, drives, and community events to address social issues and bring 
                positive change.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎓</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-gray-800 mb-3">Training Programs</h3>
              <p className="text-gray-600">
                Skill development and vocational training programs to empower youth and women 
                for better livelihoods.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
