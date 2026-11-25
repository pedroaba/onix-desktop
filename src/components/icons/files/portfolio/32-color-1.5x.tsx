'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 48 48"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M38.807 38.807A4.5 4.5 0 0134.5 42H18c-6.627 0-12-5.373-12-12V13.5a4.5 4.5 0 013.193-4.307A4.5 4.5 0 0113.5 6H33a9 9 0 019 9v19.5a4.5 4.5 0 01-3.193 4.307"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M13.5 7a3.5 3.5 0 00-3.5 3.5V30a8 8 0 008 8h19.5a3.5 3.5 0 003.5-3.5V15a8 8 0 00-8-8z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M13.5 7a3.5 3.5 0 00-3.5 3.5V30a8 8 0 008 8h19.5a3.5 3.5 0 003.5-3.5V15a8 8 0 00-8-8z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="m9 10.5.003-.165A3.5 3.5 0 007 13.5V30c0 6.075 4.925 11 11 11h16.5a3.5 3.5 0 003.165-2.003L37.5 39H18a9 9 0 01-9-9z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="m9 10.5.003-.165A3.5 3.5 0 007 13.5V30c0 6.075 4.925 11 11 11h16.5a3.5 3.5 0 003.165-2.003L37.5 39H18a9 9 0 01-9-9z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M21.538 25.462a2.094 2.094 0 01-2.962 0L15.613 22.5a2.095 2.095 0 010-2.962l2.963-2.963a2.094 2.094 0 012.962 0l2.962 2.963a2.095 2.095 0 010 2.962z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M21.538 25.462a2.094 2.094 0 01-2.962 0L15.613 22.5a2.095 2.095 0 010-2.962l2.963-2.963a2.094 2.094 0 012.962 0l2.962 2.963a2.095 2.095 0 010 2.962z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M15.615 22.5a2.095 2.095 0 002.963 0l8.886-8.886a2.095 2.095 0 012.963 0l2.962 2.962a2.095 2.095 0 010 2.962l-8.887 8.887a2.095 2.095 0 01-2.962 0z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M15.615 22.5a2.095 2.095 0 002.963 0l8.886-8.886a2.095 2.095 0 012.963 0l2.962 2.962a2.095 2.095 0 010 2.962l-8.887 8.887a2.095 2.095 0 01-2.962 0z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M18.574 25.462a2.095 2.095 0 002.962 0l5.925-5.925a2.095 2.095 0 012.962 0l2.963 2.963a2.095 2.095 0 010 2.962l-5.925 5.924a2.095 2.095 0 01-2.962 0z"
      />
      <path
        fill={'url(#' + iconId + '-k)' + ''}
        d="M18.574 25.462a2.095 2.095 0 002.962 0l5.925-5.925a2.095 2.095 0 012.962 0l2.963 2.963a2.095 2.095 0 010 2.962l-5.925 5.924a2.095 2.095 0 01-2.962 0z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={17.625}
          x2={22.472}
          y1={6}
          y2={42.354}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={16.444}
          x2={20.745}
          y1={7}
          y2={41.407}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={16.444}
          x2={20.745}
          y1={7}
          y2={41.407}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={20.057}
          x2={16.708}
          y1={15.962}
          y2={23.115}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8752E0" />
          <stop offset={1} stopColor="#541278" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={21.635}
          x2={18.911}
          y1={21.763}
          y2={19.09}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.122} stopColor="#3D0D59" />
          <stop offset={1} stopColor="#7034B0" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={29.545}
          x2={22.806}
          y1={13}
          y2={29.166}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DB45E0" />
          <stop offset={1} stopColor="#6C0F71" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={29.545}
          x2={22.806}
          y1={13}
          y2={29.166}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DB45E0" />
          <stop offset={0.677} stopColor="#A829AE" />
          <stop offset={1} stopColor="#8F28B3" />
        </linearGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={29.249}
          x2={26.083}
          y1={18.937}
          y2={31.999}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3DCBFF" />
          <stop offset={1} stopColor="#00479E" />
        </linearGradient>
        <linearGradient
          id={iconId + '-k'}
          x1={29.42}
          x2={23.33}
          y1={19.275}
          y2={31.158}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3DCBFF" />
          <stop offset={1} stopColor="#4A40D4" />
        </linearGradient>
        <radialGradient
          id={iconId + '-c'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(17.9444 26.9168 -26.9167 10.0938 17.861 15.854)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <radialGradient
          id={iconId + '-e'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(17.9444 26.9168 -26.9167 10.0938 17.861 15.854)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
      </defs>
    </svg>
  )
}
