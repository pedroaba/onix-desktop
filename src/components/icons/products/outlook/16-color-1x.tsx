'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath={'url(#' + iconId + '-clip0_353_14246)' + ''}>
        <mask
          id={iconId + '-mask0_353_14246'}
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={16}
          height={16}
        >
          <path d="M16 0H0V16H16V0Z" fill="white" />
        </mask>
        <g mask={'url(#' + iconId + '-mask0_353_14246)' + ''}>
          <path
            d="M11.3881 2.3927L1.82347 8.45538L1.00092 7.1577V6.03952C1.00092 5.63241 1.20702 5.25297 1.54854 5.03136L7.10846 1.42362C7.95554 0.873966 9.04665 0.873882 9.89382 1.42341L11.3881 2.3927Z"
            fill={'url(#' + iconId + '-paint0_linear_353_14246)' + ''}
          />
          <path
            d="M9.80813 1.37054C9.8369 1.38765 9.86542 1.40536 9.89367 1.42368L14.2328 4.23835L3.47401 11.058L1.82306 8.45342L9.71899 3.43879C10.4669 2.9638 10.4996 1.89528 9.80813 1.37054Z"
            fill={'url(#' + iconId + '-paint1_linear_353_14246)' + ''}
          />
          <path
            d="M9.80813 1.37054C9.8369 1.38765 9.86542 1.40536 9.89367 1.42368L14.2328 4.23835L3.47401 11.058L1.82306 8.45342L9.71899 3.43879C10.4669 2.9638 10.4996 1.89528 9.80813 1.37054Z"
            fill={'url(#' + iconId + '-paint2_linear_353_14246)' + ''}
            fillOpacity={0.2}
          />
          <path
            d="M7.76625 12.3601L3.47375 11.058L12.6001 5.27292C13.3687 4.78571 13.3667 3.66362 12.5963 3.17916L12.5552 3.15332L12.6736 3.22696L15.4512 5.02869C15.7928 5.25028 15.999 5.62977 15.999 6.03695V7.11919L7.76625 12.3601Z"
            fill={'url(#' + iconId + '-paint3_linear_353_14246)' + ''}
          />
          <path
            d="M7.76625 12.3601L3.47375 11.058L12.6001 5.27292C13.3687 4.78571 13.3667 3.66362 12.5963 3.17916L12.5552 3.15332L12.6736 3.22696L15.4512 5.02869C15.7928 5.25028 15.999 5.62977 15.999 6.03695V7.11919L7.76625 12.3601Z"
            fill={'url(#' + iconId + '-paint4_linear_353_14246)' + ''}
            fillOpacity={0.2}
          />
          <path
            d="M9.89382 1.42341C9.04665 0.873882 7.95554 0.873966 7.10846 1.42362L1.54854 5.03136C1.20702 5.25297 1.00092 5.63241 1.00092 6.03952V6.09422C1.01432 6.50287 1.22939 6.87957 1.57675 7.09856L8.48999 11.457L15.4206 7.10519C15.7805 6.87919 15.999 6.48403 15.999 6.05903V7.1192L15.9991 6.03688C15.9991 5.6297 15.793 5.25021 15.4514 5.02862L9.89382 1.42341Z"
            fill={'url(#' + iconId + '-paint5_radial_353_14246)' + ''}
          />
          <path
            d="M7.2722 16.0007H13.4848C14.8736 16.0007 15.9995 14.8749 15.9995 13.486V6.06076C15.999 6.48518 15.7806 6.87966 15.4211 7.10539L6.31317 12.8243C5.82186 13.1328 5.52366 13.6723 5.52371 14.2524C5.52379 15.218 6.30659 16.0007 7.2722 16.0007Z"
            fill={'url(#' + iconId + '-paint6_linear_353_14246)' + ''}
          />
          <path
            d="M7.2722 16.0007H13.4848C14.8736 16.0007 15.9995 14.8749 15.9995 13.486V6.06076C15.999 6.48518 15.7806 6.87966 15.4211 7.10539L6.31317 12.8243C5.82186 13.1328 5.52366 13.6723 5.52371 14.2524C5.52379 15.218 6.30659 16.0007 7.2722 16.0007Z"
            fill={'url(#' + iconId + '-paint7_radial_353_14246)' + ''}
            fillOpacity={0.4}
          />
          <path
            d="M7.2722 16.0007H13.4848C14.8736 16.0007 15.9995 14.8749 15.9995 13.486V6.06076C15.999 6.48518 15.7806 6.87966 15.4211 7.10539L6.31317 12.8243C5.82186 13.1328 5.52366 13.6723 5.52371 14.2524C5.52379 15.218 6.30659 16.0007 7.2722 16.0007Z"
            fill={'url(#' + iconId + '-paint8_radial_353_14246)' + ''}
            fillOpacity={0.5}
          />
          <path
            d="M9.76078 16.0001H3.51446C2.12562 16.0001 0.999756 14.8742 0.999756 13.4854V6.05371C0.999756 6.47791 1.21741 6.87244 1.57625 7.09867L10.6752 12.835C11.1733 13.1491 11.4754 13.6968 11.4754 14.2856C11.4753 15.2325 10.7076 16.0001 9.76078 16.0001Z"
            fill={'url(#' + iconId + '-paint9_radial_353_14246)' + ''}
          />
          <path
            d="M9.76078 16.0001H3.51446C2.12562 16.0001 0.999756 14.8742 0.999756 13.4854V6.05371C0.999756 6.47791 1.21741 6.87244 1.57625 7.09867L10.6752 12.835C11.1733 13.1491 11.4754 13.6968 11.4754 14.2856C11.4753 15.2325 10.7076 16.0001 9.76078 16.0001Z"
            fill={'url(#' + iconId + '-paint10_linear_353_14246)' + ''}
          />
          <path
            d="M7 5H2C0.89543 5 0 5.89543 0 7V12C0 13.1046 0.89543 14 2 14H7C8.10457 14 9 13.1046 9 12V7C9 5.89543 8.10457 5 7 5Z"
            fill={'url(#' + iconId + '-paint11_radial_353_14246)' + ''}
          />
          <path
            d="M7 5H2C0.89543 5 0 5.89543 0 7V12C0 13.1046 0.89543 14 2 14H7C8.10457 14 9 13.1046 9 12V7C9 5.89543 8.10457 5 7 5Z"
            fill={'url(#' + iconId + '-paint12_radial_353_14246)' + ''}
            fillOpacity={0.5}
          />
          <path
            d="M4.47552 12.2449C3.68606 12.2449 3.03794 11.998 2.53117 11.5041C2.02439 11.0101 1.771 10.3656 1.771 9.57033C1.771 8.73065 2.02821 8.0515 2.54263 7.53288C3.05705 7.01426 3.73063 6.75494 4.56338 6.75494C5.35029 6.75494 5.99076 7.00314 6.48481 7.49954C6.9814 7.99594 7.2297 8.65039 7.2297 9.4629C7.2297 10.2976 6.97249 10.9706 6.45807 11.4818C5.9462 11.9906 5.28535 12.2449 4.47552 12.2449ZM4.49844 11.1966C4.92882 11.1966 5.27516 11.0496 5.53746 10.7558C5.79977 10.4619 5.93092 10.0531 5.93092 9.52958C5.93092 8.98379 5.80359 8.55901 5.54892 8.25525C5.29426 7.95148 4.95429 7.7996 4.529 7.7996C4.09098 7.7996 3.73827 7.95642 3.47087 8.27007C3.20348 8.58124 3.06978 8.99367 3.06978 9.50735C3.06978 10.0284 3.20348 10.4409 3.47087 10.7446C3.73827 11.0459 4.08079 11.1966 4.49844 11.1966Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_353_14246'}
          x1={2.66226}
          y1={7.81815}
          x2={11.3881}
          y2={2.40598}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#20A7FA" />
          <stop offset={0.4} stopColor="#3BD5FF" />
          <stop offset={1} stopColor="#C4B0FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint1_linear_353_14246'}
          x1={5.66544}
          y1={9.66391}
          x2={10.5231}
          y2={1.88571}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#165AD9" />
          <stop offset={0.5008} stopColor="#1880E5" />
          <stop offset={1} stopColor="#8587FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint2_linear_353_14246'}
          x1={9.2083}
          y1={9.76973}
          x2={3.81518}
          y2={5.37533}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.236946} stopColor="#448AFF" stopOpacity={0} />
          <stop offset={0.792113} stopColor="#0032B1" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint3_linear_353_14246'}
          x1={8.5217}
          y1={11.4618}
          x2={17.0448}
          y2={6.00706}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1A43A6" />
          <stop offset={0.492267} stopColor="#2052CB" />
          <stop offset={1} stopColor="#5F20CB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint4_linear_353_14246'}
          x1={10.9277}
          y1={11.1358}
          x2={5.74858}
          y2={6.65412}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0045B9" stopOpacity={0} />
          <stop offset={0.669859} stopColor="#0D1F69" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint5_radial_353_14246'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(8.50058 1.34059) rotate(-90) scale(11.2505 12.1769)"
        >
          <stop offset={0.568182} stopColor="#275FF0" stopOpacity={0} />
          <stop offset={0.992424} stopColor="#002177" />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint6_linear_353_14246'}
          x1={15.9995}
          y1={10.9758}
          x2={8.43896}
          y2={10.9758}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4DC4FF" />
          <stop offset={0.196145} stopColor="#0FAFFF" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint7_radial_353_14246'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(10.206 14.2959) rotate(-45) scale(4.82139)"
        >
          <stop offset={0.259477} stopColor="#0060D1" />
          <stop offset={0.908166} stopColor="#0383F1" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint8_radial_353_14246'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(9.92744 -13.0117 9.14867 12.4072 2.9308 17.8625)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.732317} stopColor="#F4A7F7" stopOpacity={0} />
          <stop offset={1} stopColor="#F4A7F7" />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint9_radial_353_14246'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(6.23761 9.9711) rotate(123.339) scale(8.63526 22.4096)"
        >
          <stop stopColor="#49DEFF" />
          <stop offset={0.724349} stopColor="#29C3FF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint10_linear_353_14246'}
          x1={-0.059218}
          y1={14.2793}
          x2={7.22019}
          y2={14.2741}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.205882} stopColor="#6CE0FF" />
          <stop offset={0.535} stopColor="#50D5FF" stopOpacity={0} />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint11_radial_353_14246'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(-0.0321138 5.34615) rotate(46.9242) scale(11.8473)"
        >
          <stop offset={0.038877} stopColor="#0091FF" />
          <stop offset={0.919119} stopColor="#183DAD" />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint12_radial_353_14246'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(4.5 10.481) rotate(90) scale(6.3 7.26685)"
        >
          <stop offset={0.557796} stopColor="#0FA5F7" stopOpacity={0} />
          <stop offset={1} stopColor="#74C6FF" />
        </radialGradient>
        <clipPath id={iconId + '-clip0_353_14246'}>
          <rect width={16} height={16} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
