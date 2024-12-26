import {Dimensions, StyleSheet} from 'react-native';
import {theme} from '../themes';

export const containerStyles = StyleSheet.create({
  resetWidthContainer: {
    margin: 0,
    padding: 0,
    width: Dimensions.get('window').width,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.medium,
  },
  containerLightBc: {
    flex: 1,
    backgroundColor: theme.colors.backgroundLight,
    padding: theme.spacing.medium,
  },
  centeredContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
    width: '100%',
  },
  centeredContainerLightBc: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.backgroundLight,
    width: '100%',
  },
  paddedContainer: {
    padding: theme.spacing.medium,
    backgroundColor: theme.colors.background,
  },
  paddedContainerLightBc: {
    padding: theme.spacing.medium,
    backgroundColor: theme.colors.backgroundLight,
  },
  HorVertCenteredContainer: {
    flexGrow: 1, // Ensures content fills the available space
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetweenRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  // Margins
  marginSmall: {
    margin: theme.spacing.small,
  },
  marginMedium: {
    margin: theme.spacing.medium,
  },
  marginLarge: {
    margin: theme.spacing.large,
  },
  marginHuge: {
    margin: theme.spacing.huge,
  },

  // Paddings
  paddingSmall: {
    margin: theme.spacing.small,
  },
  paddingMedium: {
    margin: theme.spacing.medium,
  },
  paddingLarge: {
    margin: theme.spacing.large,
  },
  paddingHuge: {
    margin: theme.spacing.huge,
  },

  //Background colors
  light: {
    backgroundColor: theme.colors.backgroundLight,
  },
  darkLighter: {
    backgroundColor: theme.colors.backgroundLighter,
  },
  greenLoud: {
    backgroundColor: theme.colors.borderColor,
  },
  greenAccent: {
    backgroundColor: theme.colors.accent,
  },

  // Input fields
  inputField: {
    backgroundColor: theme.colors.backgroundLight,
    padding: theme.spacing.small,
    borderRadius: theme.spacing.small,
    width: '95%',
    marginBottom: theme.spacing.medium,
  },
  inputFieldDark: {
    backgroundColor: theme.colors.accent,
    padding: theme.spacing.small,
    borderRadius: theme.spacing.small,
    width: '95%',
    marginBottom: theme.spacing.medium,
  },
  inputFieldDarkThicker: {
    backgroundColor: theme.colors.accent,
    padding: theme.spacing.small,
    borderRadius: theme.spacing.small,
    width: '95%',
    marginBottom: theme.spacing.medium,
    minHeight: 100,
    textAlignVertical: 'top',
  },
  modalCenteredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.transparentDark,
  },
  modalView: {
    backgroundColor: theme.colors.backgroundLight,
    borderRadius: theme.spacing.small,
    padding: theme.spacing.large,
    alignItems: 'center',
    shadowColor: theme.colors.backgroundLight,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%',
  },
  modalSecondaryView: {
    margin: 20,
    backgroundColor: theme.colors.background,
    borderRadius: theme.spacing.small,
    padding: theme.spacing.large,
    alignItems: 'center',
    shadowColor: theme.colors.textPrimary,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
