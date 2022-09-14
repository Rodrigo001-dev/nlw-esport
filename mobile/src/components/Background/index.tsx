import { ImageBackground } from 'react-native';

import backgroundImg from '../../assets/background-galaxy.png';

import { styles } from './styles';

interface Props {
  children: React.ReactNode;
};

export function Background({ children }: Props) {
  return (
    <ImageBackground
    // o source sempre vai buscar e recarregar a imagem
      source={backgroundImg}
      // o defaultSource memorizar a imagem padrão e vai a acelerar o
      // carregamento da imagem
      defaultSource={backgroundImg}
      style={styles.container}
    >
      {children}
    </ImageBackground>
  );
}