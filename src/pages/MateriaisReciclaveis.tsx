import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Button, FlatList, TextInput, Dimensions, ImageBackground, ScrollView, Animated, Easing, Pressable } from 'react-native';
import {NavegatorService} from '../service/NavegatorService'
import Icon from 'react-native-vector-icons/FontAwesome';

interface Material {
  id: number;
  nome: string;
  descricao: string;
  cor: string;
  imagem: any;
}

const materiaisReciclaveis: Material[] = [
  { id: 1, nome: 'Papel', descricao: 'O papel é reciclado através de um processo que envolve a coleta, separação, trituração e transformação das fibras de celulose em uma nova folha de papel. Após a reciclagem, o papel pode ser utilizado para produzir uma variedade de produtos, incluindo papel higiênico, caderno...', cor: '#f9c2ff', imagem: require('../assets/Img/papel.png') },
  { id: 2, nome: 'Plástico', descricao: 'O plástico é reciclado através de um processo que envolve a coleta, separação por tipo e limpeza dos resíduos plásticos. Em seguida, os plásticos são derretidos e transformados em pequenos grânulos, que podem ser utilizados na fabricação de uma variedade de produtos, como garra...', cor: '#ffe0b2', imagem: require('../assets/Img/plastico.png') },
  { id: 3, nome: 'Vidro', descricao: 'O vidro é reciclado através da coleta e separação por cor. Os vidros são triturados e derretidos em altas temperaturas para formar novos produtos de vidro, como garrafas, potes, copos, e até mesmo em obras de arte e decoração.', cor: '#b2ebf2', imagem: require('../assets/Img/vidro.png') },
  { id: 4, nome: 'Metal', descricao: 'Os metais são reciclados através de um processo que envolve a coleta, separação por tipo (como alumínio e aço), limpeza e fusão dos materiais. Após o derretimento, os metais podem ser moldados em novos produtos, como latas, utensílios domésticos, peças automotivas e estruturas metálicas.', cor: '#c8e6c9', imagem: require('../assets/Img/metal.png') },
  { id: 5, nome: 'Lixo Orgânico', descricao: 'Os resíduos orgânicos são reciclados através da compostagem, um processo natural em que os materiais orgânicos, como restos de alimentos e resíduos de jardim, são decompostos por microorganismos para formar um composto orgânico rico em nutrientes, utilizado como fertilizante natural para o solo.', cor: '#dcedc8', imagem: require('../assets/Img/organico.png') },
  { id: 6, nome: 'Lixos Naturais', descricao: 'Materiais naturais, como madeira e pedra, podem ser reciclados de várias maneiras, incluindo reutilização, compostagem ou reciclagem industrial. A madeira reciclada pode ser utilizada na fabricação de móveis, pisos e estruturas, enquanto a pedra pode ser reutilizada em paisagismo, construção e decoração.', cor: '#c5e1a5', imagem: require('../assets/Img/naturais.png') },
  { id: 7, nome: 'Lixos Eletrônicos', descricao: 'Os equipamentos eletrônicos, como celulares, computadores e TVs, podem ser reciclados para recuperar materiais valiosos, como metais preciosos, plásticos e vidro. Os dispositivos são desmontados, as peças são separadas e os materiais são processados para reutilização na fabricação de novos eletrônicos ou em outras indústrias.', cor: '#ffc107', imagem: require('../assets/Img/eletronicos.png') },
  { id: 8, nome: 'Pilhas e Baterias', descricao: 'As pilhas e baterias são recicladas para evitar a contaminação do meio ambiente por metais pesados ​​e outros materiais tóxicos. Os componentes das pilhas e baterias são separados e processados para recuperar materiais como metal, plástico e componentes eletrônicos. Esses materiais reciclados podem ser reutilizados na fabricação de novas pilhas e baterias ou em outros produtos.', cor: '#f06292', imagem: require('../assets/Img/pilhas_baterias.png') },
];

const larguraTela = Dimensions.get('window').width;
const numColunas = 2;
const larguraItem = (larguraTela - 40) / numColunas;
const alturaItem = 160; 

