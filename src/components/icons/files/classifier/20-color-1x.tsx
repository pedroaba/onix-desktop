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
        d="M4 4a2 2 0 0 1 2-2h6a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H8a4 4 0 0 1-4-4V4z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M5 4a1 1 0 0 1 1-1h6a3 3 0 0 1 3 3v10a1 1 0 0 1-1 1H8a3 3 0 0 1-3-3V4z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M5 4a1 1 0 0 1 1-1h6a3 3 0 0 1 3 3v10a1 1 0 0 1-1 1H8a3 3 0 0 1-3-3V4z"
      />
      <path
        fill="#5E438F"
        d="M6.265 11.453a.285.285 0 0 0-.189.094.298.298 0 0 0 .09.465l4.014 1.94a.484.484 0 0 0 .448-.015l3.306-1.866a.125.125 0 0 0 .063-.13.127.127 0 0 0-.033-.069.122.122 0 0 0-.066-.036l-3.497-.698-4.131.315h-.005z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M6.267 11.453a.285.285 0 0 0-.189.094.298.298 0 0 0 .09.465l4.014 1.94a.484.484 0 0 0 .448-.015l3.306-1.866a.129.129 0 0 0 .03-.198.121.121 0 0 0-.066-.037l-3.497-.698-4.131.315h-.005z"
        style={{
          mixBlendMode: 'multiply',
        }}
      />
      <path
        fill="#159CA2"
        d="M13.773 6.755a.395.395 0 0 0 .024-.701c-.083-.048-.18-.064-.275-.048l-7.318 1.15A.24.24 0 0 0 6 7.393v.655a.24.24 0 0 0 .159.226l2.53.899 5.076-2.414.007-.004z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="m13.773 6.755-.026.013-5.056 2.406-2.49 1.18-.041.02a.279.279 0 0 0-.159.252v1.114a.28.28 0 0 1 .258-.279h.004l4.004-.312 3.27-.255.093-.007a.4.4 0 0 0 .368-.4V6.4a.394.394 0 0 1-.225.355z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M13.773 6.755a.395.395 0 0 0 .024-.701c-.083-.048-.18-.064-.275-.048l-7.318 1.15A.24.24 0 0 0 6 7.393v.655a.24.24 0 0 0 .159.226l2.53.899 5.076-2.414.007-.004z"
        style={{
          mixBlendMode: 'multiply',
        }}
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
          gradientTransform="matrix(5.27771 11.08337 -8.06668 3.84122 8.194 6.646)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={12.006}
          x2={6.141}
          y1={12.88}
          y2={10.633}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5E438F" stopOpacity={0} />
          <stop offset={0.99} stopColor="#5E438F" stopOpacity={0.7} />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={6.001}
          x2={13.998}
          y1={9.07}
          y2={9.07}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4AA5E8" />
          <stop offset={1} stopColor="#48E6F3" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={5.989}
          x2={14.093}
          y1={7.126}
          y2={7.849}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#159CA2" stopOpacity={0} />
          <stop offset={0.99} stopColor="#159CA2" stopOpacity={0.8} />
        </linearGradient>
      </defs>
    </svg>
  )
}
