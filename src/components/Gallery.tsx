export default function Gallery() {
  const projects = [
    {
      title: 'Backyard Stump Grinding',
      location: 'Easley, SC',
      altText: 'Stump grinding service in Easley SC - backyard stump removal by Nelson Land & Stump',
    },
    {
      title: 'Pasture Brush Hogging',
      location: 'Pendleton, SC',
      altText: 'Brush hogging service in Pendleton SC - pasture clearing by Nelson Land & Stump',
    },
    {
      title: 'New Home Lot Clearing',
      location: 'Six Mile, SC',
      altText: 'Land clearing for new construction in Six Mile SC - lot prep by Nelson Land & Stump',
    },
    {
      title: 'Storm Damage Cleanup',
      location: 'Clemson, SC',
      altText: 'Storm damage tree and stump cleanup in Clemson SC by Nelson Land & Stump',
    },
    {
      title: 'Fence Line Clearing',
      location: 'Anderson, SC',
      altText: 'Fence line brush clearing in Anderson SC by Nelson Land & Stump Services',
    },
    {
      title: 'Driveway Land Clearing',
      location: 'Seneca, SC',
      altText: 'Driveway land clearing project in Seneca SC by Nelson Land & Stump',
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
              role="img"
              aria-label={project.altText}
            >
              {/* Photo placeholder - replace with actual images for better SEO */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-12 h-12 text-primary/30 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm text-primary/40">Add photo</p>
                </div>
              </div>

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
          <p className="text-muted">
            Have photos of your property? We&apos;d love to show the transformation.
          </p>
        </div>
      </div>
    </section>
  );
}
