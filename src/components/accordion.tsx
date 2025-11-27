import { useState, ReactNode } from 'react'

interface AccordionProps {
  children: ReactNode
  defaultOpen?: boolean
}

export default function Accordion({
  children,
  defaultOpen = false,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="mx-auto w-full max-w-[1180px] bg-white transition-all duration-200 hover:shadow-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex w-full items-center justify-center border-b border-black px-6 py-4 text-left transition-colors hover:bg-gray-50"
      >
        <span className="text-center text-[32px] font-bold md:text-[48px]">
          よくある質問
        </span>
        <div
          className={`absolute right-3 transition-transform duration-300 max-md:w-5 md:right-7 ${
            isOpen ? 'rotate-x-180' : ''
          }`}
        >
          <img src="/assets/images/ic-acc.png" alt="" />
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div>{children}</div>
      </div>
    </div>
  )
}
