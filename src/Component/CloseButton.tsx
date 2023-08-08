import * as React from 'react';
import { Pressable, View, StyleSheet, Image } from 'react-native';

interface CloseButtonProps {
  onCloseHandler: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onCloseHandler }) => {
  const [hoverCloseButton, setHoverCloseButton] = React.useState(false);

  const handleHoverIn = () => {
    setHoverCloseButton(true);
  };

  const handleHoverOut = () => {
    setHoverCloseButton(false);
  };

  return (
    <Pressable
      style={styles.closeBox}
      onPress={onCloseHandler}
      onHoverIn={handleHoverIn}
      onHoverOut={handleHoverOut}
    >
      <View style={styles.closeButton}>
        <Image
          source={require('../assets/close.png')}
          style={[styles.icon, hoverCloseButton && styles.iconHovered]}
        />
      </View>
    </Pressable>
  );
};

export default CloseButton;

const styles = StyleSheet.create({
  closeBox: {
    position: 'absolute',
    top: 5,
    right: 5,
    width: 36,
    height: 36,
    // backgroundColor: '#00FF00AC',
    cursor: 'pointer',
    zIndex: 1054,
  },
  closeButton: {
    padding: 5,
    zIndex: 1054,
  },
  icon: {
    width: 26,
    height: 26,
    tintColor: '#FFFFFF',
  },
  iconHovered: {
    tintColor: '#FF0000',
  },
});
