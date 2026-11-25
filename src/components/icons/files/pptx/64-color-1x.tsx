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
        d="M2 8a3 3 0 0 1 3-3h19a6 6 0 0 1 6 6v13a3 3 0 0 1-3 3H8a6 6 0 0 1-6-6V8z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M3 8a2 2 0 0 1 2-2h19a5 5 0 0 1 5 5v13a2 2 0 0 1-2 2H8a5 5 0 0 1-5-5V8z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 8a2 2 0 0 1 2-2h19a5 5 0 0 1 5 5v13a2 2 0 0 1-2 2H8a5 5 0 0 1-5-5V8z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M16 9a7 7 0 1 1-1 13.929V21a4 4 0 0 0-4-4H9.072A7 7 0 0 1 16 9z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M16 9a7 7 0 1 1-1 13.929V21a4 4 0 0 0-4-4H9.072A7 7 0 0 1 16 9z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        fillOpacity={0.5}
        d="M16 9a7 7 0 1 1-1 13.929V21a4 4 0 0 0-4-4H9.072A7 7 0 0 1 16 9z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M16 9a7 7 0 0 1 6.05 10.517l.112-.244c.693-1.538-.432-3.278-2.118-3.278h-2.796a1.253 1.253 0 0 1-1.253-1.255l.002-2.782c.001-1.688-1.742-2.814-3.28-2.12l-.207.095A6.965 6.965 0 0 1 16 9z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M16 9a7 7 0 0 1 6.05 10.517l.112-.244c.693-1.538-.432-3.278-2.118-3.278h-2.796a1.253 1.253 0 0 1-1.253-1.255l.002-2.782c.001-1.688-1.742-2.814-3.28-2.12l-.207.095A6.965 6.965 0 0 1 16 9z"
      />
      <rect
        width={13}
        height={13}
        x={1}
        y={18}
        fill={'url(#' + iconId + '-i)' + ''}
        rx={3}
      />
      <rect
        width={13}
        height={13}
        x={1}
        y={18}
        fill={'url(#' + iconId + '-j)' + ''}
        fillOpacity={0.3}
        rx={3}
      />
      <path
        fill="#fff"
        d="M7.019 25.72V28H5.44v-7h2.437c.872 0 1.536.19 1.992.571.46.38.689.945.689 1.694 0 .771-.258 1.373-.772 1.806-.511.433-1.198.65-2.06.65h-.708zm0-3.51v2.3h.659c.39 0 .691-.103.903-.308.212-.205.317-.5.317-.883 0-.355-.104-.628-.312-.82-.205-.192-.5-.288-.884-.288H7.02z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={11.042}
          x2={13.385}
          y1={5}
          y2={27.366}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={10.222}
          x2={12.181}
          y1={6}
          y2={26.367}
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
          gradientTransform="matrix(13.7222 15.8333 -20.5833 5.9375 11.306 11.208)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={15.126}
          x2={6.542}
          y1={8.554}
          y2={16.94}
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
          gradientTransform="matrix(-10.1505 9.93875 -17.0846 -16.7282 18.677 13.063)"
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
          gradientTransform="matrix(12.3042 -5.69055 10.5289 21.826 6.206 21.691)"
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
          gradientTransform="matrix(6.39204 -7.32044 6.82218 5.68073 15.228 16.956)"
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
          gradientTransform="matrix(-.72202 4.89412 -11.0683 -1.55717 14.592 9.924)"
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
          gradientTransform="rotate(45 -21.229 10.205) scale(18.3848)"
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
          gradientTransform="matrix(0 9.1 -10.3594 0 7.498 25.8)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.576} stopColor="#FFB055" stopOpacity={0} />
          <stop offset={0.974} stopColor="#FFF2BE" />
        </radialGradient>
      </defs>
    </svg>
  )
}
