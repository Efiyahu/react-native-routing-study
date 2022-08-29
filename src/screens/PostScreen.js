import React from 'react';
import {Text, View} from 'react-native';

const PostScreen = ({route}) => {
  return (
    <View>
      <Text style={{color: 'white'}}>Post Screen {route.params.post}</Text>
    </View>
  );
};

export default PostScreen;
