'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M2 4a2 2 0 012-2h6.5A3.5 3.5 0 0114 5.5V12a2 2 0 01-2 2H5.5A3.5 3.5 0 012 10.5z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M3 4a1 1 0 011-1h6.5A2.5 2.5 0 0113 5.5V12a1 1 0 01-1 1H5.5A2.5 2.5 0 013 10.5z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 4a1 1 0 011-1h6.5A2.5 2.5 0 0113 5.5V12a1 1 0 01-1 1H5.5A2.5 2.5 0 013 10.5z"
      />
      <path
        fill="#7611F0"
        d="M5.064 6.894a.6.6 0 00.694.468l4.648-.862a.63.63 0 00.505-.748l-.043-.21a.656.656 0 00-.76-.514l-4.593.852a.63.63 0 00-.504.747z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        fillOpacity={0.9}
        d="M5.064 6.894a.6.6 0 00.694.468l4.648-.862a.63.63 0 00.505-.748l-.043-.21a.656.656 0 00-.76-.514l-4.593.852a.63.63 0 00-.504.747z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        fillOpacity={0.6}
        d="M5.064 6.894a.6.6 0 00.694.468l4.648-.862a.63.63 0 00.505-.748l-.043-.21a.656.656 0 00-.76-.514l-4.593.852a.63.63 0 00-.504.747z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        fillOpacity={0.4}
        d="M5.064 6.894a.6.6 0 00.694.468l4.648-.862a.63.63 0 00.505-.748l-.043-.21a.656.656 0 00-.76-.514l-4.593.852a.63.63 0 00-.504.747z"
      />
      <path
        fill="#BC7FFF"
        d="M4.998 7.917c0 .363.294.656.656.656h4.562c.434 0 .785.352.785.786v.303V7.86a.714.714 0 00-.714-.714H5.712a.714.714 0 01-.714-.714v-.288z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M4.998 7.917c0 .363.294.656.656.656h4.562c.434 0 .785.352.785.786v.303V7.86a.714.714 0 00-.714-.714H5.712a.714.714 0 01-.714-.714v-.288z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        fillOpacity={0.8}
        d="M4.998 7.917c0 .363.294.656.656.656h4.562c.434 0 .785.352.785.786v.303V7.86a.714.714 0 00-.714-.714H5.712a.714.714 0 01-.714-.714v-.288z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M4.998 7.917c0 .363.294.656.656.656h4.562c.434 0 .785.352.785.786v.303V7.86a.714.714 0 00-.714-.714H5.712a.714.714 0 01-.714-.714v-.288z"
      />
      <path
        fill="#7611F0"
        d="M4.998 10.144c0 .473.384.857.857.857h4.432c.395 0 .714-.32.714-.714v-.016a.714.714 0 00-.714-.715H6.056A1.06 1.06 0 014.998 8.5z"
      />
      <path
        fill="#A966FF"
        fillOpacity={0.2}
        d="M4.998 10.144c0 .473.384.857.857.857h4.432c.395 0 .714-.32.714-.714v-.016a.714.714 0 00-.714-.715H6.056A1.06 1.06 0 014.998 8.5z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        fillOpacity={0.4}
        d="M4.998 10.144c0 .473.384.857.857.857h4.432c.395 0 .714-.32.714-.714v-.016a.714.714 0 00-.714-.715H6.056A1.06 1.06 0 014.998 8.5z"
      />
      <path
        fill={'url(#' + iconId + '-k)' + ''}
        fillOpacity={0.15}
        d="M4.998 10.144c0 .473.384.857.857.857h4.432c.395 0 .714-.32.714-.714v-.016a.714.714 0 00-.714-.715H6.056A1.06 1.06 0 014.998 8.5z"
      />
      <path
        fill={'url(#' + iconId + '-l)' + ''}
        fillOpacity={0.3}
        d="M4.998 10.144c0 .473.384.857.857.857h4.432c.395 0 .714-.32.714-.714v-.016a.714.714 0 00-.714-.715H6.056A1.06 1.06 0 014.998 8.5z"
      />
      <path
        fill={'url(#' + iconId + '-m)' + ''}
        fillOpacity={0.2}
        d="M4.998 10.144c0 .473.384.857.857.857h4.432c.395 0 .714-.32.714-.714v-.016a.714.714 0 00-.714-.715H6.056A1.06 1.06 0 014.998 8.5z"
      />
      <path
        fill="#974CFF"
        d="M4.998 8.918c0 .434.352.786.786.786h4.503c.395 0 .714.32.714.714v.09-1.373a.714.714 0 00-.714-.714H5.784a.786.786 0 01-.786-.786v-.418z"
      />
      <path
        fill="#A966FF"
        fillOpacity={0.35}
        d="M4.998 8.918c0 .434.352.786.786.786h4.503c.395 0 .714.32.714.714v.09-1.373a.714.714 0 00-.714-.714H5.784a.786.786 0 01-.786-.786v-.418z"
      />
      <path
        fill={'url(#' + iconId + '-n)' + ''}
        fillOpacity={0.4}
        d="M4.998 8.918c0 .434.352.786.786.786h4.503c.395 0 .714.32.714.714v.09-1.373a.714.714 0 00-.714-.714H5.784a.786.786 0 01-.786-.786v-.418z"
      />
      <path
        fill={'url(#' + iconId + '-o)' + ''}
        fillOpacity={0.4}
        d="M4.998 8.918c0 .434.352.786.786.786h4.503c.395 0 .714.32.714.714v.09-1.373a.714.714 0 00-.714-.714H5.784a.786.786 0 01-.786-.786v-.418z"
      />
      <path
        fill={'url(#' + iconId + '-p)' + ''}
        fillOpacity={0.6}
        d="M4.998 8.918c0 .434.352.786.786.786h4.503c.395 0 .714.32.714.714v.09-1.373a.714.714 0 00-.714-.714H5.784a.786.786 0 01-.786-.786v-.418z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={5.875}
          x2={7.491}
          y1={2}
          y2={14.118}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={5.778}
          x2={7.043}
          y1={3}
          y2={13.12}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={6.635}
          x2={4.998}
          y1={7.795}
          y2={7.795}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BC80FF" stopOpacity={0} />
          <stop offset={0.836} stopColor="#ECB4FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={9.012}
          x2={11.001}
          y1={7.795}
          y2={7.795}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BC7FFF" stopOpacity={0} />
          <stop offset={0.836} stopColor="#ECB4FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={8.85}
          x2={8.648}
          y1={9.965}
          y2={11.071}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#330072" />
          <stop offset={1} stopColor="#7611F0" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-k'}
          x1={6.345}
          x2={6.345}
          y1={9.967}
          y2={11.61}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9136F2" stopOpacity={0} />
          <stop offset={0.836} stopColor="#B76AFF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-l'}
          x1={6.635}
          x2={4.998}
          y1={9.86}
          y2={9.874}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9136F2" stopOpacity={0} />
          <stop offset={0.836} stopColor="#B76AFF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-m'}
          x1={9.194}
          x2={11.807}
          y1={9.875}
          y2={11.868}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9136F2" stopOpacity={0} />
          <stop offset={0.836} stopColor="#B76AFF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-n'}
          x1={8.567}
          x2={8.478}
          y1={7.217}
          y2={9.22}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6200D5" />
          <stop offset={1} stopColor="#3E008D" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-o'}
          x1={9.364}
          x2={11.002}
          y1={8.826}
          y2={8.826}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9B54FD" stopOpacity={0} />
          <stop offset={0.836} stopColor="#ECB4FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-p'}
          x1={6.635}
          x2={4.998}
          y1={8.826}
          y2={8.826}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#944EF6" stopOpacity={0} />
          <stop offset={0.836} stopColor="#ECB4FF" />
        </linearGradient>
        <radialGradient
          id={iconId + '-c'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(5.27778 7.91667 -7.91667 2.96875 6.194 5.604)"
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
          gradientTransform="matrix(-4.89647 2.6118 3.26771 5.67937 8.035 2.303)"
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
          gradientTransform="matrix(-4.46317 2.00763 4.84892 9.84015 11.085 4.545)"
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
          gradientTransform="matrix(-1.84037 2.51124 7.47281 3.15367 8.55 3.644)"
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
          gradientTransform="matrix(-1.95907 3.29228 3.95531 7.776 9.959 3.59)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC7A3" />
          <stop offset={0.831} stopColor="#DE67FD" stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  )
}
