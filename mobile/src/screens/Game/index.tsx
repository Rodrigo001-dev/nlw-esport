import { useEffect, useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

import logoImg from '../../assets/logo-nlw-esports.png';

import { Background } from '../../components/Background';
import { Heading } from '../../components/Heading';
import { DuoCard } from '../../components/DuoCard';

import { GameParams } from '../../@types/navigation';

import { THEME } from '../../theme';
import { styles } from './styles';

export function Game() {
  const [duos, setDuos] = useState([]);

  const navigation = useNavigation();

  const route = useRoute();
  // pegando os parâmetros que foram enviados pela rota
  const game = route.params as GameParams;

  function handleGoBack() {
    navigation.goBack();
  };

  useEffect(() => {
    fetch(`http://172.23.195.75:3333/games/${game.id}/ads`)  
      .then(response => response.json())
      .then(data => console.log(data))
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo 
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          <Image 
            source={logoImg}
            style={styles.logo}
          />

          <View style={styles.right} />
        </View>

        <Image 
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode="cover"
        />

        <Heading 
          title={game.title}
          subtitle="Conecte-se e comece a jogar!"
        />

        <DuoCard />

      </SafeAreaView>
    </Background>
  );
}