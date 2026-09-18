import React, { useEffect } from 'react'
import { X } from 'lucide-react'

export default function Modal({ open, onClose, children, wide = false }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center bg-charcoal/60 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`modal-panel relative max-h-[85vh] w-full ${
          wide ? 'max-w-2xl' : 'max-w-lg'
        } overflow-y-auto rounded-3xl border border-gold-300 bg-ivory shadow-2xl`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-gold-300 bg-ivory text-gold-600 transition hover:bg-gold-500 hover:text-white"
        >
          <X size={16} />
        </button>
        {children}
      </div>
    </div>
  )
}