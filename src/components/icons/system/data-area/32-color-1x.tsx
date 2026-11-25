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
        d="M26 27.0112C25.9177 27.0038 25.8343 27 25.75 27H5.25C5.11193 27 5 26.8881 5 26.75V13.4835L10.6061 11.0809C10.8764 10.965 11.1841 10.974 11.4472 11.1056L16.8944 13.8292L24.4 8.20001C24.703 7.97274 25.1084 7.93619 25.4472 8.10558C25.786 8.27497 26 8.62123 26 9.00001V27.0112Z"
        fill={'url(#' + iconId + '-paint0_linear_72095_9676)' + ''}
      />
      <path
        d="M26 27.0112C25.9177 27.0038 25.8343 27 25.75 27H5.25C5.11193 27 5 26.8881 5 26.75V13.4835L10.6061 11.0809C10.8764 10.965 11.1841 10.974 11.4472 11.1056L16.8944 13.8292L24.4 8.20001C24.703 7.97274 25.1084 7.93619 25.4472 8.10558C25.786 8.27497 26 8.62123 26 9.00001V27.0112Z"
        fill={'url(#' + iconId + '-paint1_radial_72095_9676)' + ''}
        fillOpacity={0.3}
      />
      <path
        d="M26 27.0112C25.9177 27.0038 25.8343 27 25.75 27H5.25C5.11193 27 5 26.8881 5 26.75V13.4835L10.6061 11.0809C10.8764 10.965 11.1841 10.974 11.4472 11.1056L16.8944 13.8292L24.4 8.20001C24.703 7.97274 25.1084 7.93619 25.4472 8.10558C25.786 8.27497 26 8.62123 26 9.00001V27.0112Z"
        fill={'url(#' + iconId + '-paint2_linear_72095_9676)' + ''}
        fillOpacity={0.3}
      />
      <path
        d="M26 27.0112C25.9177 27.0038 25.8343 27 25.75 27H5.25C5.11193 27 5 26.8881 5 26.75V13.4835L10.6061 11.0809C10.8764 10.965 11.1841 10.974 11.4472 11.1056L16.8944 13.8292L24.4 8.20001C24.703 7.97274 25.1084 7.93619 25.4472 8.10558C25.786 8.27497 26 8.62123 26 9.00001V27.0112Z"
        fill={'url(#' + iconId + '-paint3_linear_72095_9676)' + ''}
        fillOpacity={0.3}
      />
      <path
        d="M4.25 3C4.94036 3 5.5 3.55964 5.5 4.25V24.75C5.5 25.7165 6.2835 26.5 7.25 26.5H27.75C28.4404 26.5 29 27.0596 29 27.75C29 28.4404 28.4404 29 27.75 29H7.25C4.90279 29 3 27.0972 3 24.75V4.25C3 3.55964 3.55964 3 4.25 3Z"
        fill={'url(#' + iconId + '-paint4_linear_72095_9676)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_72095_9676'}
          x1={-2.26923}
          y1={10.3764}
          x2={32.1169}
          y2={30.761}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.163891} stopColor="#3BD5FF" />
          <stop offset={0.536655} stopColor="#9C6CFE" />
          <stop offset={0.907692} stopColor="#E656EB" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint1_radial_72095_9676'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(22.7692 11.1685) rotate(138.566) scale(21.5464 21.7477)"
        >
          <stop offset={0.635704} stopColor="#0FAFFF" stopOpacity={0} />
          <stop offset={1} stopColor="#0067BF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint2_linear_72095_9676'}
          x1={15.5}
          y1={25}
          x2={15.5}
          y2={27.0112}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#163697" stopOpacity={0} />
          <stop offset={1} stopColor="#163697" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint3_linear_72095_9676'}
          x1={7}
          y1={21.5}
          x2={5}
          y2={21.4663}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#163697" stopOpacity={0} />
          <stop offset={1} stopColor="#163697" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint4_linear_72095_9676'}
          x1={26.5625}
          y1={4.625}
          x2={3.80949}
          y2={38.5051}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#70777D" />
          <stop offset={1} stopColor="#B9C0C7" />
        </linearGradient>
      </defs>
    </svg>
  )
}
