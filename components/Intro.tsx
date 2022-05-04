import React from 'react';

interface Props {
  init?: any;
  isReady?: boolean;
}

export const Intro: React.FC<Props> = ({ init, isReady }) => {
  return (
    <header className={isReady ? 'hidden' : ''}>
      <div>
        <button onClick={init}>
          <span>Annotate</span>
        </button>
      </div>
    </header>
  );
};
