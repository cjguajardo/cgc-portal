export interface PortalOptions {
  showCloseButton?: boolean;
  onCloseCallback?: () => void;
  outAnimationTime?: number;
  inAnimationTime?: number;
  backgroundColor?: string;
  timer?: number;
}

export interface PortalProviderProps {
  children?: React.ReactNode;
  backgroundColor?: string;
  outAnimationTime?: number;
  inAnimationTime?: number;
}

export interface PortalContextProps {
  state: PortalState;
  dispatch: React.Dispatch<PortalState>;
}

export interface PortalProps {
  children?: React.ReactNode;
}

export interface PortalState {
  element: React.ReactNode | React.ReactChild | React.ReactFragment | null;
  options: PortalOptions;
}

export interface MountArgs {
  element: React.ReactNode | React.ReactChild | React.ReactFragment;
  options?: PortalOptions;
}
