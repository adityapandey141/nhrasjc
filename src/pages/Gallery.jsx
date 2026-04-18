import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const galleryImages = [
  {
    src: '/activity4.jpg',
    title: 'Human Rights Awareness Camp',
    category: 'Events',
  },
  {
    src: '/activity5.jpg',
    title: 'Women Skill Workshop',
    category: 'Workshops',
  },
  {
    src: '/activity7.jpg',
    title: 'Youth Leadership Summit',
    category: 'Events',
  },
  {
    src: '/activity8.jpg',
    title: 'Anti-Corruption Rally',
    category: 'Campaigns',
  },
  {
    src: '/banner1.jpg',
    title: 'Community Gathering',
    category: 'Events',
  },
  {
    src: '/banner2.jpg',
    title: 'Awareness Program',
    category: 'Campaigns',
  },
  {
    src: '/banner3.jpg',
    title: 'Foundation Day Celebration',
    category: 'Events',
  },
  {
    src: '/activity1.jpg',
    title: 'Legal Aid Camp',
    category: 'Workshops',
  },
  {
    src: '/activity2.jpg',
    title: 'Health Check-up Camp',
    category: 'Campaigns',
  },
  {
    src: '/activity3.jpg',
    title: 'Education Initiative',
    category: 'Workshops',
  },
];

const categories = ['All', 'Events', 'Workshops', 'Campaigns'];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <div>
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-r from-purple-700 via-red-600 to-orange-500 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Gallery</h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Glimpses of our activities, events, and the impact we're making together
          </p>
        </div>
      </section>

      {/* Gallery Section */}
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
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ZoomIn className="text-white" size={24} />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-medium text-sm">{image.title}</p>
                    <span className="text-white/70 text-xs">{image.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <X size={24} />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Image */}
          <div 
            className="max-w-5xl max-h-[85vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[currentImage]?.src}
              alt={filteredImages[currentImage]?.title}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <h3 className="text-white font-semibold text-lg">
                {filteredImages[currentImage]?.title}
              </h3>
              <p className="text-white/60 text-sm mt-1">
                {currentImage + 1} / {filteredImages.length}
              </p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-800 mb-4">
            Want to be part of our journey?
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-6">
            Join us in making a difference. Your support helps us create more impactful moments.
          </p>
          <a
            href="/contact"
            className="btn-gradient inline-flex items-center gap-2"
          >
            Get Involved
          </a>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
