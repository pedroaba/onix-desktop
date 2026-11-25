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
        d="M21.25 21.25c0 .967-2.35 1.75-5.25 1.75a15.6 15.6 0 0 1-1-.033V21c0-1.34-.66-2.524-1.67-3.25h7.92v3.5z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        fillOpacity={0.7}
        d="M21.25 21.25c0 .967-2.35 1.75-5.25 1.75a15.6 15.6 0 0 1-1-.033V21c0-1.34-.66-2.524-1.67-3.25h7.92v3.5z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M21.25 17.75c0 .967-2.35 1.75-5.25 1.75-.454 0-.895-.021-1.315-.058A4 4 0 0 0 11 17h-.25v-2.75h10.5v3.5z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        fillOpacity={0.3}
        d="M21.25 17.75c0 .967-2.35 1.75-5.25 1.75-.454 0-.895-.021-1.315-.058A4 4 0 0 0 11 17h-.25v-2.75h10.5v3.5z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M21.25 14.25c0 .967-2.35 1.75-5.25 1.75s-5.25-.783-5.25-1.75v-3.5h10.5v3.5z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        fillOpacity={0.4}
        d="M21.25 14.25c0 .967-2.35 1.75-5.25 1.75s-5.25-.783-5.25-1.75v-3.5h10.5v3.5z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M16 12.5c-2.9 0-5.25-.784-5.25-1.75S13.1 9 16 9s5.25.784 5.25 1.75S18.9 12.5 16 12.5z"
      />
      <rect
        width={13}
        height={13}
        x={1}
        y={18}
        fill={'url(#' + iconId + '-k)' + ''}
        rx={3}
      />
      <rect
        width={13}
        height={13}
        x={1}
        y={18}
        fill={'url(#' + iconId + '-l)' + ''}
        fillOpacity={0.5}
        rx={3}
      />
      <path
        fill="#fff"
        d="m4.093 28 2.503-7h1.866l2.445 7H9.25l-.482-1.401H6.207L5.734 28H4.093zm2.474-2.69h1.827l-.746-2.445c-.026-.088-.05-.168-.073-.24a4.091 4.091 0 0 1-.068-.258h-.039c-.02.081-.04.16-.063.239a9.822 9.822 0 0 1-.078.254l-.76 2.45z"
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
          x1={21.25}
          x2={-2.107}
          y1={20.613}
          y2={20.613}
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
          gradientTransform="matrix(0 5.25 -30.1525 0 9.571 17.75)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.21} stopColor="#560B14" />
          <stop offset={0.605} stopColor="#560B14" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={21.25}
          x2={8.803}
          y1={17.113}
          y2={17.113}
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
          gradientTransform="matrix(0 5.25 -16.0683 0 15.026 14.25)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.21} stopColor="#560B14" />
          <stop offset={0.751} stopColor="#560B14" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={21.25}
          x2={10.75}
          y1={13.613}
          y2={13.613}
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
          gradientTransform="matrix(0 5.25 -13.5546 0 16 10.75)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.21} stopColor="#FF9FB2" />
          <stop offset={0.634} stopColor="#FF9FB2" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={15.055}
          x2={13.728}
          y1={8.104}
          y2={13.081}
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
          gradientTransform="rotate(45 -21.229 10.205) scale(18.3848)"
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
          gradientTransform="matrix(0 9.1 -10.3594 0 7.498 25.8)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.576} stopColor="#FF5778" stopOpacity={0} />
          <stop offset={0.974} stopColor="#FF9FB2" />
        </radialGradient>
      </defs>
    </svg>
  )
}
