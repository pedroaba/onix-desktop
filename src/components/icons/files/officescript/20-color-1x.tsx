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
        d="M4 4a2 2 0 0 1 2-2h6a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H5a2 2 0 0 1-1-3.732V4z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        fillRule="evenodd"
        d="M5 17h6.768a1.992 1.992 0 0 1-.268-1c0-.364.097-.706.268-1H5a1 1 0 1 0 0 2zm9 0h-.5a1 1 0 1 1 0-2 .5.5 0 1 0 0-1H5V4a1 1 0 0 1 1-1h6a3 3 0 0 1 3 3v10a1 1 0 0 1-1 1z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        fillRule="evenodd"
        d="M5 17h6.768a1.992 1.992 0 0 1-.268-1c0-.364.097-.706.268-1H5a1 1 0 1 0 0 2zm9 0h-.5a1 1 0 1 1 0-2 .5.5 0 1 0 0-1H5V4a1 1 0 0 1 1-1h6a3 3 0 0 1 3 3v10a1 1 0 0 1-1 1z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M12.5 11a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M12.5 8a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M12.5 5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={7.198}
          x2={9.826}
          y1={2}
          y2={18.013}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={7.056}
          x2={9.288}
          y1={3}
          y2={17.034}
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
          gradientTransform="matrix(5.80556 11.0833 -8.70833 4.15625 7.514 6.646)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={4.5}
          x2={13.635}
          y1={-0.385}
          y2={12.91}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.371} stopColor="#E15C01" />
          <stop offset={0.762} stopColor="#DA4401" />
          <stop offset={0.944} stopColor="#D83B01" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={4.5}
          x2={13.635}
          y1={-0.385}
          y2={12.91}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.371} stopColor="#E15C01" />
          <stop offset={0.762} stopColor="#DA4401" />
          <stop offset={0.944} stopColor="#D83B01" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={4.5}
          x2={13.635}
          y1={-0.385}
          y2={12.91}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.371} stopColor="#E15C01" />
          <stop offset={0.762} stopColor="#DA4401" />
          <stop offset={0.944} stopColor="#D83B01" />
        </linearGradient>
      </defs>
    </svg>
  )
}
