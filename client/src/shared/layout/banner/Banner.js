import React from 'react';
import { AppButton } from '../../form';
import { AppTitle } from '../../typography';
import ArtistsService from '../../../api/services/ArtistsService';

let banner = {
  title: {
    text: 'Frank Ocean',
    level: 1,
  },
  contentStyle: {
    fontWeight: '900',
    height: '300px',
    padding: '50px',
    background: '#e28743',
  },
};

const button = {
  type: 'default',
  label: 'Randomize Artist',
  size: 'large',
  ghost: true,
};

const searchRequest = {
  take: 5,
};

const AppBanner = () => {
  const handleClick = () => {
    const response = ArtistsService.findArtists(searchRequest);
    console.log(response);
  };

  return (
    <div style={banner.contentStyle}>
      <AppTitle title={banner.title} />
      <AppButton onClick={() => handleClick()} button={button} />
    </div>
  );
};

export default AppBanner;
