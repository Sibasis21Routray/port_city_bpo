export default function VideoSection() {
  return (
    <section className="py-24 bg-[#f5f5f5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        <h2 className="text-4xl sm:text-5xl font-bold text-[#005ca9] uppercase mb-10 sm:mb-12">
          LEARN MORE ABOUT US
        </h2>

        <iframe
          className="w-full h-[300px] md:h-[500px]"
          src="https://www.youtube.com/embed/WjjvHceiip0?start=8"
          title="youtube"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

      </div>
    </section>
  );
}