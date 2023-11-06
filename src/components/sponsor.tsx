import { type FC } from "react";
import Image from "next/image";

type SponsorProps = {
  href: string;
  src: string;
};
const Sponsor: FC<SponsorProps> = ({ src, href }) => {
  return (
    <a className="block" href={href} target="_blank">
      <Image
        src={src}
        className="max-w-[150px]"
        alt=""
        width={300}
        height={500}
      />
    </a>
  );
};

export default Sponsor;
