import {StyleSheet} from 'react-native';
import {w} from '../../../styles/scale';
import {darkGrayColor} from '../../../constants/colors';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: w(16),
    color: darkGrayColor,
    textAlign: 'center',
  },
});
