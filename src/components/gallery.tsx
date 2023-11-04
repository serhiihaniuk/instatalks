import Image from "next/image";
const Gallery = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-[repeat(4,_250px)] gap-2 md:grid-cols-[50%_50%] md:grid-rows-[300px_300px]">
      <div className="relative overflow-hidden rounded-3xl">
        <Image
          className="absolute inset-0 object-cover"
          src="/dec1.jpg"
          alt=""
          fill
        />
      </div>
      <div className="relative overflow-hidden rounded-3xl">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src="/dec2.jpg"
          alt=""
          fill
        />
      </div>
      <div className="relative overflow-hidden rounded-3xl">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src="/dec2.jpg"
          alt=""
          fill
        />
      </div>
      <div className="relative overflow-hidden rounded-3xl">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src="/dec1.jpg"
          alt=""
          fill
        />
      </div>
    </div>
  );
};

export default Gallery;
