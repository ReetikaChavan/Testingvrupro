import Image from "next/image";
import cakeImg from "../../images/cake.png";

// The source artwork is drawn on its side (landscape); rotate it upright
// into a portrait two-tier cake. Both boxes below share the same CSS length
// so the rotated inner box's footprint lines up exactly with the outer one.
const NATIVE_W = 562;
const NATIVE_H = 444;
const CAKE_WIDTH = "clamp(18rem, 26vw, 30rem)";

export function Cake() {
  return (
    <div
      className="relative"
      style={{ width: CAKE_WIDTH, aspectRatio: `${NATIVE_H} / ${NATIVE_W}` }}
    >
      <div
        className="absolute left-1/2 top-1/2"
        style={{
          height: CAKE_WIDTH,
          aspectRatio: `${NATIVE_W} / ${NATIVE_H}`,
          transform: "translate(-50%, -50%) rotate(90deg)",
        }}
      >
        <Image
          src={cakeImg}
          alt="Birthday cake"
          fill
          className="object-contain"
          sizes="480px"
          priority
        />
      </div>
    </div>
  );
}
