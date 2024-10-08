import Image from "next/image";

export const Divna = () => {
  return (
    <a
      className="h-min-[100px] relative block"
      href="https://instagram.com/divna.official"
      target="_blank"
    >
      <Image
        src="/s3.png"
        className="h-[100px] max-w-[300px] object-contain"
        alt=""
        width={300}
        height={200}
      />
    </a>
  );
};

export const Staleks = () => {
  return (
    <a
      className="h-min-[100px] relative block"
      href="https://instagram.com/staleks_polska"
      target="_blank"
    >
      <Image src="/s5.png" className="w-[350px] object-contain" alt="" width={300} height={200} />
    </a>
  );
};

export const JzNails = () => {
  return (
    <a
      className="h-min-[100px] relative block"
      href="https://instagram.com/jznails_group"
      target="_blank"
    >
      <Image src="/s4.png" className="h-[200px] object-contain" alt="" width={300} height={200} />
    </a>
  );
};

export const SamaWraps = () => {
  return (
    <a
      className="h-min-[100px] relative block"
      href="https://www.instagram.com/sama_wraps?igsh=ZTZkbm9iMG9odWlv"
      target="_blank"
    >
      <Image src="/s8.png" className="h-[150px] object-contain" alt="" width={300} height={200} />
    </a>
  );
};

export const DivasShop = () => {
  return (
    <a
      className="h-min-[100px] relative block"
      href="https://www.instagram.com/divas_shop.pl"
      target="_blank"
    >
      <Image src="/s7.png" className="w-[360px] object-contain" alt="" width={300} height={200} />
    </a>
  );
};

export const DreamStudioReklamy = () => {
  return (
    <a
      className="h-min-[100px] relative block"
      href="https://www.instagram.com/dream.studioreklamy?igsh=MW44emZ4OW11OHo2dA=="
      target="_blank"
    >
      <Image
        src="/s9.png"
        className="max-h-[225px] min-h-[100px] max-w-[300px] object-contain"
        alt=""
        width={300}
        height={200}
      />
    </a>
  );
};

export const Fox = () => {
  return (
    <a
      className="h-min-[100px] relative block"
      href="https://www.instagram.com/f.o.x_nails_poland"
      target="_blank"
    >
      <Image
        src="/s11.png"
        className="max-h-[225px] min-h-[100px] max-w-[300px] object-contain"
        alt=""
        width={300}
        height={200}
      />
    </a>
  );
};

export const Sponsors = [
  <Divna key={1} />,
  <Staleks key={2} />,
  <JzNails key={3} />,
  <SamaWraps key={4} />,
  <DivasShop key={5} />,
  <DreamStudioReklamy key={6} />,
  <Fox key={7} />,
];
