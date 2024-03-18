import { type FC } from "react";
import Image from "next/image";

type SponsorProps = {
  href: string;
  src: string;
};
const Sponsor: FC<SponsorProps> = ({ src, href }) => {
  return (
    <a className="h-min-[100px] relative block" href={href} target="_blank">
      <Image
        src={src}
        className="max-h-[225px] min-h-[100px] max-w-[300px] object-contain"
        alt=""
        width={300}
        height={200}
      />
    </a>
  );
};

export default Sponsor;
