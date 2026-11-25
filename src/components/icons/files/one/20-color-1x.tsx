'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        fillRule="evenodd"
        d="M5 4a2 2 0 0 1 2-2h6a4 4 0 0 1 4 4v8a2 2 0 0 1-2 2 2 2 0 0 1-2 2H9a6 6 0 0 1-6-6V6a2 2 0 0 1 2-2z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        fillRule="evenodd"
        d="M7 3h6a3 3 0 0 1 3 3v8a1 1 0 0 1-1 1H9a3 3 0 0 1-3-3V4a1 1 0 0 1 1-1zM5 5a1 1 0 0 0-1 1v6a5 5 0 0 0 5 5h4a1 1 0 0 0 1-1H9a4 4 0 0 1-4-4V5z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        fillRule="evenodd"
        d="M7 3h6a3 3 0 0 1 3 3v8a1 1 0 0 1-1 1H9a3 3 0 0 1-3-3V4a1 1 0 0 1 1-1zM5 5a1 1 0 0 0-1 1v6a5 5 0 0 0 5 5h4a1 1 0 0 0 1-1H9a4 4 0 0 1-4-4V5z"
        clipRule="evenodd"
      />
      <rect
        width={9}
        height={9}
        x={1}
        y={10}
        fill={'url(#' + iconId + '-d)' + ''}
        rx={2}
      />
      <rect
        width={9}
        height={9}
        x={1}
        y={10}
        fill={'url(#' + iconId + '-e)' + ''}
        fillOpacity={0.8}
        rx={2}
      />
      <path
        fill="#fff"
        d="M7.752 17H6.614L4.55 13.914a9.961 9.961 0 0 1-.146-.24 2.19 2.19 0 0 1-.091-.175h-.014a21.99 21.99 0 0 1 .014.809V17H3.248v-5h1.215l1.986 2.988c.042.068.083.136.123.206.042.067.08.135.115.202H6.7a4.726 4.726 0 0 1-.01-.258 17.41 17.41 0 0 1-.004-.429V12h1.065v5z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M14 12.273a.728.728 0 0 1-.727.727L11 12.999V12a2.996 2.996 0 0 0-1.343-2.5L14 8.5v3.773z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M11.23 6.86 14 6.75v2.523a.727.727 0 0 1-.727.727H11.23V6.86z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M13.223 5c.429 0 .777.348.777.777v.946a.777.777 0 0 1-.777.777h-.446a.778.778 0 0 0-.777.777v.946a.777.777 0 0 1-.777.777h-.992A2.99 2.99 0 0 0 8 9l.001-2.625c0-.76.616-1.375 1.375-1.375h3.847z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M13.223 5c.429 0 .777.348.777.777v.946a.777.777 0 0 1-.777.777h-.446a.778.778 0 0 0-.777.777v.946a.777.777 0 0 1-.777.777h-.992A2.99 2.99 0 0 0 8 9l.001-2.625c0-.76.616-1.375 1.375-1.375h3.847z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={7.521}
          x2={9.97}
          y1={2}
          y2={18.071}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={7.333}
          x2={9.388}
          y1={3}
          y2={17.089}
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
          gradientTransform="matrix(6.33333 11.0833 -9.5 4.15625 7.833 6.646)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <radialGradient
          id={iconId + '-d'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="rotate(45 -11.571 6.207) scale(12.7279)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.072} stopColor="#AC13EB" />
          <stop offset={0.879} stopColor="#580087" />
        </radialGradient>
        <radialGradient
          id={iconId + '-e'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 6.3 -7.25625 0 5.5 15.4)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.585} stopColor="#841FB0" stopOpacity={0} />
          <stop offset={0.969} stopColor="#D373FC" />
        </radialGradient>
        <radialGradient
          id={iconId + '-f'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(9.51467 0 0 4.67788 13.825 13)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.159} stopColor="#A931D8" />
          <stop offset={0.566} stopColor="#6E1996" />
        </radialGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={15.243}
          x2={11.695}
          y1={8.664}
          y2={7.043}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.217} stopColor="#CA59F7" />
          <stop offset={0.888} stopColor="#691A90" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={14.265}
          x2={8.001}
          y1={6.715}
          y2={6.715}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.807} stopColor="#DE66FF" />
          <stop offset={1} stopColor="#FCB1FF" />
        </linearGradient>
        <radialGradient
          id={iconId + '-i'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-3.01614 5.43829 -8.84963 -5.51456 14.432 4.602)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC7A3" />
          <stop offset={0.831} stopColor="#DE67FD" stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  )
}
