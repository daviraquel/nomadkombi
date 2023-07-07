import React from "react"
import { useTranslation } from "react-i18next"

import { MediaCard } from "./MediaCard"

interface IMediaContentContainer extends React.HTMLAttributes<HTMLDivElement> {}

export const MediaContentContainer = ({ ...props }: IMediaContentContainer) => {
  const partnerImgClassName = "max-h-[100px]"
  const { t } = useTranslation()
  return (
    <div className="w-full text-white">
      <article className="w-[60%] mx-auto my-2 flex justify-center gap-20">
        <MediaCard
          link={"https://www.youtube.com"}
          icon={"youtube"}
          title={t("MediaCard1Title")}
          text={t("MediaCard1Text")}
        />
        <MediaCard
          link={"https://www.instagram.com"}
          icon={"instagram"}
          title={t("MediaCard2Title")}
          text={t("MediaCard2Text")}
        />
      </article>
      {/* <article className="w-[80%] mx-auto">
        <h2 className="font-bold text-xl">{t("Partners")}</h2>
        <div className="flex w-full mt-2 justify-between">
          <img
            src={ad}
            alt="you can place your ad here!"
            className={partnerImgClassName}
          />
          <img
            src={ad}
            alt="you can place your ad here!"
            className={partnerImgClassName}
          />
          <img
            src={ad}
            alt="you can place your ad here!"
            className={partnerImgClassName}
          />
          <img
            src={ad}
            alt="you can place your ad here!"
            className={partnerImgClassName}
          />
          <img
            src={ad}
            alt="you can place your ad here!"
            className={partnerImgClassName}
          />
        </div>
      </article> */}
    </div>
  )
}
