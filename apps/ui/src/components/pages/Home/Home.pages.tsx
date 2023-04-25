import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';

interface HomeProps {
  children?: ReactNode;
}

const Home: React.FC<HomeProps> = React.memo(({ children }) => {
  return (
    <>
      <p>Home pages ss</p>
      {children}
    </>
  );
});

Home.propTypes = {
  children: PropTypes.node,
};

Home.defaultProps = {
  children: null,
};

export default Home;
