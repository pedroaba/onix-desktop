'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M2 6a2 2 0 0 1 2-2h10a4 4 0 0 1 4 4v6a2 2 0 0 1-2 2H6a4 4 0 0 1-4-4V6z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M2 6a2 2 0 0 1 2-2h10a4 4 0 0 1 4 4v6a2 2 0 0 1-2 2H6a4 4 0 0 1-4-4V6z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        fillRule="evenodd"
        d="M4 5a1 1 0 0 0-1 1v1.5a.5.5 0 0 1-1 0V6a2 2 0 0 1 2-2h1.25a.5.5 0 0 1 0 1H4zm3.25-.5a.5.5 0 0 1 .5-.5h2.5a.5.5 0 0 1 0 1h-2.5a.5.5 0 0 1-.5-.5zm5 0a.5.5 0 0 1 .5-.5H14a3.99 3.99 0 0 1 1.531.304.5.5 0 1 1-.383.923A2.99 2.99 0 0 0 14 5h-1.25a.5.5 0 0 1-.5-.5zm4.793 1.698a.5.5 0 0 1 .653.27c.196.473.304.99.304 1.532v1.5a.5.5 0 0 1-1 0V8a2.99 2.99 0 0 0-.227-1.148.5.5 0 0 1 .27-.654zM2.5 10a.5.5 0 0 1 .5.5V12c0 .408.081.795.227 1.148a.5.5 0 0 1-.923.383A3.99 3.99 0 0 1 2 12v-1.5a.5.5 0 0 1 .5-.5zm15 2a.5.5 0 0 1 .5.5V14a2 2 0 0 1-2 2h-1.25a.5.5 0 0 1 0-1H16a1 1 0 0 0 1-1v-1.5a.5.5 0 0 1 .5-.5zM4.198 15.043a.5.5 0 0 1 .654-.27c.353.146.74.227 1.148.227h1.25a.5.5 0 0 1 0 1H6a3.99 3.99 0 0 1-1.531-.304.5.5 0 0 1-.27-.653zm5.052.457a.5.5 0 0 1 .5-.5h2.5a.5.5 0 0 1 0 1h-2.5a.5.5 0 0 1-.5-.5z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M13 13.333a.667.667 0 0 1-.667.667H11v-2.5A2.5 2.5 0 0 0 8.5 9H7v-.5a1 1 0 0 1 1-1h5v5.833z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        fillOpacity={0.7}
        d="M13 13.333a.667.667 0 0 1-.667.667H11v-2.5A2.5 2.5 0 0 0 8.5 9H7v-.5a1 1 0 0 1 1-1h5v5.833z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M10.665 9a.665.665 0 0 0-.647.517A2.486 2.486 0 0 0 8.5 9h2.165z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        fillOpacity={0.3}
        d="M10.665 9a.665.665 0 0 0-.647.517A2.486 2.486 0 0 0 8.5 9h2.165z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M11 9H7V7.333C7 6.597 7.597 6 8.333 6H11v3z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M11 9H7V7.333C7 6.597 7.597 6 8.333 6H11v3z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M11 9H7V7.333C7 6.597 7.597 6 8.333 6H11v3z"
      />
      <path
        fill={'url(#' + iconId + '-k)' + ''}
        d="M12.333 6c.368 0 .667.299.667.667v1.666a.667.667 0 0 1-.667.667h-1.666A.667.667 0 0 1 10 8.333V6.667c0-.368.299-.667.667-.667h1.666z"
      />
      <rect
        width={9}
        height={9}
        x={1}
        y={10}
        fill={'url(#' + iconId + '-l)' + ''}
        rx={2}
      />
      <rect
        width={9}
        height={9}
        x={1}
        y={10}
        fill={'url(#' + iconId + '-m)' + ''}
        fillOpacity={0.3}
        rx={2}
      />
      <path
        fill="#fff"
        d="M7.804 17h-1.35l-.85-1.593-.07-.133a4.67 4.67 0 0 1-.044-.118h-.014c-.021.055-.041.1-.06.135l-.066.13L4.47 17H3.196l1.529-2.504L3.301 12h1.333l.754 1.423a4.645 4.645 0 0 1 .147.303h.014l.077-.16c.02-.04.049-.092.083-.157L6.492 12h1.27l-1.445 2.458L7.804 17z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={6.444}
          x2={7.591}
          y1={4}
          y2={16.226}
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
          gradientTransform="matrix(8.44444 9.5 -12.6667 3.5625 7.111 7.125)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-c'}
          x1={7.167}
          x2={8.388}
          y1={4}
          y2={16.211}
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
          gradientTransform="matrix(-12.2578 -6.68056 10.3285 -4.75127 13.998 14.542)"
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
          gradientTransform="matrix(-5.18254 -2.59549 4.01281 -2.00885 4.985 9.847)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#073B10" />
          <stop offset={0.992} stopColor="#084A13" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={8.777}
          x2={10.223}
          y1={10.887}
          y2={10.887}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#52D17C" />
          <stop offset={0.329} stopColor="#4AA647" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={10.193}
          x2={10.193}
          y1={9.958}
          y2={11.248}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29852F" />
          <stop offset={0.5} stopColor="#4AA647" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={7.105}
          x2={11.838}
          y1={10.593}
          y2={7.663}
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
          gradientTransform="matrix(-2.02645 0 0 -6.01107 10.854 8.413)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.292} stopColor="#4EB43B" />
          <stop offset={1} stopColor="#72CC61" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={8.779}
          x2={6.956}
          y1={8.642}
          y2={8.642}
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
          gradientTransform="matrix(-3.38219 -3.13486 2.77388 -3.82234 13.382 9.135)"
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
          gradientTransform="matrix(8.99998 8.99998 -25.62053 25.62053 1 10)"
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
          gradientTransform="matrix(0 6.3 -7.25625 0 5.5 15.4)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.58} stopColor="#33A662" stopOpacity={0} />
          <stop offset={0.974} stopColor="#98F0B0" />
        </radialGradient>
      </defs>
    </svg>
  )
}
