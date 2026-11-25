'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M2 6a2 2 0 0 1 2-2h14a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a4 4 0 0 1-4-4V6z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M3 6a1 1 0 0 1 1-1h14a3 3 0 0 1 3 3v10a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3V6z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 6a1 1 0 0 1 1-1h14a3 3 0 0 1 3 3v10a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3V6z"
      />
      <path
        fill="#FEE200"
        d="M7 9.5 9.5 7h7.103c.22 0 .397.177.397.397V9.5l-5 1.146L7 9.5z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M10.095 11.926 7 13.206V9.5h2.5l.595 2.426z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M17 12.03V9.5H9.5v2.56l3.408.61L17 12.03z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M17 14.5V12H8.95v2.515l4.955.461L17 14.5z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="m9.5 14.5-2.5.833V12h2.5v2.5z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="m9.5 14.5-.387 1.19L9.5 17h5l2.5-2.5H9.5z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M9.5 17H7.47a.47.47 0 0 1-.47-.47V14.5h2.5V17z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={8.458}
          x2={10.193}
          y1={4}
          y2={20.259}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={8}
          x2={9.386}
          y1={5}
          y2={19.254}
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
          gradientTransform="matrix(9.5 11.0833 -14.25 4.15625 8.75 8.646)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={8.548}
          x2={8.548}
          y1={13.205}
          y2={9.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E25A01" />
          <stop offset={0.61} stopColor="#E15801" />
          <stop offset={0.878} stopColor="#E05101" />
          <stop offset={1} stopColor="#DE4A01" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={13.25}
          x2={13.25}
          y1={12.67}
          y2={9.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F18C0A" />
          <stop offset={0.437} stopColor="#F0880A" />
          <stop offset={0.868} stopColor="#EC7C0A" />
          <stop offset={1} stopColor="#EB770A" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={12.975}
          x2={12.975}
          y1={14.976}
          y2={12}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D83B01" />
          <stop offset={0.472} stopColor="#D63701" />
          <stop offset={0.937} stopColor="#CE2B01" />
          <stop offset={1} stopColor="#CD2901" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={8.25}
          x2={8.25}
          y1={15.333}
          y2={12}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#BF3207" />
          <stop offset={0.472} stopColor="#BB3207" />
          <stop offset={0.937} stopColor="#AF3007" />
          <stop offset={1} stopColor="#AD3007" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={13.057}
          x2={13.057}
          y1={17}
          y2={14.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#854A81" />
          <stop offset={0.482} stopColor="#82497E" />
          <stop offset={0.812} stopColor="#794475" />
          <stop offset={1} stopColor="#703F6C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={8.25}
          x2={8.25}
          y1={17}
          y2={14.5}
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
