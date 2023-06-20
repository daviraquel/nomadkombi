import { Link } from "react-router-dom"

interface IHeaderLink {
  to: string
  label: string
  external?: boolean
}

export const HeaderLink = ({ to, label, external }: IHeaderLink) => {
  const navListItemClassName = `flex items-center flex-col lg:flex-row 
  before:content-[' '] before:block before:bg-white before:h-[2px] before:w-full 
  lg:before:hidden`

  const navLinkClassName = `transition-all hover:text-raspberry 
  block w-full py-2 px-1 text-white decoration-none text-center  
     lg:text-xl lg:flex lg:items-center lg:text-center lg:h-full lg:ease-300`

  return (
    <li className={navListItemClassName}>
      {external ? (
        <a
          href={to}
          className={navLinkClassName}
          target="_blank"
          rel="noreferrer"
        >
          {label}
        </a>
      ) : (
        <Link to={to} className={navLinkClassName}>
          {label}
        </Link>
      )}
    </li>
  )
}
