import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

i18next.
    use(initReactI18next).
    use(LanguageDetector).init({
        // debug: true,
        fallbackLng: 'en',
        resources: {
            en: {
                translation: {
                    form: 'Registration Form',
                    logIn: 'Login',
                    namePlaceholder: 'Name',
                    emailPlaceholder: 'Email',
                    passwordPlaceholder: 'Password',
                    newPasswordPlaceholder: 'New Password',
                    submitButton: 'Register',
                    seeUsersBtn: 'See Users',
                    logInTitle: 'Log In',
                    userProfile: 'User Profile',
                    users: 'All Users',
                    updateBtn: 'Update',
                    editBtn: 'Edit',
                    forgotPassword: 'Forgot Password?',
                    passwordRequest: 'Change Password',
                    nameMandatory: 'Name is mandatory',
                    emailMandatory: 'Email is mandatory',
                    passwordMandatory: 'Password is mandatory',
                    successfulLogin: 'Successfully logged in',
                    wrongPassword: 'Mismatching credentials',
                    invalidUser: 'User not found',
                    successfulPasswordChange: 'Password changed successfully',
                    errorPasswordChange: 'Error changing password. User does not exist',
                    emailTaken: 'Email already taken',
                }
            },
            alb: {
                translation:{
                    form: 'Forme Regjistrimi',
                    logIn: 'Logohu',
                    namePlaceholder: 'Emri',
                    emailPlaceholder: 'Email',
                    passwordPlaceholder: 'Fjalekalimi',
                    newPasswordPlaceholder: 'Fjalekalimi i ri',
                    submitButton: 'Regjistrohu',
                    seeUsersBtn: 'Shiko Perdoruesit',
                    logInTitle: 'Logohu',
                    userProfile: 'Profili i perdoruesit',
                    users: 'Te gjithe perdoruesit',
                    updateBtn: 'Perditeso',
                    editBtn: 'Modifiko',
                    forgotPassword: 'Harruat fjalekalimin?',
                    passwordRequest: 'Ndrysho fjalekalimin',
                    emailMandatory: 'Email i detyrueshem',
                    passwordMandatory: 'Password i detyrueshem',
                    successfulLogin: 'Login i kryer me sukses',
                    wrongPassword: 'Password i gabuar',
                    invalidUser: 'Perdoruesi me kete adrese emaili nuk u gjet',
                    successfulPasswordChange: 'Fjalekalimi u ndryshua me sukses',
                    errorPasswordChange: 'Fjalekalimi nuk u ndryshua! Perdoruesi me kete adrese emaili nuk u gjet!',
                    emailTaken: 'Adrese emaili e perdorur me pare',
                }
            }
        }
    });
export default i18next;