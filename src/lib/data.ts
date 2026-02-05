// City and service data for Columbia Stump Grinding

export interface CityData {
  slug: string;
  name: string;
  county: string;
  neighborhoods: string[];
  nearbyAreas: { name: string; slug: string }[];
}

export interface ServiceData {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  priceRange: string;
  benefits: { title: string; description: string }[];
  // SEO keyword synonyms for better ranking
  synonyms: string[];
  // Different customer types we serve
  customerTypes: { type: string; description: string }[];
  // Size variations for the service
  sizeVariations: { size: string; description: string; priceNote: string }[];
}

export const services: ServiceData[] = [
  {
    slug: 'stump-grinding',
    name: 'Stump Grinding',
    shortName: 'Stump Grinding',
    description: 'Professional stump grinding service that removes unsightly stumps by grinding them 6-8 inches below ground level. Fast, affordable, and leaves your yard ready for landscaping.',
    priceRange: '$75-$400',
    benefits: [
      { title: 'Reclaim Your Yard', description: 'No more mowing around stumps or tripping hazards. Get your full yard back for landscaping, play areas, or new construction.' },
      { title: 'Prevent Pest Problems', description: 'Old stumps attract termites, carpenter ants, and other wood-boring insects that can spread to your home or healthy trees.' },
      { title: 'Improve Curb Appeal', description: 'Unsightly stumps bring down the look of your property. Removal instantly improves your landscape aesthetics.' },
      { title: 'Stop Regrowth', description: 'Some tree species send up new shoots from old stumps. Grinding below grade prevents unwanted regrowth.' },
    ],
    synonyms: ['stump removal', 'stump grinder', 'tree stump grinding', 'tree stump removal', 'tree root grinding', 'root removal'],
    customerTypes: [
      { type: 'Residential', description: 'Homeowners looking to remove stumps from their yard for landscaping, safety, or aesthetics. We work around your schedule and keep your property clean.' },
      { type: 'Commercial', description: 'Businesses, property managers, and HOAs needing professional stump removal. We handle multi-stump jobs and offer volume discounts.' },
    ],
    sizeVariations: [
      { size: 'Small Stumps', description: 'Stumps under 12 inches in diameter. Quick removal, usually done in under 30 minutes per stump.', priceNote: '$75-$125' },
      { size: 'Medium Stumps', description: 'Stumps 12-24 inches in diameter. Most common residential stump size.', priceNote: '$125-$225' },
      { size: 'Large Stumps', description: 'Stumps over 24 inches in diameter. Includes old-growth oaks, pines, and large hardwoods.', priceNote: '$225-$400+' },
    ],
  },
  {
    slug: 'brush-hogging',
    name: 'Brush Hogging',
    shortName: 'Brush Hogging',
    description: 'Heavy-duty brush hogging and field mowing service for overgrown properties, fence lines, and trails. We clear thick vegetation that regular mowers can\'t handle.',
    priceRange: '$75-$150/acre',
    benefits: [
      { title: 'Reclaim Overgrown Land', description: 'Transform overgrown fields, pastures, and lots back into usable space for farming, recreation, or development.' },
      { title: 'Fire Prevention', description: 'Reduce fire hazards by clearing dry brush and overgrown vegetation around your property.' },
      { title: 'Property Maintenance', description: 'Keep fence lines, trails, and property borders clear and accessible year-round.' },
      { title: 'Increase Property Value', description: 'Well-maintained land is more attractive to buyers and adds value to your property.' },
    ],
    synonyms: ['brush clearing', 'field mowing', 'pasture mowing', 'bush hogging', 'overgrown lot clearing', 'field clearing'],
    customerTypes: [
      { type: 'Residential', description: 'Homeowners with overgrown back lots, fence lines, or unused portions of their property that need clearing.' },
      { type: 'Commercial', description: 'Businesses, farms, and property investors with large acreage requiring regular maintenance or one-time clearing.' },
    ],
    sizeVariations: [
      { size: 'Small Area', description: 'Under 1 acre. Perfect for residential fence lines, small fields, or backyard clearing.', priceNote: '$100-$200 minimum' },
      { size: 'Medium Area', description: '1-5 acres. Common for residential properties and small farms.', priceNote: '$75-$150/acre' },
      { size: 'Large Area', description: '5+ acres. Multi-acre farms, pastures, and commercial properties. Volume discounts available.', priceNote: '$50-$100/acre' },
    ],
  },
  {
    slug: 'land-clearing',
    name: 'Land Clearing',
    shortName: 'Land Clearing',
    description: 'Complete land clearing service for residential and commercial projects. We remove trees, brush, stumps, and debris to prepare your lot for construction or development.',
    priceRange: '$1,500-$5,000/acre',
    benefits: [
      { title: 'Site Preparation', description: 'Get your lot ready for new construction, whether it\'s a home, barn, shop, or commercial building.' },
      { title: 'Complete Removal', description: 'We handle everything from small saplings to large trees, plus stumps, brush, and debris removal.' },
      { title: 'Proper Disposal', description: 'All cleared material is properly disposed of or can be processed into mulch for your use.' },
      { title: 'Grading Ready', description: 'Leave your property clean and ready for the next phase of your project.' },
    ],
    synonyms: ['lot clearing', 'yard clearing', 'site clearing', 'property clearing', 'land clearing services', 'acreage clearing'],
    customerTypes: [
      { type: 'Residential', description: 'Homeowners clearing land for new home construction, driveways, gardens, or outdoor living spaces.' },
      { type: 'Commercial', description: 'Developers, builders, and businesses preparing sites for construction, parking, or expansion.' },
    ],
    sizeVariations: [
      { size: 'Small Lot', description: 'Under 1/2 acre. Typical residential lot for home construction or driveway clearing.', priceNote: '$1,500-$3,000' },
      { size: 'Medium Lot', description: '1/2 to 2 acres. Larger residential properties or small commercial sites.', priceNote: '$2,500-$6,000' },
      { size: 'Large Acreage', description: '2+ acres. Farm land, development sites, or commercial properties.', priceNote: '$3,000-$5,000/acre' },
    ],
  },
];

