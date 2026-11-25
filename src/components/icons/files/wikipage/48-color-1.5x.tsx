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
        d="M9 13.042C9 11.914 10.003 11 11.24 11h4.16c1.009 0 1.918 1.387 2.56 2.006L19 18l-1.04 5.994A3.68 3.68 0 0115.4 25h-4.16C10.003 25 9 24.086 9 22.958z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M27 13.042C27 11.914 25.997 11 24.76 11H20.6c-1.009 0-1.918 1.387-2.56 2.006L17 18l1.04 5.994A3.68 3.68 0 0020.6 25h4.16c1.237 0 2.24-.914 2.24-2.042z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M10 12a1 1 0 011-1h5a2 2 0 012 2v9a2 2 0 01-2 2h-5a1 1 0 01-1-1z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M18 13a2 2 0 012-2h5a1 1 0 011 1v11a1 1 0 01-1 1h-5a2 2 0 01-2-2z"
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
          x1={12.45}
          x2={14.851}
          y1={13.62}
          y2={28.621}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#20AC9D" />
          <stop offset={1} stopColor="#2052CB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={25.125}
          x2={22.493}
          y1={11.5}
          y2={28.757}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#20AC9D" />
          <stop offset={0.908} stopColor="#2052CB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={8.967}
          x2={30.943}
          y1={10.5}
          y2={20.177}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B6EFFF" />
          <stop offset={0.851} stopColor="#58AAFE" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={25.5}
          x2={7.004}
          y1={11.813}
          y2={15.915}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.123} stopColor="#9DEAFF" />
          <stop offset={0.616} stopColor="#4894FE" />
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
