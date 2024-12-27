import {RouteProp, useNavigation, useRoute} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import {RootStackParamList} from '../interfaces';
import {usePurchaseById} from '../hooks/use-single-purchase.hook';
import {buttonStyle, containerStyles, textStyles} from '../styles';
import {ICreatePurchaseForm} from './create-purchase.screen';
import {PurchasesService} from '../services/purchases.service';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {Formik} from 'formik';
import {priceSchema} from '../schemas/purchases.schema';
import {theme} from '../themes';
import {DropdownCategories} from '../components/common/dropdown-categories.component';
import {categories, stateCategories} from '../data/categories.data';

type EditPurchaseScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'EditPurchase'
>;

export const EditPurchaseScreen = () => {
  const {params} = useRoute<RouteProp<RootStackParamList, 'EditPurchase'>>();

  const navigation = useNavigation<EditPurchaseScreenProp>();

  const {purchaseInfo, isPurchaseLoading, errorLoadingPurchase} =
    usePurchaseById(params.purchaseId);

  const [initialValues, setInitialValues] = useState<ICreatePurchaseForm>({
    name: '',
    amount: 0,
    date: '',
    state: 'Select Category', // Pending | Purchased
    category: 'Select Category',
    description: '',
  });

  useEffect(() => {
    if (purchaseInfo) {
      const {id, ...rest} = purchaseInfo;
      console.log('rest: ', rest);
      setInitialValues(rest);
    }
    console.log('purchaseInfo: ', purchaseInfo);
    console.log('initialValues: ', initialValues);
  }, [purchaseInfo]);

  const onSubmit = async (values: ICreatePurchaseForm) => {
    await PurchasesService.update({
      ...values,
      id: params.purchaseId,
    });
    navigation.goBack();
  };

  return (
    <>
      {isPurchaseLoading ? (
        // <Loader />
        <Text style={textStyles.textSuccess}>Loading purchases...</Text>
      ) : errorLoadingPurchase ? (
        <Text style={textStyles.textError}>
          Error loading purchases and transactions
        </Text>
      ) : !purchaseInfo ? (
        <Text style={textStyles.textError}>
          No purchase with the id {params.purchaseId} could be found
        </Text>
      ) : (
        <ScrollView
          style={[containerStyles.containerLightBc]}
          contentContainerStyle={containerStyles.HorVertCenteredContainer}>
          <View
            style={[
              containerStyles.containerLightBc,
              containerStyles.centeredContainerLightBc,
            ]}>
            <Formik
              initialValues={initialValues}
              validationSchema={priceSchema}
              onSubmit={onSubmit}>
              {formikProps => {
                return (
                  <View style={containerStyles.centeredContainerLightBc}>
                    <Text style={textStyles.textBody2}>Name</Text>
                    <TextInput
                      style={[
                        textStyles.inputField,
                        containerStyles.inputFieldDark,
                      ]}
                      onChangeText={formikProps.handleChange('name')}
                      onBlur={formikProps.handleBlur('name')}
                      value={formikProps.values.name}
                      placeholder="Enter name"
                      placeholderTextColor={theme.colors.textSecondary}
                    />
                    {formikProps.touched.name && formikProps.errors.name && (
                      <Text style={textStyles.textError}>
                        {formikProps.errors.name}
                      </Text>
                    )}

                    <Text style={textStyles.textBody2}>Amount</Text>
                    <TextInput
                      style={[
                        textStyles.inputField,
                        containerStyles.inputFieldDark,
                      ]}
                      onChangeText={formikProps.handleChange('amount')}
                      onBlur={formikProps.handleBlur('amount')}
                      value={String(formikProps.values.amount)}
                      placeholder="Enter amount"
                      placeholderTextColor={theme.colors.textSecondary}
                    />
                    {formikProps.touched.name && formikProps.errors.name && (
                      <Text style={textStyles.textError}>
                        {formikProps.errors.name}
                      </Text>
                    )}

                    <Text style={textStyles.textBody2}>Date</Text>
                    <TextInput
                      style={[
                        textStyles.inputField,
                        containerStyles.inputFieldDark,
                      ]}
                      onChangeText={formikProps.handleChange('date')}
                      onBlur={formikProps.handleBlur('date')}
                      value={formikProps.values.date}
                      placeholder="Enter date"
                      placeholderTextColor={theme.colors.textSecondary}
                    />
                    {formikProps.touched.date && formikProps.errors.date && (
                      <Text style={textStyles.textError}>
                        {formikProps.errors.date}
                      </Text>
                    )}

                    <Text style={textStyles.textBody2}>State</Text>
                    <DropdownCategories
                      categories={stateCategories}
                      value={formikProps.values.state}
                      onChange={selectedValue => {
                        formikProps.setFieldValue('state', selectedValue);
                      }}
                      onBlur={() => formikProps.setFieldTouched('state', true)}
                      placeholder="Select state"
                    />
                    {formikProps.touched.state && formikProps.errors.state && (
                      <Text style={textStyles.textError}>
                        {formikProps.errors.state}
                      </Text>
                    )}

                    <Text style={textStyles.textBody2}>Category</Text>
                    <DropdownCategories
                      categories={categories}
                      value={formikProps.values.category}
                      onChange={selectedValue => {
                        formikProps.setFieldValue('category', selectedValue);
                      }}
                      onBlur={() =>
                        formikProps.setFieldTouched('category', true)
                      }
                      placeholder="Select category"
                    />
                    {formikProps.touched.category &&
                      formikProps.errors.state && (
                        <Text style={textStyles.textError}>
                          {formikProps.errors.category}
                        </Text>
                      )}

                    <Text style={textStyles.textBody2}>Description</Text>
                    <TextInput
                      style={[
                        textStyles.inputField,
                        containerStyles.inputFieldDarkThicker,
                      ]}
                      onChangeText={formikProps.handleChange('description')}
                      onBlur={formikProps.handleBlur('description')}
                      value={formikProps.values.description}
                      defaultValue={initialValues.description}
                      placeholder="Describe the budget here"
                      placeholderTextColor={theme.colors.textSecondary}
                      keyboardType="default"
                    />
                    {formikProps.touched.amount &&
                      formikProps.errors.description && (
                        <Text style={textStyles.textError}>
                          {formikProps.errors.description}
                        </Text>
                      )}
                    <TouchableOpacity
                      style={buttonStyle.acceptButton}
                      onPress={() => formikProps.handleSubmit()}
                      disabled={
                        !formikProps.isValid ||
                        formikProps.isSubmitting ||
                        !purchaseInfo
                      }>
                      {formikProps.isSubmitting ? (
                        <ActivityIndicator
                          size="large"
                          color={theme.colors.textPrimary}
                        />
                      ) : (
                        <Text style={textStyles.darkButtonText}>Submit</Text>
                      )}
                    </TouchableOpacity>
                  </View>
                );
              }}
            </Formik>
          </View>
        </ScrollView>
      )}
    </>
  );
};
