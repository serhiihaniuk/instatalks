const Gallery = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-[300px_300px] gap-2 md:grid-cols-[50%_50%]">
      <div className="relative overflow-hidden rounded-3xl">
        <img
          className="absolute inset-0 object-contain"
          src="/dec1.jpg"
          alt=""
        />
      </div>
      <div className="relative overflow-hidden rounded-3xl">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="/dec2.jpg"
          alt=""
        />
      </div>
      <div className="relative overflow-hidden rounded-3xl">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="/dec2.jpg"
          alt=""
        />
      </div>
      <div className="relative overflow-hidden rounded-3xl">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="/dec1.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Gallery;
