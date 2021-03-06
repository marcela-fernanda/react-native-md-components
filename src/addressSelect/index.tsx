import React from 'react';
import {Container, Address, AddressContainer} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../config/colors';

interface IProps {
  address: string;
  m?: string;
  onPress?(): void;
}

const AddressSelect = (props: IProps) => {
  return (
    <Container m={props.m} onPress={props.onPress}>
      <Icon name="ios-location-sharp" color={Colors['titles']} size={26} />
      <AddressContainer>
        <Address>{props.address}</Address>
      </AddressContainer>
      <Icon name="chevron-down-outline" color={Colors['titles']} size={30} />
    </Container>
  );
};

export default React.memo(AddressSelect);
