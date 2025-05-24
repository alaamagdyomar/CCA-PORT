import Image from "next/image";

export default function HomePage() {
  return (
    <section className="w-full h-screen flex">
      {/* Desktop Image */}
      <div className="flex hidden lg:block">
        <Image
          src="/logo3.png"
          alt="Company Logo Desktop"
          fill
          // className="object-contain w-full h-full"
          priority
        />
      </div>

      {/* Mobile & Tablet Image */}
      <div className="relative w-full h-full block lg:hidden">
        <Image
          src="/mobilebg.png"
          alt="Company Logo Mobile"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
