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
        d="M9 8.5A4.5 4.5 0 0113.5 4H30a9 9 0 019 9v26.5a4.5 4.5 0 01-4.5 4.5h-21A4.5 4.5 0 019 39.5z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M38 35.5a3.5 3.5 0 01-3.5 3.5h-21a.5.5 0 000 1h21a4.49 4.49 0 003.5-1.673V39.5a3.5 3.5 0 01-3.5 3.5h-21a3.5 3.5 0 110-7h21a4.5 4.5 0 003.5-1.67z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M38 35.5a3.5 3.5 0 01-3.5 3.5h-21a.5.5 0 000 1h21a4.49 4.49 0 003.5-1.673V39.5a3.5 3.5 0 01-3.5 3.5h-21a3.5 3.5 0 110-7h21a4.5 4.5 0 003.5-1.67z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M30 5a8 8 0 018 8v18.5a3.5 3.5 0 01-3.5 3.5h-21a4.5 4.5 0 00-3.5 1.672V8.5A3.5 3.5 0 0113.5 5z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M30 5a8 8 0 018 8v18.5a3.5 3.5 0 01-3.5 3.5h-21a4.5 4.5 0 00-3.5 1.672V8.5A3.5 3.5 0 0113.5 5z"
      />
      <rect
        width={8}
        height={5}
        x={15}
        y={11}
        fill={'url(#' + iconId + '-f)' + ''}
        rx={2}
      />
      <rect
        width={8}
        height={5}
        x={25}
        y={11}
        fill={'url(#' + iconId + '-g)' + ''}
        rx={2}
      />
      <rect
        width={8}
        height={5}
        x={15}
        y={18}
        fill={'url(#' + iconId + '-h)' + ''}
        rx={2}
      />
      <rect
        width={8}
        height={5}
        x={25}
        y={18}
        fill={'url(#' + iconId + '-i)' + ''}
        rx={2}
      />
      <rect
        width={8}
        height={5}
        x={25}
        y={25}
        fill={'url(#' + iconId + '-j)' + ''}
        rx={2}
      />
      <rect
        width={20}
        height={20}
        x={3}
        y={25}
        fill={'url(#' + iconId + '-k)' + ''}
        rx={4.5}
      />
      <rect
        width={20}
        height={20}
        x={3}
        y={25}
        fill={'url(#' + iconId + '-l)' + ''}
        fillOpacity={0.6}
        rx={4.5}
      />
      <path
        fill="#fff"
        d="m8.486 38.522 2.271-1.15q.385.753 1.002 1.11.627.356 1.37.356.826 0 1.26-.324.435-.331.435-.996 0-.518-.418-.874-.417-.365-1.478-.55-2.02-.357-2.939-1.248-.91-.89-.91-2.218 0-1.653 1.202-2.64Q11.484 29 13.455 29q1.328 0 2.338.526 1.01.527 1.603 1.506l-2.22 1.11q-.368-.55-.794-.794-.426-.25-1.069-.25-.768 0-1.168.323a1.04 1.04 0 00-.393.842q0 .445.376.786.384.331 1.536.542 1.937.357 2.889 1.296.96.93.96 2.356 0 1.733-1.144 2.745T13.104 41q-1.537 0-2.772-.648-1.228-.655-1.846-1.83"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={18.688}
          x2={25.772}
          y1={4}
          y2={43.852}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={17.778}
          x2={24.218}
          y1={5}
          y2={42.963}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={17.778}
          x2={24.218}
          y1={5}
          y2={42.963}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={21.4}
          x2={21.4}
          y1={11}
          y2={31}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00E3DF" />
          <stop offset={0.5} stopColor="#0097A8" />
          <stop offset={1} stopColor="#007791" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={31.4}
          x2={31.4}
          y1={11}
          y2={31}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00E3DF" />
          <stop offset={0.5} stopColor="#0097A8" />
          <stop offset={1} stopColor="#007791" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={21.4}
          x2={21.4}
          y1={11.333}
          y2={29.667}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00E3DF" />
          <stop offset={0.5} stopColor="#0097A8" />
          <stop offset={1} stopColor="#007791" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={31}
          x2={31}
          y1={11.333}
          y2={29.667}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00E3DF" />
          <stop offset={0.5} stopColor="#0097A8" />
          <stop offset={1} stopColor="#007791" />
        </linearGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={31.4}
          x2={31.4}
          y1={11.667}
          y2={30}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00E3DF" />
          <stop offset={0.5} stopColor="#0097A8" />
          <stop offset={1} stopColor="#007791" />
        </linearGradient>
        <radialGradient
          id={iconId + '-c'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(14.7778 30.0833 -22.1667 11.2812 18.944 14.896)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <radialGradient
          id={iconId + '-e'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(14.7778 30.0833 -22.1667 11.2812 18.944 14.896)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <radialGradient
          id={iconId + '-k'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="rotate(45 -28.678 16.121)scale(28.2843)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.063} stopColor="#00B6BD" />
          <stop offset={0.89} stopColor="#00495C" />
        </radialGradient>
        <radialGradient
          id={iconId + '-l'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 14 -15.9375 0 13 37)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.567} stopColor="#1E8581" stopOpacity={0} />
          <stop offset={0.974} stopColor="#1ECBE6" />
        </radialGradient>
      </defs>
    </svg>
  )
}
