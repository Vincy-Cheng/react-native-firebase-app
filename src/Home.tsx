import { View, Text, Button } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {};

const Home = (props: Props) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, []);
  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="flex-1 justify-center items-center">
        {/* <Text>Home</Text> */}
        <Button
          title="Open Webview"
          onPress={() => navigation.navigate('webview' as never)}
        ></Button>
      </View>
    </SafeAreaView>
  );
};

export default Home;
