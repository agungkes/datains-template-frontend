import fetcher from '@utils/fetcher';
import React from 'react';
import { SWRConfig } from 'swr';

function App({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher,
        onError: (err) => {
          console.error(err);
        },
      }}>
      <Component {...pageProps} />
      <style jsx global>
        {`
          html,
          body,
          #__next {
            min-height: 100%;
            height: 100%;
          }
          .layout {
            min-height: 100%;
          }
          .site-layout-content {
            margin-top: 10px;
            min-height: 250px;
            border-radius: 10px;
          }
          .mapboxgl-marker {
            cursor: pointer;
          }
        `}
      </style>
    </SWRConfig>
  );
}

export default App;
