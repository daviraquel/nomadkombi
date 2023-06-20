import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { HiLanguage } from "react-icons/hi2"

export const LanguageSelector = () => {
  const { i18n } = useTranslation()
  const [language, setLanguage] = useState(i18n.language)

  const handleLangChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = evt.target.value
    setLanguage(lang)
    i18n.changeLanguage(lang)
  }

  const optionClassName = "text-darkBlue"

  return (
    <div
      className={`relative  group flex items-center justify-center flex-col lg:flex-row
      `}
    >
      <HiLanguage
        className={`absolute lg:relative text-2xl text-white 
        group-hover:text-raspberry transition-all
        left-[30%] top-[50%] translate-y-[-50%]
        lg:left-0 lg:top-0 lg:translate-y-0 lg:text-3xl
        `}
      />
      <select
        className={`bg-transparent cursor-pointer transition-all
        group-hover:text-raspberry
         block w-full py-2 text-white decoration-none text-center leading-[100%] 
         lg:py-0 lg:text-xl lg:flex lg:items-center lg:text-left lg:h-full lg:ease-300`}
        onChange={(event) => handleLangChange(event)}
        value={language}
      >
        <option className={`${optionClassName}`} value="en">
          English
        </option>
        <option className={`${optionClassName}`} value="es">
          Español
        </option>
        <option className={`${optionClassName}`} value="pt">
          Português
        </option>
      </select>
    </div>
  )
}
