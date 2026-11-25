'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M40.1944 18.8136C42.478 17.4049 44 14.8802 44 12C44 7.58172 40.4183 4 36 4C33.1198 4 30.5952 5.52203 29.1864 7.80565C34.4038 9.4752 38.5248 13.5962 40.1944 18.8136Z"
        fill={'url(#' + iconId + '-paint0_linear_378174_10219)' + ''}
      />
      <path
        d="M40.1944 18.8136C42.478 17.4049 44 14.8802 44 12C44 7.58172 40.4183 4 36 4C33.1198 4 30.5952 5.52203 29.1864 7.80565C34.4038 9.4752 38.5248 13.5962 40.1944 18.8136Z"
        fill={'url(#' + iconId + '-paint1_radial_378174_10219)' + ''}
      />
      <path
        d="M18.8136 7.80565C13.5962 9.4752 9.4752 13.5962 7.80565 18.8136C5.52203 17.4049 4 14.8802 4 12C4 7.58172 7.58172 4 12 4C14.8802 4 17.4049 5.52203 18.8136 7.80565Z"
        fill={'url(#' + iconId + '-paint2_linear_378174_10219)' + ''}
      />
      <path
        d="M18.8136 7.80565C13.5962 9.4752 9.4752 13.5962 7.80565 18.8136C5.52203 17.4049 4 14.8802 4 12C4 7.58172 7.58172 4 12 4C14.8802 4 17.4049 5.52203 18.8136 7.80565Z"
        fill={'url(#' + iconId + '-paint3_radial_378174_10219)' + ''}
      />
      <path
        d="M41.6339 39.8662L36.8839 35.1162L35.1161 36.884L39.8661 41.634C40.3543 42.1221 41.1457 42.1221 41.6339 41.634C42.122 41.1458 42.122 40.3544 41.6339 39.8662Z"
        fill={'url(#' + iconId + '-paint4_linear_378174_10219)' + ''}
      />
      <path
        d="M8.13388 41.634L12.8839 36.884L11.1161 35.1162L6.36612 39.8662C5.87796 40.3544 5.87796 41.1458 6.36612 41.634C6.85427 42.1221 7.64573 42.1221 8.13388 41.634Z"
        fill={'url(#' + iconId + '-paint5_linear_378174_10219)' + ''}
      />
      <path
        d="M42 24C42 33.9411 33.9411 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C33.9411 6 42 14.0589 42 24Z"
        fill={'url(#' + iconId + '-paint6_linear_378174_10219)' + ''}
      />
      <path
        d="M39.5 24C39.5 32.5604 32.5604 39.5 24 39.5C15.4396 39.5 8.5 32.5604 8.5 24C8.5 15.4396 15.4396 8.5 24 8.5C32.5604 8.5 39.5 15.4396 39.5 24Z"
        fill={'url(#' + iconId + '-paint7_linear_378174_10219)' + ''}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.75 13C23.4404 13 24 13.5596 24 14.25V24H30.75C31.4404 24 32 24.5596 32 25.25C32 25.9404 31.4404 26.5 30.75 26.5H22.75C22.0596 26.5 21.5 25.9404 21.5 25.25V14.25C21.5 13.5596 22.0596 13 22.75 13Z"
        fill={'url(#' + iconId + '-paint8_linear_378174_10219)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_378174_10219'}
          x1={45.7015}
          y1={19.117}
          x2={31.3377}
          y2={7.36675}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF6F47" />
          <stop offset={1} stopColor="#FFCD0F" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint1_radial_378174_10219'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(25.9876 23.6923) rotate(-45) scale(22.6274)"
        >
          <stop offset={0.644231} stopColor="#FF6F47" />
          <stop offset={0.942308} stopColor="#FF6F47" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint2_linear_378174_10219'}
          x1={20.683}
          y1={20.6555}
          x2={6.31912}
          y2={8.90521}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF6F47" />
          <stop offset={1} stopColor="#FFCD0F" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint3_radial_378174_10219'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(25.2308 25.2308) rotate(-135) scale(22.6274)"
        >
          <stop offset={0.658654} stopColor="#FF6F47" />
          <stop offset={0.948918} stopColor="#FF6F47" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint4_linear_378174_10219'}
          x1={7.51287}
          y1={32.0865}
          x2={8.91895}
          y2={44.5008}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CAD2D9" />
          <stop offset={1} stopColor="#70777D" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint5_linear_378174_10219'}
          x1={7.51287}
          y1={32.0865}
          x2={8.91895}
          y2={44.5008}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CAD2D9" />
          <stop offset={1} stopColor="#70777D" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint6_linear_378174_10219'}
          x1={12}
          y1={4}
          x2={30}
          y2={44}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1EC8B0" />
          <stop offset={1} stopColor="#2764E7" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint7_linear_378174_10219'}
          x1={13.2174}
          y1={5.13044}
          x2={33.4348}
          y2={48.2609}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FDFDFD" />
          <stop offset={1} stopColor="#DEDEFF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint8_linear_378174_10219'}
          x1={25.5192}
          y1={15.8184}
          x2={31.3231}
          y2={25.4916}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1EC8B0" />
          <stop offset={1} stopColor="#2764E7" />
        </linearGradient>
      </defs>
    </svg>
  )
}
