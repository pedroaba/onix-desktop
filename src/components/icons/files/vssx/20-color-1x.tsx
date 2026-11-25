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
        d="M3 6a1 1 0 0 1 1-1h10a3 3 0 0 1 3 3v6a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3V6z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 6a1 1 0 0 1 1-1h10a3 3 0 0 1 3 3v6a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3V6z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M10.5 7.5A.5.5 0 0 1 11 7h2.5a.5.5 0 0 1 .5.5V9a.5.5 0 0 1-.5.5H11a.5.5 0 0 1-.5-.5V7.5z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M10.5 11a.5.5 0 0 1 .5-.5h2.5a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5H11a.5.5 0 0 1-.5-.5V11z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M9 7a.5.5 0 0 1 .5.5V9a.497.497 0 0 1-.04.191A2.492 2.492 0 0 0 8.5 9H6V7.5a.5.5 0 0 1 .5-.5H9z"
      />
      <rect width={9} height={9} x={1} y={10} fill="#185ABD" rx={2} />
      <path
        fill="#fff"
        d="m7.853 12-1.725 5H4.851l-1.704-5h1.201l1.058 3.361c.025.08.045.148.06.206l.048.202h.021c.019-.084.034-.153.045-.209.012-.058.03-.129.056-.213L6.687 12h1.166z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={7.167}
          x2={8.388}
          y1={4}
          y2={16.211}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={6.889}
          x2={7.799}
          y1={5}
          y2={15.197}
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
          gradientTransform="matrix(7.38889 7.91667 -11.0833 2.96875 7.472 7.604)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={12.5}
          x2={12.5}
          y1={7}
          y2={9}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#28A8EA" />
          <stop offset={1} stopColor="#1490DF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={12.5}
          x2={12.5}
          y1={11}
          y2={13}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2B7CD3" />
          <stop offset={1} stopColor="#1D59C1" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={8.869}
          x2={8.869}
          y1={7}
          y2={7.124}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#50D9FF" />
          <stop offset={1} stopColor="#28A8EA" />
        </linearGradient>
      </defs>
    </svg>
  )
}
