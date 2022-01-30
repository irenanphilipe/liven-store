import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border-radius: 20px;
  border: 1px solid #88DAFA;
  height: 100%;

  button{
    border-top: 1px solid #88DAFA;
    border-radius: 0 0 20px 20px;
  }

  img{
    max-height: 200px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }

  div{
    font-family: Arial;
    padding: 1rem;
    height: 100%;
  }
`;