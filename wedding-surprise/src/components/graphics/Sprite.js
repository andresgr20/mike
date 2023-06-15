import React, { useEffect, useRef } from "react";
import { CELL_SIZE } from "../../helpers/consts";

function Sprite({ image, frameCoord, size = 16 }) {
  const canvasRef = useRef();
  useEffect(() => {
    /** @type {HTMLCanvasElement} */
    const canvasElement = canvasRef.current;
    const ctx = canvasElement.getContext("2dx");

    // Clear out anything in the canvas
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);

    // Will use frame coord to detect changes
    const tileSheetX = Number(frameCoord.split("x")[0]);
    const tileSheetY = Number(frameCoord.split("x")[1]);

    ctx.drawImage(
      image, // Image to pull from
      tileSheetX * CELL_SIZE, // Left X corner of frame
      tileSheetY * CELL_SIZE, // Left Y corner of frame
      size, // how much to crope from sprite sheet (x)
      size, // how much to crope from sprite sheet (y)
      0, // where to place this on canvas tag X (0)
      0, // where to place this on canvas tag Y (0)
      size, // how large to scale it (x)
      size // how large to scale it (y)
    );
  }, [frameCoord, size]);

  return <canvas width={size} height={size} ref={canvasRef} />;
}

const MemoizedSprite = React.memo(Sprite);

export default MemoizedSprite;
