import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const activities = [
  {
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&q=80',
    title: 'Human Rights Awareness Camp',
    date: '15 March 2024',
    location: 'Vadodara, Gujarat',
  },
  {
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80',
    title: 'Women Skill Development Workshop',
    date: '28 February 2024',
    location: 'Ahmedabad, Gujarat',
  },
  {
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&q=80',
    title: 'Youth Leadership Summit',
    date: '10 February 2024',
    location: 'Mumbai, Maharashtra',
  },
  {
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=400&q=80',
    title: 'Anti-Corruption Rally',
    date: '26 January 2024',
    location: 'New Delhi',
  },
  {
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&q=80',
    title: 'Community Health Camp',
    date: '15 January 2024',
    location: 'Rajkot, Gujarat',
  },
  {
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&q=80',
    title: 'Cultural Festival',
    date: '1 January 2024',
    location: 'Surat, Gujarat',
  },
];

const Activities = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="activities" className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">Recent Work</span>
            <h2 className="section-title mt-2">Latest Activities & Events</h2>
            <p className="text-gray-600 max-w-xl">
              Stay updated with our recent initiatives, events, and programs making a difference across communities.
            </p>
          </div>
          <div className="flex gap-3 mt-6 md:mt-0">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 bg-gray-100 hover:bg-primary-800 hover:text-white rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 bg-gray-100 hover:bg-primary-800 hover:text-white rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div
          ref={ref}
          className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {activities.map((activity, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[320px] group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-[220px] object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                  <Calendar size={16} />
                  <span>{activity.date}</span>
                  <span className="text-gray-300">•</span>
                  <span>{activity.location}</span>
                </div>
                <h3 className="font-heading font-bold text-lg text-primary-800 group-hover:text-accent transition-colors">
                  {activity.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="btn-primary">
            View All Activities
          </button>
        </div>
      </div>
    </section>
  );
};

export default Activities;
