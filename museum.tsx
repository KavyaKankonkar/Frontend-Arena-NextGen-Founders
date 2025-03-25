import Link from "next/link"
import Image from "next/image"

export default function MuseumPage() {
  return (
    <div className="relative min-h-screen bg-[#c25d3a] overflow-hidden">
      {/* Top curved white section with navigation */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-white rounded-b-[50%] flex justify-center items-start pt-10 z-10">
        <nav className="flex gap-16 font-bold text-xl">
          <Link href="#" className="hover:underline">
            LOGIN
          </Link>
          <Link href="#" className="hover:underline">
            SIGN UP
          </Link>
          <Link href="#" className="hover:underline">
            ABOUT US
          </Link>
        </nav>
      </div>

      {/* Main content container */}
      <div className="relative pt-32 px-4 flex justify-center items-center min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {/* Left painting with character */}
          <div className="relative">
            <div className="border-8 border-[#e0c9a6] bg-[#0f1b33] p-2 shadow-lg">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Girl with Pearl Earring painting"
                  width={300}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute bottom-0 left-1/4 transform translate-y-1/2">
              <div className="relative w-32 h-48">
                <Image
                  src="/placeholder.svg?height=192&width=128"
                  alt="Cartoon character sitting"
                  width={128}
                  height={192}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Center wooden door */}
          <div className="relative flex flex-col items-center">
            <div className="bg-[#8b5d3b] border-4 border-[#6a462c] rounded-lg p-2 shadow-lg w-full max-w-md mx-auto">
              <div className="grid grid-cols-2 grid-rows-2 gap-2 aspect-[4/5]">
                {/* Door panels */}
                <div className="bg-[#8b5d3b] border border-[#6a462c] rounded flex justify-center items-center relative">
                  <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=150')] bg-cover opacity-30"></div>
                  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <span className="text-white text-xl font-bold">LOUVRE</span>
                  </div>
                  <div className="absolute top-1 left-1 w-2 h-2 bg-[#333] rounded-full"></div>
                  <div className="absolute top-1 right-1 w-2 h-2 bg-[#333] rounded-full"></div>
                </div>
                <div className="bg-[#8b5d3b] border border-[#6a462c] rounded flex justify-center items-center relative">
                  <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=150')] bg-cover opacity-30"></div>
                  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <span className="text-white text-xl font-bold">MUSEUM</span>
                  </div>
                  <div className="absolute top-1 left-1 w-2 h-2 bg-[#333] rounded-full"></div>
                  <div className="absolute top-1 right-1 w-2 h-2 bg-[#333] rounded-full"></div>
                </div>
                <div className="bg-[#8b5d3b] border border-[#6a462c] rounded relative">
                  <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=150')] bg-cover opacity-30"></div>
                  <div className="absolute bottom-1 left-1 w-2 h-2 bg-[#333] rounded-full"></div>
                  <div className="absolute bottom-1 right-1 w-2 h-2 bg-[#333] rounded-full"></div>
                </div>
                <div className="bg-[#8b5d3b] border border-[#6a462c] rounded relative">
                  <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=150')] bg-cover opacity-30"></div>
                  <div className="absolute bottom-1 left-1 w-2 h-2 bg-[#333] rounded-full"></div>
                  <div className="absolute bottom-1 right-1 w-2 h-2 bg-[#333] rounded-full"></div>
                </div>
              </div>
              {/* Door hardware */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-16 bg-[#333] rounded-full flex items-center justify-center">
                <div className="w-4 h-8 bg-[#222] rounded-full"></div>
              </div>
              <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-16 bg-[#333] rounded-r-lg"></div>
              <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-16 bg-[#333] rounded-l-lg"></div>
              <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-16 h-4 bg-[#333] rounded-t-lg"></div>
              <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-16 h-4 bg-[#333] rounded-b-lg"></div>
            </div>

            {/* Velvet rope barrier */}
            <div className="mt-8 relative w-full">
              {/* Left pole */}
              <div className="absolute left-8 bottom-0 w-4 h-24 bg-gradient-to-b from-[#d4af37] to-[#b8860b]"></div>
              <div className="absolute left-8 bottom-24 w-8 h-8 rounded-full bg-[#d4af37]"></div>

              {/* Right pole */}
              <div className="absolute right-8 bottom-0 w-4 h-24 bg-gradient-to-b from-[#d4af37] to-[#b8860b]"></div>
              <div className="absolute right-8 bottom-24 w-8 h-8 rounded-full bg-[#d4af37]"></div>

              {/* Rope */}
              <div className="absolute left-12 right-12 bottom-20 h-6 bg-[#0f1b33] border-t-2 border-b-2 border-[#d4af37] rounded-full"></div>

              {/* Base of poles */}
              <div className="absolute left-4 bottom-0 w-12 h-3 bg-[#d4af37]"></div>
              <div className="absolute right-4 bottom-0 w-12 h-3 bg-[#d4af37]"></div>
            </div>
          </div>

          {/* Right painting with statue */}
          <div className="relative">
            <div className="border-8 border-[#d4af37] bg-white p-2 shadow-lg">
              <div className="relative aspect-[3/4] w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[#c13a3a] to-[#0f1b33]"></div>
                <div className="absolute inset-0">
                  <div className="w-full h-full relative">
                    <Image
                      src="/placeholder.svg?height=400&width=300"
                      alt="Abstract art"
                      width={300}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-1/4 transform translate-y-1/2">
              <div className="relative w-24 h-40">
                <Image
                  src="/placeholder.svg?height=160&width=96"
                  alt="White statue"
                  width={96}
                  height={160}
                  className="w-full h-full object-contain"
                />
                <div className="absolute bottom-0 w-full h-4 bg-[#d2b48c]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

