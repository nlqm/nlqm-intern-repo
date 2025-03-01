import React from 'react'
import { useTranslation } from "react-i18next"
import Button from "./Button"

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return (
    <div className='text-white m-4'>
        <h2>{t("welcome")}</h2>
        <p>{t("greeting", {name: "Mia"})}</p>
        <Button title="English" onClick={() => changeLanguage("en")} />
        <Button title="Español" onClick={() => changeLanguage("es")} />
    </div>
  )
}

export default LanguageSwitcher