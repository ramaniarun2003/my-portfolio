// Original rolling waves.
export default function SeaScenery() {
  return (
    <svg className="biome__scenery-svg" viewBox="0 0 1200 320" preserveAspectRatio="xMidYMax slice">
      <path d="M0 208 Q150 178 300 208 T600 208 T900 208 T1200 208 V320 H0 Z" fill="#bfe6ec" opacity="0.8" />
      <path d="M0 248 Q150 218 300 248 T600 248 T900 248 T1200 248 V320 H0 Z" fill="#a9dbe4" />
      <path d="M0 288 Q150 262 300 288 T600 288 T900 288 T1200 288 V320 H0 Z" fill="#8fccd8" />
    </svg>
  );
}
