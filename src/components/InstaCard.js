import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
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
`;

const CardHeader = styled.div`
  flex: 0 0 100%;
  padding: 16px;
`;

const CardImage = styled.div``;

const CardFooter = styled.div`
  flex: 0 0 100%;
  padding: 16px;
`;

const InstaCard = () => (
  <CardWrapper>
    <CardHeader>Header</CardHeader>
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
