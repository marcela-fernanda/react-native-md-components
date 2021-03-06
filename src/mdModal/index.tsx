import React from 'react';
import {
  Container,
  ModalTitle,
  ModalHeaderContainer,
  ModalTitleContainer,
  ModalSubtitle,
  CloseIconContainer,
} from './styles';
import {Modal, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../config/colors';

interface IProps {
  modalTitle: string;
  modalSubtitle?: string;
  onRequestClose?(): void;
  children?: any;
  visible?: boolean;
}

const MdModal = (props: IProps) => {
  
  return (
    <Modal visible={props.visible} onRequestClose={props.onRequestClose} transparent>
      <View
        style={{
          backgroundColor: 'rgba(15, 16, 17, 0.6)',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          paddingRight: 30,
          paddingLeft: 30,
        }}>
        <Container>
          <ModalHeaderContainer>
            <ModalTitleContainer>
              <ModalTitle>{props.modalTitle}</ModalTitle>
              {props.modalSubtitle && (
                <ModalSubtitle>{props.modalSubtitle}</ModalSubtitle>
              )}
            </ModalTitleContainer>
            <CloseIconContainer onPress={props.onRequestClose}>
              <Icon name="close" color={Colors['titles']} size={32} />
            </CloseIconContainer>
          </ModalHeaderContainer>
          {props.children}
        </Container>
      </View>
    </Modal>
  );
};

export default MdModal;
