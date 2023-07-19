import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import * as Linking from 'expo-linking';
import * as FileSystem from 'expo-file-system';

import WebView from 'react-native-webview';
import { shareAsync } from 'expo-sharing';



if(__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

export default function App() {
  
  const url = 'https://tallersmart.com:4850/fileview/seefile'

  const myHtml = `
      <html><body>
        <h1>SAD LIFE</h1>
        <iframe
          width="500" height="500" src="${url}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen
        >
        </iframe>
      </body></html>
  `

  return (
    <WebView source={{ html: myHtml }} style={{ flex: 1 }} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red'
  },
});



// COSAS QUE HE PROBADO
// 1. WebView -> Descarga el archivo, no previsualiza
// 2. PDFREader -> Esa mondawe no sirve
// 3. Adobe API -> Me pide dominio de la app (¿? xd) --> Posible volver a revisar
// 4. Expo FilseSystem y Expo Linking -> No existe un built in scheme para abrir pdfs - https://github.com/expo/expo/issues/3193
// 5. Intents android actions  -> Esa mondawe no sirve
// 6. Abrir menu para que el usuario seleccione la app con la que quiere abrir el archivo -> Bare React Native

// Si nada de esto funciona -> Abrir archivo con expo linking a la web