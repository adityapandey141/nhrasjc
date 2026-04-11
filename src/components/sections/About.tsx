import { Target, Eye, Award, FileCheck, Users, Building } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const About = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">About Us</span>
          <h2 className="section-title mt-2">National Human Rights & Social Justice Welfare Foundation</h2>
          <p className="section-subtitle">
            A trusted organization committed to safeguarding human rights and promoting social justice across India.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 items-center mb-20 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <div>
            <h3 className="text-2xl font-heading font-bold text-primary-800 mb-6">
              Building a Just & Equitable Society
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The National Human Rights & Social Justice Welfare Foundation (NHR-SJWF) is a registered 
              non-profit organization established under the Government of India Act, 1882. We are dedicated 
              to protecting and promoting human rights, fighting against corruption, and empowering 
              marginalized communities across India.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our foundation works at the grassroots level to create awareness about fundamental rights, 
              provide legal assistance to the underprivileged, and implement welfare programs that uplift 
              women, children, and youth from disadvantaged backgrounds.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <FileCheck className="text-primary-800" size={24} />
                <div>
                  <p className="font-semibold text-gray-800">Regd. No.</p>
                  <p className="text-sm text-gray-600">CSR0063265</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Award className="text-primary-800" size={24} />
                <div>
                  <p className="font-semibold text-gray-800">ISO Certified</p>
                  <p className="text-sm text-gray-600">9001:2015</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Building className="text-primary-800" size={24} />
                <div>
                  <p className="font-semibold text-gray-800">NITI Aayog</p>
                  <p className="text-sm text-gray-600">U88900GJ2023NPL</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Users className="text-primary-800" size={24} />
                <div>
                  <p className="font-semibold text-gray-800">NGO ID</p>
                  <p className="text-sm text-gray-600">GJ/00033750</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=600&q=80"
              alt="Team meeting"
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary-800 text-white p-6 rounded-xl shadow-lg">
              <p className="text-4xl font-bold text-accent">15+</p>
              <p className="text-sm">Years of Dedicated Service</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gradient-to-br from-primary-800 to-primary-700 text-white p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                <Target className="text-accent" size={24} />
              </div>
              <h3 className="text-2xl font-heading font-bold">Our Mission</h3>
            </div>
            <p className="text-gray-200 leading-relaxed">
              To protect and promote human rights, fight against corruption and social injustice, 
              empower women, youth, and marginalized communities through education, skill development, 
              and advocacy programs. We strive to create a society where every individual can live 
              with dignity and equality.
            </p>
          </div>

          <div className="bg-gradient-to-br from-secondary-600 to-secondary-700 text-white p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Eye className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-heading font-bold">Our Vision</h3>
            </div>
            <p className="text-gray-200 leading-relaxed">
              To build an India where human rights are universally respected, corruption is eliminated, 
              and every citizen has equal access to justice, education, and opportunities. We envision 
              empowered communities driving sustainable social change through active civic participation.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
                alt="Chairman"
                className="w-48 h-48 md:w-full md:h-64 object-cover rounded-xl shadow-lg mx-auto"
                loading="lazy"
              />
            </div>
            <div className="md:col-span-2">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">Chairman's Message</span>
              <h3 className="text-2xl font-heading font-bold text-primary-800 mt-2 mb-4">
                A Message from Our Chairman
              </h3>
              <blockquote className="text-gray-600 leading-relaxed italic border-l-4 border-accent pl-6">
                "Our foundation stands as a beacon of hope for those whose voices often go unheard. 
                We believe that every citizen of India deserves to live with dignity, free from 
                exploitation and injustice. Through our tireless efforts, we aim to bridge the gap 
                between the marginalized and mainstream society, ensuring equal rights and opportunities 
                for all. Together, we can build a nation where justice prevails and humanity thrives."
              </blockquote>
              <div className="mt-6">
                <p className="font-bold text-primary-800">Hasmukh Solanki</p>
                <p className="text-gray-600 text-sm">National President, NHR-SJWF</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
