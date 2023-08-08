import React from 'react';
import Portal from '../Component/Portal';
import PortalContext from '../Context/PortalContext';
import { type PortalState } from '../Interfaces/Interfaces';
import { type PortalProviderProps } from '../Interfaces/Interfaces';

const PortalProvider: React.FC<PortalProviderProps> = ({
  children,
  ...rest
}) => {
  const reducer = (state: PortalState, newData: PortalState | null) => {
    return { ...state, ...newData };
  };

  const [state, dispatch] = React.useReducer(reducer, {
    element: null,
    options: { ...rest },
  });

  return (
    <PortalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
      <Portal />
    </PortalContext.Provider>
  );
};

export default PortalProvider;
