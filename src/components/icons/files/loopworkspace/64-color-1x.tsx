'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M2 8a3 3 0 0 1 3-3h19a6 6 0 0 1 6 6v13a3 3 0 0 1-3 3H8a6 6 0 0 1-6-6V8z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M3 8a2 2 0 0 1 2-2h19a5 5 0 0 1 5 5v13a2 2 0 0 1-2 2H8a5 5 0 0 1-5-5V8z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 8a2 2 0 0 1 2-2h19a5 5 0 0 1 5 5v13a2 2 0 0 1-2 2H8a5 5 0 0 1-5-5V8z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M24 20a2 2 0 0 1-2 2h-7.429A7.501 7.501 0 0 0 8 17.019V12h16v8z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M8 12a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H8v-1z"
      />
      <circle cx={7.5} cy={24.5} r={4.5} fill="#F3F3F3" />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M7.5 18A6.5 6.5 0 0 0 1 24.5V31h6.5a6.5 6.5 0 1 0 0-13zm0 4C9 22 10 23.244 10 24.5 10 26 8.756 27 7.5 27H5v-2.5C5 23.244 6 22 7.5 22z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M14 24.5c0 3.866-2.91 6.5-6.5 6.5H1c0-2.513 1.892-4 4.225-4H7.5c1.256 0 2.5-1 2.5-2.5h4z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        fillOpacity={0.56}
        d="M14 24.5c0 3.866-2.91 6.5-6.5 6.5H1c0-2.513 1.892-4 4.225-4H7.5c1.256 0 2.5-1 2.5-2.5h4z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        fillOpacity={0.1}
        d="M14 24.5c0 3.866-2.91 6.5-6.5 6.5H1c0-2.513 1.892-4 4.225-4H7.5c1.256 0 2.5-1 2.5-2.5h4z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M7.434 18C3.88 18 1 20.91 1 24.5V31h.002c2.304-.001 3.99-1.885 3.998-4.211l.014-.014H5V24.5C5 23.244 6.016 22 7.5 22c.79 0 1.38.33 1.79.75l2.835-2.836C10.959 18.728 9.344 18 7.434 18z"
      />
      <path
        fill={'url(#' + iconId + '-k)' + ''}
        d="M7.434 18C3.88 18 1 20.91 1 24.5V31h.002c2.304-.001 3.99-1.885 3.998-4.211l.014-.014H5V24.5C5 23.244 6.016 22 7.5 22c.79 0 1.38.33 1.79.75l2.835-2.836C10.959 18.728 9.344 18 7.434 18z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={11.042}
          x2={13.385}
          y1={5}
          y2={27.366}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={10.222}
          x2={12.181}
          y1={6}
          y2={26.367}
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
          gradientTransform="matrix(13.7222 15.8333 -20.5833 5.9375 11.306 11.208)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={16}
          x2={16}
          y1={11.75}
          y2={23}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D0BEFE" />
          <stop offset={1} stopColor="#C2AAFE" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={16}
          x2={16}
          y1={10}
          y2={13}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#AB85FF" />
          <stop offset={1} stopColor="#9354FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={8.93}
          x2={6.785}
          y1={22.615}
          y2={31.39}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9237E3" />
          <stop offset={1} stopColor="#48E6F3" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={5.225}
          x2={10.984}
          y1={29.95}
          y2={28.735}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#51E6FF" />
          <stop offset={1} stopColor="#71D4FF" stopOpacity={0} />
        </linearGradient>
        <radialGradient
          id={iconId + '-h'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(2.6 1.925 -3.14157 4.92106 3.275 28.025)"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset={0.7} stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-i'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(4.81 3.22 -5.25499 9.10397 2.495 27.5)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.328} />
          <stop offset={0.604} stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={3.638}
          x2={6.964}
          y1={24.955}
          y2={20.307}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6D05E8" />
          <stop offset={1} stopColor="#AB5ADD" stopOpacity={0} />
        </linearGradient>
        <radialGradient
          id={iconId + '-k'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(8.62133 -1.495 3.89055 22.8998 -.094 22.03)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6D05E8" />
          <stop offset={1} stopColor="#6D05E8" stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  )
}
