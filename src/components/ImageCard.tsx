import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

type ImageCardProps = {
  title: string;
  copy: string;
  image: string;
  to: string;
  tone: "green" | "red" | "blue";
};

const toneMap = {
  green: "from-autolec-green/90",
  red: "from-autolec-red/90",
  blue: "from-autolec-blue/90",
};

export function ImageCard({ title, copy, image, to, tone }: ImageCardProps) {
  return (
    <Link
      to={to}
      className="group relative min-h-[360px] overflow-hidden rounded-md bg-ink text-white shadow-xl shadow-ink/10"
    >
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      <div className={`absolute inset-0 bg-linear-to-t ${toneMap[tone]} via-ink/40 to-transparent`} />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-white text-ink transition group-hover:bg-ink group-hover:text-white">
          <ArrowUpRight size={22} />
        </div>
        <h3 className="font-display text-2xl">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-white/80">{copy}</p>
      </div>
    </Link>
  );
}
