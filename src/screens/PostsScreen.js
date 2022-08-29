import React, {useEffect} from 'react';
import {Pressable, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components/native';
import {GET_ALL_POSTS} from '../store/constants';
import {postsSelector} from '../store/selectors/posts';

const PostsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const postsState = useSelector(postsSelector);

  useEffect(() => {
    dispatch({type: GET_ALL_POSTS});
  }, []);

  const onPressPostHandler = postId => {
    navigation.navigate('PostScreen', {post: postId});
  };

  if (postsState.loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  const renderPostItems = itemData => (
    <Pressable
      onPress={() => onPressPostHandler(itemData.item.id)}
      style={({pressed}) => pressed && {opacity: 0.8}}>
      <PostContainer>
        <View>
          <PostId>{itemData.item.id}</PostId>
          <Title>{itemData.item.title.slice(0, 20)}</Title>
          <Body>{itemData.item.body.slice(0, 50)}</Body>
        </View>
      </PostContainer>
    </Pressable>
  );

  return (
    <View style={{flex: 1, margin: 10}}>
      {postsState && (
        <FlatList
          data={postsState.posts}
          keyExtractor={item => item.id}
          renderItem={renderPostItems}
        />
      )}
    </View>
  );
};

export default PostsScreen;

const PostContainer = styled.View`
  margin: 8px;
  background-color: ${({theme}) => theme.listColor};
  height: 150px;
  width: 90%;
  border-radius: 16px;
  align-self: center;
`;

const PostId = styled.Text`
  text-align: center;
  margin-top: 10px;
`;

const Body = styled.Text`
  text-align: center;
`;

const Title = styled.Text`
  color: ${({theme}) => theme.dark};
  text-align: center;
  margin: 8px;
  font-size: 18px;
  font-weight: bold;
`;
