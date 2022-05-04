import React from 'react';

// import styles from './BrushPreview.module.scss';

interface Props {
  currentColor: string;
  currentWidth: number;
}

export const BrushPreview: React.FC<Props> = ({
  currentColor,
  currentWidth,
}) => {
  const styles = {
    backgroundColor: currentColor,
    width: `${currentWidth}px`,
    height: `${currentWidth}px`,
  };
  return (
    <div className="tool-section tool-section--lrg">
      <small>
        <strong>Brush Preview</strong>
      </small>
      <div className="preview">
        <div style={styles} className="preview__brush"></div>
      </div>
    </div>
  );
};
