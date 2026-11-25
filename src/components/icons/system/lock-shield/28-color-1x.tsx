'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.5 2C11.0147 2 9 4.01472 9 6.5V8.5H10.5V6.5C10.5 4.84315 11.8431 3.5 13.5 3.5C15.1569 3.5 16.5 4.84315 16.5 6.5V8.5H18V6.5C18 4.01472 15.9853 2 13.5 2Z"
        fill="#D9D9D9"
      />
      <path
        d="M13.5 2C11.0147 2 9 4.01472 9 6.5V8.5H10.5V6.5C10.5 4.84315 11.8431 3.5 13.5 3.5C15.1569 3.5 16.5 4.84315 16.5 6.5V8.5H18V6.5C18 4.01472 15.9853 2 13.5 2Z"
        fill={'url(#' + iconId + '-paint0_linear_72095_9270)' + ''}
      />
      <path
        d="M23 11.75C23 9.67893 21.3211 8 19.25 8H7.75C5.67893 8 4 9.67893 4 11.75V21.25C4 23.3211 5.67893 25 7.75 25H19.25C21.3211 25 23 23.3211 23 21.25V11.75Z"
        fill={'url(#' + iconId + '-paint1_linear_72095_9270)' + ''}
      />
      <path
        d="M13.5 18C14.3284 18 15 17.3284 15 16.5C15 15.6716 14.3284 15 13.5 15C12.6716 15 12 15.6716 12 16.5C12 17.3284 12.6716 18 13.5 18Z"
        fill={'url(#' + iconId + '-paint2_radial_72095_9270)' + ''}
      />
      <path
        d="M23 11.75C23 9.67893 21.3211 8 19.25 8H7.75C5.67893 8 4 9.67893 4 11.75V21.25C4 23.3211 5.67893 25 7.75 25H19.25C21.3211 25 23 23.3211 23 21.25V11.75Z"
        fill={'url(#' + iconId + '-paint3_radial_72095_9270)' + ''}
      />
      <path
        d="M21.0984 14.2299C21.8962 14.9992 23.4291 16.2224 25.3143 16.4733C25.6903 16.5234 26 16.8103 26 17.1693V20.5239C26 25.0338 21.6251 26.6706 20.6793 26.9717C20.5609 27.0094 20.4399 27.0094 20.3215 26.9717C19.3756 26.6706 15.0004 25.0338 15.0004 20.5239L15 17.1694C15 16.8103 15.3097 16.5234 15.6857 16.4733C17.5705 16.2223 19.1036 14.9991 19.9015 14.2298C20.2194 13.9234 20.7805 13.9234 21.0984 14.2299Z"
        fill={'url(#' + iconId + '-paint4_linear_72095_9270)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_72095_9270'}
          x1={10.9286}
          y1={0.758209}
          x2={18.3219}
          y2={12.3803}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC205" />
          <stop offset={1} stopColor="#FB5937" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint1_linear_72095_9270'}
          x1={24.3571}
          y1={26.0625}
          x2={6.66001}
          y2={9.9454}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF6F47" />
          <stop offset={1} stopColor="#FFCD0F" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint2_radial_72095_9270'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(14.25 18) rotate(-105.945) scale(5.46008 7.57586)"
        >
          <stop stopColor="#944600" />
          <stop offset={1} stopColor="#CD8E02" />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint3_radial_72095_9270'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(19.6071 21.4583) rotate(140.993) scale(7.21573 8.02833)"
        >
          <stop stopColor="#EB4824" />
          <stop offset={0.989901} stopColor="#EB4824" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint4_linear_72095_9270'}
          x1={17.0625}
          y1={14}
          x2={26.8373}
          y2={25.8671}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#62BE55" />
          <stop offset={1} stopColor="#1E794A" />
        </linearGradient>
      </defs>
    </svg>
  )
}
