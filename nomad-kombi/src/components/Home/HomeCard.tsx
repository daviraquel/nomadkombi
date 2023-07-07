import React from "react"
import { Link } from "react-router-dom"

interface IHomeCard extends React.HTMLAttributes<HTMLDivElement> {
  link: string
  title: string
  text: string
  img: string
}

export const HomeCard = ({ link, title, text, img, ...props }: IHomeCard) => {
  return (
    <Link
      className="group flex min-w-[200px] max-w-[200px] items-center flex-col bg-mainBlueOp rounded-xl 
      transition-all duration-300 hover:shadow-normal hover:scale-105"
      to={link}
    >
      <img
        src={img}
        alt="four dogs sitting on the beach"
        className="rounded-xl h-[200px] w-[200px]"
      />
      <div className={`mt-2 mb-4`}>
        <h3 className={`${props.className} text-2xl font-bold`}>{title}</h3>
        <p>{text}</p>
      </div>
    </Link>
  )
}
