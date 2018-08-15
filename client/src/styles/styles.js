import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%:
  max-width: 1920px;
  height: 100vh;
`;

export const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  background-color: ${props => props.background};
  flex-wrap: ${props => props.wrap};
  justify-content: ${props => props.justify};
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
  width: 100%;
  height: auto;
  justify-content: space-around;
  width: 80%;
  align-self: center;
`;

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.background};
  padding: ${props => props.pad};
  justify-content: center;
  text-align: center;

  width: 350px;
  height: 250px;
`;
