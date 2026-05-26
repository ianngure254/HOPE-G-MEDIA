import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SERVICES } from '../../data/services'
import ServiceCard from '../../components/common/ServiceCard'
import SectionTitle from '../../components/ui/SectionTitle'

export default function ServicesSection() {
  return (
    <section className="py-20 sm:py-28 bg-neutral-50 dark:bg-neutral-950" aria-label="Services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <SectionTitle
            eyebrow="What I Do"
            title="Design Services"
            subtitle="From concept to final file — creative design solutions that bring your brand to life."
          />
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 dark:text-brand-400 hover:gap-3 transition-all duration-200 whitespace-nowrap"
          >
            Get a quote
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
