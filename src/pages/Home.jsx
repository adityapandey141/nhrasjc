import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Shield,
  Users,
  GraduationCap,
  Scale,
  Palette,
  Heart,
  Target,
  Eye,
  Calendar,
  MapPin,
} from "lucide-react";

const heroSlides = [
  {
    image: "banner1.jpg",
    title: "Protecting Rights, Fighting Corruption",
    subtitle: "Empowering Society Through Justice",
  },
  {
    image: "banner2.jpg",
    title: "Building a Just & Equitable Society",
    subtitle: "Together We Can Make a Difference",
  },
  {
    image: "banner3.jpg",
    title: "Empowering Communities",
    subtitle: "Creating Opportunities for All",
  },
];

const services = [
  {
    icon: Shield,
    title: "Human Rights Awareness",
    desc: "Educating communities about fundamental rights and legal protections.",
  },
  {
    icon: Users,
    title: "Women Empowerment",
    desc: "Supporting women through skill development and advocacy programs.",
  },
  {
    icon: GraduationCap,
    title: "Youth Skill Development",
    desc: "Training youth with vocational skills for better employment.",
  },
  {
    icon: Scale,
    title: "Anti-Corruption Initiatives",
    desc: "Fighting corruption through awareness and legal support.",
  },
  {
    icon: Palette,
    title: "Cultural Promotion",
    desc: "Preserving and promoting Indian art, culture, and heritage.",
  },
  {
    icon: Heart,
    title: "Community Development",
    desc: "Holistic development programs for underprivileged communities.",
  },
];

const stats = [
  { value: 150, suffix: "+", label: "Projects Completed" },
  { value: 5000, suffix: "+", label: "Volunteers" },
  { value: 100000, suffix: "+", label: "Lives Impacted" },
  { value: 12, suffix: "", label: "States Covered" },
];

const activities = [
  {
    image: "activity1.jpg",
    title: "Human Rights Awareness Camp",
    date: "15 March 2024",
    location: "Vadodara",
  },
  {
    image: "activity2.jpg",
    title: "Women Skill Workshop",
    date: "28 February 2024",
    location: "Ahmedabad",
  },
  {
    image: "activity3.jpg",
    title: "Youth Leadership Summit",
    date: "10 February 2024",
    location: "Mumbai",
  },
  {
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=400&q=80",
    title: "Anti-Corruption Rally",
    date: "26 January 2024",
    location: "New Delhi",
  },
];

const useCountUp = (end, duration = 2000, start = true) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration, start]);

  return count;
};

const StatCard = ({ value, suffix, label }) => {
  const count = useCountUp(value, 2000);
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-purple-200">{label}</div>
    </div>
  );
};

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-red-900/60 to-orange-900/40" />
          </div>
        ))}

        <div className="absolute inset-0 flex items-center">
          <div className="container-custom max-w-7xl">
            <div className="text-white max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 animate-fade-in">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                {heroSlides[currentSlide].subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/about" className="btn-gradient">
                  Join Us
                </Link>
                <button className="btn-white">Donate Now</button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-white w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() =>
            setCurrentSlide(
              (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
            )
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() =>
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
          }
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">
                About Us
              </span>
              <h2 className="section-title mt-2 mb-6">
                National Human Rights & Anti Corruption Social Justice Welfare
                Foundation
              </h2>
              <p className="text-gray-600 mb-4">
                NHRSJWF is a registered non-profit organization dedicated to
                protecting human rights, fighting corruption, and empowering
                communities across India. Since our establishment, we have been
                working tirelessly to create a just and equitable society.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="text-purple-700" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Our Mission</h4>
                    <p className="text-sm text-gray-600">
                      Empowering communities through rights awareness
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Eye className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Our Vision</h4>
                    <p className="text-sm text-gray-600">
                      A corruption-free, just society for all
                    </p>
                  </div>
                </div>
              </div>
              <Link to="/about" className="btn-gradient mt-8 inline-block">
                Learn More About Us
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80"
                alt="Community work"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-700 to-red-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm">Years of Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">
              What We Do
            </span>
            <h2 className="section-title mt-2">Our Services</h2>
            <p className="section-subtitle mt-4">
              Comprehensive programs designed to uplift communities and protect
              rights
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm card-hover group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-700 to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="text-white" size={28} />
                </div>
                <h3 className="font-heading font-bold text-xl text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-gradient-to-r from-purple-700 via-red-600 to-orange-500">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
              Our Impact
            </h2>
            <p className="text-purple-100 mt-2">
              Making a difference across India
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Activities */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">
                Recent Work
              </span>
              <h2 className="section-title mt-2">Latest Activities</h2>
            </div>
            <Link to="/work" className="btn-outline-gradient mt-4 md:mt-0">
              View All
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="group cursor-pointer card-hover bg-white rounded-xl overflow-hidden shadow-sm"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {activity.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {activity.location}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-gray-800 group-hover:text-purple-700 transition-colors">
                    {activity.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Join Our Mission for a Better Society
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Together, we can fight corruption, protect human rights, and empower
            communities. Your support makes a difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/team" className="btn-gradient">
              Become a Volunteer
            </Link>
            <button className="btn-white">Donate Now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
