// import { StyleSheet, Dimensions } from "react-native";

// // Constants for reusable values
// const COLORS = {
//   white: "#fff",
// };

// const SPACING = {
//   small: 10,
//   medium: 20,
//   large: 40,
// };

// const FONT_SIZE = {
//   small: 18,
//   medium: 24,
//   large: 40,
// };

// const BORDER_RADIUS = {
//   large: 36,
// };

// const { height } = Dimensions.get("window");

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   backgroundImageContainer: {
//     flex: 1,
//     height: height,
//   },
//   logoContainer: {
//     padding: SPACING.large,
//     alignItems: "center",
//     marginTop: 74,
//   },
//   titleContainer: {
//     marginTop: SPACING.large,
//   },
//   titleText: {
//     fontSize: FONT_SIZE.large,
//     textAlign: "center",
//     fontWeight: 800,
//     color: COLORS.white,
//   },
//   titleSubTextContainer: {
//     marginTop: SPACING.medium,
//   },
//   titleSubText: {
//     fontWeight: 300,
//     fontSize: FONT_SIZE.small,
//     textAlign: "center",
//     color: COLORS.white,
//   },
//   buttonPrimary: {
//     backgroundColor: COLORS.white,
//     alignItems: "center",
//     padding: SPACING.medium,
//     borderRadius: BORDER_RADIUS.large,
//     flex: 1,
//   },
//   buttonPrimaryText: {
//     fontSize: FONT_SIZE.small,
//     fontWeight: 300,
//     textAlign: "center",
//   },
//   buttonSecondary: {
//     alignItems: "center",
//     padding: SPACING.medium,
//     borderRadius: BORDER_RADIUS.large,
//     borderWidth: 1,
//     borderColor: COLORS.white,
//     flex: 1,
//   },
//   buttonSecondaryText: {
//     fontSize: FONT_SIZE.small,
//     fontWeight: 300,
//     textAlign: "center",
//     color: COLORS.white,
//   },
//   buttonGroup: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     gap: SPACING.medium,
//     paddingHorizontal: SPACING.medium,
//   },
//   buttonGroupSubText: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     gap: SPACING.small,
//     marginTop: 19,
//   },
// });

// export { styles };



import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    position: 'relative'
  },
  navGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 11
  },
  largeText: {
    fontSize: 40,
    fontWeight: 700,
  },
  smallText: {
    fontSize: 12,
    color: '#7E7B7B'
  },
  placeholderText: {
    fontSize: 18,
    color: '#7E7B7B',
    marginBottom: 7
  },
  inputField: {
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    borderColor: '#7E7B7B',
    paddingHorizontal: 10
  },
  passwordGroup: {
    flexDirection: 'row',
    borderWidth: 1,
    alignItems: 'center',
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 10,
    borderColor: '#7e7b7b'
  },
  formGroup: {
    marginTop: 44
  },
  forgotPasswordText: {
    fontSize: 17,
    marginTop: 9,
    textAlign: 'right',
    color: '#34967C'
  },
  button: {
    backgroundColor: '#2B876E',
    height: 53,
    borderRadius: 10,
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 17,
    color: 'white'
  },
  socialMediaButton: {
    borderWidth: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  socialMediaButtonText: {
    fontSize: 18,
    color: '#0D0D0D',
    fontWeight: 400
  },
  socialMediaButtonGroup: {
    gap: 15,
    marginTop: 25
  },
  dividerGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 29
  },
  divider: {
    borderWidth: 0.5,
    borderColor: "#c2c2c2",
    flex: 1
  },
  dividerText: {
    fontSize: 17,
    color: "#C2C2C2",
  },
  subTextGroup: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 33,
    left: 77,
    right: 76
  },
  subText: {
    fontSize: 18,
    color: '#b5b5b5'
  },
  subTextJoin: {
    fontSize: 18,
    color: '#FFA800',
    fontWeight: 600
  }
});


export {
  styles
}