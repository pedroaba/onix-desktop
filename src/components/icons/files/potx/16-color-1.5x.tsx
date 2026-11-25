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
        d="M2 6a2 2 0 0 1 2-2h14a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a4 4 0 0 1-4-4V6z"
      />
      <path
        stroke={'url(#' + iconId + '-c)' + ''}
        strokeDasharray="3.5 3"
        strokeLinecap="round"
        d="M2.5 6A1.5 1.5 0 0 1 4 4.5h14A3.5 3.5 0 0 1 21.5 8v10a1.5 1.5 0 0 1-1.5 1.5H6A3.5 3.5 0 0 1 2.5 16V6z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M12 7a5 5 0 0 1 0 10.001V15a3 3 0 0 0-3-3H7a5 5 0 0 1 5-5z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M12 7a5 5 0 0 1 0 10.001V15a3 3 0 0 0-3-3H7a5 5 0 0 1 5-5z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        fillOpacity={0.5}
        d="M12 7a5 5 0 0 1 0 10.001V15a3 3 0 0 0-3-3H7a5 5 0 0 1 5-5z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M12.001 7a5 5 0 0 1 4.321 7.515l.08-.177a1.66 1.66 0 0 0-1.512-2.342h-1.997a.895.895 0 0 1-.896-.895L12 9.113A1.66 1.66 0 0 0 9.655 7.6l-.147.066A4.977 4.977 0 0 1 12 7z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M12.001 7a5 5 0 0 1 4.321 7.515l.08-.177a1.66 1.66 0 0 0-1.512-2.342h-1.997a.895.895 0 0 1-.896-.895L12 9.113A1.66 1.66 0 0 0 9.655 7.6l-.147.066A4.977 4.977 0 0 1 12 7z"
      />
      <rect
        width={10}
        height={10}
        x={1}
        y={13}
        fill={'url(#' + iconId + '-i)' + ''}
        rx={2}
      />
      <rect
        width={10}
        height={10}
        x={1}
        y={13}
        fill={'url(#' + iconId + '-j)' + ''}
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
          x1={7.556}
          x2={9.184}
          y1={4}
          y2={20.282}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <radialGradient
          id={iconId + '-b'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(10.5556 12.6667 -15.8333 4.75 8.389 8.167)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-c'}
          x1={8.635}
          x2={10.24}
          y1={4.5}
          y2={19.748}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={11.493}
          x2={5.366}
          y1={6.682}
          y2={12.543}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.058} stopColor="#FF7F48" />
          <stop offset={1} stopColor="#E5495B" />
        </linearGradient>
        <radialGradient
          id={iconId + '-e'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="rotate(135 4.938 7.846) scale(10.0397 16.8981)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.152} stopColor="#AA1D2D" />
          <stop offset={0.381} stopColor="#D12B18" stopOpacity={0.44} />
          <stop offset={0.602} stopColor="#FF3C00" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-f'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(8.60542 -4.06468 7.36376 15.58999 5.255 16.065)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.407} stopColor="#FF66FB" />
          <stop offset={1} stopColor="#EA3D01" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-g'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(4.56583 -5.23083 4.87307 4.05917 11.45 12.685)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FD6EF9" />
          <stop offset={0.637} stopColor="#F94" />
          <stop offset={0.852} stopColor="#FCC479" />
        </radialGradient>
        <radialGradient
          id={iconId + '-h'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-.51574 3.4971 -7.90606 -1.11268 10.995 7.66)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.144} stopColor="#FF8D13" />
          <stop offset={0.537} stopColor="#FF7F29" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-i'}
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
          id={iconId + '-j'}
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
