'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.3277 7.11673C18.9156 6.82277 19.4979 6.45065 20 6.00003V18C20 20.2091 16.4183 22 12 22C7.58172 22 4 20.2091 4 18V6.00003C4.50211 6.45065 5.08441 6.82277 5.67233 7.11673C7.36922 7.96518 9.60849 8.44666 12 8.44666C14.3915 8.44666 16.6308 7.96518 18.3277 7.11673Z"
        fill={'url(#' + iconId + '-paint0_linear_72095_9527)' + ''}
      />
      <path
        d="M18.3277 7.11673C18.9156 6.82277 19.4979 6.45065 20 6.00003V18C20 20.2091 16.4183 22 12 22C7.58172 22 4 20.2091 4 18V6.00003C4.50211 6.45065 5.08441 6.82277 5.67233 7.11673C7.36922 7.96518 9.60849 8.44666 12 8.44666C14.3915 8.44666 16.6308 7.96518 18.3277 7.11673Z"
        fill={'url(#' + iconId + '-paint1_linear_72095_9527)' + ''}
        fillOpacity={0.7}
      />
      <path
        d="M12 10C16.4183 10 20 8.20914 20 6C20 3.79086 16.4183 2 12 2C7.58172 2 4 3.79086 4 6C4 8.20914 7.58172 10 12 10Z"
        fill={'url(#' + iconId + '-paint2_linear_72095_9527)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_72095_9527'}
          x1={7.77723}
          y1={2.39557}
          x2={16.4348}
          y2={20.5766}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29C3FF" />
          <stop offset={1} stopColor="#367AF2" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint1_linear_72095_9527'}
          x1={14.4762}
          y1={7.96494}
          x2={17.6471}
          y2={23.7208}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.53288} stopColor="#FF6CE8" stopOpacity={0} />
          <stop offset={1} stopColor="#FF6CE8" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint2_linear_72095_9527'}
          x1={26}
          y1={14}
          x2={16.7545}
          y2={-2.82827}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#58AAFE" />
          <stop offset={1} stopColor="#6CE0FF" />
        </linearGradient>
      </defs>
    </svg>
  )
}
