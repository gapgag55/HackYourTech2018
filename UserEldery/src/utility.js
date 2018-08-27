import styled from 'styled-components';

export const Background = styled.View`
  background-color: #ffffff;
  height: 100%;
`;

export const BackgroundGrey = styled.View`
  background-color: #F9F9F9;
  height: 100%;
`;

export const Wrapper = styled.View`
  padding: 20px;
`;

export const TextHead = styled.Text`
  font-family: Kanit-Medium;
  font-size: 25px;
  color: #000;
`;

export const TextName = styled.Text`
  font-family: Kanit-Regular;
  font-size: 20px;
  color: #000;
  text-align: center;
  margin-top: 20px;
`;

export const TextHeadTransaction = styled.Text`
  color: #fff;
  backgroundColor: #00A950;
  text-align: center;
  font-family: Kanit-Medium;
  padding: 10px 0;
  font-size: 17px;
`;

export const TextItemTransaction = styled.Text`
  font-family: Kanit-Medium;
  font-weight: 400;
  font-size: 20px;
`;

export const TransactionItem = styled.View`
  paddingLeft: 20px;
  paddingRight: 20px;
  flexDirection: row;
  justifyContent: space-between;
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
`;

export const TextInput = styled.TextInput`
  background-color: #EEEEEE;
  padding: 15px;
  border-radius: 3px;
  font-size: 25px;
`;

export const Text = styled.Text`
  color: #000;
  font-size: 30px;
  margin-top: 10px;
`;

export const LabelBlock = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #eee;
  padding: 20px;
`;

export const Label = styled.Text`
  font-family: 'Kanit-Medium';
  font-size: 25px;
  font-weight: 400;
`;

export const LabelDesc = styled.Text`
  font-family: 'Kanit-Medium';
  font-weight: 400;
  font-size: 20px;
  margin-bottom: 20px;
`;

export const ButtonWrapper = styled.View`
  padding: 20px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #00A950;
  border-radius: 20px;
  padding: 10px;
`;

export const ButtonText =  styled.Text`
  font-family: Kanit-Medium;
  font-size: 25px;
  text-align: center;
  color: #fff;
`;

export const AccountTitle = styled.Text`
  font-family: Kanit-Regular;
  text-align: center;
  font-size: 30px;
  padding-bottom: 10px;
`;

export const Card = styled.TouchableOpacity`
  background-color: #F8F8F8;
  border-radius: 5px;
  padding: 20px;
`;

export const CardDesc = styled.Text`
  font-family: Kanit-Regular;
  font-size: 20px;
  text-align: center;
`;

export const CardMoney = styled.Text`
  font-size: 60px;
  font-weight: 400;
  text-align: center;
`;

export const CardButton = styled.View`
  background-color: #CFCFCF;
  border-radius: 5px;
  padding: 5px 20px;
  text-align: center;
  flexDirection: row;
  alignSelf: center;
  margin-top: 20px;
`;

export const CardButtonText = styled.Text`
  font-family: Kanit-Regular;
  font-size: 20px;
  text-align: center;
`;

// Dialog

export const DialogWrapper = styled.TouchableHighlight`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Dialog = styled.View`
  background-color: #fff;
  border-radius: 5px;
  padding: 0;
`;

export const DiaglogTitle = styled.Text`
  font-family: Kanit-Regular;
  font-size: 25px;
  text-align: center;
  padding: 20px;
`;

export const DialogItem = styled.TouchableOpacity`
  border-bottom-color: #eee;
  border-bottom-width: 1px;
  text-align: center;
  margin: 0 auto;
  padding: 20px;
`;