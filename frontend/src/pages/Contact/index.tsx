import { motion } from 'framer-motion'
import { MessageCircle, Mail, Clock, MapPin } from 'lucide-react'
import ContactForm from '../../components/forms/ContactForm'
import SectionTitle from '../../components/ui/SectionTitle'

const WA_LINK =
  'https://wa.me/254792514301?text=Hi%20there!%20I%27m%20interested%20in%20your%20design%20services.'

const INFO_ITEMS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@hopegmedia.com',
    href: 'mailto:hello@hopegmedia.com',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat with me directly',
    href: WA_LINK,
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: 'Within 24 hours',
    href: null,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Available Worldwide · Remote',
    href: null,
  },
]

const FAQS = [
  {
    q: 'How long does a project take?',
    a: 'Most single-piece projects (flyers, business cards) are delivered within 24–48 hours. Brand identity packages typically take 5–10 business days.',
  },
  {
    q: 'What file formats will I receive?',
    a: "You'll receive print-ready PDFs, high-resolution PNGs, and editable source files (AI, PSD, or Figma) depending on the project type.",
  },
  {
    q: 'Do you offer revisions?',
    a: 'Yes — every project includes at least 2 rounds of revisions. I work with you until you are completely satisfied.',
  },
  {
    q: 'How do I pay?',
    a: 'A 50% deposit is required to begin, with the balance due on final delivery. I accept M-Pesa, bank transfer, and PayPal.',
  },
]

export default function ContactPage() {
  return (
    <div className="bg-neutral-50 dark:bg-neutral-950 min-h-screen">

      {/* Header */}
      <section className="py-16 sm:py-20 bg-white dark:bg-neutral-900 border-b border-neutral-100 dark:border-neutral-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <SectionTitle
              eyebrow="Get in Touch"
              title="Let's Work Together"
              subtitle="Have a project in mind? Fill in the form below and I'll get back to you within 24 hours. First consultation is free."
              align="center"
            />
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Form — 3 of 5 cols */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="lg:col-span-3 bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-sm border border-neutral-100 dark:border-neutral-800"
            >
              <h2 className="font-display text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
                Send a Message
              </h2>
              <ContactForm />
            </motion.div>

            {/* Info sidebar — 2 of 5 cols */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >

              {/* Contact info */}
              <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-100 dark:border-neutral-800 space-y-4">
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm">
                  Contact Info
                </h3>
                {INFO_ITEMS.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-brand-50 dark:bg-brand-900/20 flex items-center justify-center shrink-0">
                      <Icon size={15} className="text-brand-600 dark:text-brand-400" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-400 mb-0.5">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-sm font-medium text-brand-600 dark:text-brand-400 hover:underline"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-green-500 hover:bg-green-600 transition-colors duration-200 group"
              >
                <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <MessageCircle size={22} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">Chat on WhatsApp</p>
                  <p className="text-white/80 text-xs mt-0.5">Fastest way to reach me</p>
                </div>
                <div className="ml-auto text-white/60 group-hover:text-white transition-colors">
                  →
                </div>
              </a>

              {/* FAQ */}
              <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-100 dark:border-neutral-800">
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm mb-5">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-5">
                  {FAQS.map(({ q, a }) => (
                    <div key={q}>
                      <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-1">{q}</p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">{a}</p>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

    </div>
  )
}
