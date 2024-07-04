import { useState } from "react";
import { useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom";

const languages = {
    en: { nativeName: "English" },
    alb: { nativeName: "Shqip" },
};

function PasswordReset() {
    const {t, i18n} = useTranslation();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLanguageChange = (event) => {
        i18n.changeLanguage(event.target.value);
    };

    const changePass = (data) => {
        const user = JSON.parse(localStorage.getItem(`user_${data.emailForVerification}`))
        if(user){
        user.password = data.newPass;
        localStorage.setItem(`user_${data.emailForVerification}`,JSON.stringify(user));
        console.log('Pass changed successfully');
        setMessage(t('successfulPasswordChange'))
        setTimeout(() => {
            navigate('/login');
        },1500);
        }
        else {
            console.log('Error changing password');
            setMessage(t('errorPasswordChange'));
        }
    }

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

            <form className="forgotPassForm" onSubmit={handleSubmit(changePass)}>
                <input type="email" {...register("emailForVerification", { required: true })} placeholder={t('emailPlaceholder')} />
                {errors.emailForVerification && <span className="notifications">{t('emailMandatory')}</span>}

                <input type="password" {...register("newPass", { required: true })} placeholder={t('newPasswordPlaceholder')} />
                {errors.newPass && <span className="notifications">{t('passwordMandatory')}</span>}
                
                <h2>
                    {message}
                </h2>
                
                <input type="submit" value={t('passwordRequest')}></input>
            </form>
        </>
    )
}

export default PasswordReset