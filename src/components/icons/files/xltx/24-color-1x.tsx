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
        d="M2 6a2 2 0 0 1 2-2h14a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a4 4 0 0 1-4-4V6z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M2 6a2 2 0 0 1 2-2h14a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a4 4 0 0 1-4-4V6z"
      />
      <path
        stroke={'url(#' + iconId + '-c)' + ''}
        strokeDasharray="3.5 3"
        strokeLinecap="round"
        d="M2.5 6A1.5 1.5 0 0 1 4 4.5h14A3.5 3.5 0 0 1 21.5 8v10a1.5 1.5 0 0 1-1.5 1.5H6A3.5 3.5 0 0 1 2.5 16V6z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M16 16.167c0 .46-.373.833-.833.833H12v-2a3 3 0 0 0-3-3H8v-1.875c0-.69.56-1.25 1.25-1.25H16v7.292z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        fillOpacity={0.7}
        d="M16 16.167c0 .46-.373.833-.833.833H12v-2a3 3 0 0 0-3-3H8v-1.875c0-.69.56-1.25 1.25-1.25H16v7.292z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M12.832 10.5a.832.832 0 0 0-.832.832v1.397a.832.832 0 0 1-.43.729A2.994 2.994 0 0 0 9 12H8v-.25c0-.69.56-1.25 1.25-1.25h3.582z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        fillOpacity={0.3}
        d="M12.832 10.5a.832.832 0 0 0-.832.832v1.397a.832.832 0 0 1-.43.729A2.994 2.994 0 0 0 9 12H8v-.25c0-.69.56-1.25 1.25-1.25h3.582z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M13 10.5H9.562c-.841 0-1.526.666-1.56 1.5H8V8.667C8 7.747 8.747 7 9.667 7H13v3.5z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M13 10.5H9.562c-.841 0-1.526.666-1.56 1.5H8V8.667C8 7.747 8.747 7 9.667 7H13v3.5z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M13 10.5H9.562c-.841 0-1.526.666-1.56 1.5H8V8.667C8 7.747 8.747 7 9.667 7H13v3.5z"
      />
      <path
        fill={'url(#' + iconId + '-k)' + ''}
        d="M16 7.833A.833.833 0 0 0 15.167 7h-2.334a.833.833 0 0 0-.833.833v1.834c0 .46.373.833.833.833h2.334c.46 0 .833-.373.833-.833V7.833z"
      />
      <rect
        width={10}
        height={10}
        x={1}
        y={13}
        fill={'url(#' + iconId + '-l)' + ''}
        rx={2}
      />
      <rect
        width={10}
        height={10}
        x={1}
        y={13}
        fill={'url(#' + iconId + '-m)' + ''}
        fillOpacity={0.3}
        rx={2}
      />
      <path
        fill="#fff"
        d="M8.755 21H7.14l-1.015-1.912a5.967 5.967 0 0 1-.083-.16 5.676 5.676 0 0 1-.055-.141h-.016a1.402 1.402 0 0 1-.071.163 6.641 6.641 0 0 0-.08.155L4.768 21H3.245l1.828-3.004L3.37 15h1.595l.901 1.707c.037.07.067.131.092.184.028.05.056.11.084.18h.016c.04-.08.07-.145.092-.192l.1-.189.936-1.69h1.52l-1.73 2.95L8.757 21z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={7.556}
          x2={9.184}
          y1={4}
          y2={20.282}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <radialGradient
          id={iconId + '-b'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(10.5556 12.6667 -15.8333 4.75 8.389 8.167)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-c'}
          x1={8.635}
          x2={10.24}
          y1={4.5}
          y2={19.748}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <radialGradient
          id={iconId + '-d'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-7.67361 -8.35069 6.46579 -5.93909 16.125 17.677)"
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
          gradientTransform="matrix(-3.24436 -3.24436 2.51209 -2.51106 10.483 11.809)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#073B10" />
          <stop offset={0.992} stopColor="#084A13" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={8}
          x2={12.068}
          y1={12.859}
          y2={12.859}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#52D17C" />
          <stop offset={0.329} stopColor="#4AA647" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={11.984}
          x2={11.984}
          y1={10.438}
          y2={13.802}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29852F" />
          <stop offset={0.5} stopColor="#4AA647" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={8.184}
          x2={12.804}
          y1={11.053}
          y2={7.046}
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
          gradientTransform="matrix(-2.50523 0 0 -5.30389 12.82 9.129)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.292} stopColor="#4EB43B" />
          <stop offset={1} stopColor="#72CC61" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={10.254}
          x2={8}
          y1={9.331}
          y2={9.331}
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
          gradientTransform="matrix(-4.22774 -3.91858 3.46735 -4.77792 15.978 10.919)"
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
          gradientTransform="rotate(45 -15.192 7.707) scale(14.1421 40.2588)"
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
          gradientTransform="matrix(0 7 -8.0625 0 6 19)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.58} stopColor="#33A662" stopOpacity={0} />
          <stop offset={0.974} stopColor="#98F0B0" />
        </radialGradient>
      </defs>
    </svg>
  )
}
