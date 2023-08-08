import React from 'react';
import { Modal, Loader } from './Components';
import { View, Text, Pressable, SafeAreaView, Alert } from 'react-native';
import styles from './styles';
import { usePortal } from 'cgc-portal';

const Content: React.FC = () => {
  const { mount } = usePortal();

  const showModal = () => {
    //shows modal with close button
    mount({
      element: Modal,
      options: {
        onCloseCallback: () => {
          console.log('onCloseCallback');
          Alert.alert('Portal', 'Modal Closed!!');
        },
      },
    });
  };

  const showLoader = () => {
    //shows loader for 5 seconds
    mount({
      element: Loader,
      options: {
        showCloseButton: false,
        onCloseCallback: () => {
          console.log('onCloseCallback');
          Alert.alert('Portal', 'Loaded!!');
        },
        timer: 5000,
      },
    });
  };

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.container}>
        <Text style={styles.h1}>Portal demo</Text>
        <Pressable style={styles.button} onPress={() => showModal()}>
          <Text style={styles.text}>Show modal</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => showLoader()}>
          <Text style={styles.text}>Show loader</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Content;
