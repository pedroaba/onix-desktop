'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 64 64"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M4 16a6 6 0 0 1 6-6h38c6.627 0 12 5.373 12 12v26a6 6 0 0 1-6 6H16C9.373 54 4 48.627 4 42V16z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M5 16a5 5 0 0 1 5-5h38c6.075 0 11 4.925 11 11v26a5 5 0 0 1-5 5H16C9.925 53 5 48.075 5 42V16z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M5 16a5 5 0 0 1 5-5h38c6.075 0 11 4.925 11 11v26a5 5 0 0 1-5 5H16C9.925 53 5 48.075 5 42V16z"
      />
      <path
        fill="#FEE200"
        d="m3 43 6-6h17.046c.529 0 .954.425.954.954V43l-12 2.75L3 43z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M10.429 48.821 3 51.893V43h6l1.429 5.821z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M27 49.071V43H9v6.143l8.179 1.464L27 49.071z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M27 55v-6H7.68v6.036l11.893 1.107L27 55z"
      />
      <path fill={'url(#' + iconId + '-g)' + ''} d="m9 55-6 2v-8h6v6z" />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="m9 55-.929 2.857L9 61h12l6-6H9z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M9 61H4.129A1.126 1.126 0 0 1 3 59.871V55h6v6z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M47 40a1 1 0 1 1 0 2H29a1 1 0 1 1 0-2h18zm-24-6a1 1 0 1 1 0 2h-6a1 1 0 1 1 0-2h6zm24 0a1 1 0 1 1 0 2H29a1 1 0 1 1 0-2h18zm-24-6a1 1 0 1 1 0 2h-6a1 1 0 1 1 0-2h6zm24 0a1 1 0 1 1 0 2H29a1 1 0 1 1 0-2h18zm-24-6a1 1 0 1 1 0 2h-6a1 1 0 1 1 0-2h6zm24 0a1 1 0 1 1 0 2H29a1 1 0 1 1 0-2h18z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={22.083}
          x2={26.77}
          y1={10}
          y2={54.731}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={20}
          x2={24.157}
          y1={11}
          y2={53.763}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <radialGradient
          id={iconId + '-c'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(28.5 33.25 -42.75 12.4687 22.25 21.938)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={6.714}
          x2={6.714}
          y1={51.893}
          y2={43}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E25A01" />
          <stop offset={0.61} stopColor="#E15801" />
          <stop offset={0.878} stopColor="#E05101" />
          <stop offset={1} stopColor="#DE4A01" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={18}
          x2={18}
          y1={50.607}
          y2={43}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F18C0A" />
          <stop offset={0.437} stopColor="#F0880A" />
          <stop offset={0.868} stopColor="#EC7C0A" />
          <stop offset={1} stopColor="#EB770A" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={17.339}
          x2={17.339}
          y1={56.143}
          y2={49}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D83B01" />
          <stop offset={0.472} stopColor="#D63701" />
          <stop offset={0.937} stopColor="#CE2B01" />
          <stop offset={1} stopColor="#CD2901" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={6}
          x2={6}
          y1={57}
          y2={49}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#BF3207" />
          <stop offset={0.472} stopColor="#BB3207" />
          <stop offset={0.937} stopColor="#AF3007" />
          <stop offset={1} stopColor="#AD3007" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={17.536}
          x2={17.536}
          y1={61}
          y2={55}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#854A81" />
          <stop offset={0.482} stopColor="#82497E" />
          <stop offset={0.812} stopColor="#794475" />
          <stop offset={1} stopColor="#703F6C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={6}
          x2={6}
          y1={61}
          y2={55}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#703D6E" />
          <stop offset={0.631} stopColor="#6C3B6A" />
          <stop offset={1} stopColor="#663764" />
        </linearGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={30}
          x2={38.767}
          y1={22}
          y2={40.703}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A35B98" />
          <stop offset={1} stopColor="#87447D" />
        </linearGradient>
      </defs>
    </svg>
  )
}
