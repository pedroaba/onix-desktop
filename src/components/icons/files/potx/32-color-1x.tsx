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
        d="M2 8a3 3 0 0 1 3-3h19a6 6 0 0 1 6 6v13a3 3 0 0 1-3 3H8a6 6 0 0 1-6-6V8z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        fillRule="evenodd"
        d="M5 6a2 2 0 0 0-2 2v1.857a.5.5 0 1 1-1 0V8a3 3 0 0 1 3-3h1.81a.5.5 0 1 1 0 1H5zm4.024-.5a.5.5 0 0 1 .5-.5h3.619a.5.5 0 0 1 0 1h-3.62a.5.5 0 0 1-.5-.5zm6.333 0a.5.5 0 0 1 .5-.5h3.62a.5.5 0 0 1 0 1h-3.62a.5.5 0 0 1-.5-.5zm6.334 0a.5.5 0 0 1 .5-.5H24c.932 0 1.816.213 2.604.593a.5.5 0 1 1-.434.9A4.979 4.979 0 0 0 24 6h-1.81a.5.5 0 0 1-.5-.5zm7.048 2.663a.5.5 0 0 1 .668.233c.38.788.593 1.672.593 2.604v1.857a.5.5 0 1 1-1 0V11c0-.778-.177-1.514-.494-2.17a.5.5 0 0 1 .233-.667zM2.5 12.143a.5.5 0 0 1 .5.5v3.714a.5.5 0 1 1-1 0v-3.714a.5.5 0 0 1 .5-.5zm27 3a.5.5 0 0 1 .5.5v3.714a.5.5 0 1 1-1 0v-3.714a.5.5 0 0 1 .5-.5zm-27 3.5a.5.5 0 0 1 .5.5V21c0 .778.178 1.514.494 2.17a.5.5 0 1 1-.9.434A5.978 5.978 0 0 1 2 21v-1.857a.5.5 0 0 1 .5-.5zm27 3a.5.5 0 0 1 .5.5V24a3 3 0 0 1-3 3h-1.81a.5.5 0 1 1 0-1H27a2 2 0 0 0 2-2v-1.857a.5.5 0 0 1 .5-.5zM5.163 25.739a.5.5 0 0 1 .667-.233A4.978 4.978 0 0 0 8 26h1.81a.5.5 0 0 1 0 1H8a5.978 5.978 0 0 1-2.604-.593.5.5 0 0 1-.233-.668zm6.86.761a.5.5 0 0 1 .5-.5h3.62a.5.5 0 0 1 0 1h-3.62a.5.5 0 0 1-.5-.5zm6.334 0a.5.5 0 0 1 .5-.5h3.62a.5.5 0 0 1 0 1h-3.62a.5.5 0 0 1-.5-.5z"
        clipRule="evenodd"
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
          x1={9.778}
          x2={11.977}
          y1={5}
          y2={27.395}
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
          gradientTransform="matrix(14.7778 17.4167 -22.1667 6.53125 10.944 10.73)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-c'}
          x1={11.219}
          x2={13.433}
          y1={5.5}
          y2={26.854}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
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
