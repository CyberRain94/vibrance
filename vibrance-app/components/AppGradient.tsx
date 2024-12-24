import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

const AppGradient = ({
  children,
  colors,
}: {
  children: any;
  colors: readonly [string, string, ...string[]];
}) => {
  return (
    <LinearGradient colors={colors} className="flex-1">
      <Content>{children}</Content>
    </LinearGradient>
  );
};

const Content = ({ children }: any) => {
  return <SafeAreaView className="flex-1 px-5 py-3">{children}</SafeAreaView>;
};

export default AppGradient;
