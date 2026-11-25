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
        d="M26.969 30.969A3.5 3.5 0 0 1 23.5 34H16c-5.523 0-10-4.477-10-10V8.5a3.5 3.5 0 0 1 3.031-3.469A3.5 3.5 0 0 1 12.5 2H23a7 7 0 0 1 7 7v18.5a3.5 3.5 0 0 1-3.031 3.469z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M12.5 3A2.5 2.5 0 0 0 10 5.5V24a6 6 0 0 0 6 6h10.5a2.5 2.5 0 0 0 2.5-2.5V9a6 6 0 0 0-6-6H12.5z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M12.5 3A2.5 2.5 0 0 0 10 5.5V24a6 6 0 0 0 6 6h10.5a2.5 2.5 0 0 0 2.5-2.5V9a6 6 0 0 0-6-6H12.5z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M7 8.5a2.5 2.5 0 0 1 2-2.45V24a7 7 0 0 0 7 7h9.95a2.5 2.5 0 0 1-2.45 2H16a9 9 0 0 1-9-9V8.5z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M7 8.5a2.5 2.5 0 0 1 2-2.45V24a7 7 0 0 0 7 7h9.95a2.5 2.5 0 0 1-2.45 2H16a9 9 0 0 1-9-9V8.5z"
      />
      <rect
        width={15}
        height={15}
        x={1}
        y={20}
        fill={'url(#' + iconId + '-f)' + ''}
        rx={3.5}
      />
      <rect
        width={15}
        height={15}
        x={1}
        y={20}
        fill={'url(#' + iconId + '-g)' + ''}
        fillOpacity={0.8}
        rx={3.5}
      />
      <path
        fill="#fff"
        d="M12.547 32h-2.045l-3.709-5.554a18.423 18.423 0 0 1-.263-.433 3.976 3.976 0 0 1-.163-.314h-.025c.008.159.014.36.019.602.004.243.006.527.006.854V32H4.453v-9h2.184l3.57 5.379c.075.121.148.244.22.37.075.121.144.243.206.364h.026a8.598 8.598 0 0 1-.02-.465 52.425 52.425 0 0 1-.006-.771V23h1.914v9z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M26 23.434c0 .864-.701 1.566-1.566 1.566L17 24.997V23.5a4.502 4.502 0 0 0-3.37-4.357 3.128 3.128 0 0 1 2.263-1.24L26 17.124v6.309z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M19.539 12.184 26 11.938l.04 5.484A1.566 1.566 0 0 1 24.472 19h-4.884l-.05-6.816z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M24.324 8C25.25 8 26 8.75 26 9.675v2.65C26 13.25 25.25 14 24.325 14h-1.15c-.925 0-1.675.75-1.675 1.675v1.65c0 .925-.75 1.675-1.675 1.675h-3.863a2.95 2.95 0 0 0-1.536.432A4.472 4.472 0 0 0 13 19.028l.002-8.067A2.962 2.962 0 0 1 15.964 8h8.36z"
      />
      <path
        fill={'url(#' + iconId + '-k)' + ''}
        d="M24.324 8C25.25 8 26 8.75 26 9.675v2.65C26 13.25 25.25 14 24.325 14h-1.15c-.925 0-1.675.75-1.675 1.675v1.65c0 .925-.75 1.675-1.675 1.675h-3.863a2.95 2.95 0 0 0-1.536.432A4.472 4.472 0 0 0 13 19.028l.002-8.067A2.962 2.962 0 0 1 15.964 8h8.36z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={13.75}
          x2={19.418}
          y1={2}
          y2={33.881}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={13.111}
          x2={18.218}
          y1={3}
          y2={32.963}
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
          gradientTransform="matrix(11.6111 23.75 -17.4167 8.90626 14.028 10.813)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={13.111}
          x2={18.218}
          y1={3}
          y2={32.963}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <radialGradient
          id={iconId + '-e'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(11.6111 23.75 -17.4167 8.90626 14.028 10.813)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <radialGradient
          id={iconId + '-f'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(15 15 -15 15 1 20)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.072} stopColor="#AC13EB" />
          <stop offset={0.879} stopColor="#580087" />
        </radialGradient>
        <radialGradient
          id={iconId + '-g'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 10.5 -12.0938 0 8.5 29)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.585} stopColor="#841FB0" stopOpacity={0} />
          <stop offset={0.969} stopColor="#D373FC" />
        </radialGradient>
        <radialGradient
          id={iconId + '-h'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(22.2009 0 0 10.5252 25.592 26)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.159} stopColor="#A931D8" />
          <stop offset={0.566} stopColor="#6E1996" />
        </radialGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={28.901}
          x2={20.729}
          y1={16.245}
          y2={12.371}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.217} stopColor="#CA59F7" />
          <stop offset={0.888} stopColor="#691A90" />
        </linearGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={26.619}
          x2={12.003}
          y1={11.858}
          y2={11.858}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.807} stopColor="#DE66FF" />
          <stop offset={1} stopColor="#FCB1FF" />
        </linearGradient>
        <radialGradient
          id={iconId + '-k'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-7.03767 12.2361 -20.6491 -12.4078 27.007 7.104)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC7A3" />
          <stop offset={0.831} stopColor="#DE67FD" stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  )
}
