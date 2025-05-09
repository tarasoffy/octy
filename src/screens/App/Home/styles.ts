import { StyleSheet } from 'react-native';
import { goldColor, redColor } from '../../../constants/colors';
import { w } from '../../../styles/scale';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: redColor,
    fontSize: w(16),
    fontWeight: '500',
  },
  noDataText: {
    fontSize: w(15),
  },
  offlineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  offlineBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    backgroundColor: goldColor,
  },
  offlineText: {
    fontSize: w(14),
  }
});
