import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80',
    alt: 'Community outreach program',
    category: 'Community',
  },
  {
    src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80',
    alt: 'Team meeting',
    category: 'Office',
  },
  {
    src: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80',
    alt: 'Women empowerment event',
    category: 'Women',
  },
  {
    src: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80',
    alt: 'Youth training program',
    category: 'Youth',
  },
  {
    src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80',
    alt: 'Health camp',
    category: 'Health',
  },
  {
    src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80',
    alt: 'Cultural event',
    category: 'Culture',
  },
  {
    src: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&q=80',
    alt: 'Donation drive',
    category: 'Donation',
  },
  {
    src: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=800&q=80',
    alt: 'Team celebration',
    category: 'Team',
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="gallery" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">Gallery</span>
          <h2 className="section-title mt-2">Moments of Impact</h2>
          <p className="section-subtitle">
            Visual stories of our journey in creating positive change across communities.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer overflow-hidden rounded-xl ${
                index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                  index === 0 || index === 5 ? 'h-[300px] md:h-full' : 'h-[200px] md:h-[220px]'
                }`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary-800/0 group-hover:bg-primary-800/60 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-100 scale-50">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <ZoomIn className="text-primary-800" size={24} />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-sm font-medium">{image.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={28} />
          </button>
          <img
            src={selectedImage}
            alt="Full view"
            className="max-w-full max-h-[90vh] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
