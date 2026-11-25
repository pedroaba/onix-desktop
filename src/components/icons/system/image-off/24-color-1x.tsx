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
        d="M17.75 3C19.5449 3 21 4.45507 21 6.25V17.75C21 19.5449 19.5449 21 17.75 21H6.25C4.45507 21 3 19.5449 3 17.75V6.25C3 4.45507 4.45507 3 6.25 3H17.75Z"
        fill={'url(#' + iconId + '-paint0_radial_72095_9312)' + ''}
      />
      <path
        d="M20.5149 19.4593C19.9419 20.3841 18.918 21 17.7502 21H6.25018C5.08229 21 4.05828 20.384 3.48535 19.4591L10.4239 12.6475L10.5593 12.5248C11.3942 11.8274 12.615 11.8293 13.4478 12.5306L13.5763 12.6475L20.5149 19.4593Z"
        fill={'url(#' + iconId + '-paint1_linear_72095_9312)' + ''}
      />
      <path
        d="M16 6C17.1046 6 18 6.89543 18 8C18 9.10457 17.1046 10 16 10C14.8954 10 14 9.10457 14 8C14 6.89543 14.8954 6 16 6Z"
        fill={'url(#' + iconId + '-paint2_linear_72095_9312)' + ''}
      />
      <path
        d="M17.75 3C19.5449 3 21 4.45507 21 6.25V17.75C21 19.5449 19.5449 21 17.75 21H6.25C4.45507 21 3 19.5449 3 17.75V6.25C3 4.45507 4.45507 3 6.25 3H17.75Z"
        fill={'url(#' + iconId + '-paint3_linear_72095_9312)' + ''}
      />
      <path
        d="M2.29289 2.29289C2.68342 1.90237 3.31658 1.90237 3.70711 2.29289L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L2.29289 3.70711C1.90237 3.31658 1.90237 2.68342 2.29289 2.29289Z"
        fill={'url(#' + iconId + '-paint4_linear_72095_9312)' + ''}
      />
      <defs>
        <radialGradient
          id={iconId + '-paint0_radial_72095_9312'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(-4.07143 -7.125) rotate(51.6869) scale(49.7729 45.2718)"
        >
          <stop offset={0.337728} stopColor="#A9A9A9" />
          <stop offset={0.694598} stopColor="#898989" />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint1_linear_72095_9312'}
          x1={9.56733}
          y1={12.0032}
          x2={11.5942}
          y2={21.4772}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E7DEDE" />
          <stop offset={1} stopColor="#D3D3D3" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint2_linear_72095_9312'}
          x1={15.2}
          y1={5.55556}
          x2={16.6613}
          y2={10.8163}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FDFDFD" />
          <stop offset={1} stopColor="#E4E4E4" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint3_linear_72095_9312'}
          x1={21}
          y1={3}
          x2={3}
          y2={21}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.464286} stopOpacity={0} />
          <stop offset={0.490451} />
          <stop offset={0.581597} stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint4_linear_72095_9312'}
          x1={2}
          y1={-1.75}
          x2={18.25}
          y2={22.625}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E82C41" />
          <stop offset={1} stopColor="#AA1D2D" />
        </linearGradient>
      </defs>
    </svg>
  )
}
