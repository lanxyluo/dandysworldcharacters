import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

const ScrollToTopLink: React.FC<LinkProps> = ({ onClick, ...props }) => {
  return (
    <Link
      {...props}
      onClick={(event) => {
        if (onClick) onClick(event);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    />
  );
};

export default ScrollToTopLink;
