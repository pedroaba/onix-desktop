'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 96 96"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M8 27a9 9 0 0 1 9-9h53c9.941 0 18 8.059 18 18v33a9 9 0 0 1-9 9H26c-9.941 0-18-8.059-18-18V27z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M10 27a7 7 0 0 1 7-7h53c8.837 0 16 7.163 16 16v33a7 7 0 0 1-7 7H26c-8.837 0-16-7.163-16-16V27z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M10 27a7 7 0 0 1 7-7h53c8.837 0 16 7.163 16 16v33a7 7 0 0 1-7 7H26c-8.837 0-16-7.163-16-16V27z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M63.75 63.75c0 2.9-7.053 5.25-15.75 5.25V59c0-2.108-.594-4.077-1.622-5.75H63.75v10.5z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        fillOpacity={0.7}
        d="M63.75 63.75c0 2.9-7.053 5.25-15.75 5.25V59c0-2.108-.594-4.077-1.622-5.75H63.75v10.5z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M63.75 53.25c0 2.9-7.053 5.25-15.75 5.25l-.014-.001C47.724 52.656 42.907 48 37 48h-4.75v-5.25h31.5v10.5z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        fillOpacity={0.3}
        d="M63.75 53.25c0 2.9-7.053 5.25-15.75 5.25l-.014-.001C47.724 52.656 42.907 48 37 48h-4.75v-5.25h31.5v10.5z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M63.75 42.75c0 2.9-7.053 5.25-15.75 5.25s-15.75-2.35-15.75-5.25v-10.5h31.5v10.5z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        fillOpacity={0.4}
        d="M63.75 42.75c0 2.9-7.053 5.25-15.75 5.25s-15.75-2.35-15.75-5.25v-10.5h31.5v10.5z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M48 37.5c-8.699 0-15.75-2.35-15.75-5.25S39.301 27 48 27s15.75 2.35 15.75 5.25S56.699 37.5 48 37.5z"
      />
      <rect
        width={40}
        height={40}
        x={6}
        y={50}
        fill={'url(#' + iconId + '-k)' + ''}
        rx={9}
      />
      <rect
        width={40}
        height={40}
        x={6}
        y={50}
        fill={'url(#' + iconId + '-l)' + ''}
        fillOpacity={0.5}
        rx={9}
      />
      <path
        fill="#fff"
        d="m14.32 82 8.583-24h6.396l8.383 24h-5.678l-1.653-4.803h-8.784L19.947 82h-5.628zm8.482-9.222h6.263l-2.555-8.385c-.09-.301-.173-.574-.25-.82a13.972 13.972 0 0 1-.235-.887h-.133c-.067.28-.14.553-.217.82-.078.268-.167.558-.267.87l-2.606 8.402z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={33.833}
          x2={39.939}
          y1={18}
          y2={79.056}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={31.111}
          x2={36.368}
          y1={20}
          y2={77.071}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <radialGradient
          id={iconId + '-c'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(40.1111 44.3333 -60.1667 16.625 34.278 34.583)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={63.75}
          x2={-50.485}
          y1={61.839}
          y2={61.839}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9C0D55" />
          <stop offset={0.511} stopColor="#A61727" />
          <stop offset={1} stopColor="#8A1421" />
        </linearGradient>
        <radialGradient
          id={iconId + '-e'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 15.75 -147.468 0 6.632 53.25)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.21} stopColor="#560B14" />
          <stop offset={0.605} stopColor="#560B14" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={63.75}
          x2={7.691}
          y1={51.339}
          y2={51.339}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F24A9D" />
          <stop offset={0.511} stopColor="#E82C41" />
          <stop offset={1} stopColor="#CA2134" />
        </linearGradient>
        <radialGradient
          id={iconId + '-g'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 15.75 -72.3672 0 35.72 42.75)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.21} stopColor="#560B14" />
          <stop offset={0.751} stopColor="#560B14" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={63.75}
          x2={32.25}
          y1={40.839}
          y2={40.839}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F97DBD" />
          <stop offset={0.511} stopColor="#FB5B6C" />
          <stop offset={1} stopColor="#F83F54" />
        </linearGradient>
        <radialGradient
          id={iconId + '-i'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 15.75 -40.6639 0 48 32.25)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.21} stopColor="#FF9FB2" />
          <stop offset={0.634} stopColor="#FF9FB2" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={45.165}
          x2={41.183}
          y1={24.312}
          y2={39.243}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F97DBD" />
          <stop offset={0.902} stopColor="#FF9FB2" />
        </linearGradient>
        <radialGradient
          id={iconId + '-k'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="rotate(45 -57.358 32.237) scale(56.5685)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E82C58" />
          <stop offset={0.939} stopColor="#AA1D2D" />
        </radialGradient>
        <radialGradient
          id={iconId + '-l'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 28 -31.875 0 25.995 74)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.576} stopColor="#FF5778" stopOpacity={0} />
          <stop offset={0.974} stopColor="#FF9FB2" />
        </radialGradient>
      </defs>
    </svg>
  )
}
