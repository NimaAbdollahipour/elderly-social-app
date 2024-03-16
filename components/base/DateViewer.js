import styles from "../../styles/styles";
import { checkDate } from "../../utils/dateService";
import { Text } from "react-native";

const DateViewer = ({ date }) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let dateText = date.toISOString().split("T")[0].replaceAll("-", ".");

  if (date.getFullYear() === new Date().getFullYear()) {
    if (checkDate(date)) {
      dateText = checkDate(date);
    } else {
      dateText = months[date.getMonth()] + " " + date.getDate();
    }
  }
  console.log(date);
  return <Text style={styles.textFaded}>{dateText}</Text>;
};

export default DateViewer;
