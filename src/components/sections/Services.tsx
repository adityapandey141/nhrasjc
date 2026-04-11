import { 
  Scale, 
  Heart, 
  GraduationCap, 
  Shield, 
  Palette, 
  Users,
  ArrowRight
} from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const services = [
  {
    icon: Scale,
    title: 'Human Rights Awareness',
    description: 'Conducting workshops, seminars, and legal awareness camps to educate citizens about their fundamental rights and legal remedies available for violations.',
    color: 'bg-blue-500',
  },
  {
    icon: Heart,
    title: 'Women Empowerment Programs',
    description: 'Implementing skill development, financial literacy, and self-defense training programs to empower women and promote gender equality in society.',
    color: 'bg-pink-500',
  },
  {
    icon: GraduationCap,
    title: 'Youth Skill Development',
    description: 'Providing vocational training, career counseling, and entrepreneurship development programs to equip youth with skills for sustainable livelihoods.',
    color: 'bg-green-500',
  },
  {
    icon: Shield,
    title: 'Civic & Anti-Corruption Initiatives',
    description: 'Fighting against corruption through RTI applications, public interest litigations, and promoting transparency in government institutions.',
    color: 'bg-red-500',
  },
  {
    icon: Palette,
    title: 'Art & Cultural Promotion',
    description: 'Preserving and promoting Indian art, culture, and heritage through exhibitions, cultural events, and support for traditional artisans.',
    color: 'bg-purple-500',
  },
  {
    icon: Users,
    title: 'Community Development',
    description: 'Implementing grassroots programs for healthcare, sanitation, education, and infrastructure development in underserved communities.',
    color: 'bg-orange-500',
  },
];

const Services = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">What We Do</span>
          <h2 className="section-title mt-2">Our Services & Initiatives</h2>
          <p className="section-subtitle">
            Comprehensive programs designed to protect rights, empower communities, and create lasting social change.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200"
            >
              <div
                className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="text-white" size={32} />
              </div>

              <h3 className="text-xl font-heading font-bold text-primary-800 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              <button className="flex items-center gap-2 text-primary-800 font-semibold group-hover:text-accent transition-colors">
                Learn More
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-800 to-primary-700 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Want to Partner With Us?
              </h3>
              <p className="text-gray-200 leading-relaxed">
                We welcome collaboration with government agencies, corporate organizations, and NGOs 
                to amplify our impact. Together, we can create more comprehensive solutions for 
                social challenges.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center md:justify-end">
              <button
                onClick={() => {
                  const el = document.querySelector('#contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-primary-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </button>
              <button
                onClick={() => {
                  const el = document.querySelector('#volunteer');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-600 transition-colors"
              >
                Become a Partner
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
