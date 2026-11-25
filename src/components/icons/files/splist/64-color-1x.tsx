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
        d="M19 25.25 25.25 19h17.757a.99.99 0 0 1 .993.993v5.257l-12.5 2.865L19 25.25z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M26.738 31.314 19 34.514V25.25h6.25l1.488 6.064z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M44 31.574V25.25H25.25v6.399l8.52 1.525 10.23-1.6z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M44 37.75V31.5H23.873v6.287l12.389 1.154L44 37.75z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M25.25 37.75 19 39.833V31.5h6.25v6.25z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="m25.25 37.75-.967 2.976L25.25 44h12.5L44 37.75H25.25z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M25.25 44h-5.074A1.173 1.173 0 0 1 19 42.824V37.75h6.25V44z"
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
          x1={22.869}
          x2={22.869}
          y1={34.513}
          y2={25.25}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E25A01" />
          <stop offset={0.61} stopColor="#E15801" />
          <stop offset={0.878} stopColor="#E05101" />
          <stop offset={1} stopColor="#DE4A01" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={34.625}
          x2={34.625}
          y1={33.174}
          y2={25.25}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F18C0A" />
          <stop offset={0.437} stopColor="#F0880A" />
          <stop offset={0.868} stopColor="#EC7C0A" />
          <stop offset={1} stopColor="#EB770A" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={33.937}
          x2={33.937}
          y1={38.941}
          y2={31.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D83B01" />
          <stop offset={0.472} stopColor="#D63701" />
          <stop offset={0.937} stopColor="#CE2B01" />
          <stop offset={1} stopColor="#CD2901" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={22.125}
          x2={22.125}
          y1={39.833}
          y2={31.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#BF3207" />
          <stop offset={0.472} stopColor="#BB3207" />
          <stop offset={0.937} stopColor="#AF3007" />
          <stop offset={1} stopColor="#AD3007" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={34.141}
          x2={34.141}
          y1={44}
          y2={37.75}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#854A81" />
          <stop offset={0.482} stopColor="#82497E" />
          <stop offset={0.812} stopColor="#794475" />
          <stop offset={1} stopColor="#703F6C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={22.125}
          x2={22.125}
          y1={44}
          y2={37.75}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#703D6E" />
          <stop offset={0.631} stopColor="#6C3B6A" />
          <stop offset={1} stopColor="#663764" />
        </linearGradient>
      </defs>
    </svg>
  )
}
