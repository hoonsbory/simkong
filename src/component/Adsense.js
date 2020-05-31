import React from 'react';
import AdSense from 'react-adsense';

const Adsense = ({ client, slot }) => {
  return (
    <AdSense.Google
      client={client}
      slot={slot}
      style={{ display: 'block', textAlign: "center" }}
      format='fluid'
      responsive='true'
    />
  )
};

export default Adsense;