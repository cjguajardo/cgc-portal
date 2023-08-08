import { useContext } from 'react';
import PortalContext from '../Context/PortalContext';
import type { MountArgs, PortalContextProps } from '../Interfaces/Interfaces';

function usePortal() {
  const { state, dispatch } = useContext<PortalContextProps>(PortalContext);

  const mount = (args: MountArgs) => {
    const _options = args.options || {};
    dispatch({
      element: args.element,
      options: { ...state.options, ..._options },
    });

    if (_options.timer && _options.timer > 100) {
      setTimeout(() => {
        const { onCloseCallback } = _options;
        onCloseCallback && onCloseCallback();
        unmount();
      }, _options.timer);
    }
  };

  const unmount = () => {
    dispatch({
      ...state,
      element: null,
      options: { ...state.options, onCloseCallback: undefined },
    });
  };

  return { mount, unmount };
}

export default usePortal;
