import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Palette, Zap, Heart, Award } from 'lucide-react'
import SectionTitle from '../../components/ui/SectionTitle'
import Badge from '../../components/ui/Badge'
import profileImage from '../../assets/Hope G profile.png'

const TOOLS = [
  'Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign',
  'Figma', 'Canva Pro', 'Procreate',
]

const VALUES = [
  {
    icon: Palette,
    title: 'Design-First Thinking',
    description: 'Every pixel, colour choice, and typographic decision is intentional. Great design isn\'t decoration — it\'s communication.',
  },
  {
    icon: Zap,
    title: 'Fast Turnaround',
    description: 'I respect your deadlines. Most projects are delivered within 24–72 hours without cutting corners on quality.',
  },
  {
    icon: Heart,
    title: 'Client-Centred Process',
    description: 'Your vision is the brief. I listen, ask the right questions, and design solutions that feel uniquely yours.',
  },
  {
    icon: Award,
    title: 'Quality You Can Print',
    description: 'All files are delivered print-ready and at the correct specifications — no going back to fix bleed marks.',
  },
]

const EXPERIENCES = [
  { year: '2018', event: 'Started freelancing in graphic design' },
  { year: '2020', event: 'Completed 100+ projects milestone' },
  { year: '2021', event: 'Launched Hope G Media brand' },
  { year: '2023', event: 'Expanded to full brand identity packages' },
  { year: '2024', event: 'Serving clients across 10+ industries' },
]

export default function AboutPage() {
  return (
    <div className="bg-neutral-50 dark:bg-neutral-950">

      {/* Hero */}
      <section className="py-20 sm:py-28" aria-label="About hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-500 dark:text-brand-400 mb-3">
                  About Me
                </p>
                <h1 className="font-display text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-neutral-50 leading-tight mb-4">
                  The Designer Behind the Work
                </h1>
                <p className="text-neutral-500 dark:text-neutral-400 text-lg leading-relaxed">
                  I'm the creative force behind <strong className="text-neutral-900 dark:text-neutral-100">Hope G Media</strong> — a freelance graphic designer passionate about turning ideas into visuals that cut through the noise.
                </p>
              </div>
              <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed">
                With over 6 years of experience crafting brand identities, event flyers, social media content, and marketing materials, I've worked with entrepreneurs, event organisers, startups, and established businesses who all share one thing in common: they want design that actually works.
              </p>
              <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed">
                I believe in clean design, clear communication, and measurable results. When you work with me, you get more than a pretty graphic — you get strategy, skill, and a designer who cares about your outcome.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {TOOLS.map((tool) => (
                  <Badge key={tool} label={tool} variant="brand" />
                ))}
              </div>
              <div className="flex items-center gap-3 pt-2">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-sm font-medium hover:bg-neutral-700 dark:hover:bg-white transition-colors duration-200"
                >
                  View My Work
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-4/5 shadow-2xl">
                <img
                  src={profileImage}
                  alt="Hope G Media — Graphic Designer"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
                {/* Overlay card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-500 flex items-center justify-center">
                      <span className="text-white font-bold text-lg font-display">H</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-neutral-900 dark:text-neutral-100">Hope G Media</p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">Graphic Designer · 6+ Years</p>
                    </div>
                    <div className="ml-auto text-right">
                      <p className="font-bold text-lg text-neutral-900 dark:text-neutral-100">50+</p>
                      <p className="text-xs text-neutral-500">Projects</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-100 dark:bg-brand-900/20 rounded-2xl -z-10" aria-hidden="true" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-neutral-200 dark:bg-neutral-800 rounded-xl -z-10" aria-hidden="true" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-24 bg-white dark:bg-neutral-900" aria-label="Values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionTitle
              eyebrow="How I Work"
              title="The Principles Behind Every Project"
              subtitle="Design isn't just about aesthetics — it's about outcomes."
              align="center"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {VALUES.map((value, i) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="flex gap-4 p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-100 dark:border-neutral-800"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-900/20 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-brand-600 dark:text-brand-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">{value.title}</h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Journey timeline */}
      <section className="py-20 sm:py-24 bg-neutral-50 dark:bg-neutral-950" aria-label="Experience timeline">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="mb-12 text-center">
            <SectionTitle
              eyebrow="The Journey"
              title="Milestones Along the Way"
              align="center"
            />
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4.5 top-0 bottom-0 w-0.5 bg-neutral-200 dark:bg-neutral-800" aria-hidden="true" />

            <div className="space-y-8">
              {EXPERIENCES.map((exp, i) => (
                <motion.div
                  key={exp.year}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="flex items-start gap-6 pl-10 relative"
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-1 w-9 h-9 rounded-full bg-white dark:bg-neutral-900 border-2 border-brand-400 flex items-center justify-center z-10">
                    <span className="text-[9px] font-bold text-brand-600 dark:text-brand-400">{exp.year.slice(2)}</span>
                  </div>

                  <div className="bg-white dark:bg-neutral-900 rounded-xl p-4 flex-1 border border-neutral-100 dark:border-neutral-800 shadow-sm">
                    <span className="text-xs font-semibold text-brand-500">{exp.year}</span>
                    <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-0.5">{exp.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="max-w-2xl mx-auto px-4 text-center space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-50">
            Let's Build Something Great Together
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400">
            Ready to start your next project? I'd love to hear about it.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 font-medium hover:bg-neutral-700 dark:hover:bg-white transition-colors duration-200"
          >
            Get in Touch
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </div>
  )
}
