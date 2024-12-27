import {ParamListBase} from '@react-navigation/native';

export interface RootStackParamList extends ParamListBase {
  AllPurchases: undefined;
  CreatePurchase: undefined;
  EditPurchase: {purchaseId: string};
}
