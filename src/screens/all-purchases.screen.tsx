import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {RootStackParamList} from '../interfaces';
import {useNavigation} from '@react-navigation/native';
import {usePurchases} from '../hooks/use-purchases.hook';
import {textStyles} from '../styles';
import {FlatList} from 'react-native-gesture-handler';
import {GoToEditPurchaseButton} from '../components/all-purchases/go-to-edit-purchase-button.component';

export type AllPurchasesScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'AllPurchases'
>;

export const AllPurchasesScreen = () => {
  const navigation = useNavigation<AllPurchasesScreenNavigationProp>();

  const {purchases, errorLoadingPurchases, isPurchaseLoading} = usePurchases();

  return (
    <>
      {isPurchaseLoading ? (
        // <Loader />
        <Text style={textStyles.textSuccess}>Loading purchases...</Text>
      ) : errorLoadingPurchases ? (
        <Text style={textStyles.textError}>
          Error loading purchases and transactions
        </Text>
      ) : purchases.length < 1 ? (
        <>
          <Text style={{color: 'black'}}>No Purchases could be loaded</Text>
          <Button
            onPress={() => navigation.navigate('CreatePurchase')}
            title="Go to create purchase"
          />
        </>
      ) : (
        <View>
          <FlatList
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <GoToEditPurchaseButton purchaseData={item} />
            )}
            data={purchases}
          />
          <Button
            onPress={() => navigation.navigate('CreatePurchase')}
            title="Go to create purchase"
          />
        </View>
      )}
    </>
  );
};
