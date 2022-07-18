import { scale } from "../../src/constants";

// eric is a stinky poopoo head
// parameters are in REM

export default function DecorLine({
  width = 60,
  radius = 0.8,
  thickness = radius / 4,
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
        height={2 * radius + 2 + "px"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          height={thickness + "px"}
          width={width - 2 * radius + "px"}
          y={((radius + thickness) * 3) / 4 + 1}
          x={isLeft ? radius : 0}
          stroke={color}
          fill={color}
        />
        <ellipse
          ry={radius}
          rx={radius}
          cy={radius + 1}
          cx={isLeft ? radius + 1 : width - radius - 1}
          stroke={color}
          fill={color}
        />
      </svg>
    </div>
  );
}
