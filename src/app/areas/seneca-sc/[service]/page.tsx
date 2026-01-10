import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceCityPage from '@/components/ServiceCityPage';
import { services, getCityBySlug, getServiceBySlug } from '@/lib/data';

const citySlug = 'seneca-sc';
const city = getCityBySlug(citySlug)!;

export async function generateStaticParams() {
  return services.map((service) => ({ service: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }): Promise<Metadata> {
  const { service: serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  if (!service) return { title: 'Not Found' };

  // Build keywords including synonyms for better SEO
  const keywords = [
    `${service.name.toLowerCase()} ${city.name} SC`,
    `${service.name.toLowerCase()} near ${city.name}`,
    ...service.synonyms.map(s => `${s} ${city.name} SC`),
    `residential ${service.name.toLowerCase()} ${city.name}`,
    `commercial ${service.name.toLowerCase()} ${city.name}`,
  ].join(', ');

  return {
    title: `${service.name} ${city.name} SC | Nelson Stump`,
    description: `Professional ${service.name.toLowerCase()} and ${service.synonyms[0]} services in ${city.name}, ${city.county}, SC. Residential & commercial. Free estimates. Call (864) 760-9203.`,
    keywords,
    alternates: { canonical: `/areas/${citySlug}/${serviceSlug}` },
  };
}

export default async function Page({ params }: { params: Promise<{ service: string }> }) {
  const { service: serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  if (!service) notFound();
  return <ServiceCityPage city={city} service={service} />;
}
