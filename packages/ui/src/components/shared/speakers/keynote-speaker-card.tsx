import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function KeynoteSpeakerCard({ keynoteSpeaker }) {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const hoverStyles = {
    transform: isHovered ? "scale(1.1)" : "scale(1)",
    transition: "transform 0.3s ease",
  };

  function handleClick(params) {
    router.push(`/keynote-speakers/${keynoteSpeaker.name}`);
  }

  return (
    <div className="space-y-3" onClick={handleClick}>
      <div
        className="text-center cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="w-72 h-72 mx-auto rounded-full overflow-hidden"
          style={hoverStyles}
        >
          <Image src={keynoteSpeaker?.image} alt="" width={600} height={600} />
        </div>
      </div>{" "}
      <div className="text-center" style={hoverStyles}>
        <div className="">
          <h4 className="font-semibold text-2xl text-gray-700">
            {keynoteSpeaker?.name}
          </h4>
          <p className="text-base text-gray-500">
            {keynoteSpeaker?.description}
          </p>
        </div>
      </div>
    </div>
  );
}
