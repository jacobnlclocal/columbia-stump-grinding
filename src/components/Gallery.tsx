import Image from 'next/image';

export default function Gallery() {
  const projects = [
    {
      title: 'Backyard Stump Grinding',
      location: 'Easley, SC',
      altText: 'Stump grinding service in Easley SC - backyard stump removal by Nelson Land & Stump',
      image: '/gallery-1.jpg',
    },
    {
      title: 'Pasture Brush Hogging',
      location: 'Pendleton, SC',
      altText: 'Brush hogging service in Pendleton SC - pasture clearing by Nelson Land & Stump',
      image: '/gallery-2.jpg',
    },
    {
      title: 'New Home Lot Clearing',
      location: 'Six Mile, SC',
      altText: 'Land clearing for new construction in Six Mile SC - lot prep by Nelson Land & Stump',
      image: '/gallery-3.jpg',
    },
    {
      title: 'Storm Damage Cleanup',
      location: 'Clemson, SC',
      altText: 'Storm damage tree and stump cleanup in Clemson SC by Nelson Land & Stump',
      image: '/gallery-4.jpg',
    },
    {
      title: 'Fence Line Clearing',
      location: 'Anderson, SC',
      altText: 'Fence line brush clearing in Anderson SC by Nelson Land & Stump Services',
      image: '/gallery-5.jpg',
    },
    {
      title: 'Driveway Land Clearing',
      location: 'Seneca, SC',
      altText: 'Driveway land clearing project in Seneca SC by Nelson Land & Stump',
      image: '/gallery-6.jpg',
    },
  ];

  return (
    <section id="work" className="py-20 bg-muted-light">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
            RECENT PROJECTS IN UPSTATE SC
          </h2>
          <p className="text-muted text-lg">
            Stump grinding, brush hogging, and land clearing jobs around Greenville, Anderson, and Pickens Counties
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] bg-primary/10 rounded-lg overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.altText}
                fill
                loading="lazy"
                quality={60}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-4 text-white">
                  <p className="font-bold">{project.title}</p>
                  <p className="text-sm text-gray-300">{project.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/#contact"
            className="inline-block bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-md font-bold uppercase tracking-wide transition-colors"
          >
            Get Your Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
