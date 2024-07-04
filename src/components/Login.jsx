import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next"
import { useNavigate, Link } from "react-router-dom";

const languages = {
    en: { nativeName: "English" },
    alb: { nativeName: "Shqip" },
};

function Login() {
    const { t, i18n } = useTranslation()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [message, setMessage] = useState('');

    const submit = (data) => {
        const userData = JSON.parse(localStorage.getItem(`user_${data.email}`));
        if (userData) {
            if (userData.password === data.pass) {
                console.log("Success");
                setMessage(t('successfulLogin'));
                setTimeout(() => {
                    navigate('/users');
                }, 1500);
            }
            else {
                console.log("Mismatching credentials");
                setMessage(t('wrongPassword'));
            }
        }
        else {
            console.log("No user found");
            setMessage('invalidUser');
        }
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
                {t('logInTitle')}
            </p>

            <form className="login-form" onSubmit={handleSubmit(submit)}>

                <input type="email" {...register("email", { required: true })} placeholder={t('emailPlaceholder')} />
                {errors.email && <span className="notifications">{t('emailMandatory')}</span>}

                <input type="password" {...register("pass", { required: true })} placeholder={t('passwordPlaceholder')} />
                {errors.pass && <span className="notifications">{t('passwordMandatory')}</span>}

                <input className="login-btn" type="submit" value={t('logInTitle')} />
                
                <Link to='/passwordReset'>
                    {t('forgotPassword')}
                </Link>
                <h2>
                    {message}
                </h2>
            </form>
        </>
    )
}

export default Login