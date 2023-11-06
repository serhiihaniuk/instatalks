import { type FC } from "react";
import Image from "next/image";

type SponsorProps = {
  href: string;
};
const Sponsor: FC<SponsorProps> = ({ href }) => {
  return (
    <div>
      <Image
        src={href}
        className="max-w-[150px]"
        alt=""
        width={300}
        height={500}
      />
    </div>
  );
};

export default Sponsor;
