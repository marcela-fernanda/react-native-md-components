import styled from 'styled-components/native';
import Colors from '../config/colors';
import Fonts from '../config/fonts';

type TText = {
  size?: string;
}

type TContainer = {
  coupon?: boolean;
}

export const Container = styled.TouchableOpacity<TContainer>`
  width: 100%;
  background-color: white;
  margin: 10px 0;
  border-radius: 10px;
  justify-content: center;
  padding: 12px;
  flex-direction: ${({ coupon }) => coupon ? 'column' : 'row'};
  align-items: center;
`;

export const Text  = styled.Text<TText>`
  margin-left: 10px;
  font-family: ${Fonts.primarySemiBold};
  font-size: ${({ size }) => size ? size : '16px'};
  color: ${Colors['titles']};
  flex: 1;
`
