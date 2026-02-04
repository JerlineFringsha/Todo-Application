import useTheme, { ColorScheme } from "@/hooks/useTheme";
import { StatusBar, Text, TouchableOpacity } from "react-native";
import { createHomeStyles } from "@/assets/styles/home.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import Header from "@/components/Header";

export default function Index() {
  const {toggleDarkMode,colors, isDarkMode} = useTheme();


  const styles = createHomeStyles(colors);
  return (
    <LinearGradient colors={colors.gradients.background} style={{flex:1}}>
    <StatusBar barStyle={colors.statusBarStyle}/>
    <SafeAreaView
      style={styles.container}
    >
      <Header/>
      <TodoInput/>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text >Toggle to {isDarkMode ? "Light" : "Dark"} Mode</Text>
      </TouchableOpacity>
    </SafeAreaView>
    </LinearGradient>
  );
}


