'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M2 10a4 4 0 0 1 4-4h24a8 8 0 0 1 8 8v16a4 4 0 0 1-4 4H10a8 8 0 0 1-8-8V10z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M3 10a3 3 0 0 1 3-3h24a7 7 0 0 1 7 7v16a3 3 0 0 1-3 3H10a7 7 0 0 1-7-7V10z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 10a3 3 0 0 1 3-3h24a7 7 0 0 1 7 7v16a3 3 0 0 1-3 3H10a7 7 0 0 1-7-7V10z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M28 27.462c0 .85-.689 1.538-1.538 1.538H20v-4a5 5 0 0 0-5-5h-2v-3.23a2.309 2.309 0 0 1 2.308-2.31H28v13.002z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        fillOpacity={0.7}
        d="M28 27.462c0 .85-.689 1.538-1.538 1.538H20v-4a5 5 0 0 0-5-5h-2v-3.23a2.309 2.309 0 0 1 2.308-2.31H28v13.002z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M21.528 17.5c-.849 0-1.537.689-1.536 1.538l.005 2.421c0 .487-.226.92-.578 1.202A4.998 4.998 0 0 0 15 20h-2v-.192a2.308 2.308 0 0 1 2.308-2.308h6.22z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        fillOpacity={0.3}
        d="M21.528 17.5c-.849 0-1.537.689-1.536 1.538l.005 2.421c0 .487-.226.92-.578 1.202A4.998 4.998 0 0 0 15 20h-2v-.192a2.308 2.308 0 0 1 2.308-2.308h6.22z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M22.23 17.5h-6.345a2.883 2.883 0 0 0-2.857 2.5H13v-5.923c0-1.7 1.378-3.077 3.077-3.077h6.153v6.5z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M22.23 17.5h-6.345a2.883 2.883 0 0 0-2.857 2.5H13v-5.923c0-1.7 1.378-3.077 3.077-3.077h6.153v6.5z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M22.23 17.5h-6.345a2.883 2.883 0 0 0-2.857 2.5H13v-5.923c0-1.7 1.378-3.077 3.077-3.077h6.153v6.5z"
      />
      <path
        fill={'url(#' + iconId + '-k)' + ''}
        d="M28 12.539c0-.85-.689-1.539-1.538-1.539h-4.924c-.85 0-1.538.689-1.538 1.539v3.422c0 .85.689 1.539 1.538 1.539h4.924c.85 0 1.538-.689 1.538-1.539V12.54z"
      />
      <rect
        width={18}
        height={18}
        x={1}
        y={21}
        fill={'url(#' + iconId + '-l)' + ''}
        rx={4}
      />
      <rect
        width={18}
        height={18}
        x={1}
        y={21}
        fill={'url(#' + iconId + '-m)' + ''}
        fillOpacity={0.3}
        rx={4}
      />
      <path
        fill="#fff"
        d="M14.608 35h-2.702l-1.697-3.187c-.06-.111-.107-.2-.14-.265a9.253 9.253 0 0 1-.09-.237h-.028a2.336 2.336 0 0 1-.119.272c-.037.07-.081.156-.132.258L7.94 35H5.392l3.058-5.007L5.6 25h2.667l1.509 2.845c.06.116.111.219.153.307.047.084.093.184.14.3h.028l.153-.32.168-.315L11.983 25h2.542l-2.891 4.916L14.608 35z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={13.625}
          x2={16.578}
          y1={6}
          y2={34.472}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={12.444}
          x2={14.976}
          y1={7}
          y2={33.48}
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
          gradientTransform="matrix(17.9444 20.5833 -26.9167 7.71875 13.861 13.77)"
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
          gradientTransform="matrix(-14.2942 -15.4177 12.0443 -10.9652 28 30.712)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.065} stopColor="#379539" />
          <stop offset={0.422} stopColor="#297C2D" />
          <stop offset={0.703} stopColor="#15561C" />
        </radialGradient>
        <radialGradient
          id={iconId + '-e'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-6.04349 -5.98999 4.67944 -4.63611 17.49 19.878)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#073B10" />
          <stop offset={0.992} stopColor="#084A13" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={-3.052}
          x2={18.596}
          y1={28.478}
          y2={28.478}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#52D17C" />
          <stop offset={0.329} stopColor="#4AA647" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={18.149}
          x2={18.149}
          y1={17.109}
          y2={32.903}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29852F" />
          <stop offset={0.5} stopColor="#4AA647" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={13.34}
          x2={24.322}
          y1={21.802}
          y2={15.205}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#66D052" />
          <stop offset={1} stopColor="#85E972" />
        </linearGradient>
        <radialGradient
          id={iconId + '-i'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-4.62504 0 0 -14.1375 21.898 16.674)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.292} stopColor="#4EB43B" />
          <stop offset={1} stopColor="#72CC61" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={17.161}
          x2={13}
          y1={17.214}
          y2={17.214}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.184} stopColor="#C0E075" stopOpacity={0} />
          <stop offset={1} stopColor="#D1EB95" />
        </linearGradient>
        <radialGradient
          id={iconId + '-k'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-7.73072 -6.8397 6.34029 -8.33964 27.73 17.84)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.44} stopColor="#79E96D" />
          <stop offset={1} stopColor="#D0EB76" />
        </radialGradient>
        <radialGradient
          id={iconId + '-l'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(17.99997 17.99997 -51.24107 51.24107 1 21)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#20A85E" />
          <stop offset={0.944} stopColor="#09442A" />
        </radialGradient>
        <radialGradient
          id={iconId + '-m'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 12.6 -14.5125 0 10 31.8)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.58} stopColor="#33A662" stopOpacity={0} />
          <stop offset={0.974} stopColor="#98F0B0" />
        </radialGradient>
      </defs>
    </svg>
  )
}
