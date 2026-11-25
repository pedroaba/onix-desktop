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
        d="M6 5.5A3.5 3.5 0 019.5 2H23a7 7 0 017 7v21.5a3.5 3.5 0 01-3.5 3.5h-17A3.5 3.5 0 016 30.5z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M9.5 3A2.5 2.5 0 007 5.5v22.55A3.5 3.5 0 019.5 27h17a2.5 2.5 0 002.5-2.5V9a6 6 0 00-6-6z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M9.5 3A2.5 2.5 0 007 5.5v22.55A3.5 3.5 0 019.5 27h17a2.5 2.5 0 002.5-2.5V9a6 6 0 00-6-6z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M29 26.95A3.5 3.5 0 0126.5 28h-17a2.5 2.5 0 000 5h17a2.5 2.5 0 002.5-2.5v-.55A3.5 3.5 0 0126.5 31h-17a.5.5 0 010-1h17a2.5 2.5 0 002.5-2.5z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M29 26.95A3.5 3.5 0 0126.5 28h-17a2.5 2.5 0 000 5h17a2.5 2.5 0 002.5-2.5v-.55A3.5 3.5 0 0126.5 31h-17a.5.5 0 010-1h17a2.5 2.5 0 002.5-2.5z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M21.669 9.99A1.46 1.46 0 0020.288 9h-.9c-.702 0-1.304.5-1.433 1.188l-.932 4.945.463-1.584a1.46 1.46 0 011.4-1.049h2.879l1.244 1.629 1.108-1.629h-.552c-.625 0-1.18-.398-1.38-.99z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M14.503 22.004c.199.595.756.996 1.383.996h1.466c.796 0 1.445-.638 1.458-1.434l.073-4.431-.385 1.317a1.46 1.46 0 01-1.4 1.048h-2.89l-1.23-1.085-.908 1.085h.547c.627 0 1.185.401 1.383.996z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M20 9h-5.832c-1.667 0-2.667 2.202-3.333 4.405-.79 2.609-1.824 6.099 1.166 6.099h2.69c.65 0 1.223-.431 1.402-1.058.428-1.499 1.23-4.293 1.855-6.402.306-1.034.561-1.922.953-2.474.22-.31.585-.57 1.1-.57"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M20 9h-5.832c-1.667 0-2.667 2.202-3.333 4.405-.79 2.609-1.824 6.099 1.166 6.099h2.69c.65 0 1.223-.431 1.402-1.058.428-1.499 1.23-4.293 1.855-6.402.306-1.034.561-1.922.953-2.474.22-.31.585-.57 1.1-.57"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M16 23h5.833c1.666 0 2.666-2.202 3.333-4.404.79-2.609 1.823-6.098-1.167-6.098H21.31c-.651 0-1.224.43-1.403 1.057a770 770 0 01-1.855 6.402c-.306 1.033-.561 1.921-.953 2.474-.22.31-.585.57-1.099.57"
      />
      <path
        fill={'url(#' + iconId + '-k)' + ''}
        d="M16 23h5.833c1.666 0 2.666-2.202 3.333-4.404.79-2.609 1.823-6.098-1.167-6.098H21.31c-.651 0-1.224.43-1.403 1.057a770 770 0 01-1.855 6.402c-.306 1.033-.561 1.921-.953 2.474-.22.31-.585.57-1.099.57"
      />
      <defs>
        <radialGradient
          id={iconId + '-c'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(11.6111 23.75 -17.4167 8.90625 14.028 10.813)"
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
          gradientTransform="matrix(11.6111 23.75 -17.4167 8.90625 14.028 10.813)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <radialGradient
          id={iconId + '-f'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-4.01994 -5.00476 -4.34022 4.19783 23.084 15.173)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.096} stopColor="#00AEFF" />
          <stop offset={0.773} stopColor="#2253CE" />
          <stop offset={1} stopColor="#0736C4" />
        </radialGradient>
        <radialGradient
          id={iconId + '-g'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(3.56222 4.42321 4.20512 -3.61031 13.306 19.066)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFB657" />
          <stop offset={0.634} stopColor="#FF5F3D" />
          <stop offset={0.923} stopColor="#C02B3C" />
        </radialGradient>
        <radialGradient
          id={iconId + '-h'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-.52844 -9.30665 52.2779 -2.96789 14.023 19.5)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.03} stopColor="#FFC800" />
          <stop offset={0.31} stopColor="#98BD42" />
          <stop offset={0.49} stopColor="#52B471" />
          <stop offset={0.844} stopColor="#0D91E1" />
        </radialGradient>
        <radialGradient
          id={iconId + '-j'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-4.60802 13.1726 -15.6828 -5.81373 24.299 11.47)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.066} stopColor="#8C48FF" />
          <stop offset={0.5} stopColor="#F2598A" />
          <stop offset={0.896} stopColor="#FFB152" />
        </radialGradient>
        <linearGradient
          id={iconId + '-a'}
          x1={13.75}
          x2={19.418}
          y1={2}
          y2={33.881}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={13.111}
          x2={18.218}
          y1={3}
          y2={32.963}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={13.111}
          x2={18.218}
          y1={3}
          y2={32.963}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={14.546}
          x2={15}
          y1={9}
          y2={19.503}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3DCBFF" />
          <stop offset={0.247} stopColor="#0588F7" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-k'}
          x1={24.76}
          x2={24.754}
          y1={11.857}
          y2={14.717}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.058} stopColor="#F8ADFA" />
          <stop offset={0.708} stopColor="#A86EDD" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  )
}
