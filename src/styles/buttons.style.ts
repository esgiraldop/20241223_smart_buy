import {StyleSheet} from 'react-native';
import {theme} from '../themes';

export const buttonStyle = StyleSheet.create({
  buttonPrimary: {
    backgroundColor: theme.colors.accent,
    paddingVertical: theme.spacing.medium,
    paddingHorizontal: theme.spacing.large,
    alignItems: 'center',
    marginVertical: theme.spacing.small,
    borderRadius: theme.spacing.small,
  },

  transactionDetailsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: theme.spacing.medium,
    marginBottom: theme.spacing.small,
    borderRadius: 8,
    backgroundColor: theme.colors.backgroundLight,
    elevation: 1,
    shadowColor: theme.colors.textSecondary,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  roundButton: {
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginRight: 5,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: theme.colors.backgroundLight,
    padding: theme.spacing.medium,
    borderRadius: theme.spacing.small,
    alignItems: 'center',
    marginRight: theme.spacing.small,
  },
  acceptButton: {
    backgroundColor: theme.colors.background,
    padding: theme.spacing.small,
    margin: theme.spacing.small,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 100,
  },
});
