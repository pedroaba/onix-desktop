'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 36 36"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M28.969 28.969A3.5 3.5 0 0125.5 32H14C8.477 32 4 27.523 4 22V10.5a3.5 3.5 0 013.031-3.469A3.5 3.5 0 0110.5 4H25a7 7 0 017 7v14.5a3.5 3.5 0 01-3.031 3.469"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M10.5 5A2.5 2.5 0 008 7.5V22a6 6 0 006 6h14.5a2.5 2.5 0 002.5-2.5V11a6 6 0 00-6-6z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M10.5 5A2.5 2.5 0 008 7.5V22a6 6 0 006 6h14.5a2.5 2.5 0 002.5-2.5V11a6 6 0 00-6-6z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M7 8.5q0-.232.03-.456A2.5 2.5 0 005 10.5V22a9 9 0 009 9h11.5a2.5 2.5 0 002.456-2.03q-.225.03-.456.03H14a7 7 0 01-7-7z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M7 8.5q0-.232.03-.456A2.5 2.5 0 005 10.5V22a9 9 0 009 9h11.5a2.5 2.5 0 002.456-2.03q-.225.03-.456.03H14a7 7 0 01-7-7z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M16.473 18.527c-.56.56-1.467.56-2.026 0l-2.027-2.026a1.433 1.433 0 010-2.027l2.027-2.027c.56-.56 1.467-.56 2.026 0l2.027 2.027c.56.56.56 1.467 0 2.027z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M16.473 18.527c-.56.56-1.467.56-2.026 0l-2.027-2.026a1.433 1.433 0 010-2.027l2.027-2.027c.56-.56 1.467-.56 2.026 0l2.027 2.027c.56.56.56 1.467 0 2.027z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M12.42 16.5c.56.56 1.467.56 2.027 0l6.08-6.08c.56-.56 1.467-.56 2.026 0l2.027 2.026c.56.56.56 1.467 0 2.027l-6.08 6.08c-.56.56-1.467.56-2.027 0z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M12.42 16.5c.56.56 1.467.56 2.027 0l6.08-6.08c.56-.56 1.467-.56 2.026 0l2.027 2.026c.56.56.56 1.467 0 2.027l-6.08 6.08c-.56.56-1.467.56-2.027 0z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M14.445 18.526c.56.56 1.467.56 2.027 0l4.054-4.053c.56-.56 1.467-.56 2.027 0l2.027 2.026c.56.56.56 1.468 0 2.027l-4.054 4.054c-.56.56-1.467.56-2.027 0z"
      />
      <path
        fill={'url(#' + iconId + '-k)' + ''}
        d="M14.445 18.526c.56.56 1.467.56 2.027 0l4.054-4.053c.56-.56 1.467-.56 2.027 0l2.027 2.026c.56.56.56 1.468 0 2.027l-4.054 4.054c-.56.56-1.467.56-2.027 0z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={13.042}
          x2={16.812}
          y1={4}
          y2={32.275}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={12.222}
          x2={15.511}
          y1={5}
          y2={31.311}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={12.222}
          x2={15.511}
          y1={5}
          y2={31.311}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={15.46}
          x2={13.169}
          y1={12.027}
          y2={16.922}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8752E0" />
          <stop offset={1} stopColor="#541278" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={16.54}
          x2={14.676}
          y1={15.997}
          y2={14.168}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.122} stopColor="#3D0D59" />
          <stop offset={1} stopColor="#7034B0" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={21.95}
          x2={17.339}
          y1={10}
          y2={21.06}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DB45E0" />
          <stop offset={1} stopColor="#6C0F71" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={21.95}
          x2={17.339}
          y1={10}
          y2={21.06}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DB45E0" />
          <stop offset={0.677} stopColor="#A829AE" />
          <stop offset={1} stopColor="#8F28B3" />
        </linearGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={21.749}
          x2={19.583}
          y1={14.062}
          y2={22.999}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3DCBFF" />
          <stop offset={1} stopColor="#00479E" />
        </linearGradient>
        <linearGradient
          id={iconId + '-k'}
          x1={21.866}
          x2={17.699}
          y1={14.293}
          y2={22.424}
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
          gradientTransform="matrix(13.7222 20.5834 -20.5833 7.71877 13.306 11.77)"
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
          gradientTransform="matrix(13.7222 20.5834 -20.5833 7.71877 13.306 11.77)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
      </defs>
    </svg>
  )
}
