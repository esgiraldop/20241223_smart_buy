import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../interfaces';
import {theme} from '../../themes';
import {
  AllPurchasesScreen,
  CreatePurchaseScreen,
  EditPurchaseScreen,
} from '../../screens';

export const StackNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator
      initialRouteName="AllPurchases"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.background,
        },
        headerTintColor: theme.colors.textPrimary,
        headerTitleStyle: {
          fontSize: theme.typography.h2.fontSize,
          color: theme.colors.textPrimary,
        },
        animation: 'slide_from_right',
        freezeOnBlur: true,
      }}>
      <Stack.Screen
        name="AllPurchases"
        component={AllPurchasesScreen}
        options={{title: 'All purchases'}}
      />
      <Stack.Screen
        name="CreatePurchase"
        component={CreatePurchaseScreen}
        options={{title: 'Create a purchase'}}
      />
      <Stack.Screen
        name="EditPurchase"
        component={EditPurchaseScreen}
        options={{title: 'Edit a purchase'}}
      />
    </Stack.Navigator>
  );
};
