import { useTranslation } from "react-i18next"
import indexBackground from "../assets/img/bg/bg-home.jpg"
import { PageLayout } from "../components/PageLayout"
import { PageTitle } from "../components/PageTitle"

export const Crew = () => {
  const { t } = useTranslation()
  return (
    <PageLayout bgImage={indexBackground}>
      <PageTitle text={t("HomeTitle")} noBar />
      <section className="flex flex-col w-full h-full items-center justify-center"></section>
    </PageLayout>
  )
}
