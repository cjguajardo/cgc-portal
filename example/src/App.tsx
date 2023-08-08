import * as React from 'react';

import { PortalProvider } from 'cgc-portal';
import Content from './Content';

export default function App() {
  return (
    <PortalProvider>
      <Content />
    </PortalProvider>
  );
}
