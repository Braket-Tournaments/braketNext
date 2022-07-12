import { scale } from "../../src/constants";

// eric is a stinky poopoo head
// parameters are in REM

export default function DecorLine({
  width = 60,
  radius = 0.5,
  thickness = radius / 2,
  isLeft = true,
  color = "#904E55",
  className = "",
}: {
  width?: number;
  radius?: number;
  thickness?: number;
  isLeft?: boolean;
  color?: string;
  className?: string;
}) {
  width *= scale;
  radius *= scale;
  thickness *= scale;

  return (
    <div className={"overflow-clip " + className}>
      <svg
        width={width + "px"}
        height={2 * radius + "px"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          height={thickness + "px"}
          width={width - 2 * radius + "px"}
          y={(radius + thickness) / 2}
          x={radius}
          stroke={color}
          fill={color}
        />
        <ellipse
          ry={radius}
          rx={radius}
          cy={radius}
          cx={isLeft ? radius : width - radius}
          stroke={color}
          fill={color}
        />
      </svg>
    </div>
  );
}
