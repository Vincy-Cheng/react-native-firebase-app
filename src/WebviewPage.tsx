import { View, Text, Button } from 'react-native';
import React, { useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import analytics from '@react-native-firebase/analytics';
type Props = {};

const WebviewPage = (props: Props) => {
  const webviewRef = useRef<any>(null);
  const _sendPostMessgae = () => {
    if (webviewRef && webviewRef.current) {
      webviewRef.current.injectJavaScript(
        `window.ReactNativeWebView.postMessage(JSON.stringify({key : "value"}));`
      );
    }
  };
  return (
    <View className="flex-1">
      <Button
        title="trigger"
        onPress={() => {
          _sendPostMessgae();
        }}
      ></Button>
      <WebView
        ref={webviewRef}
        className="flex-1 items-center justify-center"
        source={{
          uri: 'https://github.com/react-native-webview/react-native-webview'
        }}
        onMessage={async (event) => {
          console.log(JSON.parse(event.nativeEvent.data));
          await analytics().logEvent('test_react_native', {
            App_type: 'react-native'
          });
        }}
      ></WebView>
    </View>
  );
};

export default WebviewPage;
