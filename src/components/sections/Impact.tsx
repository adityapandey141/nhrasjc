import { FolderKanban, Users, Heart, MapPin } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useCountUp } from '../../hooks/useCountUp';

interface StatCardProps {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  isVisible: boolean;
}

const StatCard = ({ icon: Icon, value, suffix, label, isVisible }: StatCardProps) => {
  const count = useCountUp(value, 2000, isVisible);

  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon className="text-accent" size={32} />
      </div>
      <p className="text-4xl md:text-5xl font-heading font-bold mb-2">
        {count}{suffix}
      </p>
      <p className="text-gray-300 text-lg">{label}</p>
    </div>
  );
};

const Impact = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.3 });

  const stats = [
    { icon: FolderKanban, value: 150, suffix: '+', label: 'Projects Completed' },
    { icon: Users, value: 500, suffix: '+', label: 'Active Volunteers' },
    { icon: Heart, value: 50000, suffix: '+', label: 'Lives Impacted' },
    { icon: MapPin, value: 12, suffix: '+', label: 'States Covered' },
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-r from-primary-800 via-primary-700 to-primary-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-custom relative">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">Our Impact</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-4">
            Making a Difference Across India
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Our work has created meaningful change in communities across the nation. 
            These numbers reflect lives transformed and communities empowered.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              isVisible={isVisible}
            />
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h4 className="font-heading font-bold text-lg mb-2 text-accent">Gujarat</h4>
            <p className="text-gray-300 text-sm">
              Our headquarters and primary operational base with extensive outreach programs.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h4 className="font-heading font-bold text-lg mb-2 text-accent">Maharashtra</h4>
            <p className="text-gray-300 text-sm">
              Active anti-corruption initiatives and women empowerment centers.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h4 className="font-heading font-bold text-lg mb-2 text-accent">Rajasthan</h4>
            <p className="text-gray-300 text-sm">
              Youth skill development and community welfare programs in rural areas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
