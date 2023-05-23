import { SlideFromRightIOS } from "@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets";
import { ImageBackground } from "react-native";
import axios from "axios";
import React, { Component } from "react";
import { Container, Header, Avatarperfil, Nameperfil, Bioperfil, Stars, Starred, OwnerAvatar, Info, Title, Image } from './styles';

export default class User extends Component {
  state = {
    characters: []
  };

  characters = []


  async componentDidMount() {
    const { route } = this.props;
    const { character } = route.params;
    console.log(character, 'CHARACTERRR');
    const response = await axios.get(` https://rickandmortyapi.com/api/episode/${character.firstEpisodeId}`)

    for (let i = 0; i < response.data.characters.length; i++) {
      let res = await axios.get(response.data.characters[i])
      this.characters.push({
        name: res.data.name,
        image: res.data.image
      })
    }
    this.setState({ characters: this.characters });
  }

  render() {
    const { route } = this.props;
    const { character } = route.params;
    const { characters } = this.state;
    const background = { uri: "https://e0.pxfuel.com/wallpapers/935/344/desktop-wallpaper-rick-and-morty-throughout-the-incredible-rick-and-mor-papel-de-parede-pc-papel-de-parede-do-notebook-de-computador.jpg" }
    return (
      <ImageBackground source={background} resizeMode="cover" style={Image}>
        <Container>
          <Header>
            <Avatarperfil source={{ uri: character.image }} />
            <Nameperfil>{character.name}</Nameperfil>
            <Bioperfil>Personagens que aparecem no primeiro EP de {character.name}</Bioperfil>
          </Header>
          <Stars
            data={characters}
            renderItem={({ item }) => (
              <Starred>
                <OwnerAvatar source={{ uri: item.image }} />
                <Info>
                  <Title>{item.name}</Title>
                </Info>
              </Starred>
            )}
          />
        </Container>
      </ImageBackground>

    );
  }
}