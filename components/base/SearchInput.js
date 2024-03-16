import { TextInput, View } from "react-native";
import styles from "../../styles/styles";
import colors from "../../styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useRef } from "react";
const SearchInput = ({
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
  const textInput = useRef();
  return (
    <View style={[styles.searchInput, grow && { flex: 1 }]}>
      <TextInput
        onChangeText={handleChangeText}
        multiline={multiline}
        value={value}
        style={{ flex: 1 }}
        onPressIn={onPress}
        onFocus={onFocus}
        placeholder={placeholder}
        ref={textInput}
      />
      <MaterialIcons
        name="search"
        size={24}
        color={colors.fadedText}
        onPress={() => textInput.current.focus()}
      />
    </View>
  );
};

export default SearchInput;
