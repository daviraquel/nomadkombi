import { useTranslation } from "react-i18next"

import underdevBg from "../assets/img/bg/underdev.webp"
import indexBackground from "../assets/img/bg/bg-home.jpg"

import { PageLayout } from "../components/PageLayout"
import { PageTitle } from "../components/PageTitle"

export const UnderConstruction = () => {
  const { t } = useTranslation()
  return (
    <PageLayout>
      <PageTitle text={t("UnderDevTitle")} noBar />
      <section className="flex flex-col w-full h-full items-center justify-center">
        <img
          src={underdevBg}
          alt="page under construction"
          className="max-h-[400px]"
        />
      </section>
    </PageLayout>
  )
}
