import styles from "../../styles/styles";
import { Text, View } from "react-native";

const NotificationCount = ({ count }) => {
  return (
    <View style={styles.notificationCount}>
      <Text style={styles.boldTextAlt}>{count <= 9 ? count : "+9"}</Text>
    </View>
  );
};

export default NotificationCount;
