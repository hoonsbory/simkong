import React from 'react';
import AdSense from 'react-adsense';
const Adsense = ({ client, slot,layout,format }) => {
  return (
    <AdSense.Google
      client={client}
      slot={slot}
      style={{ display: 'block', textAlign: "center" }}
      format={format}
      layout={layout}
      responsive='true'
    />
  )
};

export default Adsense;