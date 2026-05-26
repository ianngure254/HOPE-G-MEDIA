import { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { cn } from '../../utils/cn'

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string

const SERVICES_OPTIONS = [
  'Flyers & Posters',
  'Brand Identity',
  'Social Media Graphics',
  'Business Cards',
  'Marketing Materials',
  'Print & Templates',
  'Other',
]

type Status = 'idle' | 'sending' | 'success' | 'error'

interface FormFields {
  name: string
  email: string
  phone: string
  service: string
  budget: string
  message: string
}

const INITIAL: FormFields = {
  name: '',
  email: '',
  phone: '',
  service: '',
  budget: '',
  message: '',
}

function InputField({
  label, id, required, error, children,
}: {
  label: string; id: string; required?: boolean; error?: string; children: React.ReactNode
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
        {label} {required && <span className="text-brand-500">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}

const inputClass = 'w-full px-4 py-2.5 text-sm rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200'

export default function ContactForm() {
  const [fields, setFields] = useState<FormFields>(INITIAL)
  const [errors, setErrors] = useState<Partial<FormFields>>({})
  const [status, setStatus] = useState<Status>('idle')

  function update(key: keyof FormFields, value: string) {
    setFields((prev) => ({ ...prev, [key]: value }))
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: '' }))
  }

  function validate(): boolean {
    const newErrors: Partial<FormFields> = {}
    if (!fields.name.trim()) newErrors.name = 'Name is required'
    if (!fields.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!fields.service) newErrors.service = 'Please select a service'
    if (!fields.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!validate()) return
    setStatus('sending')
    try {
      const fd = new FormData()
      fd.append('access_key', WEB3FORMS_ACCESS_KEY)
      fd.append('name', fields.name)
      fd.append('email', fields.email)
      fd.append('phone', fields.phone || 'Not provided')
      fd.append('service', fields.service)
      fd.append('budget', fields.budget || 'Not specified')
      fd.append('message', fields.message)
      fd.append('subject', 'New Inquiry: ' + fields.name + ' — ' + fields.service)
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: fd })
      const data = await res.json()
      if (data.success) { setStatus('success'); setFields(INITIAL) }
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
          <CheckCircle size={32} className="text-green-500" />
        </div>
        <h3 className="font-display text-2xl font-bold text-neutral-900 dark:text-neutral-100">Message Sent!</h3>
        <p className="text-neutral-500 dark:text-neutral-400 max-w-sm leading-relaxed">
          Thanks for reaching out! I will get back to you within 24 hours.
        </p>
        <button onClick={() => setStatus('idle')} className="mt-2 text-sm text-brand-600 dark:text-brand-400 font-medium hover:underline">
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">

      {status === 'error' && (
        <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400">
          <AlertCircle size={16} className="shrink-0 mt-0.5" />
          <p className="text-sm">Something went wrong. Please try again or reach out via WhatsApp.</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField label="Full Name" id="name" required error={errors.name}>
          <input id="name" type="text" name="name" value={fields.name}
            onChange={(e) => update('name', e.target.value)}
            placeholder="Your name" autoComplete="name"
            className={cn(inputClass, errors.name && 'border-red-400 focus:ring-red-400')} />
        </InputField>
        <InputField label="Email Address" id="email" required error={errors.email}>
          <input id="email" type="email" name="email" value={fields.email}
            onChange={(e) => update('email', e.target.value)}
            placeholder="you@example.com" autoComplete="email"
            className={cn(inputClass, errors.email && 'border-red-400 focus:ring-red-400')} />
        </InputField>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField label="Phone (optional)" id="phone">
          <input id="phone" type="tel" name="phone" value={fields.phone}
            onChange={(e) => update('phone', e.target.value)}
            placeholder="+254 700 000 000" autoComplete="tel"
            className={inputClass} />
        </InputField>
        <InputField label="Service Needed" id="service" required error={errors.service}>
          <select id="service" name="service" value={fields.service}
            onChange={(e) => update('service', e.target.value)}
            className={cn(inputClass, errors.service && 'border-red-400 focus:ring-red-400')}>
            <option value="">Select a service...</option>
            {SERVICES_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </InputField>
      </div>

      <InputField label="Budget Range (optional)" id="budget">
        <select id="budget" name="budget" value={fields.budget}
          onChange={(e) => update('budget', e.target.value)}
          className={inputClass}>
          <option value="">Select a budget range...</option>
          <option value="Under $100">Under $100</option>
          <option value="$100-$300">$100 - $300</option>
          <option value="$300-$500">$300 - $500</option>
          <option value="$500-$1000">$500 - $1,000</option>
          <option value="$1000+">$1,000+</option>
          <option value="Discuss">Let us discuss</option>
        </select>
      </InputField>

      <InputField label="Project Details" id="message" required error={errors.message}>
        <textarea id="message" name="message" rows={5} value={fields.message}
          onChange={(e) => update('message', e.target.value)}
          placeholder="Tell me about your project - what you need, your timeline, any references..."
          className={cn(inputClass, 'resize-none', errors.message && 'border-red-400 focus:ring-red-400')} />
      </InputField>

      <button type="submit" disabled={status === 'sending'}
        className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-sm font-medium hover:bg-neutral-700 dark:hover:bg-white disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200">
        {status === 'sending' ? (
          <>
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            Sending...
          </>
        ) : (
          <>Send Message <Send size={16} /></>
        )}
      </button>

    </form>
  )
}
