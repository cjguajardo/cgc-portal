# React Native Simple Portal

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/cjguajardo/cgc-portal/blob/main/LICENSE)

## Description

React Native Simple Portal is a lightweight library that allows you to render components outside of their parent hierarchy. It provides a simple API to create portals and manage the rendering of components in different parts of your app.

## Features

- Render components outside of their parent hierarchy
- Easily manage component rendering in different parts of your app
- Lightweight and easy to use

## Installation

To install React Native Simple Portal, you can use npm or yarn:

```sh
npm install cgc-portal
```

or

```sh
yarn add cgc-portal
```

## Usage

```typescript
import * as React from 'react';

import { PortalProvider } from 'cgc-portal';
import Content from './Content';

export default function App() {
  return (
    <PortalProvider>
      <Content />
    </PortalProvider>
  );
}
```

```typescript
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
```

For more detailed usage instructions and examples, please refer to the [documentation](https://github.com/cjguajardo/cgc-portal/blob/main/README.md).

## Methods

```typescript
/**
 * other imports
 * */
import { usePortal } from 'cgc-portal';

/**
 * component code
 * */
const { mount, unmount } = usePortal();

mount({
  element: Modal,
  options: {
    onCloseCallback: () => {
      /* do something after close */
    },
  },
});
```

**mount(args)**: Mounts the component to the parent element

- args {MountArgs} - The arguments to mount the component
  - element {ReactNode | ReactChild | ReactFragment} - The element to mount the component to
  - options {PortalOptions} - The options to mount the component with
    - [optional] showCloseButton {boolean} - Whether to show the close button or not, defaults to true
    - [optional] timer {number} - The time in milliseconds to unmount the component
    - [optional] onCloseCallback {Function} - The callback function to call when the component is unmounted
    - [optional] outAnimationTime {number} - The time in milliseconds to animate the component out
    - [optional] inAnimationTime {number} - The time in milliseconds to animate the component in
    - [optional] backgroundColor {string} - The background color of the component

**unmount()**: Unmounts the component from the parent element

## Components

### PortalProvider

PortalProvider is a component that provides the context for the portal to work. It must be used at the root of your app.

**Props**: {PortalOptions} - The options to mount the component with

- [optional] outAnimationTime {number} - The time in milliseconds to animate the component out
- [optional] inAnimationTime {number} - The time in milliseconds to animate the component in
- [optional] backgroundColor {string} - The background color of the component

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/cjguajardo/cgc-portal/blob/main/LICENSE) file for more information.

## Support

If you have any questions or need support, feel free to reach out to the project maintainer at [mail](mailto:cj.guajardo@cgcapps.cl).

## Roadmap

- Add tests
- Add more animations
