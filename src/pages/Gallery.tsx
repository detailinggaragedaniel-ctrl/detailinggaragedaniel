import { useState } from 'react';
import { Sparkles, X } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const gallery = [
    { id: 1, category: 'exterior', title: 'Luxury Sedan Restoration', color: 'Black Ferrari 812' },
    { id: 2, category: 'interior', title: 'Premium Interior Detail', color: 'Bentley Continental' },
    { id: 3, category: 'ceramic', title: 'Ceramic Coating Application', color: 'Porsche 911 GT3' },
    { id: 4, category: 'exterior', title: 'Paint Correction', color: 'Mercedes-AMG GT' },
    { id: 5, category: 'interior', title: 'Leather Conditioning', color: 'Rolls-Royce Phantom' },
    { id: 6, category: 'ceramic', title: 'Full Body Ceramic', color: 'Lamborghini Huracán' },
    { id: 7, category: 'exterior', title: 'Chrome Delete', color: 'Tesla Model S Plaid' },
    { id: 8, category: 'interior', title: 'Deep Interior Clean', color: 'Range Rover Sport' },
    { id: 9, category: 'ceramic', title: '9H Ceramic Protection', color: 'Audi R8 V10' },
  ];

  const filteredGallery = filter === 'all'
    ? gallery
    : gallery.filter(item => item.category === filter);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'exterior', name: 'Exterior' },
    { id: 'interior', name: 'Interior' },
    { id: 'ceramic', name: 'Ceramic Coating' },
  ];

  return (
    <div className="min-h-screen text-white" style={{ paddingTop: '88px' }}>
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-16">
            <div className="mb-6 inline-block">
              <div className="flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-6 py-3">
                <Sparkles className="w-5 h-5 text-accent" />
                <span className="text-accent font-semibold">Our Work</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 uppercase text-white">
              Gallery
            </h1>

            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-12">
              Witness the transformative power of professional detailing. Each vehicle tells a story of dedication, precision, and excellence.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    filter === cat.id
                      ? 'bg-accent text-[#1A1A1A]'
                      : 'border border-border text-white/70 hover:border-accent hover:text-white'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-square overflow-hidden cursor-pointer bg-card border border-border hover:border-accent transition-all duration-500"
                onClick={() => setSelectedImage(filteredGallery.indexOf(item))}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-accent/20 rounded-full opacity-40 group-hover:scale-150 transition-transform duration-700"></div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 bg-background translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl font-heading font-bold text-white mb-2 uppercase">{item.title}</h3>
                  <p className="text-white font-semibold uppercase">{item.color}</p>
                </div>

                <div className="absolute top-4 right-4 bg-card border border-border rounded-full px-4 py-2 text-sm font-semibold text-accent capitalize opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {item.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="bg-card border border-border p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white uppercase">
              Before & After Transformations
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
              Every vehicle receives a complete metamorphosis. From neglected to stunning, we restore each car to its ultimate glory.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                { metric: '500+', label: 'Vehicles Detailed' },
                { metric: '98%', label: 'Satisfaction Rate' },
                { metric: '15+', label: 'Years Experience' },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-5xl font-heading font-bold text-accent mb-2">
                    {stat.metric}
                  </div>
                  <div className="text-white/70 text-lg uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 bg-card border border-border hover:border-accent rounded-full flex items-center justify-center transition-all duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-accent" />
          </button>

          <div className="max-w-5xl w-full">
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-border bg-card">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-accent/20 rounded-full opacity-30"></div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-3xl font-heading font-bold text-white mb-2 uppercase">
                {filteredGallery[selectedImage].title}
              </h3>
              <p className="text-white text-lg uppercase">{filteredGallery[selectedImage].color}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
