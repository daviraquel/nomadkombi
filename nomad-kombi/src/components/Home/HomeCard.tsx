import React from "react"
import { Link } from "react-router-dom"

interface IHomeCard extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  text: string
  img: string
}

export const HomeCard = ({ title, text, img, ...props }: IHomeCard) => {
  return (
    <Link className="flex flex-col md:flex-row bg-mainBlue" to="/">
      <img src={img} alt="" />
      <div>
        <h3
          className={`${props.className} md:text-2xl lg:text-3xl font-bold mt-4`}
        >
          {title}
        </h3>
        <p>{text}</p>
      </div>
    </Link>
  )
}