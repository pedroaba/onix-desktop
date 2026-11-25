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
        fill="#035499"
        d="M8.456 3.698A2 2 0 006.937 3H4a2 2 0 00-2 2v9a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2H9.966a.86.86 0 01-.651-.3z"
      />
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M3 8.5A1.5 1.5 0 014.5 7h2.293C7.246 7 7.68 6.82 8 6.5S8.754 6 9.207 6H16a1 1 0 011 1v7a1 1 0 01-1 1H4a1 1 0 01-1-1z"
      />
      <g filter={'url(#' + iconId + '-b)' + ''}>
        <path
          fill="#FAFAFA"
          fillRule="evenodd"
          d="M10.75 8c.69 0 1.25.56 1.25 1.25v4a.75.75 0 01-.75.75h-2C8.56 14 8 13.44 8 12.75v-4A.75.75 0 018.75 8zM9.5 11a.5.5 0 000 1h1a.5.5 0 000-1zm0-2a.5.5 0 000 1h1a.5.5 0 000-1z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={7.308}
          x2={9.177}
          y1={6}
          y2={15.059}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#319EE4" />
          <stop offset={1} stopColor="#1176CA" />
        </linearGradient>
        <filter
          id={iconId + '-b'}
          width={6}
          height={9}
          x={7}
          y={6.5}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={0.5} />
          <feGaussianBlur stdDeviation={0.5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.28 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_11320_2772"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={-0.5} />
          <feGaussianBlur stdDeviation={0.5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
          <feBlend
            in2="effect1_dropShadow_11320_2772"
            result="effect2_dropShadow_11320_2772"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_11320_2772"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
