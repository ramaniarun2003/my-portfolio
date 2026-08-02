// Original layered foliage.
export default function JungleScenery() {
  return (
    <svg className="biome__scenery-svg" viewBox="0 0 1200 320" preserveAspectRatio="xMidYMid slice">
      <g fill="#bcdcc0">
        <circle cx="70" cy="16" r="120" />
        <circle cx="290" cy="-12" r="92" />
        <circle cx="1130" cy="16" r="128" />
        <circle cx="910" cy="-12" r="92" />
      </g>
      <g fill="#a9d0ad" opacity="0.7">
        <ellipse cx="55" cy="300" rx="90" ry="140" />
        <ellipse cx="1150" cy="300" rx="90" ry="140" />
      </g>
    </svg>
  );
}
