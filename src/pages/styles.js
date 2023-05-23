import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Image = styled.View`
  flex: 1;
  justifyContent: center;
`;

export const Container = styled.View`
  height: 100%;
  padding: 30px;
`;

export const Form = styled.View`
    flex-direction: row;
    padding-bottom: 20px;
`;

export const Input = styled.TextInput`
    flex: 1;
    height: 40px;
    background: #F2F5F7;
    border-radius: 4px;
    padding: 0 15px;
    border: 1px solid #F2F5F7;
`;
export const SubmitButton = styled(RectButton)`
    justify-content: center;
    align-items: center;
    background: #393D3F;
    border-radius: 4px;
    margin-left: 10px;
    padding: 0 12px;
    opacity: ${props => (props.loading ? 0.7 : 1)};
`;

export const List = styled.FlatList`
    margin-top: 20px;
`;

export const User = styled.View` 
  width: 400px;
  height: 150px;
  background-color: #393D3F;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const Avatar = styled.Image`
    width: 120px;
    height: 150px;
    border-radius: 4px;
`;

export const Detail = styled.View`
  width: 200px;  
`;

export const Name = styled.Text`
    font-size: 14px;
    color: white;
    font-weight: bold;
    margin-top: 4px;
    margin-left: 5px;
    text-align: left;
`;

export const DetailStatus = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;

export const DetailStatus2 = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const SubTitle = styled.Text`
  font-size: 10px;
  color: grey;
  margin-left: 10px;
`;

export const SubTitle2 = styled.Text`
  font-size: 12px;
  color: white;
  margin-left: 10px;
`;


export const StatusAlive = styled.View`
width: 10px; 
height: 10px;
border-radius: 5px;
background-color: green;
margin-left: 5px;
align-items: center;
`;

export const StatusDeath = styled.View`
width: 10px; 
height: 10px;
border-radius: 5px;
background-color: red;
margin-left: 5px;
align-items: center;
`;



export const ProfileButton = styled(RectButton)`
    margin-top: 5px;
    margin-left: 15px;
    border-radius: 4px;
    background: #3498db;
    justify-content: center;
    align-items: center;
    height: 20px;
    width: 80px;
`;

export const ProfileButtonText = styled.Text`
    font-size: 10px;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
`;

export const Header = styled.View`
  padding-top: 30px;
  align-items: center;
  justify-content: center;
`;

export const Avatarperfil = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: #F2F5F7;
`;

export const Nameperfil = styled.Text`
  font-size: 16px;
  color: #F2F5F7;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;

export const Bioperfil = styled.Text`
  font-size: 15px;
  line-height: 18px;
  color: #F2F5F7;
  margin-top: 5px;
  text-align: center;
`;

export const Stars = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Starred = styled.View`
  background: #1E591C;
  border-radius: 4px;
  padding: 10px 15px;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
`;

export const OwnerAvatar = styled.Image`
  width: 42px;
  height: 42px;
  border-radius: 21px;
  background: #F2F5F7;
`;

export const Info = styled.View`
  margin-left: 10px;
  flex: 1;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 15px;
  font-weight: bold;
  color: #F2F2F2;
`;

export const Author = styled.Text`
  font-size: 13px;
  color: #667;
  margin-top: 2px;
`;