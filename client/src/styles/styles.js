import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1920px;
  height: 100vh;

  transition: all 0.5s ease;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: ${props => props.background};
  flex-wrap: ${props => props.wrap};
  justify-content: ${props => props.justify};
  padding-top: ${props => props.pad};
  padding-bottom: ${props => props.pad};
  padding: ${props => props.padall};
  position: ${props => props.position};
  overflow: ${props => props.overflow};

  ${props =>
    props.styledcolor &&
    css`
      color: white;
      background-color: #3f51b5;
    `};

  ${props =>
    props.innercard &&
    css`
      display: flex;
      margin-left: 5%;
      margin-top: 2%;
      flex-wrap: wrap;
      width: 95%;
      justify-content: flex-start;
    `};

  ${props =>
    props.alignme &&
    css`
      justify-content: center;
      text-align: center;
    `};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.background};
  padding-left: ${props => props.pad};
  padding-right: ${props => props.pad};
  padding-top: ${props => props.padtop};
  justify-content: ${props => props.justify};
  text-align: ${props => props.textalign};
  width: ${props => props.width};
  flex-wrap: ${props => props.wrap};
  height: ${props => props.height};

  ${props =>
    props.styledcolor &&
    css`
      color: snow;
      background-color: #303030;
    `};

  ${props =>
    props.styledlanding &&
    css`
      color: snow;
      background-color: #424242;
    `};

  button {
    outline: none !important;
    /* Removes the outline from material buttons */
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  height: auto;
  width: 100%;
  position: relative;
  overflow: auto;

  ${props =>
    props.styledcolor &&
    css`
      background: #303030;
      height: 100%;
      justify-content: center;
    `};

  ${props =>
    props.styledtemp &&
    css`
      background: #303030;
      color: snow;
      height: 100%;
    `};
`;

export const Button = styled.button`
  width: 200px;
  height: 70px;
  text-align: center;
  margin-bottom: ${props => props.margin};

  /* Ripple */

  border: none;
  border-radius: 2px;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  color: white;
  background-color: #f35d21ad;
  box-shadow: 0 0 4px #999;
  outline: none;

  background-position: center;
  transition: background 0.8s;

  &:hover {
    background: #f35d21f1 radial-gradient(circle, transparent 1%, #f35d21f1 1%)
      center/15000%;
  }
  &:active {
    background-color: #f76e6e;
    background-size: 100%;
    transition: background 0s;
  }
`;

export const LandingRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;

  h1 {
    font-size: 10rem;
  }
`;

export const LandingRender = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  width: 80%;
  height: 35rem;
  background-color: #eeeeee;
  border-radius: 50px;
  text-align: center;
  position: absolute;

  p {
    font-size: 2rem;
  }

  ${props =>
    props.styledinput &&
    css`
      color: snow;
      background-color: #303030;
    `};
`;

export const SignInput = styled.input`
  width: ${props => props.width};
  height: 2.5rem;
  align-self: center;
  margin-top: 2rem;

  ${props =>
    props.inputbutton &&
    css`
      width: 10rem;
      border-radius: 10px;
    `};
`;
