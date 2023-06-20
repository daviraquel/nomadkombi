import React from "react"

interface IPageTitle extends React.HTMLAttributes<HTMLElement> {
  text: string
  noBar?: boolean
  noShadow?: boolean
}

export const PageTitle = ({ text, noBar, noShadow, ...props }: IPageTitle) => {
  return (
    <h1 className={`${props.className} md:text-2xl lg:text-3xl font-bold mt-4`}>
      {text}
    </h1>
  )
}
