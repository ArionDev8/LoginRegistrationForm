import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"

const languages = {
    en: { nativeName: "English" },
    alb: { nativeName: "Shqip" },
};

function Profile() {

    const { t, i18n } = useTranslation()
    const { email } = useParams();
    const [user, setUser] = useState(null);
    const [name, setName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem(`user_${email}`));
        setUser(userData)
        setName(userData.name);

    }, [email])

    const changeName = (event) => {
        setName(event.target.value);
    }

    const updateInLocalStorage = () => {
        const updatedUser = { ...user, name };
        localStorage.setItem(`user_${email}`, JSON.stringify(updatedUser));
        setUser(updatedUser)

        navigateToUsers();
    }

    const navigateToUsers = () => {
        navigate('/users');
    }

    const handleLanguageChange = (event) => {
        i18n.changeLanguage(event.target.value);
    };

    if (!user) {
        return <div>Loading...</div>;
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

            <h2>
                {t('userProfile')}
            </h2>

            <label>
                {t('namePlaceholder')}:
                <input type="text" value={name} onChange={changeName} />
            </label>

            <p>Email: {user.email}</p>
            
            <button onClick={updateInLocalStorage}>
                {t('updateBtn')}
            </button>
        </>
    )
}
export default Profile