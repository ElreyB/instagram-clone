import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { device } from './breakpoints';
import Header from './components/Header';
import Image from './components/Image';
import InstaCard from './components/InstaCard';
import UserHeader from './components/UserHeader';
import InstaStories from './components/InstaStories';

const ContentWrapper = styled.div`
  margin: 0;
`;

const MainWrapper = styled.section`
  display: flex;
  flex-flow: row nowrap;
  width: 935px;
  margin: 0;
  padding-top: 137px;

  mobile tablet
  @media ${device.tablet} {
    margin: 0 120px;
  }

  //desktop
  @media ${device.laptop} {
    margin: 0 480px;
  }
`;

const InstaCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 27px;
  border: 2px solid red;
`;
const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 293px;
  border: 2px solid blue;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

class App extends Component {
  render() {
    return (
      <ContentWrapper>
        <Header siteName="Instagram" />
        <MainWrapper>
          <InstaCardsContainer>
            <InstaCard />
            <InstaCard />
          </InstaCardsContainer>
          <UserInfoContainer>
            <UserHeader />
            <InstaStories />
          </UserInfoContainer>
        </MainWrapper>
      </ContentWrapper>
    );
  }
}

export default App;
