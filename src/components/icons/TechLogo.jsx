// Renders a toolkit brand logo from its static SVG asset.
export default function TechLogo({ tool }) {
  return (
    <img
      className="toolkit__icon"
      src={tool.img}
      alt={tool.label}
      title={tool.label}
      width="40"
      height="40"
      loading="lazy"
    />
  );
}
