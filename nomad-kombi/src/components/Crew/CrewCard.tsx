import React from "react"
import { useTranslation } from "react-i18next"

interface ICrewCard extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  title: string
  text: string
  img1: string
  img2: string
  index: string
}

export const CrewCard = ({
  name,
  title,
  text,
  img1,
  img2,
  index,
  ...props
}: ICrewCard) => {
  const { t } = useTranslation()
  const borderRadius = "h-full max-h-[300px]"

  const divClassName =
    "px-4 max-h-[300px] md:max-h-[200px] lg:max-h-[300px] overflow-y-auto"
  const liClassName = "text-left text-xl"

  const imgClassName = ` object-contain  h-full max-h-[300px] md:max-h-[200px] lg:max-h-[300px] md:rounded-l-${borderRadius}`
  const img1ClassName = `${imgClassName} md:rounded-l-[60px]`
  const img2ClassName = `${imgClassName} md:rounded-r-[60px]`
  // const imgClassName = "h-full max-h-[300px] rounded-l-[30px]"
  return (
    <article
      className={`${props.className} md:rounded-full flex flex-col md:flex-row bg-mainBlueOp text-white text-justify`}
    >
      <img
        src={img1}
        alt={`${name}, the crew's ${title}`}
        className={img1ClassName}
      />
      <div className={`${divClassName}`}>
        <h3 className={`md:text-2xl lg:text-3xl font-bold my-4`}>
          {name}, the <span>{title}</span>
        </h3>
        <p className="text-justify">{text}</p>
      </div>
      <div
        className={`bg-white md:my-auto mx-auto mt-4
        min-h-[2px] md:min-h-[180px] lg:min-h-[250px]
       min-w-[250px] md:min-w-[2px]`}
      ></div>
      <div className={`${divClassName} md:min-w-[28%]`}>
        <h3 className={`md:text-2xl lg:text-3xl font-bold my-4`}>
          {t("CrewListTitle")}
        </h3>
        <ul className="list-disc pl-4">
          <li className={liClassName}> {t(`CrewItem1${index}`)}</li>
          <li className={liClassName}>{t(`CrewItem2${index}`)}</li>
          <li className={liClassName}>{t(`CrewItem3${index}`)}</li>
          <li className={liClassName}>{t(`CrewItem4${index}`)}</li>
          {/* <li className={liClassName}>{t(`CrewItem5${index}`)}</li> */}
        </ul>
      </div>
      <img
        src={img2}
        alt={`${name}, the crew's ${title}`}
        className={img2ClassName}
      />
    </article>
  )
}
