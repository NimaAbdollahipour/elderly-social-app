import styles from "../../styles/styles";
import { Text } from "react-native";

const TimeViewer = ({ date }) => {
  return (
    <Text style={styles.textFaded}>
      {date.toISOString().split("T")[1].split(".")[0]}
    </Text>
  );
};

export default TimeViewer;
