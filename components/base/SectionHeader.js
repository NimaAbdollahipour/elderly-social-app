import { Text, View } from "react-native";
import styles from "../../styles/styles";

const SectionHeader = ({ text }) => {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.boldTextFaded}>{text}</Text>
      <View style={styles.sectionHeaderLine}></View>
    </View>
  );
};

export default SectionHeader;
