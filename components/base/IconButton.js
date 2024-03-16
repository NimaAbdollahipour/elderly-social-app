import { TouchableOpacity } from "react-native";
import styles from "../../styles/styles";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../../styles/colors";

const IconButton = ({ onPress, disabled, variant, icon, small }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={styles.iconButton}
    >
      <MaterialIcons
        name={icon}
        size={small ? 24 : 32}
        color={
          disabled
            ? colors.fadedText
            : variant === "primary"
            ? colors.primary
            : colors.text
        }
      />
    </TouchableOpacity>
  );
};

export default IconButton;
