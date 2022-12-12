import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Card from '../shared/Card';
import { globalStyles,images } from '../styles/global';

export default function ReviewDetails({ route }) {
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{ route.params.title }</Text>
        <Text>{ route.params.body }</Text>
        <View style={styles.rating}>
          <Text>GameZone rating: </Text>
          <Image style={{width: 100, height: 20}} source={images.ratings[route.params.rating]} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
    rating: {
      flexDirection: 'row',
      justifyContent: 'center',
      paddingTop: 16,
      marginTop: 16,
      borderTopWidth: 1,
      borderTopColor: '#eee',
    }
  });