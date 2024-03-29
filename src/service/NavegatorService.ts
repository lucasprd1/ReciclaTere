import { StackNavigationProp } from '@react-navigation/stack';
type RootStackParamList = {
    Login: undefined;
  };
type NavegatorService = {
    
    navigation: StackNavigationProp<RootStackParamList>;
}

export default NavegatorService