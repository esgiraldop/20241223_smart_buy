import React from 'react';
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {RootStackParamList} from '../interfaces';
import {useNavigation} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {IPurchase} from '../interfaces/puchase.interface';
import {PurchasesService} from '../services/purchases.service';
import {buttonStyle, containerStyles, textStyles} from '../styles';
import {ScrollView} from 'react-native-gesture-handler';
import {Formik} from 'formik';
import {priceSchema} from '../schemas/purchases.schema';
import {theme} from '../themes';
import {DropdownCategories} from '../components/common/dropdown-categories.component';
import {categories, stateCategories} from '../data/categories.data';

type CreatePurchaseScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'CreatePurchase'
>;

export interface ICreatePurchaseForm extends Omit<IPurchase, 'id'> {}

export const CreatePurchaseScreen = (): React.JSX.Element => {
  const navigation = useNavigation<CreatePurchaseScreenProp>();

  const onSubmit = async (values: ICreatePurchaseForm) => {
    await PurchasesService.create({
      ...values,
      id: String((await PurchasesService.getAll()).length),
    });
    navigation.goBack();
  };

  const initialValues: ICreatePurchaseForm = {
    name: '',
    amount: 0,
    date: '',
    state: 'Select Category', // Pending | Purchased
    category: 'Select Category',
    description: '',
  };

  return (
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
            console.log('\nformikProps.values: ', formikProps.values);
            console.log('formikProps.isValid: ', formikProps.isValid);
            console.log('formikProps.errors: ', formikProps.errors);
            console.log(
              'formikProps.touched.category: ',
              formikProps.touched.category,
            );
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
                  onBlur={() => formikProps.setFieldTouched('category', true)}
                  placeholder="Select category"
                />
                {formikProps.touched.category && formikProps.errors.state && (
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
                  disabled={!formikProps.isValid || formikProps.isSubmitting}>
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
  );
};
