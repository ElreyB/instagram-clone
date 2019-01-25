import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';

const CardHeader = styled.div`
  flex: 0 0 100%;
  padding: 7px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
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

const UserHeader = () => (
  <div>
    {' '}
    <CardHeader>
      <Avatar src="https://img.huffingtonpost.com/asset/587d498a1700002e00fdef27.jpeg?ops=scalefit_600_noupscale" />
      <CardTitle>
        <Title>My User Name</Title>
        <SubTitle>My SubTitle</SubTitle>
      </CardTitle>
    </CardHeader>
  </div>
);

export default UserHeader;
