import { TextInput } from "react-native";
import styles from "../../styles/styles";

const Input = ({
  onPress,
  onFocus,
  onChange,
  grow,
  value,
  multiline,
  placeholder,
}) => {
  const handleChangeText = (text) => {
    if (onChange) {
      onChange(text);
    }
  };

  return (
    <TextInput
      onChangeText={handleChangeText}
      multiline={multiline}
      value={value}
      style={[styles.input, grow && { flex: 1 }]}
      onPressIn={onPress}
      onFocus={onFocus}
      placeholder={placeholder}
    />
  );
};

export default Input;
