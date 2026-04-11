import { Instagram, ExternalLink, Play, Heart } from "lucide-react";

const instagramPosts = [
  {
    id: "C7a5BXWPcNE",
    type: "reel",
    thumbnail: "/instathumb2.png",
    title: "Human Rights Awareness Event",
    likes: "14",
  },
  {
    id: "C2mDitACnGK",
    type: "p",
    thumbnail: "/instathumb1.png",
    title: "Community Outreach Program",
    likes: "27",
  },
  {
    id: "C7toAtNPwvu",
    type: "reel",
    thumbnail: "/instathumb3.png",
    title: "World Environment Day",
    likes: "45",
  },
  {
    id: "C2g--Vox8ZO",
    type: "p",
    thumbnail: "/instathumb4.png",
    title: "Dr. Jatin Jagdishbhai Solank",
    likes: "38",
  },
];

const InstagramFeed = () => {
  const instagramUrl = "https://www.instagram.com/national_human_rights_nhrsjc";

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">
            Social Media
          </span>
          <h2 className="section-title mt-2">Follow Our Journey</h2>
          <p className="section-subtitle mt-4 max-w-2xl mx-auto">
            Stay connected with our latest activities, events, and impact
            stories on Instagram
          </p>
        </div>

        {/* Instagram Profile Card */}
        <div className="max-w-md mx-auto mb-12 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-0.5">
              <div className="w-full h-full rounded-full bg-white p-0.5">
                <img
                  src="/logo.png"
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-800">
                @national_human_rights_nhrsjc
              </h3>
              <p className="text-sm text-gray-500">NHRSJWF Official</p>
            </div>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white px-5 py-2 rounded-lg font-semibold text-sm hover:shadow-lg transition-all"
            >
              Follow
            </a>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instagramPosts.map((post, index) => (
            <a
              key={index}
              href={`https://www.instagram.com/${post.type}/${post.id}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={post.thumbnail}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-medium line-clamp-2">
                    {post.title}
                  </p>
                  <div className="flex items-center gap-2 mt-2 text-white/80 text-xs">
                    <Heart size={14} className="fill-white" />
                    <span>{post.likes}</span>
                  </div>
                </div>
              </div>
              {/* Play icon for reels */}
              {post.type === "reel" && (
                <div className="absolute top-3 right-3">
                  <Play
                    size={20}
                    className="text-white drop-shadow-lg fill-white"
                  />
                </div>
              )}
              {/* Instagram icon */}
              <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <Instagram size={20} className="text-white drop-shadow-lg" />
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Instagram size={22} />
            View All Posts on Instagram
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
