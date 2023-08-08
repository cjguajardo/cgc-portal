import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ActivityIndicator,
  SafeAreaView,
  Alert,
} from 'react-native';
import { usePortal } from 'react-native-simple-portal';

const Modal: React.FC = () => (
  <View style={styles.modal}>
    <Text style={styles.h1}>Hello Portal!</Text>
    <Text style={styles.p}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia corporis
      numquam enim, tempore deserunt eos repellat assumenda est veritatis
      aspernatur suscipit quos rerum ex perspiciatis omnis dolore magni atque
      asperiores!
    </Text>
  </View>
);

const Loader: React.FC = () => (
  <View>
    <Text style={styles.loading}>Loading...</Text>
    <ActivityIndicator size="large" color="#FFFF00" />
  </View>
);

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

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
  },
  modal: {
    display: 'flex',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    width: '100%',
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  loading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
  },
  p: {
    fontSize: 16,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Content;
