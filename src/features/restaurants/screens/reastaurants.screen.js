import React from "react";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";
import { SafeAreaView, StatusBar } from "react-native";
import { RestaurantInfoCard } from "../components/reastaurant-info-card.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margintop: ${StatusBar.currentHeight}px;
`;

const SearchContainter = styled.View`
  padding: 16px;
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: blue;
`;

export const RestaurantScreen = () => (
  <SafeArea>
    <SearchContainter>
      <Searchbar />
    </SearchContainter>
    <RestaurantListContainer>
      <RestaurantInfoCard />
    </RestaurantListContainer>
  </SafeArea>
);
