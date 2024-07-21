import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import { Redirect, router } from "expo-router";
import CustomButton from "../components/CustomButton";
import { useGlobalContext } from "../context/GlobalProvider";

export default function App() {
  const { isLoading, isLoggedIn } = useGlobalContext();
  if (!isLoading && isLoggedIn) return <Redirect href="/home" />;

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full px-4 items-center justify-center h-full">
          <Image
            source={images.logo}
            className="items-center justify-center w-full h-48 mb-80"
            // className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("sign-in")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#FE7B5E" style="light" />
    </SafeAreaView>
  );
}
