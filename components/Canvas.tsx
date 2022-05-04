import React from 'react';

interface CanvasProps {
  canvasRef?: React.MutableRefObject<HTMLCanvasElement | undefined>;
  width?: number;
}

export const Canvas: React.FC<CanvasProps> = ({ canvasRef, width }) => {
  const widthHalf = width ? width / 2 : 0;

  return (
    <section>
      <canvas ref={canvasRef as any} />
    </section>
  );
};