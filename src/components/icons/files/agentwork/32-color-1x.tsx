'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M5 5a3 3 0 013-3h13a6 6 0 016 6v19a3 3 0 01-3 3H8.5A3.5 3.5 0 015 26.5z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        fillRule="evenodd"
        d="M8 3h13a5 5 0 015 5v13a2 2 0 01-2 2H8.5A3.5 3.5 0 006 24.05V5a2 2 0 012-2M6 26.5A2.5 2.5 0 008.5 29H24a2 2 0 002-2v-.764A3 3 0 0124 27H8.5a.5.5 0 110-1H24a2 2 0 002-2v-.764A3 3 0 0124 24H8.5A2.5 2.5 0 006 26.5"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        fillRule="evenodd"
        d="M8 3h13a5 5 0 015 5v13a2 2 0 01-2 2H8.5A3.5 3.5 0 006 24.05V5a2 2 0 012-2M6 26.5A2.5 2.5 0 008.5 29H24a2 2 0 002-2v-.764A3 3 0 0124 27H8.5a.5.5 0 110-1H24a2 2 0 002-2v-.764A3 3 0 0124 24H8.5A2.5 2.5 0 006 26.5"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M19.669 6.99A1.46 1.46 0 0018.288 6h-.9c-.702 0-1.304.5-1.433 1.188l-.932 4.945.463-1.584a1.46 1.46 0 011.4-1.049h2.879l1.244 1.629L22.117 9.5h-.552c-.625 0-1.18-.398-1.38-.99z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M12.503 19.004c.199.595.756.996 1.383.996h1.466c.796 0 1.445-.638 1.458-1.434l.073-4.431-.385 1.317a1.46 1.46 0 01-1.4 1.048h-2.89l-1.23-1.085-.908 1.085h.547c.627 0 1.185.401 1.383.996z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M18 6h-5.832C10.5 6 9.5 8.202 8.834 10.405c-.79 2.609-1.823 6.099 1.167 6.099h2.69c.65 0 1.223-.431 1.402-1.058.428-1.499 1.23-4.293 1.855-6.402.306-1.034.561-1.922.953-2.474.22-.31.585-.57 1.1-.57"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M18 6h-5.832C10.5 6 9.5 8.202 8.834 10.405c-.79 2.609-1.823 6.099 1.167 6.099h2.69c.65 0 1.223-.431 1.402-1.058.428-1.499 1.23-4.293 1.855-6.402.306-1.034.561-1.922.953-2.474.22-.31.585-.57 1.1-.57"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M14 20h5.833c1.666 0 2.666-2.202 3.333-4.404.79-2.609 1.823-6.098-1.167-6.098H19.31c-.651 0-1.224.43-1.403 1.057a770 770 0 01-1.855 6.402c-.306 1.033-.561 1.921-.953 2.474-.22.31-.585.57-1.099.57"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M14 20h5.833c1.666 0 2.666-2.202 3.333-4.404.79-2.609 1.823-6.098-1.167-6.098H19.31c-.651 0-1.224.43-1.403 1.057a770 770 0 01-1.855 6.402c-.306 1.033-.561 1.921-.953 2.474-.22.31-.585.57-1.099.57"
      />
      <defs>
        <radialGradient
          id={iconId + '-c'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(10.5556 20.5833 -15.8333 7.71875 12.389 9.77)"
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
          gradientTransform="matrix(-4.01994 -5.00476 -4.34022 4.19783 21.084 12.173)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.096} stopColor="#00AEFF" />
          <stop offset={0.773} stopColor="#2253CE" />
          <stop offset={1} stopColor="#0736C4" />
        </radialGradient>
        <radialGradient
          id={iconId + '-e'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(3.56222 4.42321 4.20512 -3.61031 11.306 16.066)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFB657" />
          <stop offset={0.634} stopColor="#FF5F3D" />
          <stop offset={0.923} stopColor="#C02B3C" />
        </radialGradient>
        <radialGradient
          id={iconId + '-f'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-.52844 -9.30665 52.2779 -2.96789 12.023 16.5)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.03} stopColor="#FFC800" />
          <stop offset={0.31} stopColor="#98BD42" />
          <stop offset={0.49} stopColor="#52B471" />
          <stop offset={0.844} stopColor="#0D91E1" />
        </radialGradient>
        <radialGradient
          id={iconId + '-h'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-4.60802 13.1726 -15.6828 -5.81373 22.299 8.47)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.066} stopColor="#8C48FF" />
          <stop offset={0.5} stopColor="#F2598A" />
          <stop offset={0.896} stopColor="#FFB152" />
        </radialGradient>
        <linearGradient
          id={iconId + '-a'}
          x1={12.104}
          x2={16.851}
          y1={2}
          y2={29.972}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={11.556}
          x2={15.786}
          y1={3}
          y2={29.035}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={12.546}
          x2={13}
          y1={6}
          y2={16.503}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3DCBFF" />
          <stop offset={0.247} stopColor="#0588F7" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={22.76}
          x2={22.754}
          y1={8.857}
          y2={11.717}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.058} stopColor="#F8ADFA" />
          <stop offset={0.708} stopColor="#A86EDD" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  )
}
