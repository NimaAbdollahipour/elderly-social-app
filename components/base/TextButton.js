import { TouchableOpacity, Text } from "react-native";
import styles from "../../styles/styles";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../../styles/colors";

const TextButton = ({ text, onPress, disabled, variant, icon, grow }) => {
  let style;
  if (variant === "primary") {
    style = {
      container: styles.textButtonPrimary,
      text: styles.boldTextAlt,
      iconColor: colors.altText,
    };
  } else if (variant === "secondary") {
    style = {
      container: styles.textButtonSecondary,
      text: styles.boldTextAlt,
      iconColor: colors.altText,
    };
  } else if (variant === "only-text") {
    style = {
      container: styles.textButton,
      text: styles.boldText,
      iconColor: colors.text,
    };
  } else {
    style = {
      container: styles.textButton,
      text: styles.boldTextPrimary,
      iconColor: colors.primary,
    };
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        style.container,
        grow && { flex: 1 },
        disabled && { opacity: 0.5 },
      ]}
    >
      {icon && <MaterialIcons name={icon} size={24} color={style.iconColor} />}
      <Text style={style.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;
