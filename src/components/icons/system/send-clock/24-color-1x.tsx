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
        d="M5.57 12L4.4458 9L13.5888 11.0236C14.634 11.255 14.634 12.745 13.5888 12.9764L4.4458 15.0001L5.57 12Z"
        fill={'url(#' + iconId + '-paint0_radial_72095_8248)' + ''}
      />
      <path
        d="M12.8147 12.1974L5.28344 13.4526C5.10705 13.482 4.95979 13.6034 4.89723 13.7709L2.29933 20.7283C2.05066 21.3678 2.72008 21.9778 3.33375 21.671L21.3337 12.671C21.8865 12.3946 21.8865 11.6057 21.3337 11.3293L3.33375 2.32933C2.72008 2.0225 2.05066 2.63254 2.29933 3.27199L4.89723 10.2294C4.95979 10.3969 5.10705 10.5183 5.28344 10.5477L12.8147 11.8029C12.9236 11.821 12.9972 11.9241 12.9791 12.033C12.965 12.1173 12.899 12.1834 12.8147 12.1974Z"
        fill={'url(#' + iconId + '-paint1_linear_72095_8248)' + ''}
      />
      <path
        d="M12.8147 12.1974L5.28344 13.4526C5.10705 13.482 4.95979 13.6034 4.89723 13.7709L2.29933 20.7283C2.05066 21.3678 2.72008 21.9778 3.33375 21.671L21.3337 12.671C21.8865 12.3946 21.8865 11.6057 21.3337 11.3293L3.33375 2.32933C2.72008 2.0225 2.05066 2.63254 2.29933 3.27199L4.89723 10.2294C4.95979 10.3969 5.10705 10.5183 5.28344 10.5477L12.8147 11.8029C12.9236 11.821 12.9972 11.9241 12.9791 12.033C12.965 12.1173 12.899 12.1834 12.8147 12.1974Z"
        fill={'url(#' + iconId + '-paint2_linear_72095_8248)' + ''}
      />
      <path
        d="M12.8147 12.1974L5.28344 13.4526C5.10705 13.482 4.95979 13.6034 4.89723 13.7709L2.29933 20.7283C2.05066 21.3678 2.72008 21.9778 3.33375 21.671L21.3337 12.671C21.8865 12.3946 21.8865 11.6057 21.3337 11.3293L3.33375 2.32933C2.72008 2.0225 2.05066 2.63254 2.29933 3.27199L4.89723 10.2294C4.95979 10.3969 5.10705 10.5183 5.28344 10.5477L12.8147 11.8029C12.9236 11.821 12.9972 11.9241 12.9791 12.033C12.965 12.1173 12.899 12.1834 12.8147 12.1974Z"
        fill={'url(#' + iconId + '-paint3_radial_72095_8248)' + ''}
        fillOpacity={0.3}
      />
      <path
        d="M17.5 12C20.5376 12 23 14.4624 23 17.5C23 20.5376 20.5376 23 17.5 23C14.4624 23 12 20.5376 12 17.5C12 14.4624 14.4624 12 17.5 12Z"
        fill={'url(#' + iconId + '-paint4_linear_72095_8248)' + ''}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5 14C17.7761 14 18 14.2239 18 14.5V17H20C20.2761 17 20.5 17.2239 20.5 17.5C20.5 17.7761 20.2761 18 20 18H17.5C17.2239 18 17 17.7761 17 17.5V14.5C17 14.2239 17.2239 14 17.5 14Z"
        fill={'url(#' + iconId + '-paint5_linear_72095_8248)' + ''}
      />
      <defs>
        <radialGradient
          id={iconId + '-paint0_radial_72095_8248'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(1.49365 12.0001) scale(8.00635 0.89286)"
        >
          <stop stopColor="#0094F0" />
          <stop offset={1} stopColor="#2052CB" />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint1_linear_72095_8248'}
          x1={2.24609}
          y1={-5.67642}
          x2={18.9519}
          y2={16.5179}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3BD5FF" />
          <stop offset={1} stopColor="#0094F0" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint2_linear_72095_8248'}
          x1={11.9972}
          y1={7.50481}
          x2={17.0705}
          y2={21.2291}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.125345} stopColor="#DCF8FF" stopOpacity={0} />
          <stop offset={0.768599} stopColor="#FF6CE8" stopOpacity={0.7} />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint3_radial_72095_8248'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(17.5 20.5) rotate(83.991) scale(9.55249 7.50442)"
        >
          <stop offset={0.710959} stopColor="#1B44B1" />
          <stop offset={1} stopColor="#1B44B1" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint4_linear_72095_8248'}
          x1={13.8333}
          y1={11.3889}
          x2={19.3333}
          y2={23.6111}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#43E5CA" />
          <stop offset={1} stopColor="#2764E7" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint5_linear_72095_8248'}
          x1={17.3063}
          y1={14.6122}
          x2={16.3983}
          y2={17.8798}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FDFDFD" />
          <stop offset={1} stopColor="#D1D1FF" />
        </linearGradient>
      </defs>
    </svg>
  )
}
