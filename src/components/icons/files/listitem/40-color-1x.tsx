'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M2 10a4 4 0 0 1 4-4h24a8 8 0 0 1 8 8v16a4 4 0 0 1-4 4H10a8 8 0 0 1-8-8V10z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M3 10a3 3 0 0 1 3-3h24a7 7 0 0 1 7 7v16a3 3 0 0 1-3 3H10a7 7 0 0 1-7-7V10z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 10a3 3 0 0 1 3-3h24a7 7 0 0 1 7 7v16a3 3 0 0 1-3 3H10a7 7 0 0 1-7-7V10z"
      />
      <path
        fill="#FEE200"
        d="m1 27 4-4h11.364c.353 0 .636.283.636.636V27l-8 1.833L1 27z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M5.952 30.881 1 32.929V27h4l.952 3.881z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M17 31.048V27H5v4.095l5.452.976L17 31.048z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M17 35v-4H4.12v4.024l7.928.738L17 35z"
      />
      <path fill={'url(#' + iconId + '-g)' + ''} d="m5 35-4 1.333V31h4v4z" />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="m5 35-.62 1.905L5 39h8l4-4H5z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M5 39H1.752A.75.75 0 0 1 1 38.248V35h4v4z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M29.5 25a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1h11zm-15-4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1h4zm15 0a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1h11zm-15-4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1h4zm15 0a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1h11zm-15-4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1h4zm15 0a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1h11z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={13.625}
          x2={16.578}
          y1={6}
          y2={34.472}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={12.444}
          x2={14.976}
          y1={7}
          y2={33.48}
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
          gradientTransform="matrix(17.9444 20.5833 -26.9167 7.71875 13.861 13.77)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={3.476}
          x2={3.476}
          y1={32.929}
          y2={27}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E25A01" />
          <stop offset={0.61} stopColor="#E15801" />
          <stop offset={0.878} stopColor="#E05101" />
          <stop offset={1} stopColor="#DE4A01" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={11}
          x2={11}
          y1={32.071}
          y2={27}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F18C0A" />
          <stop offset={0.437} stopColor="#F0880A" />
          <stop offset={0.868} stopColor="#EC7C0A" />
          <stop offset={1} stopColor="#EB770A" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={10.56}
          x2={10.56}
          y1={35.762}
          y2={31}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D83B01" />
          <stop offset={0.472} stopColor="#D63701" />
          <stop offset={0.937} stopColor="#CE2B01" />
          <stop offset={1} stopColor="#CD2901" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={3}
          x2={3}
          y1={36.333}
          y2={31}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#BF3207" />
          <stop offset={0.472} stopColor="#BB3207" />
          <stop offset={0.937} stopColor="#AF3007" />
          <stop offset={1} stopColor="#AD3007" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={10.69}
          x2={10.69}
          y1={39}
          y2={35}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#854A81" />
          <stop offset={0.482} stopColor="#82497E" />
          <stop offset={0.812} stopColor="#794475" />
          <stop offset={1} stopColor="#703F6C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={3}
          x2={3}
          y1={39}
          y2={35}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#703D6E" />
          <stop offset={0.631} stopColor="#6C3B6A" />
          <stop offset={1} stopColor="#663764" />
        </linearGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={18.75}
          x2={24.591}
          y1={13}
          y2={24.981}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A35B98" />
          <stop offset={1} stopColor="#87447D" />
        </linearGradient>
      </defs>
    </svg>
  )
}
