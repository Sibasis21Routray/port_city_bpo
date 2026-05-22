export default function About() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-12 lg:px-16 grid gap-10 md:gap-16 md:grid-cols-[1.15fr_1fr] items-center">
        
        {/* Left Side: Custom Asymmetric Rounded Image */}
        <div className="w-full">
          <img
            src="https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2024/01/Environment-e1740560706536.jpg"
            alt="Colombo Port City Buildings View"
            // The unique bottom-right heavy curve styling matching your image exactly
            className="w-full h-auto rounded-[55px_10px_55px_10px] md:rounded-[55px_10px_55px_10px] object-cover"
          />
        </div>

        {/* Right Side: Structured Typography Section */}
        <div className="flex flex-col justify-center pr-2">
          <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-bold text-[#005ba9] tracking-normal uppercase leading-tight">
            WHO WE ARE
          </h2>

          <p className="mt-4 text-[14px] sm:text-[15px] text-zinc-600 font-normal leading-[1.7] max-w-[520px]">
            Port City BPO is a Business Process Outsourcing (BPO) company. Our organisation is an 
            Authorised Person approved by the Colombo Port City Economic Commission (CPCEC).
          </p>
        </div>

      </div>
    </section>
  );
}