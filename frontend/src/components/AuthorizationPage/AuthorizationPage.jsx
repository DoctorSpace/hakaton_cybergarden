import React, { useState } from "react";
import styled from "styled-components";
import authPic from "../../images/authPic.jpg"

const AuthContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;

  height: 600px;
  gap: 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ImgContent = styled.img`
  width: 100%;
  height: 100%;

  min-height: 400px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const AuthContent = styled.div`
  width: 100%;
  height: 100%;
  min-height: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 20px;
`;

const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const AuthImport = styled.input`
  height: 36px;
  padding-left: 10px;
  width: 200px;
  border-radius: 10px;

  border: 1px solid #2600ff;
  background-color: #fff;

`;

const AuthButton = styled.input`
  cursor: pointer;

  margin: 20px;
  height: 36px;
  padding-left: 10px;
  width: 200px;
  border-radius: 10px;

  color: #fff;

  border: 0;
  background-color: #699BF7;

  &:hover{
    background-color: #85affe;
  }
`;

const RadioContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 10px;
  display: flex;
  gap: 20px;
`;

const RadioInput = styled.input`
  position: fixed;
  opacity: 0;
  pointer-events: none;
`;


const RadioLable = styled.label`
  cursor: pointer;

  height: 42px;
  width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;


  &:hover {
    background-color: #00c3ff55;
  }

  ${RadioInput}:checked {
    background-color: #ff2a00;
  }
`;

const AuthorizationPage = () => {
  const [isRegistration, setIsRegistration] = useState(true);

  const handleRadioChange = () => {
    setIsRegistration(!isRegistration);
  };

  const btnRegistration = () => {
    console.log("Регистрация");
  };

  const btnAuthorization = () => {
    console.log("Аутентификация");
  };

  return (
    <AuthContainer>
      <ImgContent src={authPic}/>
      <AuthContent>
        <h2>{isRegistration ? "Регистрация" : "Аутентификация"}</h2>

        <AuthForm>
          <RadioContainer>
            <div>
              <RadioLable>
                <RadioInput
                  type="radio"
                  value="registration"
                  checked={isRegistration}
                  onChange={handleRadioChange}
                />
                Регистрация
              </RadioLable>
            </div>
            <div>
              <RadioLable>
                <RadioInput
                  type="radio"
                  value="authentication"
                  checked={!isRegistration}
                  onChange={handleRadioChange}
                />
                Аутентификация
              </RadioLable>
            </div>
          </RadioContainer>

          <ContainerInput>
            <label for="email">Почта</label>
            <AuthImport type="email" id="email" name="email" required />
          </ContainerInput>

          <ContainerInput>
            <label for="password">Пароль</label>
            <AuthImport
              type="password"
              id="password"
              name="password"
              required
            />
          </ContainerInput>

          <AuthButton
            type="submit"
            value={isRegistration ? "Зарегистрироваться" : "Войти"}
            onClick={isRegistration ? btnRegistration : btnAuthorization}
          />
        </AuthForm>
      </AuthContent>
    </AuthContainer>
  );
};

export default AuthorizationPage;
