import { useTranslation } from "react-i18next"
import indexBackground from "../assets/img/bg/bg-home.jpg"
import { PageLayout } from "../components/PageLayout"
import { PageTitle } from "../components/PageTitle"
import { HomeCardContainer } from "../components/Home/HomeCardsContainer"

export const Home = () => {
  const { t } = useTranslation()
  return (
    <PageLayout bgImage={indexBackground}>
      <PageTitle text={t("HomeTitle")} />
      <section className="flex flex-col lg:flex-row w-full h-full items-center justify-center">
        <HomeCardContainer />
      </section>
    </PageLayout>
  )
}
