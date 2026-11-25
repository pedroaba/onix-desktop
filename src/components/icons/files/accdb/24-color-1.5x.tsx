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
        fill={'url(#' + iconId + '-d)' + ''}
        d="M24 24c0 1.105-2.687 2-6 2-.34 0-.675-.013-1-.031V23.5a4.49 4.49 0 0 0-1.673-3.5H24v4z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        fillOpacity={0.7}
        d="M24 24c0 1.105-2.687 2-6 2-.34 0-.675-.013-1-.031V23.5a4.49 4.49 0 0 0-1.673-3.5H24v4z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M24 20c0 1.105-2.687 2-6 2-.437 0-.863-.017-1.273-.047A4.502 4.502 0 0 0 12.5 19H12v-3h12v4z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        fillOpacity={0.3}
        d="M24 20c0 1.105-2.687 2-6 2-.437 0-.863-.017-1.273-.047A4.502 4.502 0 0 0 12.5 19H12v-3h12v4z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M24 16c0 1.105-2.687 2-6 2s-6-.895-6-2v-4h12v4z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        fillOpacity={0.4}
        d="M24 16c0 1.105-2.687 2-6 2s-6-.895-6-2v-4h12v4z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M18 14c-3.314 0-6-.895-6-2s2.686-2 6-2 6 .895 6 2-2.686 2-6 2z"
      />
      <rect
        width={15}
        height={15}
        x={1}
        y={20}
        fill={'url(#' + iconId + '-k)' + ''}
        rx={3.5}
      />
      <rect
        width={15}
        height={15}
        x={1}
        y={20}
        fill={'url(#' + iconId + '-l)' + ''}
        fillOpacity={0.5}
        rx={3.5}
      />
      <path
        fill="#fff"
        d="m4.12 32 3.218-9h2.398l3.144 9h-2.13l-.62-1.801H6.838L6.23 32H4.12zm3.18-3.458h2.35l-.958-3.145a16.084 16.084 0 0 0-.094-.307 5.284 5.284 0 0 1-.088-.333h-.05a6.631 6.631 0 0 1-.082.308c-.029.1-.062.21-.1.326l-.977 3.15z"
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
          x1={24}
          x2={-4.463}
          y1={23.272}
          y2={23.272}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9C0D55" />
          <stop offset={0.511} stopColor="#A61727" />
          <stop offset={1} stopColor="#8A1421" />
        </linearGradient>
        <radialGradient
          id={iconId + '-e'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 6 -36.7436 0 9.768 20)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.21} stopColor="#560B14" />
          <stop offset={0.605} stopColor="#560B14" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={24}
          x2={7.396}
          y1={19.272}
          y2={19.272}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F24A9D" />
          <stop offset={0.511} stopColor="#E82C41" />
          <stop offset={1} stopColor="#CA2134" />
        </linearGradient>
        <radialGradient
          id={iconId + '-g'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 6 -21.4338 0 15.698 16)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.21} stopColor="#560B14" />
          <stop offset={0.751} stopColor="#560B14" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={24}
          x2={12}
          y1={15.272}
          y2={15.272}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F97DBD" />
          <stop offset={0.511} stopColor="#FB5B6C" />
          <stop offset={1} stopColor="#F83F54" />
        </linearGradient>
        <radialGradient
          id={iconId + '-i'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 6 -15.491 0 18 12)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.21} stopColor="#FF9FB2" />
          <stop offset={0.634} stopColor="#FF9FB2" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={16.92}
          x2={15.403}
          y1={8.976}
          y2={14.664}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F97DBD" />
          <stop offset={0.902} stopColor="#FF9FB2" />
        </linearGradient>
        <radialGradient
          id={iconId + '-k'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(15 15 -15 15 .998 20)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E82C58" />
          <stop offset={0.939} stopColor="#AA1D2D" />
        </radialGradient>
        <radialGradient
          id={iconId + '-l'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 10.5 -11.9531 0 8.498 29)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.576} stopColor="#FF5778" stopOpacity={0} />
          <stop offset={0.974} stopColor="#FF9FB2" />
        </radialGradient>
      </defs>
    </svg>
  )
}
