'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 48 48"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M6 10.5A4.5 4.5 0 0110.5 6H33a9 9 0 019 9v22.5a4.5 4.5 0 01-4.5 4.5H15a9 9 0 01-9-9z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M6 10.5A4.5 4.5 0 0110.5 6H33a9 9 0 019 9v22.5a4.5 4.5 0 01-4.5 4.5H15a9 9 0 01-9-9z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M10.586 40.282a.5.5 0 01.676-.208A7.96 7.96 0 0015 41h3.482a.5.5 0 010 1H15a8.96 8.96 0 01-4.207-1.042.5.5 0 01-.207-.676M29.732 41a.5.5 0 010 1h-6.964a.5.5 0 010-1zM41 37.5v-3.482a.5.5 0 011 0V37.5a4.5 4.5 0 01-4.5 4.5h-3.482a.5.5 0 010-1H37.5a3.5 3.5 0 003.5-3.5M6 33v-3.482a.5.5 0 011 0V33c0 1.352.335 2.623.926 3.738a.5.5 0 01-.884.469A9 9 0 016 33m35-3.268v-6.964a.5.5 0 011 0v6.964a.5.5 0 01-1 0m-35-4.5v-6.964a.5.5 0 011 0v6.964a.5.5 0 01-1 0m35-6.75V15a7.96 7.96 0 00-.926-3.738.5.5 0 01.884-.469A8.96 8.96 0 0142 15v3.482a.5.5 0 01-1 0m-35-4.5V10.5A4.5 4.5 0 0110.5 6h3.482a.5.5 0 010 1H10.5A3.5 3.5 0 007 10.5v3.482a.5.5 0 01-1 0M33 6c1.519 0 2.951.377 4.207 1.042a.5.5 0 01-.469.884A7.96 7.96 0 0033 7h-3.482a.5.5 0 010-1zm-7.768 0a.5.5 0 010 1h-6.964a.5.5 0 010-1z"
      />
      <path
        fill="#7611F0"
        d="M15.266 20.414a1.745 1.745 0 002.033 1.347l14.135-2.747a1.84 1.84 0 001.453-2.193l-.188-.894a1.91 1.91 0 00-2.228-1.476l-13.975 2.716a1.84 1.84 0 00-1.453 2.192z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        fillOpacity={0.9}
        d="M15.266 20.414a1.745 1.745 0 002.033 1.347l14.135-2.747a1.84 1.84 0 001.453-2.193l-.188-.894a1.91 1.91 0 00-2.228-1.476l-13.975 2.716a1.84 1.84 0 00-1.453 2.192z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        fillOpacity={0.6}
        d="M15.266 20.414a1.745 1.745 0 002.033 1.347l14.135-2.747a1.84 1.84 0 001.453-2.193l-.188-.894a1.91 1.91 0 00-2.228-1.476l-13.975 2.716a1.84 1.84 0 00-1.453 2.192z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        fillOpacity={0.4}
        d="M15.266 20.414a1.745 1.745 0 002.033 1.347l14.135-2.747a1.84 1.84 0 001.453-2.193l-.188-.894a1.91 1.91 0 00-2.228-1.476l-13.975 2.716a1.84 1.84 0 00-1.453 2.192z"
      />
      <path
        fill="#BC7FFF"
        d="M15.004 23.25c0 1.058.857 1.914 1.914 1.914H30.69a2.29 2.29 0 012.291 2.292v.884-5.256c0-1.15-.932-2.083-2.083-2.083H17.087a2.083 2.083 0 01-2.083-2.083v-.838z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M15.004 23.25c0 1.058.857 1.914 1.914 1.914H30.69a2.29 2.29 0 012.291 2.292v.884-5.256c0-1.15-.932-2.083-2.083-2.083H17.087a2.083 2.083 0 01-2.083-2.083v-.838z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        fillOpacity={0.8}
        d="M15.004 23.25c0 1.058.857 1.914 1.914 1.914H30.69a2.29 2.29 0 012.291 2.292v.884-5.256c0-1.15-.932-2.083-2.083-2.083H17.087a2.083 2.083 0 01-2.083-2.083v-.838z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M15.004 23.25c0 1.058.857 1.914 1.914 1.914H30.69a2.29 2.29 0 012.291 2.292v.884-5.256c0-1.15-.932-2.083-2.083-2.083H17.087a2.083 2.083 0 01-2.083-2.083v-.838z"
      />
      <path
        fill="#7611F0"
        d="M15.004 30.502a2.5 2.5 0 002.5 2.5h13.395c1.15 0 2.083-.933 2.083-2.083V29.72c0-1.15-.932-2.083-2.083-2.083H18.03a3.025 3.025 0 01-3.025-3.026z"
      />
      <path
        fill="#A966FF"
        fillOpacity={0.2}
        d="M15.004 30.502a2.5 2.5 0 002.5 2.5h13.395c1.15 0 2.083-.933 2.083-2.083V29.72c0-1.15-.932-2.083-2.083-2.083H18.03a3.025 3.025 0 01-3.025-3.026z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        fillOpacity={0.4}
        d="M15.004 30.502a2.5 2.5 0 002.5 2.5h13.395c1.15 0 2.083-.933 2.083-2.083V29.72c0-1.15-.932-2.083-2.083-2.083H18.03a3.025 3.025 0 01-3.025-3.026z"
      />
      <path
        fill={'url(#' + iconId + '-k)' + ''}
        fillOpacity={0.15}
        d="M15.004 30.502a2.5 2.5 0 002.5 2.5h13.395c1.15 0 2.083-.933 2.083-2.083V29.72c0-1.15-.932-2.083-2.083-2.083H18.03a3.025 3.025 0 01-3.025-3.026z"
      />
      <path
        fill={'url(#' + iconId + '-l)' + ''}
        fillOpacity={0.3}
        d="M15.004 30.502a2.5 2.5 0 002.5 2.5h13.395c1.15 0 2.083-.933 2.083-2.083V29.72c0-1.15-.932-2.083-2.083-2.083H18.03a3.025 3.025 0 01-3.025-3.026z"
      />
      <path
        fill={'url(#' + iconId + '-m)' + ''}
        fillOpacity={0.2}
        d="M15.004 30.502a2.5 2.5 0 002.5 2.5h13.395c1.15 0 2.083-.933 2.083-2.083V29.72c0-1.15-.932-2.083-2.083-2.083H18.03a3.025 3.025 0 01-3.025-3.026z"
      />
      <path
        fill="#974CFF"
        d="M15.004 26.709A2.29 2.29 0 0017.296 29h13.603c1.15 0 2.083.933 2.083 2.084v.262-4.268c0-1.15-.932-2.082-2.083-2.082H17.296a2.29 2.29 0 01-2.292-2.292v-.787z"
      />
      <path
        fill="#A966FF"
        fillOpacity={0.35}
        d="M15.004 26.709A2.29 2.29 0 0017.296 29h13.603c1.15 0 2.083.933 2.083 2.084v.262-4.268c0-1.15-.932-2.082-2.083-2.082H17.296a2.29 2.29 0 01-2.292-2.292v-.787z"
      />
      <path
        fill={'url(#' + iconId + '-n)' + ''}
        fillOpacity={0.4}
        d="M15.004 26.709A2.29 2.29 0 0017.296 29h13.603c1.15 0 2.083.933 2.083 2.084v.262-4.268c0-1.15-.932-2.082-2.083-2.082H17.296a2.29 2.29 0 01-2.292-2.292v-.787z"
      />
      <path
        fill={'url(#' + iconId + '-o)' + ''}
        fillOpacity={0.4}
        d="M15.004 26.709A2.29 2.29 0 0017.296 29h13.603c1.15 0 2.083.933 2.083 2.084v.262-4.268c0-1.15-.932-2.082-2.083-2.082H17.296a2.29 2.29 0 01-2.292-2.292v-.787z"
      />
      <path
        fill={'url(#' + iconId + '-p)' + ''}
        fillOpacity={0.6}
        d="M15.004 26.709A2.29 2.29 0 0017.296 29h13.603c1.15 0 2.083.933 2.083 2.084v.262-4.268c0-1.15-.932-2.082-2.083-2.082H17.296a2.29 2.29 0 01-2.292-2.292v-.787z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={16}
          x2={20.554}
          y1={6}
          y2={42.431}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-c'}
          x1={17.625}
          x2={22.472}
          y1={6}
          y2={42.354}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={19.907}
          x2={15.003}
          y1={22.895}
          y2={22.895}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BC80FF" stopOpacity={0} />
          <stop offset={0.836} stopColor="#ECB4FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={27.026}
          x2={32.982}
          y1={22.895}
          y2={22.895}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BC7FFF" stopOpacity={0} />
          <stop offset={0.836} stopColor="#ECB4FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={26.54}
          x2={25.986}
          y1={28.807}
          y2={31.98}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#330072" />
          <stop offset={1} stopColor="#7611F0" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-k'}
          x1={19.039}
          x2={19.039}
          y1={28.813}
          y2={33.513}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9136F2" stopOpacity={0} />
          <stop offset={0.836} stopColor="#B76AFF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-l'}
          x1={19.907}
          x2={15.003}
          y1={28.507}
          y2={28.549}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9136F2" stopOpacity={0} />
          <stop offset={0.836} stopColor="#B76AFF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-m'}
          x1={27.569}
          x2={35.129}
          y1={28.549}
          y2={34.585}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9136F2" stopOpacity={0} />
          <stop offset={0.836} stopColor="#B76AFF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-n'}
          x1={25.693}
          x2={25.438}
          y1={21.747}
          y2={27.591}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6200D5" />
          <stop offset={1} stopColor="#3E008D" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-o'}
          x1={28.08}
          x2={32.984}
          y1={26.44}
          y2={26.44}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9B54FD" stopOpacity={0} />
          <stop offset={0.836} stopColor="#ECB4FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-p'}
          x1={19.907}
          x2={15.003}
          y1={26.44}
          y2={26.44}
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
          gradientTransform="matrix(19 28.5 -28.5 10.6875 17.5 15.375)"
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
          gradientTransform="matrix(-14.685 8.15581 10.1249 17.59 24.019 6.03)"
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
          gradientTransform="matrix(-13.4018 6.27648 15.086 30.4851 33.337 12.952)"
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
          gradientTransform="matrix(-5.45258 7.81194 22.724 9.70853 25.638 10.184)"
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
          gradientTransform="matrix(-5.86692 9.60249 11.8452 22.68 29.86 10.631)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC7A3" />
          <stop offset={0.831} stopColor="#DE67FD" stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  )
}
