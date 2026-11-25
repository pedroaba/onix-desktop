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
        d="M12.001 13.286a.5.5 0 0 1 .5.5V16h.999l.1.01a.5.5 0 0 1 0 .98l-.1.01h-1.499v-2c0-.548-.15-1.061-.407-1.503a.499.499 0 0 1 .407-.211z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M16 12a2 2 0 0 1-2 2h-2.174A2.998 2.998 0 0 0 9 12H8V8h8v4z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M7 7.75A.75.75 0 0 1 7.75 7h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 7 7.75z"
      />
      <rect
        width={10}
        height={10}
        x={1}
        y={13}
        fill={'url(#' + iconId + '-g)' + ''}
        rx={2}
      />
      <rect
        width={10}
        height={10}
        x={1}
        y={13}
        fill={'url(#' + iconId + '-h)' + ''}
        fillOpacity={0.3}
        rx={2}
      />
      <path
        fill="#fff"
        d="M5.161 19.046V21H3.813v-6h2.083c.746 0 1.313.163 1.703.49.392.326.589.81.589 1.451 0 .662-.22 1.178-.66 1.549-.437.37-1.024.556-1.762.556h-.605zm0-3.008v1.97h.564c.334 0 .591-.087.772-.263.18-.176.271-.428.271-.758 0-.304-.089-.538-.267-.702-.175-.165-.427-.247-.756-.247h-.584z"
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
          x1={4.765}
          x2={6.495}
          y1={6.643}
          y2={20.699}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.508} stopColor="#FA734C" />
          <stop offset={0.725} stopColor="#E5495B" />
          <stop offset={0.873} stopColor="#AA1D2D" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={14.667}
          x2={12}
          y1={8}
          y2={16.333}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.103} stopColor="#FFA05C" />
          <stop offset={0.767} stopColor="#FDB567" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={10.571}
          x2={12.139}
          y1={4}
          y2={10.718}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.298} stopColor="#FF7F48" />
          <stop offset={0.579} stopColor="#E5495B" />
          <stop offset={0.89} stopColor="#AA1D2D" />
        </linearGradient>
        <radialGradient
          id={iconId + '-g'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="rotate(45 -15.193 7.706) scale(14.1421)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F8193E" />
          <stop offset={0.939} stopColor="#920616" />
        </radialGradient>
        <radialGradient
          id={iconId + '-h'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 7 -7.96875 0 5.999 19)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.576} stopColor="#FFB055" stopOpacity={0} />
          <stop offset={0.974} stopColor="#FFF2BE" />
        </radialGradient>
      </defs>
    </svg>
  )
}
