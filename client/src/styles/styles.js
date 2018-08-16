import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%:
  max-width: 1920px;
  height: 100vh;
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
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: auto;
  width: 95%;
  position: relative;
  overflow: auto;
`;
