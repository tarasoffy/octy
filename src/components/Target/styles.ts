import { StyleSheet } from "react-native"
import { darkGrayColor, grayColor, redColor, whiteColor } from "../../constants/colors"
import { w } from "../../styles/scale"

export const styles = StyleSheet.create({
  item: {
    padding: w(16),
    marginVertical: w(4),
    backgroundColor: whiteColor,
    borderRadius: w(10),
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  target: {
    fontSize: w(16),
    fontWeight: '600',
    color: darkGrayColor
  },
  value: {
    fontSize: w(16),
    color: grayColor
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
});
