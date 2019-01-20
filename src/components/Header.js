import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Icon from './Icon';
// import { FaSlidersH } from 'react-icons/fa';
import { inherits } from 'util';

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  height: ${props => (props.adjustHeight ? '51px' : '77px')};
`;

const HeaderCell = styled.div`
  flex: 0 0 33%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const TitleCell = styled(HeaderCell)`
  position: ${props => (props.showTitle ? 'relative' : 'initial')};
  left: ${props => (props.showTitle ? '-4.4em' : '0')};
  padding-bottom: ${props => (props.showTitle ? '7px' : '0')};
`;

const IconsHeaderCell = styled(HeaderCell)`
  diplay: flex;
  justify-content: space-round;
`;

const Divider = styled.hr`
  display: flex;
  flex-direction: column;
  height: 28px;
  margin: 0 16px;
`;

const Logo = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Satisfy');
  font-family: 'Satisfy', cursive;
  font-size: 26px;
  font-weight: bold;
`;

const Input = styled.input`
  border-radius: 3px;
  color: #999;
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  z-index: 2;
  padding: 3px 30px;
  background-image: url('../mglass.png');
  background-size: 30px 20px;
  background-position: 30% 50%;
  background-repeat: no-repeat;
  background-color: #f4f4f4;
`;

const StyledIcon = styled.div`
  padding: 0 10px;
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isDisplaying: true };
  }
  componentDidMount() {
    window.onscroll = () => {
      if (window.pageYOffset > 53) {
        this.setState({ isDisplaying: false });
      }
      if (window.pageYOffset < 53) {
        this.setState({ isDisplaying: true });
      }
    };
  }

  componentWillUnmount() {
    window.onscroll = null;
  }
  render() {
    const { siteName, className } = this.props;
    const { isDisplaying } = this.state;
    return (
      <HeaderWrapper adjustHeight={!isDisplaying} className={className}>
        <TitleCell showTitle={!isDisplaying}>
          <Icon iconName="instagram" />
          {isDisplaying && (
            <Fragment>
              <Divider />
              <Logo>{siteName}</Logo>
            </Fragment>
          )}
        </TitleCell>
        <HeaderCell>
          <Input placeholder="Search" />
        </HeaderCell>
        <IconsHeaderCell>
          <StyledIcon>
            <Icon iconName="compass" />
          </StyledIcon>
          <StyledIcon>
            <Icon iconName="heart" />
          </StyledIcon>
          <StyledIcon>
            <Icon iconName="user" />
          </StyledIcon>
        </IconsHeaderCell>
      </HeaderWrapper>
    );
  }
}

export default Header;
