'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.02344 13C6.45803 13 6 13.4588 6 14.0239V14.7963C6 19.1444 9.26459 22.7297 13.4766 23.2353V25.9766C13.4766 26.5418 13.9348 27 14.5 27C15.0652 27 15.5234 26.5418 15.5234 25.9766V23.2353C19.7354 22.7297 23 19.1444 23 14.7963V14.0235C23 13.4582 22.5418 13 21.9766 13C21.4112 13 20.9531 13.4586 20.9531 14.0237V14.7963C20.9531 18.3602 18.064 21.2494 14.5 21.2494C10.9361 21.2494 8.04688 18.3598 8.04688 14.7959V14.0234C8.04688 13.4582 7.58867 13 7.02344 13Z"
        fill={'url(#' + iconId + '-paint0_linear_378174_9189)' + ''}
      />
      <path
        d="M14.5 2C12.0147 2 10 4.01472 10 6.5V14.5C10 16.9853 12.0147 19 14.5 19C16.9853 19 19 16.9853 19 14.5V6.5C19 4.01472 16.9853 2 14.5 2Z"
        fill={'url(#' + iconId + '-paint1_linear_378174_9189)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_378174_9189'}
          x1={6}
          y1={7.02976}
          x2={15.0905}
          y2={27.8339}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CAD2D9" />
          <stop offset={1} stopColor="#70777D" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint1_linear_378174_9189'}
          x1={7.75}
          y1={-1.86364}
          x2={17.2532}
          y2={28.1132}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0FAFFF" />
          <stop offset={1} stopColor="#CC23D1" />
        </linearGradient>
      </defs>
    </svg>
  )
}
