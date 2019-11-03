import React, { useState } from 'react';
import { Card, Wrapper } from '../styledComponents/utils';

const Generator: React.FC = () => {
  const [formData, setFormData] = useState({
    length: 15,
    hasLower: true,
    hasUpper: true,
    hasNumber: true,
    hasSymbol: true,
    password: ''
  });

  // Copy to clipboard

  const generatePassword = (
    lower: boolean,
    upper: boolean,
    number: boolean,
    symbol: boolean,
    length: number
  ) => {
    let generatedPassword = '';

    const typesCount =
      Number(lower) + Number(upper) + Number(number) + Number(symbol);

    if (typesCount === 0) {
      return '';
    }

    const typesArray = [{ lower }, { upper }, { number }, { symbol }].filter(
      item => Object.values(item)[0]
    );

    for (let i = 0; i < length; i += typesCount) {
      typesArray.forEach(type => {
        const funcName = Object.keys(type)[0];
        generatedPassword += randomFunc[funcName]();
      });
    }

    /**
     * Randomize array element order in-place.
     * Using Durstenfeld shuffle algorithm.
     */
    const tempArray = generatedPassword.split('');
    for (var i = tempArray.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = tempArray[i];
      tempArray[i] = tempArray[j];
      tempArray[j] = temp;
    }
    generatedPassword = tempArray.join('');
    setFormData({ ...formData, password: generatedPassword });
  };

  const getRandomLower = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  };

  const getRandomUpper = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  };

  const getRandomNumber = () => {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  };

  const getRandomSymbol = () => {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
  };

  const randomFunc: { [key: string]: () => string } = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  };

  const handleSubmit: any = (e: any) => {
    e.preventDefault();
    generatePassword(
      formData.hasLower,
      formData.hasUpper,
      formData.hasNumber,
      formData.hasSymbol,
      formData.length
    );
  };

  return (
    <Wrapper>
      <Card>
        <h2>Password Generator</h2>
        <form onSubmit={e => handleSubmit(e)}>
          <div className="result-container">
            <span id="result">
              {formData.password ? formData.password : <i>password</i>}
            </span>
            {/* <button className="btn" id="clipboard">
              <i className="far fa-clipboard"></i>
            </button> */}
          </div>
          <div className="settings">
            <div className="setting">
              <label>Password length</label>
              <input
                onChange={e => handleChange(e)}
                name="length"
                type="number"
                id="length"
                min="4"
                max="20"
                value={formData.length}
              />
            </div>
            <div className="setting">
              <label>Include uppercase letters</label>
              <input
                name="hasUpper"
                type="checkbox"
                id="uppercase"
                checked={formData.hasUpper}
                onChange={e => handleCheckbox(e)}
              />
            </div>
            <div className="setting">
              <label>Include lowercase letters</label>
              <input
                name="hasLower"
                type="checkbox"
                id="lowercase"
                checked={formData.hasLower}
                onChange={e => handleCheckbox(e)}
              />
            </div>
            <div className="setting">
              <label>Include numbers</label>
              <input
                name="hasNumber"
                type="checkbox"
                id="numbers"
                checked={formData.hasNumber}
                onChange={e => handleCheckbox(e)}
              />
            </div>
            <div className="setting">
              <label>Include symbols</label>
              <input
                name="hasSymbol"
                type="checkbox"
                id="symbols"
                checked={formData.hasSymbol}
                onChange={e => handleCheckbox(e)}
              />
            </div>
          </div>
          <button className="btn btn-large" id="generate">
            Generate password
          </button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default Generator;
