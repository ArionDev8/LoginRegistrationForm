import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const languages = {
    en: { nativeName: "English" },
    alb: { nativeName: "Shqip" },
};

function Users() {
    const { t, i18n } = useTranslation()
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const usersList = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith('user_')) {
                const item = localStorage.getItem(key);

                try {
                    const user = JSON.parse(item);
                    if (user && user.name && user.email) {
                        usersList.push(user);
                    }
                } catch (e) {
                    console.error(`Error parsing JSON for key "${key}":`, e);
                }
            }
        }

        setUsers(usersList);
    }, []);

    const navigateToUserProfile = (email) => {
        navigate(`/profile/${email}`);
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
            <h2>
                {t('users')}
            </h2>
            <table>
                <thead>
                    <tr>
                        <th>
                            {t('namePlaceholder')}
                        </th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td><button className="editButton" onClick={() => navigateToUserProfile(user.email)}>
                                {t('editBtn')}</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
export default Users