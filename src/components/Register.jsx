import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"
import { useState } from "react";

const languages = {
  en: { nativeName: "English" },
  alb: { nativeName: "Shqip" },
};

function Register() {
  const { t, i18n } = useTranslation()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const submit = (data) => {
    const existingUser = localStorage.getItem(`user_${data.email}`);
    if (existingUser) {
      console.log("Email already registered");
      setMessage(t('emailTaken'));
      return;
    }

    localStorage.setItem(`user_${data.email}`, JSON.stringify({
      name: data.name,
      email: data.email,
      password: data.pass
    }));
    console.log(JSON.parse(localStorage.getItem(`user_${data.email}`)));
    navigateToUsers();
  };

  const navigateToLogin = (event) => {
    event.preventDefault();
    navigate('/login');
  }

  const navigateToUsers = () => {
    navigate('/users');
  }

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <>
    <div className="dropdown">
        <select onChange={handleLanguageChange} value={i18n.resolvedLanguage}>
          {Object.keys(languages).map((lng) => (
            <option key={lng} value={lng}>
              {languages[lng].nativeName}
            </option>
          ))}
        </select>
      </div>

      <p className="title">
        {t('form')}
      </p>

      <form className="register-form" onSubmit={handleSubmit(submit)}>
        <input type="text" {...register("name", { required: true })} placeholder={t('namePlaceholder')} />
        {errors.name && <span className="notifications">{t('nameMandatory')}</span>}
        <input type="email" {...register("email", { required: true })} placeholder={t('emailPlaceholder')} />
        {errors.email && <span className="notifications">{t('emailMandatory')}</span>}
        {message && <span className="notifications">{message}</span>}
        <input type="password" {...register("pass", { required: true })} placeholder={t('passwordPlaceholder')} />
        {errors.pass && <span className="notifications">{t('passwordMandatory')}</span>}
        <div className="buttons">
          <input className="register-btn" type='submit' value={t('submitButton')} />
          <button onClick={navigateToLogin}>
            {t('logIn')}
          </button>
        </div>
      </form>
      
      <div className="userBtn">
      <button onClick={navigateToUsers}>
        {t('seeUsersBtn')}
      </button>
      </div>
    </>
  )
}
export default Register