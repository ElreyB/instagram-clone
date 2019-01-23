import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';
import Icon from './Icon';
import Image from './Image';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border: 1px solid #000;
  width: 616px:
  height: 917px;
  border-radius: 6px;
  margin-bottom: 60px;
`;

const CardHeader = styled.div`
  flex: 0 0 100%;
  padding: 7px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const CardImage = styled.div``;

const CardFooter = styled.div`
  flex: 0 0 100%;
  padding: 16px;
`;

const CardTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 10px;
`;

const Title = styled.p`
  font-weight: bold;
  margin: 0;
  padding-bottom: 2px;
`;
const SubTitle = styled.p`
  margin: 0;
  padding-top: 2px;
`;

const InstaCard = () => (
  <CardWrapper>
    <CardHeader>
      <Avatar src="https://img.huffingtonpost.com/asset/587d498a1700002e00fdef27.jpeg?ops=scalefit_600_noupscale" />
      <CardTitle>
        <Title>My User Name</Title>
        <SubTitle>My SubTitle</SubTitle>
      </CardTitle>
    </CardHeader>
    <CardImage>
      <Image
        src="https://img.huffingtonpost.com/asset/587d498a1700002e00fdef27.jpeg?ops=scalefit_600_noupscale"
        height={901}
        width={600}
      />
    </CardImage>
    <CardFooter>Footer</CardFooter>
  </CardWrapper>
);

export default InstaCard;
