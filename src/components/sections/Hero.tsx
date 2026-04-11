import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart, Users } from 'lucide-react';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&q=80',
    title: 'Protecting Rights, Empowering Society',
    subtitle: 'Working towards a just and equitable India where every citizen\'s rights are protected and respected.',
  },
  {
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1920&q=80',
    title: 'Empowering Women & Children',
    subtitle: 'Building stronger communities through education, skill development, and welfare programs.',
  },
  {
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1920&q=80',
    title: 'Fighting Against Corruption',
    subtitle: 'Promoting transparency and accountability in governance through civic engagement.',
  },
  {
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&q=80',
    title: 'Youth Development Programs',
    subtitle: 'Nurturing the next generation with skills, values, and opportunities for a brighter future.',
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-800/90 via-primary-800/70 to-transparent" />
          </div>
        </div>
      ))}

      <div className="relative h-full container-custom flex items-center">
        <div className="max-w-2xl text-white animate-fade-in">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-12 h-1 bg-accent" />
            <span className="text-accent font-medium uppercase tracking-wider text-sm">
              Registered NGO | ISO 9001:2015 Certified
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
            {slides[currentSlide].title}
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
            {slides[currentSlide].subtitle}
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => handleNavClick('#donate')}
              className="btn-secondary flex items-center gap-2 text-lg"
            >
              <Heart size={20} />
              Donate Now
            </button>
            <button
              onClick={() => handleNavClick('#volunteer')}
              className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-2 text-lg border border-white/30"
            >
              <Users size={20} />
              Join Us
            </button>
          </div>

          <div className="mt-12 flex items-center gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">15+</p>
              <p className="text-sm text-gray-300">Years of Service</p>
            </div>
            <div className="w-px h-12 bg-white/30" />
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">50K+</p>
              <p className="text-sm text-gray-300">Lives Impacted</p>
            </div>
            <div className="w-px h-12 bg-white/30" />
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">12+</p>
              <p className="text-sm text-gray-300">States Covered</p>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-accent w-8'
                : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
