import { StyleSheet } from "react-native";
import sizes from "./sizes";
import colors from "./colors";

const baseInput = {
  paddingVertical: sizes.smp,
  paddingHorizontal: sizes.lgp,
  borderTopWidth: sizes.tbw,
  borderRadius: sizes.mdbr,
  backgroundColor: colors.input,
  borderColor: colors.inputBorder,
  width: "100%",
};

const baseButtton = {
  paddingVertical: sizes.smp,
  paddingHorizontal: sizes.lgp,
  borderBottomWidth: sizes.tbw,
  borderRadius: sizes.mdbr,
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  gap: sizes.mdg,
  width: "100%",
};

const styles = StyleSheet.create({
  textButton: {
    ...baseButtton,
    borderColor: "transparent",
    justifyContent: "flex-start",
  },
  textButtonPrimary: {
    ...baseButtton,
    backgroundColor: colors.primary,
    borderColor: colors.primaryBorder,
  },
  textButtonSecondary: {
    ...baseButtton,
    backgroundColor: colors.secondary,
    borderColor: colors.secondaryBorder,
  },
  text: {
    color: colors.text,
    fontSize: sizes.smf,
  },
  boldText: {
    color: colors.text,
    fontWeight: "bold",
    fontSize: sizes.smf,
  },
  textAlt: {
    color: colors.altText,
    fontSize: sizes.smf,
  },
  boldTextAlt: {
    color: colors.altText,
    fontWeight: "bold",
    fontSize: sizes.smf,
  },
  textFaded: {
    color: colors.fadedText,
    fontSize: sizes.smf,
  },
  boldTextFaded: {
    color: colors.fadedText,
    fontWeight: "bold",
    fontSize: sizes.smf,
  },
  textPrimary: {
    color: colors.primary,
    fontSize: sizes.smf,
  },
  boldTextPrimary: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: sizes.smf,
  },
  iconButton: {
    padding: sizes.smp,
  },
  heading: {
    fontSize: sizes.lgf,
    fontWeight: "bold",
    color: colors.text,
    flex: 1,
  },
  sectionHeader: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: sizes.mdg,
  },
  sectionHeaderLine: {
    flex: 1,
    backgroundColor: colors.fadedText,
    height: 2,
    borderWidth: 0,
  },
  input: {
    ...baseInput,
  },
  searchInput: {
    ...baseInput,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: sizes.mdg,
  },
  notificationCount: {
    backgroundColor: colors.primary,
    height: 24,
    width: 24,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
});

export default styles;
