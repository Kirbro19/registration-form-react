import React, { useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  Form,
  FormGroup,
  Input,
  Button,
  Label,
  FormFeedback,
  FormText,
} from "reactstrap";

const App = () => {
  // Inputs

  const [surname, setSurname] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");

  // HandleChange

  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  // HandleFocus

  const handleSurnameFocus = () => {
    setSurnameInvalid(false);
    setSurnameValid(false);
  };

  const handleNameFocus = () => {
    setNameInvalid(false);
    setNameValid(false);
  };

  const handlePhoneFocus = () => {
    setPhoneInvalid(false);
    setPhoneValid(false);
  };

  const handleEmailFocus = () => {
    setEmailInvalid(false);
    setEmailValid(false);
  };

  // HandleBlur

  const handleSurnameBlur = () => {
    if (surname.length === 0) {
      setSurnameInvalid(true);
    } else {
      setSurnameValid(true);
    }
  };

  const handleNameBlur = () => {
    if (name.length === 0) {
      setNameInvalid(true);
    } else {
      setNameValid(true);
    }
  };

  const handlePhoneBlur = () => {
    if (phone.length === 0) {
      setPhoneInvalid(true);
    } else {
      setPhoneValid(true);
    }
  };

  const handleEmailBlur = () => {
    if (email.length === 0) {
      setEmailInvalid(true);
    } else {
      setEmailValid(true);
    }
  };

  // Invalid inputs

  const [surnameInvalid, setSurnameInvalid] = useState(false);
  const [nameInvalid, setNameInvalid] = useState(false);
  const [phoneInvalid, setPhoneInvalid] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);

  // Valid inputs

  const [surnameValid, setSurnameValid] = useState(false);
  const [nameValid, setNameValid] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);

  const [wrongSubmit, setWrongSubmit] = useState();

  const handleSubmit = (e) => {
    if (
      surnameValid === true &&
      nameValid === true &&
      phoneValid === true &&
      emailValid === true
    ) {
      alert("Готово");
    } else {
      e.preventDefault()
      setWrongSubmit('Ошибка заполнения!');
    }
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit} className="form">
      <div className="title-block">
        <h1 className="title">Регистрация</h1>
        <h2 className="subtitle">
          Уже есть аккаунт? <a href="#entry">Войти</a>
        </h2>
      </div>

      <FormGroup className="input-block">
        <FormText>Фамилия</FormText>
        <Input
          className="input"
          invalid={surnameInvalid}
          valid={surnameValid}
          onFocus={handleSurnameFocus}
          onBlur={handleSurnameBlur}
          onChange={handleSurnameChange}
          value={surname}
          type="text"
          id="surname"
          name="surname"
          placeholder="Введите фамилию"
        />
        <FormFeedback>Обязательно для заполнения</FormFeedback>
      </FormGroup>

      <FormGroup className="input-block">
        <FormText>Имя</FormText>

        <Input
          className="input"
          invalid={nameInvalid}
          valid={nameValid}
          onFocus={handleNameFocus}
          onBlur={handleNameBlur}
          onChange={handleNameChange}
          value={name}
          type="text"
          id="name"
          name="name"
          placeholder="Введите имя"
        />
        <FormFeedback>Обязательно для заполнения</FormFeedback>
      </FormGroup>

      <FormGroup className="input-block">
        <FormText>Телефон</FormText>
        <Input
          className="input"
          invalid={phoneInvalid}
          valid={phoneValid}
          onFocus={handlePhoneFocus}
          onBlur={handlePhoneBlur}
          onChange={handlePhoneChange}
          value={phone}
          type="tel"
          id="phone"
          name="phone"
          placeholder="Введите номер телефона"
        />
        <FormFeedback>Обязательно для заполнения</FormFeedback>
      </FormGroup>

      <FormGroup className="input-block">
        <FormText>Email</FormText>
        <Input
          className="input"
          invalid={emailInvalid}
          valid={emailValid}
          onFocus={handleEmailFocus}
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={email}
          type="email"
          id="email"
          name="email"
          placeholder="Введите ваш email"
        />
        <FormFeedback>Обязательно для заполнения</FormFeedback>
      </FormGroup>

      <FormGroup className="gender-block">
        <FormText>Ваш пол</FormText>
        <Label className="gender-label">
          <Input className="gender-input" type="radio" name="gender" />
          Мужской
        </Label>
        <Label className="gender-label">
          <Input className="gender-input" type="radio" name="gender" />
          Женский
        </Label>
      </FormGroup>

      <FormGroup>
        <Input
          className="input"
          onChange={handleCountryChange}
          value={country}
          id="select"
          type="select"
          name="countrySelect"
        >
          <option value="unselected">- Выберите страну -</option>
          <option value="russia">Россия</option>
          <option value="ukraine">Украина</option>
          <option value="belarus">Беларусь</option>
          <option value="other">Другая</option>
        </Input>
      </FormGroup>

      <FormGroup className="button-block">
        <Button id="button" type="submit" className="submit-button">
          Отправить
        </Button>
      </FormGroup>
      <div className="wrong-submit">{wrongSubmit}</div>
    </Form>
  );
};

export default App;
