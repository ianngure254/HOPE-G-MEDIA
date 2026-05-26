import { MessageCircle } from 'lucide-react'

// Format: Country Code + Number (no +, no spaces, no dashes)
// Kenya code 254 + number
const PHONE_NUMBER = '254792514301'
const DEFAULT_MESSAGE = "Hi there! I'm interested in your design services."

const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-8 right-6 sm:right-8 z-[999] flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-2xl hover:bg-[#20ba5a] hover:scale-105 transition-all duration-300 group"
    >
      {/* Expanding label on hover */}
      <span
        className="
          hidden sm:block
          max-w-0 overflow-hidden
          group-hover:max-w-[120px]
          transition-all duration-500 ease-in-out
          whitespace-nowrap text-sm font-semibold
        "
      >
        Chat with me
      </span>

      {/* WhatsApp icon */}
      <MessageCircle size={26} fill="currentColor" className="flex-shrink-0" />

      {/* Pulsing notification ring */}
      <span className="absolute -top-1 -right-1 flex h-4 w-4" aria-hidden="true">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
        <span className="relative inline-flex h-4 w-4 rounded-full bg-white/80 border-2 border-[#25D366]" />
      </span>
    </a>
  )
}
