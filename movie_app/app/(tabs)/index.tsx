import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F5FCFF",
    }}>
      <Text style={{
        fontSize: 40,
        textAlign: "center",
        margin: 10,
        color: "#333333",
        fontWeight: "bold",
      }}>Welcome!</Text>
      
    </View>
  );
}
