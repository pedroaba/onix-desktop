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
        d="M19.5 6.75C19.5 6.46592 19.3395 6.20623 19.0854 6.07918C18.8313 5.95214 18.5273 5.97956 18.3 6.15L12.6997 10.3503L8.88029 8.10355C8.66126 7.97472 8.39189 7.96554 8.16461 8.07918L4.5 9.9V19.5H19.5L19.5 6.75Z"
        fill={'url(#' + iconId + '-paint0_linear_72095_9684)' + ''}
      />
      <path
        d="M19.5 6.75C19.5 6.46592 19.3395 6.20623 19.0854 6.07918C18.8313 5.95214 18.5273 5.97956 18.3 6.15L12.6997 10.3503L8.88029 8.10355C8.66126 7.97472 8.39189 7.96554 8.16461 8.07918L4.5 9.9V19.5H19.5L19.5 6.75Z"
        fill={'url(#' + iconId + '-paint1_radial_72095_9684)' + ''}
        fillOpacity={0.3}
      />
      <path
        d="M19.5 6.75C19.5 6.46592 19.3395 6.20623 19.0854 6.07918C18.8313 5.95214 18.5273 5.97956 18.3 6.15L12.6997 10.3503L8.88029 8.10355C8.66126 7.97472 8.39189 7.96554 8.16461 8.07918L4.5 9.9V19.5H19.5L19.5 6.75Z"
        fill={'url(#' + iconId + '-paint2_linear_72095_9684)' + ''}
        fillOpacity={0.3}
      />
      <path
        d="M19.5 6.75C19.5 6.46592 19.3395 6.20623 19.0854 6.07918C18.8313 5.95214 18.5273 5.97956 18.3 6.15L12.6997 10.3503L8.88029 8.10355C8.66126 7.97472 8.39189 7.96554 8.16461 8.07918L4.5 9.9V19.5H19.5L19.5 6.75Z"
        fill={'url(#' + iconId + '-paint3_linear_72095_9684)' + ''}
        fillOpacity={0.3}
      />
      <path
        d="M5 4C5 3.44772 4.55228 3 4 3C3.44772 3 3 3.44772 3 4V17.5C3 19.433 4.567 21 6.5 21H20C20.5523 21 21 20.5523 21 20C21 19.4477 20.5523 19 20 19H6.5C5.67157 19 5 18.3284 5 17.5V4Z"
        fill={'url(#' + iconId + '-paint4_linear_72095_9684)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_72095_9684'}
          x1={-0.692314}
          y1={7.6875}
          x2={23.7941}
          y2={22.2888}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.163891} stopColor="#3BD5FF" />
          <stop offset={0.536655} stopColor="#9C6CFE" />
          <stop offset={0.907692} stopColor="#E656EB" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint1_radial_72095_9684'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(17.1923 8.25) rotate(138.733) scale(15.351 15.4828)"
        >
          <stop offset={0.635704} stopColor="#0FAFFF" stopOpacity={0} />
          <stop offset={0.962099} stopColor="#0067BF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint2_linear_72095_9684'}
          x1={12}
          y1={17.25}
          x2={12}
          y2={19.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#163697" stopOpacity={0} />
          <stop offset={1} stopColor="#163697" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint3_linear_72095_9684'}
          x1={6.8077}
          y1={15.5625}
          x2={4.5}
          y2={15.5625}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#163697" stopOpacity={0} />
          <stop offset={1} stopColor="#163697" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint4_linear_72095_9684'}
          x1={19.3125}
          y1={4.125}
          x2={3.56041}
          y2={27.5804}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#70777D" />
          <stop offset={1} stopColor="#B9C0C7" />
        </linearGradient>
      </defs>
    </svg>
  )
}
