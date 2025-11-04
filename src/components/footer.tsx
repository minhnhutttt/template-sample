'use client'

const Footer = () => {
  return (
    <footer className="bg-[#ffe000] px-5">
      <div className="flex items-center justify-between border-t-2 border-black p-4">
        <div className="flex items-center gap-5">
          <a
            href="#"
            className="text-[clamp(10px,8.206px+100vw*.0046,16px)] font-bold uppercase"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-[clamp(10px,8.206px+100vw*.0046,16px)] font-bold uppercase"
          >
            Complaints Book
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
