import React from 'react';
import AdSense from 'react-adsense';
const Adsense = ({ client, slot,layout,format , style }) => {
  return (
    <AdSense.Google
      client={client}
      slot={slot}
      style={{ display: 'block', textAlign: "center" , style }}
      format={format}
      layout={layout}
      responsive='true'
    />
  )
};

export default Adsense;