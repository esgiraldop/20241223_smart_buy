import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {RootStackParamList} from '../interfaces';
import {useNavigation} from '@react-navigation/native';

export type AllPurchasesScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'AllPurchases'
>;

export const AllPurchasesScreen = () => {
  const navigation = useNavigation<AllPurchasesScreenNavigationProp>();

  return (
    <View>
      <Text style={{color: 'black'}}>
        This is the screen for viewing all the purchases
      </Text>
      <Button
        onPress={() => navigation.navigate('CreatePurchase')}
        title="Go to create purchase"
      />
      <Button
        onPress={() => navigation.navigate('EditPurchase')}
        title="Go to edit purchase"
      />
    </View>
  );
};
