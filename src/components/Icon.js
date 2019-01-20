import React from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import {
  FaRegCompass,
  FaRegHeart,
  FaRegUser,
  FaInstagram,
  FaSearch
} from 'react-icons/fa';

const IconWrapper = styled.div`
  padding-top: 2px;
`;

class Icon extends React.Component {
  static IconWrapper = IconWrapper;
  constructor(props) {
    super(props);
  }
  renderIcon(type) {
    let icon = null;
    switch (type) {
      case 'instagram':
        icon = <FaInstagram />;
        break;
      case 'compass':
        icon = <FaRegCompass />;
        break;
      case 'heart':
        icon = <FaRegHeart />;
        break;
      case 'user':
        icon = <FaRegUser />;
        break;
      case 'search':
        icon = <FaSearch />;
        break;
      default:
        icon = <React.Fragment />;
    }
    return icon;
  }

  render() {
    const { iconName, className } = this.props;
    return (
      <IconContext.Provider
        value={{ size: '24px', className: 'global-class-name' }}
      >
        <IconWrapper>{this.renderIcon(iconName)}</IconWrapper>
      </IconContext.Provider>
    );
  }
}

export default Icon;