export const cities: CityData[] = [
  // Richland County
  {
    slug: 'columbia-sc',
    name: 'Columbia',
    county: 'Richland County',
    neighborhoods: ['Downtown Columbia', 'Five Points', 'Shandon', 'Forest Acres', 'Rosewood', 'Elmwood Park', 'Earlewood', 'Eau Claire', 'Olympia', 'West Columbia', 'Northeast Columbia', 'St. Andrews', 'Dutch Fork', 'Harbison', 'Irmo'],
    nearbyAreas: [
      { name: 'West Columbia', slug: 'west-columbia-sc' },
      { name: 'Forest Acres', slug: 'forest-acres-sc' },
      { name: 'Irmo', slug: 'irmo-sc' },
      { name: 'Blythewood', slug: 'blythewood-sc' },
    ],
  },
  {
    slug: 'blythewood-sc',
    name: 'Blythewood',
    county: 'Richland County',
    neighborhoods: ['Downtown Blythewood', 'Cobblestone Park', 'The Lakes', 'Longtown', 'Killian', 'Ridgewood', 'Brookhaven', 'Muller Road', 'Blythewood Farms'],
    nearbyAreas: [
      { name: 'Columbia', slug: 'columbia-sc' },
      { name: 'Forest Acres', slug: 'forest-acres-sc' },
      { name: 'Irmo', slug: 'irmo-sc' },
      { name: 'Hopkins', slug: 'hopkins-sc' },
    ],
  },
  {
    slug: 'forest-acres-sc',
    name: 'Forest Acres',
    county: 'Richland County',
    neighborhoods: ['Forest Acres', 'Forest Lake', 'Trenholm Road', 'Richland Mall Area', 'Decker Boulevard', 'Forest Drive', 'Arcadia Lakes'],
    nearbyAreas: [
      { name: 'Columbia', slug: 'columbia-sc' },
      { name: 'Blythewood', slug: 'blythewood-sc' },
      { name: 'Hopkins', slug: 'hopkins-sc' },
      { name: 'Irmo', slug: 'irmo-sc' },
    ],
  },
  {
    slug: 'hopkins-sc',
    name: 'Hopkins',
    county: 'Richland County',
    neighborhoods: ['Downtown Hopkins', 'Lower Richland', 'Eastover', 'Gadsden', 'Congaree National Park Area', 'Hopkins Road'],
    nearbyAreas: [
      { name: 'Columbia', slug: 'columbia-sc' },
      { name: 'Forest Acres', slug: 'forest-acres-sc' },
      { name: 'Cayce', slug: 'cayce-sc' },
      { name: 'Gaston', slug: 'gaston-sc' },
    ],
  },
  // Lexington County
  {
    slug: 'west-columbia-sc',
    name: 'West Columbia',
    county: 'Lexington County',
    neighborhoods: ['Downtown West Columbia', 'Meeting Street', 'Triangle City', 'Brookland', 'Airport Area', 'Saluda River', 'State Street', 'Sunset Boulevard'],
    nearbyAreas: [
      { name: 'Columbia', slug: 'columbia-sc' },
      { name: 'Cayce', slug: 'cayce-sc' },
      { name: 'Lexington', slug: 'lexington-sc' },
      { name: 'Springdale', slug: 'springdale-sc' },
    ],
  },
  {
    slug: 'cayce-sc',
    name: 'Cayce',
    county: 'Lexington County',
    neighborhoods: ['Downtown Cayce', 'Riverland Park', 'Guignard Park', 'Knox Abbott', 'Cayce Riverwalk', 'State Street', 'Airport Boulevard', '12th Street Extension'],
    nearbyAreas: [
      { name: 'West Columbia', slug: 'west-columbia-sc' },
      { name: 'Columbia', slug: 'columbia-sc' },
      { name: 'Springdale', slug: 'springdale-sc' },
      { name: 'South Congaree', slug: 'south-congaree-sc' },
    ],
  },
  {
    slug: 'lexington-sc',
    name: 'Lexington',
    county: 'Lexington County',
    neighborhoods: ['Downtown Lexington', 'Lake Murray', 'Lexington High School Area', 'Oak Grove', 'Red Bank', 'Corley Mill', 'Riverbank', 'Saxe Gotha', 'Virginia Hylton Park'],
    nearbyAreas: [
      { name: 'West Columbia', slug: 'west-columbia-sc' },
      { name: 'Irmo', slug: 'irmo-sc' },
      { name: 'Chapin', slug: 'chapin-sc' },
      { name: 'Gilbert', slug: 'gilbert-sc' },
    ],
  },
  {
    slug: 'irmo-sc',
    name: 'Irmo',
    county: 'Lexington County',
    neighborhoods: ['Downtown Irmo', 'Lake Murray', 'Harbison', 'St. Andrews', 'Dutch Fork', 'Friarsgate', 'Timberlake', 'Seven Oaks', 'Ballentine'],
    nearbyAreas: [
      { name: 'Columbia', slug: 'columbia-sc' },
      { name: 'Lexington', slug: 'lexington-sc' },
      { name: 'Chapin', slug: 'chapin-sc' },
      { name: 'Blythewood', slug: 'blythewood-sc' },
    ],
  },
  {
    slug: 'chapin-sc',
    name: 'Chapin',
    county: 'Lexington County',
    neighborhoods: ['Downtown Chapin', 'Lake Murray Shores', 'Chapin High School Area', 'Amicks Ferry', 'Dreher Island', 'Wateree', 'Night Harbor', 'Timberlake'],
    nearbyAreas: [
      { name: 'Irmo', slug: 'irmo-sc' },
      { name: 'Lexington', slug: 'lexington-sc' },
      { name: 'Gilbert', slug: 'gilbert-sc' },
      { name: 'Columbia', slug: 'columbia-sc' },
    ],
  },
  {
    slug: 'springdale-sc',
    name: 'Springdale',
    county: 'Lexington County',
    neighborhoods: ['Downtown Springdale', 'Platt Springs Road', 'Mineral Springs', 'Congaree'],
    nearbyAreas: [
      { name: 'West Columbia', slug: 'west-columbia-sc' },
      { name: 'Cayce', slug: 'cayce-sc' },
      { name: 'South Congaree', slug: 'south-congaree-sc' },
      { name: 'Lexington', slug: 'lexington-sc' },
    ],
  },
  {
    slug: 'south-congaree-sc',
    name: 'South Congaree',
    county: 'Lexington County',
    neighborhoods: ['Downtown South Congaree', 'Berry Road', 'Congaree Road', 'Edmund Highway'],
    nearbyAreas: [
      { name: 'Cayce', slug: 'cayce-sc' },
      { name: 'Springdale', slug: 'springdale-sc' },
      { name: 'Gaston', slug: 'gaston-sc' },
      { name: 'West Columbia', slug: 'west-columbia-sc' },
    ],
  },
  {
    slug: 'gaston-sc',
    name: 'Gaston',
    county: 'Lexington County',
    neighborhoods: ['Downtown Gaston', 'Gaston Farm', 'Edmund Highway', 'Old Barnwell Road', 'Congaree Creek'],
    nearbyAreas: [
      { name: 'South Congaree', slug: 'south-congaree-sc' },
      { name: 'Swansea', slug: 'swansea-sc' },
      { name: 'Cayce', slug: 'cayce-sc' },
      { name: 'Hopkins', slug: 'hopkins-sc' },
    ],
  },
  {
    slug: 'swansea-sc',
    name: 'Swansea',
    county: 'Lexington County',
    neighborhoods: ['Downtown Swansea', 'North Swansea', 'South Swansea', 'Highway 321 Corridor', 'Sandy Run'],
    nearbyAreas: [
      { name: 'Gaston', slug: 'gaston-sc' },
      { name: 'South Congaree', slug: 'south-congaree-sc' },
      { name: 'Batesburg-Leesville', slug: 'batesburg-leesville-sc' },
      { name: 'Gilbert', slug: 'gilbert-sc' },
    ],
  },
  {
    slug: 'batesburg-leesville-sc',
    name: 'Batesburg-Leesville',
    county: 'Lexington County',
    neighborhoods: ['Downtown Batesburg', 'Downtown Leesville', 'Church Street', 'Railroad Avenue', 'College Street', 'West Columbia Avenue'],
    nearbyAreas: [
      { name: 'Gilbert', slug: 'gilbert-sc' },
      { name: 'Swansea', slug: 'swansea-sc' },
      { name: 'Lexington', slug: 'lexington-sc' },
      { name: 'Chapin', slug: 'chapin-sc' },
    ],
  },
  {
    slug: 'gilbert-sc',
    name: 'Gilbert',
    county: 'Lexington County',
    neighborhoods: ['Downtown Gilbert', 'Lake Murray Area', 'Pond Branch', 'Prices Bridge', 'Old Chapin Road'],
    nearbyAreas: [
      { name: 'Lexington', slug: 'lexington-sc' },
      { name: 'Chapin', slug: 'chapin-sc' },
      { name: 'Batesburg-Leesville', slug: 'batesburg-leesville-sc' },
      { name: 'Swansea', slug: 'swansea-sc' },
    ],
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find(city => city.slug === slug);
}

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find(service => service.slug === slug);
}
