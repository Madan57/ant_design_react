import { P } from '@antv/g2plot';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

const ReactResponsive = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  });

  const isBigScreen = useMediaQuery({ query: '(min-width:1824)' });

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

  return (
    <div>
      <h1>Device Test!</h1>
      {isDesktopOrLaptop && <p>You are a desktop or laptop</p>}
      {isBigScreen && <p>You hvae a huge screen</p>}
      {isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
      <p>Your are in {isPortrait ? 'portrait' : 'landscape'} orientation </p>
      {isRetina && <p>You are retina</p>}

      {isMobile && (
        <h1
          style={{
            color: 'rosybrown',
            textShadow: '-1px 4px 4px rgb(168 169 154 / 84%)',
          }}
        >
          I am visible only on mobile device
        </h1>
      )}
    </div>
  );
};

export default ReactResponsive;
