import React from "react";
import styled from "styled-components";
import { Card } from "react-native-paper";

const Title = styled.Text`
  padding: 16px;
`;

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
