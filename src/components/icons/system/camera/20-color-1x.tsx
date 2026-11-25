'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.77897 2.82643C7.0336 2.31977 7.55219 2 8.11924 2H11.8834C12.4516 2 12.9711 2.32106 13.2251 2.8293L13.8101 3.9994H15.5C16.8807 3.9994 18 5.11869 18 6.4994V14.5C18 15.8807 16.8807 17 15.5 17H4.5C3.11929 17 2 15.8807 2 14.5V6.4994C2 5.11868 3.11929 3.9994 4.5 3.9994H6.18948L6.77897 2.82643Z"
        fill={'url(#' + iconId + '-paint0_radial_378174_9945)' + ''}
      />
      <path
        d="M6.77897 2.82643C7.0336 2.31977 7.55219 2 8.11924 2H11.8834C12.4516 2 12.9711 2.32106 13.2251 2.8293L13.8101 3.9994H15.5C16.8807 3.9994 18 5.11869 18 6.4994V14.5C18 15.8807 16.8807 17 15.5 17H4.5C3.11929 17 2 15.8807 2 14.5V6.4994C2 5.11868 3.11929 3.9994 4.5 3.9994H6.18948L6.77897 2.82643Z"
        fill={'url(#' + iconId + '-paint1_radial_378174_9945)' + ''}
        fillOpacity={0.5}
      />
      <path
        d="M13.9954 10C13.9954 12.2091 12.2045 14 9.99536 14C7.78622 14 5.99536 12.2091 5.99536 10C5.99536 7.79086 7.78622 6 9.99536 6C12.2045 6 13.9954 7.79086 13.9954 10Z"
        fill={'url(#' + iconId + '-paint2_linear_378174_9945)' + ''}
      />
      <path
        d="M13 10C13 11.6569 11.6569 13 10 13C8.34315 13 7 11.6569 7 10C7 8.34315 8.34315 7 10 7C11.6569 7 13 8.34315 13 10Z"
        fill={'url(#' + iconId + '-paint3_radial_378174_9945)' + ''}
      />
      <path
        d="M15 8C15.5523 8 16 7.55228 16 7C16 6.44772 15.5523 6 15 6C14.4477 6 14 6.44772 14 7C14 7.55228 14.4477 8 15 8Z"
        fill={'url(#' + iconId + '-paint4_linear_378174_9945)' + ''}
      />
      <defs>
        <radialGradient
          id={iconId + '-paint0_radial_378174_9945'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(-0.5 3) rotate(40.7321) scale(23.7539 49.3244)"
        >
          <stop stopColor="#F08AF4" />
          <stop offset={0.535356} stopColor="#9C6CFE" />
          <stop offset={1} stopColor="#4E44DB" />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint1_radial_378174_9945'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(12 11.2308) rotate(85.0467) scale(5.79086 5.25355)"
        >
          <stop stopColor="#312A9A" />
          <stop offset={1} stopColor="#312A9A" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint2_linear_378174_9945'}
          x1={7.50024}
          y1={6}
          x2={11.5002}
          y2={15.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset={1} stopColor="#DECBFF" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint3_radial_378174_9945'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(6 5.5) rotate(49.7636) scale(8.51469)"
        >
          <stop offset={0.242576} stopColor="#3BD5FF" />
          <stop offset={1} stopColor="#2052CB" />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint4_linear_378174_9945'}
          x1={14}
          y1={6.5}
          x2={16}
          y2={8}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F08AF4" />
          <stop offset={1} stopColor="#F462AB" />
        </linearGradient>
      </defs>
    </svg>
  )
}
