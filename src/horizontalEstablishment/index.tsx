import React from 'react';
import Colors from '../config/colors';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image';
import {
  Container,
  EstablishmentImageContainer,
  Name,
  DataContainer,
  InfoContainer,
  Info,
  DotSeparator,
} from './styles';
import OverlayImage from '../overlayImage'

interface IItem {
  title: string;
  image: string;
  starCount?: number;
  time?: string;
  value?: string;
  infoData?: any;
}

interface IProps {
  items: IItem[];
  onPress?(selectedValue: any): void;
}

const HorizontalEstablishment = (props: IProps) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{
        width: '100%',
        marginTop: 20,
      }}
      contentContainerStyle={{
        paddingLeft: 30,
      }}
      keyExtractor={item => item.infoData.id}
      data={props.items}
      renderItem={({ item }) => (
        <Container
          mr="20px"
          onPress={() => props.onPress && props.onPress(item.infoData)}
        >
          <EstablishmentImageContainer
            m="10px"
            style={{
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.23,
              shadowRadius: 2.62,
              elevation: 4,
            }}>
            <FastImage
              source={{ uri: item.image }}
              resizeMode="cover"
              style={{
                borderWidth: 1,
                borderColor: '#e4e4e4',
                borderRadius: 10,
                width: '100%',
                height: '100%'
              }}
            />
            {!item.infoData.is_open && <OverlayImage/>}
          </EstablishmentImageContainer>
          <Name textColor={Colors['titles']}>{item.title}</Name>
          {
            item.starCount || item.time || item.value && (
              <InfoContainer mt="5px" dataColor={Colors['secondaryTitle']}>
                {item.starCount && (
                  <DataContainer>
                    <Icon
                      name={'ios-star-outline'}
                      color={Colors['secondaryTitle']}
                      size={16}
                      style={{
                        marginRight: 5,
                      }}
                    />
                    <Info mr="10px">{item.starCount}</Info>
                    <DotSeparator />
                  </DataContainer>
                )}
                {
                  item.time && (
                    <DataContainer>
                      <Icon
                        name={'ios-time-outline'}
                        color={Colors['secondaryTitle']}
                        size={17}
                        style={{
                          marginRight: 5,
                        }}
                      />
                      <Info mr="10px">{item.time}</Info>
                      <DotSeparator />
                    </DataContainer>
                  )
                }
                {
                  item.value && (
                    <DataContainer>
                      <Info mr="10px">{item.value}</Info>
                    </DataContainer>
                  )
                }
              </InfoContainer>
            )
          }
        </Container>
      )}
    >
    </FlatList>
  );
};

export default React.memo(HorizontalEstablishment);