export default function App(NavegatorService:NavegatorService) {
  const [modalVisivel, setModalVisivel] = useState<boolean>(false); 
  const [materialSelecionado, setMaterialSelecionado] = useState<Material | null>(null); 

  const scaleValue = useState<Animated.Value>(new Animated.Value(0))[0];

  useEffect(() => {
    if (modalVisivel) {
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    }
  }, [modalVisivel]);

  const abrirModal = (material: Material) => {
    setMaterialSelecionado(material);
    setModalVisivel(true);
  };

  const fecharModal = () => {
    setModalVisivel(false);
  };

  const renderItem = ({ item }: { item: Material }) => (
    <TouchableOpacity style={[styles.item, { backgroundColor: 'transparent' }]} onPress={() => abrirModal(item)}>
      <ImageBackground source={item.imagem} style={styles.imagemFundo} resizeMode="cover">
        <Text style={styles.material}>{item.nome}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.containerSuperior}>
        <Text style={styles.textoPrincipal}>O que você gostaria de reciclar hoje?</Text>
        <View style={styles.containerPesquisa}>
          <TouchableOpacity style={styles.botaoPesquisa}>
            <Text style={styles.textoBotaoPesquisa}>🔍</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="Digite seu endereço"
            placeholderTextColor="rgba(0, 0, 0, 0.5)"
          />
        </View>
      </View>
      <ScrollView style={styles.containerInferior}>
        <View style={styles.lista}>
          <View style={styles.coluna}>
            {materiaisReciclaveis.slice(0, 4).map((material) => (
              <TouchableOpacity key={material.id} style={[styles.item, { backgroundColor: 'transparent' }]} onPress={() => abrirModal(material)}>
                <ImageBackground source={material.imagem} style={styles.imagemFundo} resizeMode="cover">
                  <Text style={styles.material}>{material.nome}</Text>
                </ImageBackground>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.coluna}>
            {materiaisReciclaveis.slice(4).map((material) => (
              <TouchableOpacity key={material.id} style={[styles.item, { backgroundColor: 'transparent' }]} onPress={() => abrirModal(material)}>
                <ImageBackground source={material.imagem} style={styles.imagemFundo} resizeMode="cover">
                  <Text style={styles.material}>{material.nome}</Text>
                </ImageBackground>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
      
      {/*Exibir as informações detalhadas do material selecionado */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisivel}
        onRequestClose={fecharModal}
      >
        <View style={styles.centro}>
          <Animated.View style={[styles.modal, { transform: [{ scale: scaleValue }] }]}>
            <Text style={styles.textoModal}>{materialSelecionado?.nome}</Text>
            <ScrollView style={styles.descricaoModal}>
              <Text style={styles.descricaoTexto}>{materialSelecionado?.descricao}</Text>
            </ScrollView>
            <Button title="Fechar" onPress={fecharModal} />
          </Animated.View>
        </View>
      </Modal>
      
      {/* Botão de configuração */}
      <Pressable onPress={() => NavegatorService.navigation.navigate('TelaConfig')} android_ripple={{color: 'dark-green'}}  style={styles.botaoConfig}>
        <Icon name="cog" size={24} color="#000" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerSuperior: {
    backgroundColor: '#BEE1A1',
    padding: 20,
  },
  containerInferior: {
    flex: 1,
    backgroundColor: '#D9EAD3',
  },
  textoPrincipal: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  containerPesquisa: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    marginTop: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: '#000',
    paddingHorizontal: 10,
  },
  botaoPesquisa: {
    padding: 10,
  },
  textoBotaoPesquisa: {
    fontSize: 20,
  },
  lista: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  coluna: {
    flex: 1,
    alignItems: 'center',
  },
  item: {
    width: larguraItem,
    height: alturaItem, 
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  material: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff', 
    textAlign: 'center', 
    position: 'absolute', 
    bottom: 0, 
    width: '100%', 
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    paddingVertical: 5, 
    borderBottomLeftRadius: 10, 
    borderBottomRightRadius: 10, 
  },
  centro: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    elevation: 5,
    maxWidth: 400, 
    maxHeight: 320, 
  },
  textoModal: {
    fontSize: 24,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  descricaoModal: {
    maxHeight: 200,
  },
  descricaoTexto: {
    fontSize: 18,
    textAlign: 'justify',
  },
  imagemFundo: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    borderWidth: 0, 
    borderRadius: 10, 
    backgroundColor: '#4CAF50', 
  },
  botaoConfig: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 50, // Definindo largura igual à altura
    height: 50, // Definindo altura igual à largura
    backgroundColor: '#d3d3d3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});