'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 36 36"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M2 9.5A3.5 3.5 0 0 1 5.5 6H27a7 7 0 0 1 7 7v13.5a3.5 3.5 0 0 1-3.5 3.5H9a7 7 0 0 1-7-7V9.5z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M3 9.5A2.5 2.5 0 0 1 5.5 7H27a6 6 0 0 1 6 6v13.5a2.5 2.5 0 0 1-2.5 2.5H9a6 6 0 0 1-6-6V9.5z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 9.5A2.5 2.5 0 0 1 5.5 7H27a6 6 0 0 1 6 6v13.5a2.5 2.5 0 0 1-2.5 2.5H9a6 6 0 0 1-6-6V9.5z"
      />
      <path
        fill="#FEE200"
        d="M1 25.25 4.25 22h9.233c.287 0 .517.23.517.517v2.733l-6.5 1.49L1 25.25z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M5.024 28.403 1 30.067V25.25h3.25l.774 3.153z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M14 28.539V25.25H4.25v3.327l4.43.793 5.32-.83z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M14 31.75V28.5H3.534v3.27l6.442.599L14 31.75z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M4.25 31.75 1 32.833V28.5h3.25v3.25z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="m4.25 31.75-.503 1.548L4.25 35h6.5L14 31.75H4.25z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M4.25 35H1.611A.61.61 0 0 1 1 34.389V31.75h3.25V35z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M26.5 22a.5.5 0 0 1 0 1h-10a.5.5 0 0 1 0-1h10zm-13-3a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1h4zm13 0a.5.5 0 0 1 0 1h-10a.5.5 0 0 1 0-1h10zm-13-3a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1h4zm13 0a.5.5 0 0 1 0 1h-10a.5.5 0 0 1 0-1h10zm-13-3a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1h4zm13 0a.5.5 0 0 1 0 1h-10a.5.5 0 0 1 0-1h10z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={12.333}
          x2={14.776}
          y1={6}
          y2={30.422}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={11.333}
          x2={13.389}
          y1={7}
          y2={29.423}
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
          gradientTransform="matrix(15.8333 17.4167 -23.75 6.53125 12.583 12.73)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={3.012}
          x2={3.012}
          y1={30.067}
          y2={25.25}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E25A01" />
          <stop offset={0.61} stopColor="#E15801" />
          <stop offset={0.878} stopColor="#E05101" />
          <stop offset={1} stopColor="#DE4A01" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={9.125}
          x2={9.125}
          y1={29.37}
          y2={25.25}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F18C0A" />
          <stop offset={0.437} stopColor="#F0880A" />
          <stop offset={0.868} stopColor="#EC7C0A" />
          <stop offset={1} stopColor="#EB770A" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={8.767}
          x2={8.767}
          y1={32.369}
          y2={28.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D83B01" />
          <stop offset={0.472} stopColor="#D63701" />
          <stop offset={0.937} stopColor="#CE2B01" />
          <stop offset={1} stopColor="#CD2901" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={2.625}
          x2={2.625}
          y1={32.833}
          y2={28.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#BF3207" />
          <stop offset={0.472} stopColor="#BB3207" />
          <stop offset={0.937} stopColor="#AF3007" />
          <stop offset={1} stopColor="#AD3007" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={8.874}
          x2={8.874}
          y1={35}
          y2={31.75}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#854A81" />
          <stop offset={0.482} stopColor="#82497E" />
          <stop offset={0.812} stopColor="#794475" />
          <stop offset={1} stopColor="#703F6C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={2.625}
          x2={2.625}
          y1={35}
          y2={31.75}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#703D6E" />
          <stop offset={0.631} stopColor="#6C3B6A" />
          <stop offset={1} stopColor="#663764" />
        </linearGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={16.875}
          x2={20.925}
          y1={13}
          y2={22.719}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A35B98" />
          <stop offset={1} stopColor="#87447D" />
        </linearGradient>
      </defs>
    </svg>
  )
}
