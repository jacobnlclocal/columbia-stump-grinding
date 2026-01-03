import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceCityPage from '@/components/ServiceCityPage';
import { services, getCityBySlug, getServiceBySlug } from '@/lib/data';

const citySlug = 'liberty-sc';
const city = getCityBySlug(citySlug)!;

export async function generateStaticParams() {
  return services.map((service) => ({ service: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }): Promise<Metadata> {
  const { service: serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  if (!service) return { title: 'Not Found' };
  return {
    title: `${service.name} in ${city.name}, SC | Nelson Land & Stump`,
    description: `Professional ${service.name.toLowerCase()} services in ${city.name}, ${city.county}, SC. ${service.description} Free estimates. Call (864) 760-9203.`,
    keywords: `${service.name.toLowerCase()} ${city.name} SC, ${service.name.toLowerCase()} near ${city.name}`,
    alternates: { canonical: `/areas/${citySlug}/${serviceSlug}` },
  };
}

export default async function Page({ params }: { params: Promise<{ service: string }> }) {
  const { service: serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  if (!service) notFound();
  return <ServiceCityPage city={city} service={service} />;
}
