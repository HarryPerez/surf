import { string } from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

const CustomHelmet = ({ title, description }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Helmet>
);

CustomHelmet.propTypes = {
  description: string,
  title: string
};

export default CustomHelmet;
