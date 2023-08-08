import { useContext } from 'react';
import PortalContext from '../Context/PortalContext';
import type { MountArgs, PortalContextProps } from '../Interfaces/Interfaces';

function usePortal() {
  const { state, dispatch } = useContext<PortalContextProps>(PortalContext);

  /**
   * @description Mounts the component to the parent element
   * @param args {MountArgs} - The arguments to mount the component
   * @param args.element {HTMLElement} - The element to mount the component to
   * @param args.options {PortalOptions} - The options to mount the component with
   * @param args.options.timer {number} - The time in milliseconds to unmount the component
   * @param args.options.onCloseCallback {Function} - The callback function to call when the component is unmounted
   * @param args.options.outAnimationTime {number} - The time in milliseconds to animate the component out
   * @param args.options.inAnimationTime {number} - The time in milliseconds to animate the component in
   * @param args.options.backgroundColor {string} - The background color of the component
   * @returns void
   */
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

  /**
   * @description Unmounts the component from the parent element
   * @returns void
   */
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
