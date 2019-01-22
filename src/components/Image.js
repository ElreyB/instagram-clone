import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const ImageWrapper = styled.div`
  height: ${props => props.height}px;
  width: ${props => props.width}px;
`;

const ImageContainer = styled.img`
  height: 100%;
  width: 100%;
`;

class Image extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { height, width, alt, src } = this.props;
    return (
      <ImageWrapper height={height} width={width}>
        <ImageContainer src={src} alt={alt} />
      </ImageWrapper>
    );
  }
}

export default Image;
