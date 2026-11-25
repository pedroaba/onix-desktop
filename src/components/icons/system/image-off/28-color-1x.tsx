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
        d="M3 6.75C3 4.67893 4.67893 3 6.75 3H21.25C23.3211 3 25 4.67893 25 6.75V21.25C25 23.3211 23.3211 25 21.25 25H6.75C4.67893 25 3 23.3211 3 21.25V6.75Z"
        fill={'url(#' + iconId + '-paint0_radial_72095_9306)' + ''}
      />
      <path
        d="M24.3682 23.3339L15.3979 14.5674C14.6207 13.8079 13.3793 13.8079 12.6021 14.5674L3.63184 23.3339C4.3046 24.3386 5.45006 25 6.75 25H21.25C22.5499 25 23.6954 24.3386 24.3682 23.3339Z"
        fill={'url(#' + iconId + '-paint1_linear_72095_9306)' + ''}
      />
      <path
        d="M19 12C20.1046 12 21 11.1046 21 10C21 8.89543 20.1046 8 19 8C17.8954 8 17 8.89543 17 10C17 11.1046 17.8954 12 19 12Z"
        fill={'url(#' + iconId + '-paint2_linear_72095_9306)' + ''}
      />
      <path
        d="M3 6.75C3 4.67893 4.67893 3 6.75 3H21.25C23.3211 3 25 4.67893 25 6.75V21.25C25 23.3211 23.3211 25 21.25 25H6.75C4.67893 25 3 23.3211 3 21.25V6.75Z"
        fill={'url(#' + iconId + '-paint3_linear_72095_9306)' + ''}
      />
      <path
        d="M2.29289 2.29289C2.68342 1.90237 3.31658 1.90237 3.70711 2.29289L25.7071 24.2929C26.0976 24.6834 26.0976 25.3166 25.7071 25.7071C25.3166 26.0976 24.6834 26.0976 24.2929 25.7071L2.29289 3.70711C1.90237 3.31658 1.90237 2.68342 2.29289 2.29289Z"
        fill={'url(#' + iconId + '-paint4_linear_72095_9306)' + ''}
      />
      <defs>
        <radialGradient
          id={iconId + '-paint0_radial_72095_9306'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(-5.64286 -9.375) rotate(51.6869) scale(60.8336 55.3322)"
        >
          <stop offset={0.337728} stopColor="#A9A9A9" />
          <stop offset={0.694598} stopColor="#898989" />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint1_linear_72095_9306'}
          x1={11.0377}
          y1={13.9978}
          x2={13.5261}
          y2={25.5792}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E7DEDE" />
          <stop offset={1} stopColor="#D3D3D3" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint2_linear_72095_9306'}
          x1={18.2}
          y1={7.55556}
          x2={19.6613}
          y2={12.8163}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FDFDFD" />
          <stop offset={1} stopColor="#E4E4E4" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint3_linear_72095_9306'}
          x1={25}
          y1={3}
          x2={3}
          y2={25}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.464286} stopOpacity={0} />
          <stop offset={0.484375} />
          <stop offset={0.580256} stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint4_linear_72095_9306'}
          x1={2}
          y1={-2.5}
          x2={21.5}
          y2={26.75}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E82C41" />
          <stop offset={1} stopColor="#AA1D2D" />
        </linearGradient>
      </defs>
    </svg>
  )
}
