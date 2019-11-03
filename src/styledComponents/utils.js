import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  min-height: 100vh;
  background-image: linear-gradient(
    135deg,
    rgb(24, 42, 115) 0%,
    rgb(33, 138, 174) 69%,
    rgb(32, 167, 172) 89%
  );
`;

export const Card = styled.div`
  i {
    font-weight: lighter;
    color: rgb(33, 138, 174);
  }

  h2 {
    margin: 10px 0 20px;
    text-align: center;
  }

  input[type='checkbox'] {
    margin-right: 0;
  }

  box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.2);

  border: 1px solid black;
  padding: 20px;
  width: 350px;
  max-width: 100%;

  .result-container {
    background-color: rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    font-size: 18px;
    letter-spacing: 1px;
    padding: 12px 10px;
    height: 50px;
    width: 100%;
  }

  .result-container #result {
    word-wrap: break-word;
    max-width: calc(100% - 40px);
  }

  .result-container .btn {
    font-size: 20px;
    position: absolute;
    top: 5px;
    right: 5px;
    height: 40px;
    width: 40px;
  }

  .btn {
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    padding: 8px 12px;
    background-color: #3b3b98;
  }

  .btn-large {
    display: block;
    width: 100%;
  }

  .setting {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0;
  }

  @media screen and (max-width: 400px) {
    .result-container {
      font-size: 14px;
    }
  }

  background-color: white;
`;
