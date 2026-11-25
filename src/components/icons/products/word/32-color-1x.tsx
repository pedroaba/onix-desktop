'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5 22.3175L16.2143 9.5L27 17.8289V26.5C27 27.8807 25.8807 29 24.5 29H9.5C7.01472 29 5 26.9853 5 24.5V22.3175Z"
        fill={'url(#' + iconId + '-paint0_radial_353_14611)' + ''}
      />
      <path
        d="M5 14.7179C5 12.8616 6.50483 11.3568 8.36112 11.3568H24.2143L27 9.0354V17.5002C27 18.8809 25.8807 20.0002 24.5 20.0002H9.75C7.12665 20.0002 5 22.1269 5 24.7502V24.8569V14.7179Z"
        fill={'url(#' + iconId + '-paint1_linear_353_14611)' + ''}
      />
      <path
        d="M5 14.7179C5 12.8616 6.50483 11.3568 8.36112 11.3568H24.2143L27 9.0354V17.5002C27 18.8809 25.8807 20.0002 24.5 20.0002H9.75C7.12665 20.0002 5 22.1269 5 24.7502V24.8569V14.7179Z"
        fill={'url(#' + iconId + '-paint2_radial_353_14611)' + ''}
        fillOpacity={0.6}
      />
      <path
        d="M5 14.7179C5 12.8616 6.50483 11.3568 8.36112 11.3568H24.2143L27 9.0354V17.5002C27 18.8809 25.8807 20.0002 24.5 20.0002H9.75C7.12665 20.0002 5 22.1269 5 24.7502V24.8569V14.7179Z"
        fill={'url(#' + iconId + '-paint3_radial_353_14611)' + ''}
        fillOpacity={0.1}
      />
      <path
        d="M5 7.5C5 5.01472 7.01472 3 9.5 3H24.5C25.8807 3 27 4.11929 27 5.5V9.5C27 10.8807 25.8807 12 24.5 12H9.21282C6.88614 12 5 13.8861 5 16.2128V7.5Z"
        fill={'url(#' + iconId + '-paint4_linear_353_14611)' + ''}
      />
      <path
        d="M5 7.5C5 5.01472 7.01472 3 9.5 3H24.5C25.8807 3 27 4.11929 27 5.5V9.5C27 10.8807 25.8807 12 24.5 12H9.21282C6.88614 12 5 13.8861 5 16.2128V7.5Z"
        fill={'url(#' + iconId + '-paint5_radial_353_14611)' + ''}
        fillOpacity={0.8}
      />
      <path
        d="M11.25 14H4.75C3.23122 14 2 15.2312 2 16.75V23.25C2 24.7688 3.23122 26 4.75 26H11.25C12.7688 26 14 24.7688 14 23.25V16.75C14 15.2312 12.7688 14 11.25 14Z"
        fill={'url(#' + iconId + '-paint6_radial_353_14611)' + ''}
      />
      <path
        d="M11.25 14H4.75C3.23122 14 2 15.2312 2 16.75V23.25C2 24.7688 3.23122 26 4.75 26H11.25C12.7688 26 14 24.7688 14 23.25V16.75C14 15.2312 12.7688 14 11.25 14Z"
        fill={'url(#' + iconId + '-paint7_radial_353_14611)' + ''}
        fillOpacity={0.65}
      />
      <path
        d="M11.9001 16.75L10.5 23.2492L8.82655 23.25L8.00005 19.35L7.13485 23.25H5.44539L4.10005 16.7508H5.47995L6.31005 21.04L7.13485 16.7508H8.82655L9.69005 21.04L10.5 16.7508L11.9001 16.75Z"
        fill="white"
      />
      <defs>
        <radialGradient
          id={iconId + '-paint0_radial_353_14611'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(24.833 28.9995) scale(32.3952 15.112)"
        >
          <stop offset={0.180414} stopColor="#1657F4" />
          <stop offset={0.574542} stopColor="#0036C4" />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint1_linear_353_14611'}
          x1={5}
          y1={16.9461}
          x2={20.6447}
          y2={16.9461}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#66C0FF" />
          <stop offset={0.25606} stopColor="#0094F0" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint2_radial_353_14611'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(25.4286 9.55015) rotate(131.987) scale(20.5931 50.5013)"
        >
          <stop offset={0.140259} stopColor="#D471FF" />
          <stop offset={0.830508} stopColor="#509DF5" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint3_radial_353_14611'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(22.4399 19.9887) rotate(90) scale(13.3874 69.2167)"
        >
          <stop offset={0.283333} stopColor="#4F006F" stopOpacity={0} />
          <stop offset={1} stopColor="#4F006F" />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint4_linear_353_14611'}
          x1={5}
          y1={9.53504}
          x2={25.4237}
          y2={9.85143}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9DEAFF" />
          <stop offset={0.201276} stopColor="#3BD5FF" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint5_radial_353_14611'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(25.4286 3.42524) rotate(166.017) scale(20.1556 51.1145)"
        >
          <stop offset={0.0606583} stopColor="#E4A7FE" />
          <stop offset={0.538869} stopColor="#E4A7FE" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint6_radial_353_14611'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(2 14) rotate(45) scale(16.9706)"
        >
          <stop offset={0.0811439} stopColor="#367AF2" />
          <stop offset={0.871875} stopColor="#001A8F" />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint7_radial_353_14611'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(8 21.2) rotate(90) scale(8.4 9.57373)"
        >
          <stop offset={0.586954} stopColor="#2763E5" stopOpacity={0} />
          <stop offset={0.973806} stopColor="#58AAFE" />
        </radialGradient>
      </defs>
    </svg>
  )
}
