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
        d="M4 4a2 2 0 0 1 2-2h6a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        fillRule="evenodd"
        d="M6 3h6a3 3 0 0 1 3 3v7a1 1 0 0 1-1 1H6a1.99 1.99 0 0 0-1 .268V4a1 1 0 0 1 1-1zM5 16a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1.268A1.99 1.99 0 0 1 14 15H6a1 1 0 0 0-1 1z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        fillRule="evenodd"
        d="M6 3h6a3 3 0 0 1 3 3v7a1 1 0 0 1-1 1H6a1.99 1.99 0 0 0-1 .268V4a1 1 0 0 1 1-1zM5 16a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1.268A1.99 1.99 0 0 1 14 15H6a1 1 0 0 0-1 1z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M13 11.273a.728.728 0 0 1-.727.727L11 11.999V11.5A2.5 2.5 0 0 0 8.5 9H7.358a1.45 1.45 0 0 1 1.096-.5H13v2.773z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M13 8.772a.728.728 0 0 1-.727.728H10.23V6.86L13 6.75v2.022z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M12.222 5c.43 0 .778.348.778.777v.946a.778.778 0 0 1-.778.777h-.445a.778.778 0 0 0-.777.777v.446a.778.778 0 0 1-.778.777h-.227A2.485 2.485 0 0 0 8.5 9H7.001V6.375c0-.76.616-1.375 1.375-1.375h3.846z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M12.222 5c.43 0 .778.348.778.777v.946a.778.778 0 0 1-.778.777h-.445a.778.778 0 0 0-.777.777v.446a.778.778 0 0 1-.778.777h-.227A2.485 2.485 0 0 0 8.5 9H7.001V6.375c0-.76.616-1.375 1.375-1.375h3.846z"
      />
      <rect
        width={9}
        height={9}
        x={1}
        y={10}
        fill={'url(#' + iconId + '-h)' + ''}
        rx={2}
      />
      <rect
        width={9}
        height={9}
        x={1}
        y={10}
        fill={'url(#' + iconId + '-i)' + ''}
        fillOpacity={0.8}
        rx={2}
      />
      <path
        fill="#fff"
        d="M7.752 17H6.614L4.55 13.914a9.961 9.961 0 0 1-.146-.24 2.19 2.19 0 0 1-.091-.175h-.014a21.99 21.99 0 0 1 .014.809V17H3.248v-5h1.215l1.986 2.988c.042.068.083.136.123.206.042.067.08.135.115.202H6.7a4.726 4.726 0 0 1-.01-.258 17.41 17.41 0 0 1-.004-.429V12h1.065v5z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={7.875}
          x2={10.709}
          y1={2}
          y2={17.941}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={7.778}
          x2={10.221}
          y1={3}
          y2={16.961}
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
          gradientTransform="matrix(5.27778 11.0833 -7.91667 4.15625 8.194 6.646)"
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
          gradientTransform="matrix(9.51467 0 0 4.67788 12.825 12)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.159} stopColor="#A931D8" />
          <stop offset={0.566} stopColor="#6E1996" />
        </radialGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={14.243}
          x2={10.695}
          y1={8.664}
          y2={7.043}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.217} stopColor="#CA59F7" />
          <stop offset={0.888} stopColor="#691A90" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={13.265}
          x2={7.001}
          y1={6.715}
          y2={6.715}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.807} stopColor="#DE66FF" />
          <stop offset={1} stopColor="#FCB1FF" />
        </linearGradient>
        <radialGradient
          id={iconId + '-g'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-3.01614 5.43829 -8.84963 -5.51456 13.431 4.602)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC7A3" />
          <stop offset={0.831} stopColor="#DE67FD" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-h'}
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
          id={iconId + '-i'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 6.3 -7.25625 0 5.5 15.4)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.585} stopColor="#841FB0" stopOpacity={0} />
          <stop offset={0.969} stopColor="#D373FC" />
        </radialGradient>
      </defs>
    </svg>
  )
}
