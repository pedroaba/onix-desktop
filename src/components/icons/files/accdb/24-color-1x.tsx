'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M2 6a2 2 0 0 1 2-2h14a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a4 4 0 0 1-4-4V6z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M3 6a1 1 0 0 1 1-1h14a3 3 0 0 1 3 3v10a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3V6z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 6a1 1 0 0 1 1-1h14a3 3 0 0 1 3 3v10a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3V6z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M15.75 15.75c0 .69-1.68 1.25-3.75 1.25v-2c0-.654-.211-1.257-.566-1.75h4.316v2.5z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        fillOpacity={0.7}
        d="M15.75 15.75c0 .69-1.68 1.25-3.75 1.25v-2c0-.654-.211-1.257-.566-1.75h4.316v2.5z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M15.75 13.25c0 .69-1.68 1.25-3.75 1.25l-.043-.001A3 3 0 0 0 9 12h-.75v-1.25h7.5v2.5z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        fillOpacity={0.3}
        d="M15.75 13.25c0 .69-1.68 1.25-3.75 1.25l-.043-.001A3 3 0 0 0 9 12h-.75v-1.25h7.5v2.5z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M15.75 10.75c0 .69-1.68 1.25-3.75 1.25-2.07 0-3.75-.56-3.75-1.25v-2.5h7.5v2.5z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        fillOpacity={0.4}
        d="M15.75 10.75c0 .69-1.68 1.25-3.75 1.25-2.07 0-3.75-.56-3.75-1.25v-2.5h7.5v2.5z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M12 9.5c-2.071 0-3.75-.56-3.75-1.25S9.929 7 12 7c2.071 0 3.75.56 3.75 1.25S14.071 9.5 12 9.5z"
      />
      <rect
        width={10}
        height={10}
        x={1}
        y={13}
        fill={'url(#' + iconId + '-k)' + ''}
        rx={2}
      />
      <rect
        width={10}
        height={10}
        x={1}
        y={13}
        fill={'url(#' + iconId + '-l)' + ''}
        fillOpacity={0.5}
        rx={2}
      />
      <path
        fill="#fff"
        d="m3.08 21 2.146-6h1.599l2.096 6H7.5l-.413-1.2H4.892L4.487 21H3.08zm2.12-2.305h1.566l-.638-2.097a10.893 10.893 0 0 0-.063-.205 3.517 3.517 0 0 1-.058-.221h-.034a4.408 4.408 0 0 1-.12.422l-.652 2.1z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={8.458}
          x2={10.193}
          y1={4}
          y2={20.259}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={8}
          x2={9.386}
          y1={5}
          y2={19.254}
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
          gradientTransform="matrix(9.5 11.0833 -14.25 4.15625 8.75 8.646)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={15.75}
          x2={2.718}
          y1={15.295}
          y2={15.295}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9C0D55" />
          <stop offset={0.511} stopColor="#A61727" />
          <stop offset={1} stopColor="#8A1421" />
        </linearGradient>
        <radialGradient
          id={iconId + '-e'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 3.75 -16.8228 0 9.234 13.25)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.21} stopColor="#560B14" />
          <stop offset={0.605} stopColor="#560B14" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={15.75}
          x2={8.25}
          y1={12.795}
          y2={12.795}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F24A9D" />
          <stop offset={0.511} stopColor="#E82C41" />
          <stop offset={1} stopColor="#CA2134" />
        </linearGradient>
        <radialGradient
          id={iconId + '-g'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 3.75 -9.68188 0 12 10.75)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.21} stopColor="#560B14" />
          <stop offset={0.751} stopColor="#560B14" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={15.75}
          x2={8.25}
          y1={10.295}
          y2={10.295}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F97DBD" />
          <stop offset={0.511} stopColor="#FB5B6C" />
          <stop offset={1} stopColor="#F83F54" />
        </linearGradient>
        <radialGradient
          id={iconId + '-i'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 3.75 -9.68188 0 12 8.25)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.21} stopColor="#FF9FB2" />
          <stop offset={0.634} stopColor="#FF9FB2" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={11.325}
          x2={10.377}
          y1={6.36}
          y2={9.915}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F97DBD" />
          <stop offset={0.902} stopColor="#FF9FB2" />
        </linearGradient>
        <radialGradient
          id={iconId + '-k'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="rotate(45 -15.193 7.706) scale(14.1421)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E82C58" />
          <stop offset={0.939} stopColor="#AA1D2D" />
        </radialGradient>
        <radialGradient
          id={iconId + '-l'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 7 -7.96875 0 5.999 19)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.576} stopColor="#FF5778" stopOpacity={0} />
          <stop offset={0.974} stopColor="#FF9FB2" />
        </radialGradient>
      </defs>
    </svg>
  )
}
