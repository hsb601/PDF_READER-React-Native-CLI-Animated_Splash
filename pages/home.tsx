/*
import Pdf from 'react-native-pdf';
import React, { useState } from 'react';
import * as DocumentPicker from 'react-native-document-picker'
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Modal,
  TouchableOpacity,
  Dimensions, ActivityIndicator, Alert, Linking, Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.red,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function Home(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
const [selectedAsset, setSelectedAsset] = useState(null);

  const selectFile = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });

      if (!result.cancelled) {
        console.log('File selected successfully');
        console.log('URI:', result.uri);
        console.log('Type:', result.type);
        console.log('Name:', result.name);
        console.log('Size:', result.size);
        setSelectedAsset(result);
        console.log(result)
      } else {
        console.log('File selection cancelled');
      }
    } catch (err) {
      console.log('Error selecting file:', err);
    }
  };
  return (
    <SafeAreaView style={backgroundStyle}>

        <Section>
       <Text  style={styles.sectionTitle}> PDF READER </Text>
        </Section>

<Section>

      <ScrollView>
  <TouchableOpacity style={styles.btn} onPress={selectFile}>
  <Text style={styles.sectionDescription}> Open PDF </Text>
  </TouchableOpacity>

      {selectedAsset && (
        <View style={styles.selectedFileContainer}>
          <Text style={styles.selectedFileName}>Name: {selectedAsset.name}</Text>
          <Text style={styles.sub_txt}>Type: {selectedAsset.mimeType}</Text>
          <Text style={styles.sub_txt}>Size: {selectedAsset.size}</Text>


        </View>
      )}
      </ScrollView>
  <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
      <Pdf
        trustAllCerts={false}
        source={{
          uri: '../assets/tasks.pdf',
        }}
        page={1}
        scale={1.0}
        minScale={0.5}
        maxScale={3.0}
        renderActivityIndicator={() => (
          <ActivityIndicator color="black" size="large" />
        )}
        enablePaging={true}
        onLoadProgress={(percentage) => console.log(`Loading :${percentage}`)}
        onLoadComplete={() => console.log('Loading Complete')}
        onPageChanged={(page, totalPages) => console.log(`${page}/${totalPages}`)}
        onError={(error) => console.log(error)}
        onPageSingleTap={(page) => alert(page)}
        onPressLink={(link) => Linking.openURL(link)}
        onScaleChanged={(scale) => console.log(scale)}
        // singlePage={true}
        spacing={10}
        // horizontal
        style={{flex: 1, width: Dimensions.get('window').width}}
      />
    </View>
     </Section>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
     justifyContent: 'center',
      alignItems:'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    backgroundColor: '#FF0000',

  },
  btn:{
  backgroundColor: 'white',
  },
  sectionDescription: {
    marginTop: 5,
    marginBottom: 5,
    marginHorizontal: 55,
    fontSize: 18,
    fontWeight: '400',
  color: 'black'

  },
  highlight: {
    fontWeight: '700',
  },
});

export default Home;
 */
import Pdf from 'react-native-pdf';
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';

import React, {useCallback, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Modal,
  TouchableOpacity,
  Dimensions, ActivityIndicator, Alert, Linking, Image,
} from 'react-native';

import DocumentPicker, {types} from 'react-native-document-picker';
/* const resources = {
  file: Platform.OS === 'ios' ? 'tasks.pdf' : '../assets/tasks.pdf',
  url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  base64: 'JVBERi0xLjMKJcfs...',
}; */

const Home = () => {
  const [fileResponse, setFileResponse] = useState([]);
  const handleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: 'fullScreen',
        type: [types.pdf],
        allowMultiSelection: true,
      });
      setFileResponse(response);
    } catch (err) {
      console.warn(err);

    }
  }, []);
     const source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true };
       // const source = require('../assets/thereactnativebook-sample.pdf');
       // const source = {uri:'../assets/tasks.pdf' }; //uri: '../assets/tasks.pdf',
        //const source = {uri:'file:///sdcard/test.pdf'};
        //const source = {uri:"data:application/pdf;base64,JVBERi0xLjcKJc..."};
        //const source = {uri:"content://com.example.blobs/xxxxxxxx-...?offset=0&size=xxx"};
        //const source = {uri:"blob:xxxxxxxx-...?offset=0&size=xxx"};
     // const source = {uri:file?.uri};
  return (
  <View style={styles.container}>
    <SafeAreaView style={styles.container}>
                 <Text  style={styles.sectionTitle}> PDF READER </Text>
      <StatusBar barStyle={'light-content'} />
      <TouchableOpacity style={styles.btn} onPress={handleDocumentSelection}>
        <Text style={styles.btnTxt}> Open PDF  📑 </Text>
        </TouchableOpacity>


        <View style={styles.pdfContainer}>
             {fileResponse.map((file, index) => (
                <Text
                  key={index.toString()}
                  style={styles.sectionDescription}
                  numberOfLines={1}
                  ellipsizeMode={'middle'}>
                  {file?.name}
                </Text>
              ))}
  {fileResponse.map((file, index) => (
           <Pdf
             key={index.toString()}
             source={{uri: file.uri}} // Use file.uri directly
             onLoadProgress={(percentage) => console.log(`Loading: ${percentage}`)}
             onLoadComplete={() => console.log('Loading Complete')}
             renderActivityIndicator={() => <ActivityIndicator color="black" size="large" />}

             onLoadComplete={(numberOfPages, filePath) => {
               console.log(`Number of pages: ${numberOfPages}`);
             }}
             onPageChanged={(page, numberOfPages) => {
               console.log(`Current page: ${page}`);
             }}
             onError={(error) => {
               console.log(error);
             }}
             onPressLink={(uri) => {
               console.log(`Link pressed: ${uri}`);
             }}

             style={styles.pdf}
           />

       ))}
          </View>
           </SafeAreaView>
 </View>

  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  uri: {
    paddingBottom: 8,
    paddingHorizontal: 18,
  },
   btnTxt: {
      paddingHorizontal: 14,
      paddingVertical: 14,
      justifyContent: 'center',
      alignItems:'center',
      fontSize: 16,
      color: 'white',
      fontWeight: 'bold',
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      backgroundColor: 'white',
      marginTop: 10,
      color: '#460F07',
    },
    btn:{
    backgroundColor: '#460F07',
     borderRadius: 10,
     marginTop: 10,
    },
    sectionDescription: {
      marginTop: 5,
      marginBottom: 5,
   marginHorizontal: 20,
      fontSize: 18,
      fontWeight: '400',
    color: '#460F07',

    },
    highlight: {
      fontWeight: '700',
    },
    pdfcontainer: {
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: 140,

        },
        pdf: {
            flex:1,
            width:Dimensions.get('window').width,
            height:Dimensions.get('window').height,
            backgroundColor: 'white',
             marginBottom: 40,
        }
});

