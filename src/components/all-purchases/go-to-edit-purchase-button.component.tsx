import React from 'react';
import {IPurchase} from '../../interfaces/puchase.interface';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {buttonStyle, textStyles} from '../../styles';
import {StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../interfaces';

export interface IPurchaseData {
  purchaseData: IPurchase;
}

type PurchaseDetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'PurchaseDetails'
>;

export const GoToEditPurchaseButton = ({purchaseData}: IPurchaseData) => {
  const {id, amount, name, date, state, category} = purchaseData;

  const navigation = useNavigation<PurchaseDetailsScreenNavigationProp>();

  return (
    <TouchableOpacity
      style={[buttonStyle.transactionDetailsButton]}
      onPress={() => navigation.navigate('EditPurchase', {purchaseId: id})}>
      <View style={styles.textBox}>
        <Text style={textStyles.textH3Dark}>{name}</Text>
        <Text style={textStyles.textBody2}>
          <Text style={[textStyles.textBody2, textStyles.textBold]}>
            Amount:{' '}
          </Text>
          {amount}
        </Text>
        <Text style={textStyles.textBody2}>
          <Text style={[textStyles.textBody2, textStyles.textBold]}>
            date:{' '}
          </Text>
          {date} {/*TODO: subtract transations in every purchase's group*/}
        </Text>
      </View>
      <View
        style={[
          styles.textBox,
          {
            height: 100,
          },
        ]}>
        <Text style={textStyles.textBody2}>
          <Text style={[textStyles.textBody2, textStyles.textBold]}>
            Category:{' '}
          </Text>
          {category} {/*TODO: subtract transations in every purchase's group*/}
        </Text>
        <Text style={textStyles.textBody2}>
          <Text style={[textStyles.textBody2, textStyles.textBold]}>
            State:{' '}
          </Text>
          {state} {/*TODO: subtract transations in every purchase's group*/}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textBox: {flex: 1},
});
