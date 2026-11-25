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
        d="M2 9.5A3.5 3.5 0 015.5 6H27a7 7 0 017 7v13.5a3.5 3.5 0 01-3.5 3.5H9a7 7 0 01-7-7z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M3 9.5A2.5 2.5 0 015.5 7H27a6 6 0 016 6v13.5a2.5 2.5 0 01-2.5 2.5H9a6 6 0 01-6-6z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 9.5A2.5 2.5 0 015.5 7H27a6 6 0 016 6v13.5a2.5 2.5 0 01-2.5 2.5H9a6 6 0 01-6-6z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M20.285 10.002a2.285 2.285 0 012.285 2.285h.572c.946 0 1.713.767 1.713 1.714v1.143a2.86 2.86 0 01-2.42 2.823 4.58 4.58 0 01-3.864 3.426v1.177h1.714a2.285 2.285 0 012.285 2.285v.576a.57.57 0 01-.571.571h-7.998L14 26.001v-2.652a2.28 2.28 0 011.715-.779h1.714v-1.177a4.58 4.58 0 01-3.864-3.426 2.86 2.86 0 01-2.423-2.823V14c0-.947.767-1.714 1.713-1.714h.575a2.285 2.285 0 012.285-2.285zm-7.43 3.428a.57.57 0 00-.57.571v1.143c0 .745.478 1.38 1.145 1.616v-3.33zm9.715 0v3.33a1.715 1.715 0 001.143-1.616V14a.57.57 0 00-.571-.571z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M13 20.67v13.66c0 .37-.3.67-.67.67H8V20.67c0-.37.3-.67.67-.67h3.66c.37 0 .67.3.67.67"
      />
      <path
        fill="#000"
        fillOpacity={0.5}
        fillRule="evenodd"
        d="M10 25.02A1.01 1.01 0 009 24l-3.643.438v10.125L9.571 35H10z"
        clipRule="evenodd"
        opacity={0.25}
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M9.5 24.667V35h-5V24.67c0-.37.3-.67.67-.67h3.663c.369 0 .667.299.667.667"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M1 28.67v5.66c0 .37.3.67.67.67H6v-6.33c0-.37-.3-.67-.67-.67H1.67c-.37 0-.67.3-.67.67"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={12.333}
          x2={14.776}
          y1={6}
          y2={30.422}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={11.333}
          x2={13.389}
          y1={7}
          y2={29.423}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={11.142}
          x2={26.953}
          y1={10.002}
          y2={23.554}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C28400" />
          <stop offset={1} stopColor="#A86500" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={7.167}
          x2={13.048}
          y1={20}
          y2={33.358}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6AD10" />
          <stop offset={1} stopColor="#C87E0E" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={4.5}
          x2={9.85}
          y1={24}
          y2={34.613}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F6D751" />
          <stop offset={1} stopColor="#E6AD10" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={1}
          x2={3.666}
          y1={28}
          y2={34.964}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F9E589" />
          <stop offset={1} stopColor="#F6D751" />
        </linearGradient>
        <radialGradient
          id={iconId + '-c'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(15.8333 17.4167 -23.75 6.53125 12.583 12.73)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
      </defs>
    </svg>
  )
}
