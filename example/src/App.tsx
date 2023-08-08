import * as React from 'react';

import { PortalProvider } from 'react-native-simple-portal';
import Content from './Content';

export default function App() {
  return (
    <PortalProvider>
      <Content />
    </PortalProvider>
  );
}
