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
        className="h-min-[100px] max-w-[350px] object-contain"
        alt=""
        width={300}
        height={200}
      />
    </a>
  );
};

export default Sponsor;
