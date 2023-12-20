import styled from '@emotion/styled';

export const Container = styled.div`
padding: 0px 0px 0px 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin: 2rem 0 2rem 0;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const CustomBox = styled('Box')`
  padding: 0;
  border: 1px solid #000;
  border-radius: 1px;
  margin-bottom: 10px;
  width: 100%;

  @media (max-width: 600px) {
  padding: 0px 0px 30px 0px; 
  border: 1px solid #000;
  width: 105%;
  }
`;
