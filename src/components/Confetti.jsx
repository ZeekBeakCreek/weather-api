import React from "react";
import useWindowSize from "../hooks/useWindowSize";
import Confetti from "react-confetti";

export default () => {
  const { width, height } = useWindowSize();
  return (
    <Confetti
      width={width}
      height={height}
      numberOfPieces={50}
      colors={["#996236", "#F8B12C", "#ED732E", "#9D221E", "#859D3C", "#382615"]}
      recycle={true}
      drawShape={(ctx) => {
        ctx.beginPath();
        for (let i = 0; i < 22; i++) {
          const angle = 0.35 * i;
          const x = (0.2 + 1.5 * angle) * Math.cos(angle);
          const y = (0.2 + 1.5 * angle) * Math.sin(angle);
          ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.closePath();
      }}
    />
  );
};
