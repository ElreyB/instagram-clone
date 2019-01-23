import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import Image from './Image';

const AvatarWrapper = styled.div`
  vertical-align: middle;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid;
  padding: 2px;
`;

const Avatar = ({ src, border }) => (
  <AvatarWrapper>
    <Image src={src} alt="User Avatar" height="42" width="42" radius="50%" />
  </AvatarWrapper>
);

export default Avatar;
