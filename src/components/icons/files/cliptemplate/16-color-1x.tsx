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
        d="M2 4a2 2 0 012-2h6a4 4 0 014 4v6a2 2 0 01-2 2H6a4 4 0 01-4-4z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M2 4a2 2 0 012-2h6a4 4 0 014 4v6a2 2 0 01-2 2H6a4 4 0 01-4-4z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M4.067 12.96a.5.5 0 01.665-.24c.385.18.814.28 1.268.28h1.667a.5.5 0 010 1H6a4 4 0 01-1.691-.374.5.5 0 01-.242-.665M13 12v-1.667a.5.5 0 011 0V12a2 2 0 01-2 2h-1.667a.5.5 0 010-1H12a1 1 0 001-1M2 10V8.333a.5.5 0 011 0V10c0 .454.1.883.28 1.268a.5.5 0 01-.906.423A4 4 0 012 10m11-2.333V6c0-.454-.1-.883-.28-1.268a.5.5 0 01.906-.423A4 4 0 0114 6v1.667a.5.5 0 01-1 0m-11-2V4a2 2 0 012-2h1.667a.5.5 0 010 1H4a1 1 0 00-1 1v1.667a.5.5 0 01-1 0M10 2a4 4 0 011.691.374.5.5 0 01-.423.906A3 3 0 0010 3H8.333a.5.5 0 010-1z"
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
          x1={5.333}
          x2={6.851}
          y1={2}
          y2={14.144}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-c'}
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
          id={iconId + '-b'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(6.33333 9.5 -9.5 3.5625 5.833 5.125)"
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
