import { useEffect, useRef } from "react";

export default function Sprite() {
  const canvasRef = useRef();
  useEffect(() => {
    const canvasElement = canvasRef.current;
    const ctx = canvasElement.getContext("2dx");

    // Clear out anything in the canvas
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  }, []);

  return <canvas width={16} height={16} ref={canvasRef} />;
}
