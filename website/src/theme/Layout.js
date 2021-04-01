import React from 'react';
import OriginalLayout from '@theme-original/Layout';
import {Redirect, useLocation} from '@docusaurus/router';

const RemoveTrailingSlashRedirect = () => {
  const {pathname} = useLocation();
  if (pathname.endsWith('/')) {
    return <Redirect to={pathname.slice(0, -1)} />;
  }
  if (pathname.endsWith('.html')) {
    return <Redirect to={pathname.slice(0, -5)} />;
  }
  return null;
};

const Layout = props => (
  <>
    <RemoveTrailingSlashRedirect />
    <OriginalLayout {...props} />
  </>
);

export default Layout;
