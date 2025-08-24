import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface ScrollToTopLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollToTopLink: React.FC<ScrollToTopLinkProps> = ({ 
  children, 
  className, 
  ...props 
}) => {
  // 由于ScrollToTop组件已经处理了全局滚动，这里只需要普通的Link功能
  // 保持组件接口一致，方便后续维护
  return (
    <Link 
      {...props} 
      className={className}
    >
      {children}
    </Link>
  );
};

export default ScrollToTopLink;
