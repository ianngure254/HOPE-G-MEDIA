import { useState } from 'react'
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import Modal from '../ui/Modal'
import { cn } from '../../utils/cn'

interface ProjectGalleryProps {
  images: string[]
  title: string
}

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  function openLightbox(index: number) {
    setActiveIndex(index)
    setLightboxOpen(true)
  }

  function prev(e?: React.MouseEvent) {
    e?.stopPropagation()
    setActiveIndex((i) => (i === 0 ? images.length - 1 : i - 1))
  }

  function next(e?: React.MouseEvent) {
    e?.stopPropagation()
    setActiveIndex((i) => (i === images.length - 1 ? 0 : i + 1))
  }

  return (
    <>
      {/* Thumbnail grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => openLightbox(i)}
            className={cn(
              'group relative overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800 cursor-zoom-in',
              i === 0 ? 'sm:col-span-2' : '',
            )}
            aria-label={`View image ${i + 1} of ${images.length}`}
          >
            <img
              src={src}
              alt={`${title} — image ${i + 1}`}
              loading="lazy"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
              <ZoomIn
                size={24}
                className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <Modal isOpen={lightboxOpen} onClose={() => setLightboxOpen(false)} ariaLabel={`${title} gallery`}>
        <div className="relative select-none">
          <img
            src={images[activeIndex]}
            alt={`${title} — image ${activeIndex + 1}`}
            className="w-full h-auto max-h-[80vh] object-contain"
          />

          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors duration-200"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors duration-200"
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>

              {/* Dots */}
              <div className="flex justify-center gap-1.5 py-3">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={cn(
                      'w-1.5 h-1.5 rounded-full transition-all duration-200',
                      i === activeIndex ? 'bg-white w-4' : 'bg-white/40 hover:bg-white/70',
                    )}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </Modal>
    </>
  )
}
