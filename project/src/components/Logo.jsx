import Image from "next/image"
export function Logo(props) {
  return (
          <Image
            className="h-12"
            src="https://zovrus.ru/design/zovrus/images/dist/svg/logo-white.svg"
            alt="Белорусская абрика мебели 'ЗОВ'"
            width={64}
            height={64}
          />

  )
}
