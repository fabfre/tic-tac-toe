import { FC } from "react";
import { NavigatorParamList } from "../../TTTNavigationContainer";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, TextInput, Button } from "react-native";
import TTTHeadline from "../../components/TTTHeadline";

const TTTHomeScreen: FC<NativeStackScreenProps<NavigatorParamList, "home">> = ({
  navigation,
}) => {
  return (
    <View>
      <TTTHeadline text={"Tic Tac Toe"} />
      <Text>Bitte gebe den Namen des 1. Spielers ein:</Text>
      <TextInput style={{ borderWidth: 1, borderColor: "gray", height: 48 }} />
      <Text>Bitte gebe den Namen des 2. Spielers ein:</Text>
      <TextInput style={{ borderWidth: 1, borderColor: "gray", height: 48 }} />
      <Button
        title={"Start Game"}
        onPress={() => navigation.navigate("game")}
      />
    </View>
  );
};

export default TTTHomeScreen;
