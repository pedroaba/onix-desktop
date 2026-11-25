'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        fillRule="evenodd"
        d="M4 3a2 2 0 0 1 2-2h4.5A3.5 3.5 0 0 1 14 4.5V11a2 2 0 0 1-2 2 2 2 0 0 1-2 2H7.5A5.5 5.5 0 0 1 2 9.5V5a2 2 0 0 1 2-2z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        fillRule="evenodd"
        d="M6 2h4.5A2.5 2.5 0 0 1 13 4.5V11a1 1 0 0 1-1 1H7.5A2.5 2.5 0 0 1 5 9.5V3a1 1 0 0 1 1-1zM4 4a1 1 0 0 0-1 1v4.5A4.5 4.5 0 0 0 7.5 14H10a1 1 0 0 0 1-1H7.5A3.5 3.5 0 0 1 4 9.5V4z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        fillRule="evenodd"
        d="M6 2h4.5A2.5 2.5 0 0 1 13 4.5V11a1 1 0 0 1-1 1H7.5A2.5 2.5 0 0 1 5 9.5V3a1 1 0 0 1 1-1zM4 4a1 1 0 0 0-1 1v4.5A4.5 4.5 0 0 0 7.5 14H10a1 1 0 0 0 1-1H7.5A3.5 3.5 0 0 1 4 9.5V4z"
        clipRule="evenodd"
      />
      <rect
        width={7}
        height={7}
        y={9}
        fill={'url(#' + iconId + '-d)' + ''}
        rx={1.5}
      />
      <rect
        width={7}
        height={7}
        y={9}
        fill={'url(#' + iconId + '-e)' + ''}
        fillOpacity={0.8}
        rx={1.5}
      />
      <path
        fill="#fff"
        d="M5.752 15H4.614L2.55 11.914a9.961 9.961 0 0 1-.146-.24 2.19 2.19 0 0 1-.091-.175h-.014a21.99 21.99 0 0 1 .014.809V15H1.248v-5h1.215l1.986 2.988c.042.068.083.136.123.206.042.067.08.135.115.202H4.7a4.726 4.726 0 0 1-.01-.258 17.41 17.41 0 0 1-.004-.429V10h1.065v5z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M12 10.273a.728.728 0 0 1-.727.727L8 10.999V10.5a2.5 2.5 0 0 0-1.736-2.38 1.453 1.453 0 0 1 1.19-.62L12 6.5v3.773z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="m9.231 4.86 2.77-.11v2.523a.727.727 0 0 1-.728.727H9.23V4.86z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M11.223 3c.429 0 .777.348.777.777v.946a.777.777 0 0 1-.777.777h-.446a.778.778 0 0 0-.777.777v.946A.777.777 0 0 1 9.223 8H7.5c-.322 0-.62.102-.864.274A2.48 2.48 0 0 0 6 8.05l.001-3.675c0-.76.616-1.375 1.375-1.375h3.847z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M11.223 3c.429 0 .777.348.777.777v.946a.777.777 0 0 1-.777.777h-.446a.778.778 0 0 0-.777.777v.946A.777.777 0 0 1 9.223 8H7.5c-.322 0-.62.102-.864.274A2.48 2.48 0 0 0 6 8.05l.001-3.675c0-.76.616-1.375 1.375-1.375h3.847z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={5.875}
          x2={8.06}
          y1={1}
          y2={15.049}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={5.778}
          x2={7.587}
          y1={2}
          y2={14.062}
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
          gradientTransform="matrix(5.27778 9.5 -7.91667 3.5625 6.194 5.125)"
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
          gradientTransform="matrix(7 7 -7 7 0 9)"
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
          gradientTransform="matrix(0 4.9 -5.64375 0 3.5 13.2)"
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
          gradientTransform="matrix(9.51467 0 0 4.67788 11.825 11)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.159} stopColor="#A931D8" />
          <stop offset={0.566} stopColor="#6E1996" />
        </radialGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={13.243}
          x2={9.695}
          y1={6.664}
          y2={5.043}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.217} stopColor="#CA59F7" />
          <stop offset={0.888} stopColor="#691A90" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={12.265}
          x2={6.001}
          y1={4.715}
          y2={4.715}
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
          gradientTransform="matrix(-3.01614 5.43829 -8.84963 -5.51456 12.432 2.602)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC7A3" />
          <stop offset={0.831} stopColor="#DE67FD" stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  )
}
