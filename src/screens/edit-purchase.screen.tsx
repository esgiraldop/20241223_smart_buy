import {RouteProp, useRoute} from '@react-navigation/core';
import React from 'react';
import {Text, View} from 'react-native';
import {RootStackParamList} from '../interfaces';

export const EditPurchaseScreen = () => {
  const {params} = useRoute<RouteProp<RootStackParamList, 'EditPurchase'>>();
  console.log('params?.purchaseId: ', params?.purchaseId);
  return (
    <View>
      <Text style={{color: 'black'}}>
        This is the screen for editing a purchase
      </Text>
    </View>
  );
};
