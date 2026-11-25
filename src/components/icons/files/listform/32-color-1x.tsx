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
        d="M21 9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7v-3.5a1.5 1.5 0 0 0-1.5-1.5H9v-7a2 2 0 0 1 2-2h10z"
      />
      <path
        fill="#87447D"
        d="M19.5 17a1.5 1.5 0 0 1 0 3H14v-.5c0-.175-.031-.343-.087-.5H19.5a.5.5 0 0 0 0-1h-8.413a1.5 1.5 0 0 1 1.413-1h7z"
      />
      <path
        fill="#87447D"
        fillRule="evenodd"
        d="M19.5 12a1.5 1.5 0 0 1 0 3h-7a1.5 1.5 0 0 1 0-3h7zm-7 1a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z"
        clipRule="evenodd"
      />
      <path
        fill="#FEE200"
        d="m1 22 3-3h8.523c.264 0 .477.212.477.477V22l-6 1.375L1 22z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M4.714 24.91 1 26.447V22h3l.714 2.91z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M13 25.036V22H4v3.071l4.09.733 4.91-.768z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M13 28v-3H3.34v3.018l5.946.553L13 28z"
      />
      <path fill={'url(#' + iconId + '-h)' + ''} d="m4 28-3 1v-4h3v3z" />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="m4 28-.464 1.429L4 31h6l3-3H4z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M4 31H1.564A.563.563 0 0 1 1 30.436V28h3v3z"
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
          x1={10.5}
          x2={23}
          y1={6}
          y2={29.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E0BEDB" />
          <stop offset={1} stopColor="#A35B98" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={2.857}
          x2={2.857}
          y1={26.446}
          y2={22}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E25A01" />
          <stop offset={0.61} stopColor="#E15801" />
          <stop offset={0.878} stopColor="#E05101" />
          <stop offset={1} stopColor="#DE4A01" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={8.5}
          x2={8.5}
          y1={25.804}
          y2={22}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F18C0A" />
          <stop offset={0.437} stopColor="#F0880A" />
          <stop offset={0.868} stopColor="#EC7C0A" />
          <stop offset={1} stopColor="#EB770A" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={8.17}
          x2={8.17}
          y1={28.571}
          y2={25}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D83B01" />
          <stop offset={0.472} stopColor="#D63701" />
          <stop offset={0.937} stopColor="#CE2B01" />
          <stop offset={1} stopColor="#CD2901" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={2.5}
          x2={2.5}
          y1={29}
          y2={25}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#BF3207" />
          <stop offset={0.472} stopColor="#BB3207" />
          <stop offset={0.937} stopColor="#AF3007" />
          <stop offset={1} stopColor="#AD3007" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={8.268}
          x2={8.268}
          y1={31}
          y2={28}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#854A81" />
          <stop offset={0.482} stopColor="#82497E" />
          <stop offset={0.812} stopColor="#794475" />
          <stop offset={1} stopColor="#703F6C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={2.5}
          x2={2.5}
          y1={31}
          y2={28}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#703D6E" />
          <stop offset={0.631} stopColor="#6C3B6A" />
          <stop offset={1} stopColor="#663764" />
        </linearGradient>
      </defs>
    </svg>
  )
}
