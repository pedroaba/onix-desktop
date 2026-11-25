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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.9999 4.01637C10.2754 3.99823 10.5 4.22382 10.5 4.49996V10.5C10.5 11.0523 10.9477 11.5 11.5 11.5L17.5 11.5C17.7761 11.5 18.0017 11.7245 17.9836 12.0001C17.7262 15.909 14.4741 19 10.5 19C6.35786 19 3 15.6421 3 11.5C3 7.52588 6.09093 4.27372 9.9999 4.01637Z"
        fill={'url(#' + iconId + '-paint0_linear_72095_9998)' + ''}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.9999 4.01637C10.2754 3.99823 10.5 4.22382 10.5 4.49996V10.5C10.5 11.0523 10.9477 11.5 11.5 11.5L17.5 11.5C17.7761 11.5 18.0017 11.7245 17.9836 12.0001C17.7262 15.909 14.4741 19 10.5 19C6.35786 19 3 15.6421 3 11.5C3 7.52588 6.09093 4.27372 9.9999 4.01637Z"
        fill={'url(#' + iconId + '-paint1_radial_72095_9998)' + ''}
        fillOpacity={0.4}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.9999 4.01637C10.2754 3.99823 10.5 4.22382 10.5 4.49996V10.5C10.5 11.0523 10.9477 11.5 11.5 11.5L17.5 11.5C17.7761 11.5 18.0017 11.7245 17.9836 12.0001C17.7262 15.909 14.4741 19 10.5 19C6.35786 19 3 15.6421 3 11.5C3 7.52588 6.09093 4.27372 9.9999 4.01637Z"
        fill={'url(#' + iconId + '-paint2_radial_72095_9998)' + ''}
        fillOpacity={0.4}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 9.40194V9.4552C19.9999 9.48255 19.9997 9.50986 19.9993 9.53713C19.9955 9.79854 19.7764 10 19.515 10H12.5C12.2239 10 12 9.77614 12 9.5V2.48506C12 2.22363 12.2015 2.00452 12.4629 2.00078C12.499 2.00026 12.5352 2 12.5715 2C16.6653 2 19.9856 5.3115 20 9.40194Z"
        fill={'url(#' + iconId + '-paint3_linear_72095_9998)' + ''}
      />
      <path
        d="M21.5 12C20.6716 12 20 12.6716 20 13.5V21.5C20 22.3284 20.6716 23 21.5 23C22.3284 23 23 22.3284 23 21.5V13.5C23 12.6716 22.3284 12 21.5 12Z"
        fill={'url(#' + iconId + '-paint4_linear_72095_9998)' + ''}
      />
      <path
        d="M16 16.5C16 15.6716 16.6716 15 17.5 15C18.3284 15 19 15.6716 19 16.5V21.5C19 22.3284 18.3284 23 17.5 23C16.6716 23 16 22.3284 16 21.5V16.5Z"
        fill={'url(#' + iconId + '-paint5_linear_72095_9998)' + ''}
      />
      <path
        d="M13.5 18C12.6716 18 12 18.6716 12 19.5V21.5C12 22.3284 12.6716 23 13.5 23C14.3284 23 15 22.3284 15 21.5V19.5C15 18.6716 14.3284 18 13.5 18Z"
        fill={'url(#' + iconId + '-paint6_linear_72095_9998)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_72095_9998'}
          x1={18.0911}
          y1={21.4179}
          x2={-0.12673}
          y2={3.36618}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6D37CD" />
          <stop offset={1} stopColor="#EA71EF" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint1_radial_72095_9998'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(13.3057 19.0001) rotate(90) scale(3.86087 3.80424)"
        >
          <stop stopColor="#30116E" />
          <stop offset={0.749599} stopColor="#30116E" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint2_radial_72095_9998'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(17.1703 17.0697) rotate(90) scale(3.86087 3.4218)"
        >
          <stop stopColor="#30116E" />
          <stop offset={1} stopColor="#30116E" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint3_linear_72095_9998'}
          x1={20.3333}
          y1={7.53333}
          x2={19.9735}
          y2={0.710277}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E23CB4" />
          <stop offset={1} stopColor="#EA71EF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint4_linear_72095_9998'}
          x1={22.6055}
          y1={8.62116}
          x2={30.3976}
          y2={12.589}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#16BBDA" />
          <stop offset={1} stopColor="#0067BF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint5_linear_72095_9998'}
          x1={16.75}
          y1={15.5714}
          x2={21.9133}
          y2={19.0787}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#16BBDA" />
          <stop offset={1} stopColor="#0067BF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint6_linear_72095_9998'}
          x1={12.75}
          y1={18}
          x2={15.3612}
          y2={20.8884}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#16BBDA" />
          <stop offset={1} stopColor="#0067BF" />
        </linearGradient>
      </defs>
    </svg>
  )
}
