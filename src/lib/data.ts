// City and service data for Nelson Land & Stump

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
  // Spartanburg County
  {
    slug: 'spartanburg-sc',
    name: 'Spartanburg',
    county: 'Spartanburg County',
    neighborhoods: ['Downtown Spartanburg', 'Westgate', 'Hillbrook Forest', 'Pine Street', 'Converse Heights', 'Hampton Heights', 'Forest Park', 'Woodland Heights', 'Duncan Park', 'Country Club', 'Beaumont', 'Saxon', 'Whitney', 'Arkwright', 'Una'],
    nearbyAreas: [
      { name: 'Boiling Springs', slug: 'boiling-springs-sc' },
      { name: 'Duncan', slug: 'duncan-sc' },
      { name: 'Inman', slug: 'inman-sc' },
      { name: 'Greer', slug: 'greer-sc' },
    ],
  },
  {
    slug: 'boiling-springs-sc',
    name: 'Boiling Springs',
    county: 'Spartanburg County',
    neighborhoods: ['Rainbow Lake', 'Anderson Mill', 'Berry Shoals', 'Oakbrook', 'The Woodlands', 'Heritage Hills'],
    nearbyAreas: [
      { name: 'Spartanburg', slug: 'spartanburg-sc' },
      { name: 'Inman', slug: 'inman-sc' },
      { name: 'Duncan', slug: 'duncan-sc' },
      { name: 'Greer', slug: 'greer-sc' },
    ],
  },
  {
    slug: 'duncan-sc',
    name: 'Duncan',
    county: 'Spartanburg County',
    neighborhoods: ['Downtown Duncan', 'Moore Road', 'Berry Shoals', 'Tyger River'],
    nearbyAreas: [
      { name: 'Spartanburg', slug: 'spartanburg-sc' },
      { name: 'Lyman', slug: 'lyman-sc' },
      { name: 'Greer', slug: 'greer-sc' },
      { name: 'Boiling Springs', slug: 'boiling-springs-sc' },
    ],
  },
  {
    slug: 'inman-sc',
    name: 'Inman',
    county: 'Spartanburg County',
    neighborhoods: ['Downtown Inman', 'Lake Bowen', 'Lawson Fork', 'North Lake'],
    nearbyAreas: [
      { name: 'Spartanburg', slug: 'spartanburg-sc' },
      { name: 'Boiling Springs', slug: 'boiling-springs-sc' },
      { name: 'Greer', slug: 'greer-sc' },
      { name: 'Duncan', slug: 'duncan-sc' },
    ],
  },
  {
    slug: 'lyman-sc',
    name: 'Lyman',
    county: 'Spartanburg County',
    neighborhoods: ['Downtown Lyman', 'Groce Road', 'Lyman Mill', 'Pacific Mills'],
    nearbyAreas: [
      { name: 'Duncan', slug: 'duncan-sc' },
      { name: 'Inman', slug: 'inman-sc' },
      { name: 'Greer', slug: 'greer-sc' },
      { name: 'Spartanburg', slug: 'spartanburg-sc' },
    ],
  },
  {
    slug: 'woodruff-sc',
    name: 'Woodruff',
    county: 'Spartanburg County',
    neighborhoods: ['Downtown Woodruff', 'Cross Anchor', 'Enoree', 'Walnut Grove'],
    nearbyAreas: [
      { name: 'Spartanburg', slug: 'spartanburg-sc' },
      { name: 'Fountain Inn', slug: 'fountain-inn-sc' },
      { name: 'Simpsonville', slug: 'simpsonville-sc' },
      { name: 'Greer', slug: 'greer-sc' },
    ],
  },
  // Greenville County
  {
    slug: 'greenville-sc',
    name: 'Greenville',
    county: 'Greenville County',
    neighborhoods: ['Downtown Greenville', 'West End', 'North Main', 'Augusta Road', 'Alta Vista', 'Overbrook', 'Pleasantburg', 'Verdae', 'Sans Souci', 'Cleveland Park', 'Taylors', 'Berea', 'Wade Hampton', 'Eastside', 'Woodruff Road'],
    nearbyAreas: [
      { name: 'Simpsonville', slug: 'simpsonville-sc' },
      { name: 'Greer', slug: 'greer-sc' },
      { name: 'Easley', slug: 'easley-sc' },
      { name: 'Mauldin', slug: 'mauldin-sc' },
    ],
  },
  {
    slug: 'simpsonville-sc',
    name: 'Simpsonville',
    county: 'Greenville County',
    neighborhoods: ['Five Forks', 'Five Forks Plantation', 'River Walk', 'Kilgore Farms', 'Windsor Forest', 'Cobblestone', 'Asheton Lakes', 'Heritage Lakes', 'Holly Tree Plantation', 'Fairview Road', 'Standing Springs', 'Harrison Bridge'],
    nearbyAreas: [
      { name: 'Greenville', slug: 'greenville-sc' },
      { name: 'Mauldin', slug: 'mauldin-sc' },
      { name: 'Fountain Inn', slug: 'fountain-inn-sc' },
      { name: 'Greer', slug: 'greer-sc' },
    ],
  },
  {
    slug: 'greer-sc',
    name: 'Greer',
    county: 'Greenville County',
    neighborhoods: ['Downtown Greer', 'Silverleaf', 'Sugar Creek', 'Sugar Mill', 'Pelham Falls', 'Lake Robinson', 'Riverside', 'Tyger River', 'Blue Ridge', 'Silver Ridge Farms', 'Brushy Meadows'],
    nearbyAreas: [
      { name: 'Greenville', slug: 'greenville-sc' },
      { name: 'Simpsonville', slug: 'simpsonville-sc' },
      { name: 'Travelers Rest', slug: 'travelers-rest-sc' },
      { name: 'Mauldin', slug: 'mauldin-sc' },
    ],
  },
  {
    slug: 'mauldin-sc',
    name: 'Mauldin',
    county: 'Greenville County',
    neighborhoods: ['Downtown Mauldin', 'Bridgeway Station', 'Butler Road', 'Planters Row', 'Montclaire', 'Crescentwood Village', 'Holly Springs', 'Brookside', 'Eastdale', 'Greenbrier'],
    nearbyAreas: [
      { name: 'Greenville', slug: 'greenville-sc' },
      { name: 'Simpsonville', slug: 'simpsonville-sc' },
      { name: 'Greer', slug: 'greer-sc' },
      { name: 'Fountain Inn', slug: 'fountain-inn-sc' },
    ],
  },
  {
    slug: 'travelers-rest-sc',
    name: 'Travelers Rest',
    county: 'Greenville County',
    neighborhoods: ['Downtown Travelers Rest', 'Swamp Rabbit Trail Area', 'Tigerville', 'Marietta', 'North Greenville', 'Paris Mountain', 'Table Rock'],
    nearbyAreas: [
      { name: 'Greenville', slug: 'greenville-sc' },
      { name: 'Greer', slug: 'greer-sc' },
      { name: 'Easley', slug: 'easley-sc' },
      { name: 'Pickens', slug: 'pickens-sc' },
    ],
  },
  {
    slug: 'fountain-inn-sc',
    name: 'Fountain Inn',
    county: 'Greenville County',
    neighborhoods: ['Downtown Fountain Inn', 'Woodside', 'Fairview Church Road', 'Laurel Creek', 'Gray Fox Run', 'Fork Shoals'],
    nearbyAreas: [
      { name: 'Simpsonville', slug: 'simpsonville-sc' },
      { name: 'Mauldin', slug: 'mauldin-sc' },
      { name: 'Greenville', slug: 'greenville-sc' },
      { name: 'Williamston', slug: 'williamston-sc' },
    ],
  },
  // Anderson County
  {
    slug: 'anderson-sc',
    name: 'Anderson',
    county: 'Anderson County',
    neighborhoods: ['Downtown Anderson', 'Northlake', 'Ashley Downs', 'Homeland Park', 'West Anderson', 'Centerville', 'Boulevard', 'North Anderson', 'South Anderson', 'Lake Hartwell Area', 'Anderson Mall Area'],
    nearbyAreas: [
      { name: 'Pendleton', slug: 'pendleton-sc' },
      { name: 'Clemson', slug: 'clemson-sc' },
      { name: 'Easley', slug: 'easley-sc' },
      { name: 'Williamston', slug: 'williamston-sc' },
    ],
  },
  {
    slug: 'pendleton-sc',
    name: 'Pendleton',
    county: 'Anderson County',
    neighborhoods: ['Downtown Pendleton', 'Historic District', 'Clemson Boulevard', 'Cherry Street', 'Pendleton Place', 'Town Square Area'],
    nearbyAreas: [
      { name: 'Anderson', slug: 'anderson-sc' },
      { name: 'Clemson', slug: 'clemson-sc' },
      { name: 'Easley', slug: 'easley-sc' },
      { name: 'Central', slug: 'central-sc' },
    ],
  },
  {
    slug: 'williamston-sc',
    name: 'Williamston',
    county: 'Anderson County',
    neighborhoods: ['Downtown Williamston', 'West Main', 'Mill Street', 'Pelzer Highway', 'Anderson Road Area', 'Mineral Spring Park'],
    nearbyAreas: [
      { name: 'Anderson', slug: 'anderson-sc' },
      { name: 'Belton', slug: 'belton-sc' },
      { name: 'Fountain Inn', slug: 'fountain-inn-sc' },
      { name: 'Easley', slug: 'easley-sc' },
    ],
  },
  {
    slug: 'belton-sc',
    name: 'Belton',
    county: 'Anderson County',
    neighborhoods: ['Downtown Belton', 'Anderson Highway', 'Brown Avenue', 'Belton City Park Area', 'Calhoun Road', 'Honea Path Highway'],
    nearbyAreas: [
      { name: 'Anderson', slug: 'anderson-sc' },
      { name: 'Williamston', slug: 'williamston-sc' },
      { name: 'Honea Path', slug: 'honea-path-sc' },
      { name: 'Iva', slug: 'iva-sc' },
    ],
  },
  {
    slug: 'honea-path-sc',
    name: 'Honea Path',
    county: 'Anderson County',
    neighborhoods: ['Downtown Honea Path', 'Main Street', 'Shirley Street', 'Chiquola Mill Area', 'Donalds Highway'],
    nearbyAreas: [
      { name: 'Belton', slug: 'belton-sc' },
      { name: 'Anderson', slug: 'anderson-sc' },
      { name: 'Iva', slug: 'iva-sc' },
      { name: 'Williamston', slug: 'williamston-sc' },
    ],
  },
  {
    slug: 'iva-sc',
    name: 'Iva',
    county: 'Anderson County',
    neighborhoods: ['Downtown Iva', 'Front Street', 'Railroad Avenue', 'Starr Highway', 'Lake Secession Area'],
    nearbyAreas: [
      { name: 'Anderson', slug: 'anderson-sc' },
      { name: 'Honea Path', slug: 'honea-path-sc' },
      { name: 'Belton', slug: 'belton-sc' },
      { name: 'Fair Play', slug: 'fair-play-sc' },
    ],
  },
  // Pickens County
  {
    slug: 'easley-sc',
    name: 'Easley',
    county: 'Pickens County',
    neighborhoods: ['Downtown Easley', 'Powdersville', 'Dacusville', 'Saluda Dam', 'Cateechee', 'Glenwood', 'Arial', 'Doodle Trail Area', 'McKissick', 'Brushy Creek'],
    nearbyAreas: [
      { name: 'Greenville', slug: 'greenville-sc' },
      { name: 'Pickens', slug: 'pickens-sc' },
      { name: 'Anderson', slug: 'anderson-sc' },
      { name: 'Liberty', slug: 'liberty-sc' },
    ],
  },
  {
    slug: 'pickens-sc',
    name: 'Pickens',
    county: 'Pickens County',
    neighborhoods: ['Downtown Pickens', 'Cedar Rock', 'Glassy Mountain', 'Doodle Trail Area', 'Table Rock', 'Pumpkintown', 'Rocky Bottom', 'Hagood'],
    nearbyAreas: [
      { name: 'Easley', slug: 'easley-sc' },
      { name: 'Liberty', slug: 'liberty-sc' },
      { name: 'Central', slug: 'central-sc' },
      { name: 'Clemson', slug: 'clemson-sc' },
    ],
  },
  {
    slug: 'clemson-sc',
    name: 'Clemson',
    county: 'Pickens County',
    neighborhoods: ['Downtown Clemson', 'Patrick Square', 'Issaqueena Trail', 'Central-Clemson', 'Tiger Boulevard', 'Clemson University Area', 'Lake Hartwell Shore', 'Calhoun'],
    nearbyAreas: [
      { name: 'Pendleton', slug: 'pendleton-sc' },
      { name: 'Central', slug: 'central-sc' },
      { name: 'Seneca', slug: 'seneca-sc' },
      { name: 'Anderson', slug: 'anderson-sc' },
    ],
  },
  {
    slug: 'liberty-sc',
    name: 'Liberty',
    county: 'Pickens County',
    neighborhoods: ['Downtown Liberty', 'Main Street', 'Depot Street', 'East Main', 'West Main', 'Stewart Gin Road'],
    nearbyAreas: [
      { name: 'Easley', slug: 'easley-sc' },
      { name: 'Pickens', slug: 'pickens-sc' },
      { name: 'Central', slug: 'central-sc' },
      { name: 'Norris', slug: 'norris-sc' },
    ],
  },
  {
    slug: 'central-sc',
    name: 'Central',
    county: 'Pickens County',
    neighborhoods: ['Downtown Central', 'Church Street', 'Main Street', 'Southern Wesleyan Area', 'Clemson Boulevard', 'Six Mile'],
    nearbyAreas: [
      { name: 'Clemson', slug: 'clemson-sc' },
      { name: 'Pickens', slug: 'pickens-sc' },
      { name: 'Liberty', slug: 'liberty-sc' },
      { name: 'Pendleton', slug: 'pendleton-sc' },
    ],
  },
  {
    slug: 'norris-sc',
    name: 'Norris',
    county: 'Pickens County',
    neighborhoods: ['Downtown Norris', 'Cedar Lane', 'Mill Street', 'Twelve Mile', 'Cateechee'],
    nearbyAreas: [
      { name: 'Liberty', slug: 'liberty-sc' },
      { name: 'Pickens', slug: 'pickens-sc' },
      { name: 'Central', slug: 'central-sc' },
      { name: 'Easley', slug: 'easley-sc' },
    ],
  },
  // Oconee County
  {
    slug: 'seneca-sc',
    name: 'Seneca',
    county: 'Oconee County',
    neighborhoods: ['Downtown Seneca', 'Lake Keowee', 'Keowee Key', 'Keowee Subdivision', 'Waterside Crossing', 'Richland', 'Shiloh', 'Newry', 'Southwind Bay', 'Crestview', 'Hidden Harbor'],
    nearbyAreas: [
      { name: 'Clemson', slug: 'clemson-sc' },
      { name: 'Walhalla', slug: 'walhalla-sc' },
      { name: 'Westminster', slug: 'westminster-sc' },
      { name: 'West Union', slug: 'west-union-sc' },
    ],
  },
  {
    slug: 'walhalla-sc',
    name: 'Walhalla',
    county: 'Oconee County',
    neighborhoods: ['Downtown Walhalla', 'Main Street', 'College Street', 'Stumphouse', 'Oconee Station', 'Blue Ridge Railroad', 'Mountain Rest'],
    nearbyAreas: [
      { name: 'Seneca', slug: 'seneca-sc' },
      { name: 'Westminster', slug: 'westminster-sc' },
      { name: 'West Union', slug: 'west-union-sc' },
      { name: 'Salem', slug: 'salem-sc' },
    ],
  },
  {
    slug: 'westminster-sc',
    name: 'Westminster',
    county: 'Oconee County',
    neighborhoods: ['Downtown Westminster', 'East Main', 'West Main', 'Long Creek', 'Oakway', 'Chau Ram Falls Area'],
    nearbyAreas: [
      { name: 'Seneca', slug: 'seneca-sc' },
      { name: 'Walhalla', slug: 'walhalla-sc' },
      { name: 'Fair Play', slug: 'fair-play-sc' },
      { name: 'West Union', slug: 'west-union-sc' },
    ],
  },
  {
    slug: 'salem-sc',
    name: 'Salem',
    county: 'Oconee County',
    neighborhoods: ['Downtown Salem', 'Lake Jocassee', 'Keowee-Toxaway', 'Devils Fork State Park Area', 'Jocassee Gorges', 'Whitewater Falls Area'],
    nearbyAreas: [
      { name: 'Walhalla', slug: 'walhalla-sc' },
      { name: 'Seneca', slug: 'seneca-sc' },
      { name: 'Pickens', slug: 'pickens-sc' },
      { name: 'West Union', slug: 'west-union-sc' },
    ],
  },
  {
    slug: 'west-union-sc',
    name: 'West Union',
    county: 'Oconee County',
    neighborhoods: ['Downtown West Union', 'Main Street', 'Oconee County Airport Area', 'Richland Road'],
    nearbyAreas: [
      { name: 'Walhalla', slug: 'walhalla-sc' },
      { name: 'Seneca', slug: 'seneca-sc' },
      { name: 'Westminster', slug: 'westminster-sc' },
      { name: 'Salem', slug: 'salem-sc' },
    ],
  },
  {
    slug: 'fair-play-sc',
    name: 'Fair Play',
    county: 'Oconee County',
    neighborhoods: ['Downtown Fair Play', 'Lake Hartwell', 'Tugaloo', 'South Union', 'Townville', 'Portman Shoals'],
    nearbyAreas: [
      { name: 'Westminster', slug: 'westminster-sc' },
      { name: 'Seneca', slug: 'seneca-sc' },
      { name: 'Anderson', slug: 'anderson-sc' },
      { name: 'Iva', slug: 'iva-sc' },
    ],
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find(city => city.slug === slug);
}

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find(service => service.slug === slug);
}
