import { Link } from "expo-router";
import { View } from "react-native";
const Login = () => {
  return (
    <View
      style={{
        padding: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Link href="tabs/feed">go to that app</Link>
    </View>
  );
};

export default Login;
