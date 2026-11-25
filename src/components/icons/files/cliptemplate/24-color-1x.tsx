'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M3 5a2 2 0 012-2h12a4 4 0 014 4v12a2 2 0 01-2 2H7a4 4 0 01-4-4z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M3 5a2 2 0 012-2h12a4 4 0 014 4v12a2 2 0 01-2 2H7a4 4 0 01-4-4z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M5.107 19.987a.5.5 0 01.662-.25C6.144 19.904 6.56 20 7 20h1.615a.5.5 0 010 1H7c-.584 0-1.14-.125-1.643-.352a.5.5 0 01-.25-.66m9.508.013a.5.5 0 110 1h-3.23a.5.5 0 110-1zM20 19v-1.615a.5.5 0 111 0V19a2 2 0 01-2 2h-1.615a.5.5 0 110-1H19a1 1 0 001-1M3 17v-1.615a.5.5 0 111 0V17c0 .44.095.856.264 1.231a.5.5 0 01-.912.412A4 4 0 013 17m17-2.385v-3.23a.5.5 0 111 0v3.23a.5.5 0 11-1 0m-17-2v-3.23a.5.5 0 011 0v3.23a.5.5 0 11-1 0m17-4V7c0-.44-.095-.856-.264-1.231a.5.5 0 01.912-.412C20.875 5.86 21 6.416 21 7v1.615a.5.5 0 01-1 0m-17-2V5a2 2 0 012-2h1.615a.5.5 0 110 1H5a1 1 0 00-1 1v1.615a.5.5 0 11-1 0M17 3c.584 0 1.14.125 1.643.352a.5.5 0 01-.412.912A3 3 0 0017 4h-1.615a.5.5 0 110-1zm-4.385 0a.5.5 0 110 1h-3.23a.5.5 0 110-1z"
      />
      <path
        fill="#7611F0"
        d="M7.108 10.157a.997.997 0 001.155.78L16.01 9.5a1.05 1.05 0 00.841-1.245l-.07-.353a1.093 1.093 0 00-1.266-.854l-7.656 1.42a1.05 1.05 0 00-.84 1.245z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        fillOpacity={0.9}
        d="M7.108 10.157a.997.997 0 001.155.78L16.01 9.5a1.05 1.05 0 00.841-1.245l-.07-.353a1.093 1.093 0 00-1.266-.854l-7.656 1.42a1.05 1.05 0 00-.84 1.245z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        fillOpacity={0.6}
        d="M7.108 10.157a.997.997 0 001.155.78L16.01 9.5a1.05 1.05 0 00.841-1.245l-.07-.353a1.093 1.093 0 00-1.266-.854l-7.656 1.42a1.05 1.05 0 00-.84 1.245z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        fillOpacity={0.4}
        d="M7.108 10.157a.997.997 0 001.155.78L16.01 9.5a1.05 1.05 0 00.841-1.245l-.07-.353a1.093 1.093 0 00-1.266-.854l-7.656 1.42a1.05 1.05 0 00-.84 1.245z"
      />
      <path
        fill="#BC7FFF"
        d="M6.997 11.862c0 .603.49 1.093 1.094 1.093h7.602c.723 0 1.31.586 1.31 1.31v.505-3.004a1.19 1.19 0 00-1.19-1.19H8.187a1.19 1.19 0 01-1.19-1.19v-.48z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M6.997 11.862c0 .603.49 1.093 1.094 1.093h7.602c.723 0 1.31.586 1.31 1.31v.505-3.004a1.19 1.19 0 00-1.19-1.19H8.187a1.19 1.19 0 01-1.19-1.19v-.48z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        fillOpacity={0.8}
        d="M6.997 11.862c0 .603.49 1.093 1.094 1.093h7.602c.723 0 1.31.586 1.31 1.31v.505-3.004a1.19 1.19 0 00-1.19-1.19H8.187a1.19 1.19 0 01-1.19-1.19v-.48z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M6.997 11.862c0 .603.49 1.093 1.094 1.093h7.602c.723 0 1.31.586 1.31 1.31v.505-3.004a1.19 1.19 0 00-1.19-1.19H8.187a1.19 1.19 0 01-1.19-1.19v-.48z"
      />
      <path
        fill="#7611F0"
        d="M6.997 15.573c0 .79.64 1.429 1.429 1.429h7.386a1.19 1.19 0 001.19-1.19v-.027a1.19 1.19 0 00-1.19-1.19H8.76c-.974 0-1.763-.79-1.763-1.763z"
      />
      <path
        fill="#A966FF"
        fillOpacity={0.2}
        d="M6.997 15.573c0 .79.64 1.429 1.429 1.429h7.386a1.19 1.19 0 001.19-1.19v-.027a1.19 1.19 0 00-1.19-1.19H8.76c-.974 0-1.763-.79-1.763-1.763z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        fillOpacity={0.4}
        d="M6.997 15.573c0 .79.64 1.429 1.429 1.429h7.386a1.19 1.19 0 001.19-1.19v-.027a1.19 1.19 0 00-1.19-1.19H8.76c-.974 0-1.763-.79-1.763-1.763z"
      />
      <path
        fill={'url(#' + iconId + '-k)' + ''}
        fillOpacity={0.15}
        d="M6.997 15.573c0 .79.64 1.429 1.429 1.429h7.386a1.19 1.19 0 001.19-1.19v-.027a1.19 1.19 0 00-1.19-1.19H8.76c-.974 0-1.763-.79-1.763-1.763z"
      />
      <path
        fill={'url(#' + iconId + '-l)' + ''}
        fillOpacity={0.3}
        d="M6.997 15.573c0 .79.64 1.429 1.429 1.429h7.386a1.19 1.19 0 001.19-1.19v-.027a1.19 1.19 0 00-1.19-1.19H8.76c-.974 0-1.763-.79-1.763-1.763z"
      />
      <path
        fill={'url(#' + iconId + '-m)' + ''}
        fillOpacity={0.2}
        d="M6.997 15.573c0 .79.64 1.429 1.429 1.429h7.386a1.19 1.19 0 001.19-1.19v-.027a1.19 1.19 0 00-1.19-1.19H8.76c-.974 0-1.763-.79-1.763-1.763z"
      />
      <path
        fill="#974CFF"
        d="M6.997 13.53c0 .723.586 1.31 1.31 1.31h7.505c.658 0 1.19.533 1.19 1.19v.15-2.289a1.19 1.19 0 00-1.19-1.19H8.307a1.31 1.31 0 01-1.31-1.309v-.698z"
      />
      <path
        fill="#A966FF"
        fillOpacity={0.35}
        d="M6.997 13.53c0 .723.586 1.31 1.31 1.31h7.505c.658 0 1.19.533 1.19 1.19v.15-2.289a1.19 1.19 0 00-1.19-1.19H8.307a1.31 1.31 0 01-1.31-1.309v-.698z"
      />
      <path
        fill={'url(#' + iconId + '-n)' + ''}
        fillOpacity={0.4}
        d="M6.997 13.53c0 .723.586 1.31 1.31 1.31h7.505c.658 0 1.19.533 1.19 1.19v.15-2.289a1.19 1.19 0 00-1.19-1.19H8.307a1.31 1.31 0 01-1.31-1.309v-.698z"
      />
      <path
        fill={'url(#' + iconId + '-o)' + ''}
        fillOpacity={0.4}
        d="M6.997 13.53c0 .723.586 1.31 1.31 1.31h7.505c.658 0 1.19.533 1.19 1.19v.15-2.289a1.19 1.19 0 00-1.19-1.19H8.307a1.31 1.31 0 01-1.31-1.309v-.698z"
      />
      <path
        fill={'url(#' + iconId + '-p)' + ''}
        fillOpacity={0.6}
        d="M6.997 13.53c0 .723.586 1.31 1.31 1.31h7.505c.658 0 1.19.533 1.19 1.19v.15-2.289a1.19 1.19 0 00-1.19-1.19H8.307a1.31 1.31 0 01-1.31-1.309v-.698z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={8}
          x2={10.277}
          y1={3}
          y2={21.215}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-c'}
          x1={8.813}
          x2={11.236}
          y1={3}
          y2={21.177}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={9.726}
          x2={6.997}
          y1={11.658}
          y2={11.658}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BC80FF" stopOpacity={0} />
          <stop offset={0.836} stopColor="#ECB4FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={13.688}
          x2={17.003}
          y1={11.658}
          y2={11.658}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BC7FFF" stopOpacity={0} />
          <stop offset={0.836} stopColor="#ECB4FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={13.417}
          x2={13.08}
          y1={15.276}
          y2={17.119}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#330072" />
          <stop offset={1} stopColor="#7611F0" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-k'}
          x1={9.242}
          x2={9.242}
          y1={15.279}
          y2={18.017}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9136F2" stopOpacity={0} />
          <stop offset={0.836} stopColor="#B76AFF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-l'}
          x1={9.726}
          x2={6.997}
          y1={15.101}
          y2={15.123}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9136F2" stopOpacity={0} />
          <stop offset={0.836} stopColor="#B76AFF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-m'}
          x1={13.99}
          x2={18.346}
          y1={15.126}
          y2={18.447}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9136F2" stopOpacity={0} />
          <stop offset={0.836} stopColor="#B76AFF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-n'}
          x1={12.946}
          x2={12.796}
          y1={10.694}
          y2={14.034}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6200D5" />
          <stop offset={1} stopColor="#3E008D" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-o'}
          x1={14.274}
          x2={17.003}
          y1={13.376}
          y2={13.376}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9B54FD" stopOpacity={0} />
          <stop offset={0.836} stopColor="#ECB4FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-p'}
          x1={9.726}
          x2={6.997}
          y1={13.376}
          y2={13.376}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#944EF6" stopOpacity={0} />
          <stop offset={0.836} stopColor="#ECB4FF" />
        </linearGradient>
        <radialGradient
          id={iconId + '-b'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(9.5 14.25 -14.25 5.34375 8.75 7.688)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <radialGradient
          id={iconId + '-d'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-8.16079 4.353 5.44619 9.46562 12.058 2.506)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.625} stopColor="#974CFF" />
          <stop offset={1} stopColor="#5000B0" />
        </radialGradient>
        <radialGradient
          id={iconId + '-e'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-7.43861 3.34605 8.08154 16.4002 17.143 6.242)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.147} stopColor="#DE91FF" />
          <stop offset={0.678} stopColor="#D373FC" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-f'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-3.06729 4.1854 12.4547 5.25612 12.919 4.74)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC7A3" />
          <stop offset={0.831} stopColor="#DE67FD" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-i'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-3.26511 5.48714 6.59219 12.96 15.265 4.65)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC7A3" />
          <stop offset={0.831} stopColor="#DE67FD" stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  )
}
