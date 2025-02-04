import { Text as NativeText, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSize.body,
    fontWeight: theme.fontWeight.normal,
  },
  fontSizeSubHead: {
    fontSize: theme.fontSize.subHead,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeight.bold,
  },
});

const Text = ({ fontSize, fontWeight, style, ...props }) => {
  const textStyle = [
    styles.text,
    fontSize === 'subhead' && styles.fontSizeSubHead,
    fontWeight === 'bold' && styles.fontWeightBold,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;
