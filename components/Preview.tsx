import Image from "next/image";
export default function Preview() {
  return (
    <section className="grid-container  pt-0 md:pt-32 pb-20" id="Preview"  >
      <main className="col-start-2 col-end-3 flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="max-w-sm">
          <h1 className="text-xl md:text-3xl mb-4">The simplest way to have a professioanal webpage.</h1>
          <p className="max-w-xs text-sm">
            Get all the benefits of an in-wall or in-ceiling speaker system
            without any of the hassle. Just replace a few lights around your
            house, and start streaming crisp, clear audio, everywhere.
          </p>
        </div>
        <div className="">
          <Image
            src="/images/Cards.png"
            width={480}
            height={330}
            alt="Devices"
          />
        </div>
      </main>
    </section>
  );
}
