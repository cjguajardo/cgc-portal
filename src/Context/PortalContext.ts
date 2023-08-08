import { createContext } from 'react';
import { type PortalContextProps } from 'src/Interfaces/Interfaces';

const PortalContext = createContext<PortalContextProps>({
  state: {
    element: null,
    options: {},
    show: false,
  },
  dispatch: () => {},
});

export default PortalContext;
