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
        d="M20 4.25C20 3.00736 18.9926 2 17.75 2H6.25L6.09595 2.00519C4.92516 2.08436 4 3.05914 4 4.25V15.5H20V4.25Z"
        fill={'url(#' + iconId + '-paint0_linear_72095_8406)' + ''}
      />
      <path
        d="M8 15.5V12.2456C8 11.5984 8.49187 11.0661 9.12219 11.0021L9.25 10.9956H14.75C15.3972 10.9956 15.9295 11.4875 15.9935 12.1178L16 12.2456V15.5H8Z"
        fill={'url(#' + iconId + '-paint1_linear_72095_8406)' + ''}
      />
      <path
        d="M12 4.99561C13.3807 4.99561 14.5 6.11489 14.5 7.49561C14.5 8.87632 13.3807 9.99561 12 9.99561C10.6193 9.99561 9.5 8.87632 9.5 7.49561C9.5 6.11489 10.6193 4.99561 12 4.99561Z"
        fill={'url(#' + iconId + '-paint2_linear_72095_8406)' + ''}
      />
      <path
        d="M20 15V19.7546C20 20.9972 18.9926 22.0046 17.75 22.0046H6.25C5.00736 22.0046 4 20.9972 4 19.7546V15H20Z"
        fill={'url(#' + iconId + '-paint3_linear_72095_8406)' + ''}
      />
      <path
        d="M20 15V19.7546C20 20.9972 18.9926 22.0046 17.75 22.0046H6.25C5.00736 22.0046 4 20.9972 4 19.7546V15H20Z"
        fill={'url(#' + iconId + '-paint4_linear_72095_8406)' + ''}
        fillOpacity={0.7}
      />
      <path
        d="M7.75146 17.5H16.2502C16.6644 17.5 17.0002 17.8358 17.0002 18.25C17.0002 18.6297 16.718 18.9435 16.3519 18.9932L16.2502 19H7.75146C7.33725 19 7.00146 18.6642 7.00146 18.25C7.00146 17.8703 7.28362 17.5565 7.64969 17.5068L7.75146 17.5H16.2502H7.75146Z"
        fill={'url(#' + iconId + '-paint5_linear_72095_8406)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_72095_8406'}
          x1={9.71429}
          y1={2}
          x2={14.263}
          y2={15.3125}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B3E0FF" />
          <stop offset={1} stopColor="#8CD0FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint1_linear_72095_8406'}
          x1={9.90243}
          y1={11.5944}
          x2={11.5029}
          y2={16.1333}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.125321} stopColor="#9C6CFE" />
          <stop offset={1} stopColor="#7A41DC" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint2_linear_72095_8406'}
          x1={10.689}
          y1={5.66028}
          x2={13.2372}
          y2={9.72916}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.125321} stopColor="#9C6CFE" />
          <stop offset={1} stopColor="#7A41DC" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint3_linear_72095_8406'}
          x1={4.65793e-7}
          y1={1.00448}
          x2={19.7673}
          y2={22.1757}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#36DFF1" />
          <stop offset={1} stopColor="#2764E7" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint4_linear_72095_8406'}
          x1={12}
          y1={8.57913}
          x2={13.5306}
          y2={25.3315}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.618682} stopColor="#FF6CE8" stopOpacity={0} />
          <stop offset={1} stopColor="#FF6CE8" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint5_linear_72095_8406'}
          x1={8.92429}
          y1={17.6154}
          x2={9.11705}
          y2={20.7285}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset={1} stopColor="#B3E0FF" />
        </linearGradient>
      </defs>
    </svg>
  )
}
