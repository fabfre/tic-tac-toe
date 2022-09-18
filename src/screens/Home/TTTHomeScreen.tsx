import { FC, useState } from "react";
import { NavigatorParamList } from "../../TTTNavigationContainer";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  View,
  Text,
  TextInput,
  Button,
  ViewStyle,
  StyleSheet,
} from "react-native";
import TTTHeadline from "../../components/TTTHeadline";
import TTTPlayernameInput from "../../components/TTTPlayernameInput";

const TTTHomeScreen: FC<NativeStackScreenProps<NavigatorParamList, "home">> = ({
  navigation,
}) => {
  const [player1, setPlayer1] = useState("Spieler 1");
  const [player2, setPlayer2] = useState("Spieler 2");

  return (
    <View style={{ paddingHorizontal: 16 }}>
      <TTTHeadline text={"Tic Tac Toe"} />
      <TTTPlayernameInput
        description={"Bitte gebe den Namen des 1. Spielers ein:"}
        value={player1}
        onChangeText={setPlayer1}
      />
      <View style={{ marginTop: 8 }} />
      <TTTPlayernameInput
        description={"Bitte gebe den Namen des 2. Spielers ein:"}
        value={player2}
        onChangeText={setPlayer2}
      />
      <Button
        title={"Start Game"}
        onPress={() => navigation.navigate("game", { player1, player2 })}
      />
    </View>
  );
};

export default TTTHomeScreen;
