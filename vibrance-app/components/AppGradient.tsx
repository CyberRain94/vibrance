import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

const AppGradient = ({
  children,
  colors,
}: {
  children: any;
  colors: readonly [string, string, ...string[]];
}) => {
  return (
    <LinearGradient colors={colors} style={styles.container}>
      <Content>{children}</Content>
    </LinearGradient>
  );
};

const Content = ({ children }: any) => {
  return <SafeAreaView className="flex-1 px-5 py-3">{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppGradient;
