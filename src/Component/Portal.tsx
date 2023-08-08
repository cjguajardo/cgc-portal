import React, { useCallback, useContext } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Animated,
  ScrollView,
} from 'react-native';
import PortalContext from '../Context/PortalContext';
import type { PortalProps, PortalContextProps } from '../Interfaces/Interfaces';
import CloseButton from './CloseButton';
import ChildWrapper from './ChildWrapper';

const Portal: React.FC<PortalProps> = () => {
  const { state, dispatch } =
    useContext<PortalContextProps>(PortalContext) ?? {};
  const [childHeight, setChildHeight] = React.useState(0);
  const [parentHeight, setParentHeight] = React.useState(0);

  const showCloseButton = state.options?.showCloseButton ?? true;
  const onCloseCallback = state.options?.onCloseCallback ?? null;
  const outAnimationTime = state.options?.outAnimationTime ?? 600;
  const inAnimationTime = state.options?.inAnimationTime ?? 800;
  const backgroundColor = state.options?.backgroundColor ?? 'rgba(0,0,0,0.6)';

  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: inAnimationTime,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = useCallback(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: outAnimationTime,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, outAnimationTime]);

  const onCloseHandler = useCallback(() => {
    fadeOut();
    // eslint-disable-next-line prettier/prettier
    new Promise(resolve => setTimeout(resolve, outAnimationTime)).then(() => {
      dispatch({ ...state, element: null });
      if (typeof onCloseCallback === 'function') {
        state.element = null;
        onCloseCallback();
      }
    });
  }, [dispatch, onCloseCallback, outAnimationTime, state, fadeOut]);

  const Child = () => {
    const Component = state.element;
    if (Component === null) return null;
    if (typeof Component === 'undefined') return null;
    if (typeof Component === 'function') return Component();

    try {
      return Component;
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  const layoutHandler = (event: any) => {
    const { height } = event.nativeEvent.layout;
    setChildHeight(height);
  };

  const parentLayoutHander = (event: any) => {
    const { height } = event.nativeEvent.layout;
    setParentHeight(height);
  };

  const containerPaddingTop = (parentHeight - childHeight) / 2;

  if (Child() !== null) {
    fadeIn();

    return (
      <SafeAreaView
        style={[styles.safeArea, { backgroundColor: backgroundColor }]}
      >
        <Animated.View style={{ opacity: fadeAnim }}>
          <View style={styles.backdrop}>
            {showCloseButton && <CloseButton onCloseHandler={onCloseHandler} />}

            <View
              style={{ ...styles.container, paddingTop: containerPaddingTop }}
              onLayout={parentLayoutHander}
            >
              <ScrollView>
                <ChildWrapper layoutHandler={layoutHandler}>
                  <Child />
                </ChildWrapper>
              </ScrollView>
            </View>
          </View>
        </Animated.View>
      </SafeAreaView>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute',
    zIndex: 1000,
    top: 0,
    left: 0,
  },
  backdrop: {
    width: '100%',
    height: '100%',
    zIndex: 1000,
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 30,
  },
  container: {
    verticalAlign: 'middle',
    flex: 1,
    width: '100%',
  },
});

export default Portal;
