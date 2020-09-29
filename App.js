import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Homepage from './src/pages/Homepage';
import Sobre from './src/pages/Sobre';
import InformacaoMenu from './src/pages/InformacaoMenu';
import Doenca from './src/pages/Doenca';
import FatorRisco from './src/pages/FatorRisco';
import PrevencaoMenu from './src/pages/PrevencaoMenu';
import PrevPrimaria from './src/pages/PrevPrimaria';
import PrevSecundaria from './src/pages/PrevSecundaria';
import Rastreamento from './src/pages/Rastreamento';
import DiagPrecoce from './src/pages/DiagPrecoce';
import Birad from './src/pages/Birad';
import Elegibilidade1 from './src/pages/Elegibilidade1';
import NaoElegivel from './src/pages/NaoElegivel';
import Elegibilidade2 from './src/pages/Elegibilidade2';
import Calculadora from './src/pages/Calculadora';
//Inicio do aplicativo

//Criação de uma navegação da forma "Stack"
const navigator = createStackNavigator({
  Homepage: {
    screen: Homepage,
    navigationOptions: ({navigation}) => ({
      //title: "test"
    })
  },
  Sobre: {
    screen: Sobre,
    navigationOptions: ({navigation}) => ({
      title: "Sobre o aplicativo"
    })
  },
  InformacaoMenu: {
    screen: InformacaoMenu,
    navigationOptions: ({navigation}) => ({
      title: "Acesso a informação"
    })
  },
  Doenca: {
    screen: Doenca,
    navigationOptions: ({navigation}) => ({
      title: "Doença"
    })
  },
  FatorRisco: {
    screen: FatorRisco,
    navigationOptions: ({navigation}) => ({
      title: "Fatores de Risco"
    })
  },
  PrevencaoMenu: {
    screen: PrevencaoMenu,
    navigationOptions: ({navigation}) => ({
      title: "Prevenção"
    })
  },
  PrevPrimaria: {
    screen: PrevPrimaria,
    navigationOptions: ({navigation}) => ({
      title: "Prevenção"
    })
  },
  PrevSecundaria: {
    screen: PrevSecundaria,
    navigationOptions: ({navigation}) => ({
      title: "Prevenção"
    })
  },
  Rastreamento: {
    screen: Rastreamento,
    navigationOptions: ({navigation}) => ({
      title: "Prevenção"
    })
  },
  DiagPrecoce: {
    screen: DiagPrecoce,
    navigationOptions: ({navigation}) => ({
      title: "Prevenção"
    })
  },
  Birad: {
    screen: Birad,
    navigationOptions: ({navigation}) => ({
      title: "BI-RADS"
    })
  },
  Elegibilidade1: {
    screen: Elegibilidade1,
    navigationOptions: ({navigation}) => ({
      title: "Elegibilidade"
    })
  },
  NaoElegivel: {
    screen: NaoElegivel,
    navigationOptions: ({navigation}) => ({
      title: "Elegibilidade"
    })
  },
  Elegibilidade2: {
    screen: Elegibilidade2,
    navigationOptions: ({navigation}) => ({
      title: "Elegibilidade"
    })
  },
  Calculadora: {
    screen: Calculadora,
    navigationOptions: ({navigation}) => ({
      title: "Calculadora"
    })
  },
},

{
  initialRouteName: 'Homepage',
  defaultNavigationOptions: {
    title: 'Homepage',
    headerStyle:{
      backgroundColor: "#ffffff"
    }
  }
});

//Export do container para esse navigator
export default createAppContainer(navigator)