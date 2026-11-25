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
        d="M2 10a4 4 0 014-4h24a8 8 0 018 8v16a4 4 0 01-4 4H10a8 8 0 01-8-8z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M3 10a3 3 0 013-3h24a7 7 0 017 7v16a3 3 0 01-3 3H10a7 7 0 01-7-7z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 10a3 3 0 013-3h24a7 7 0 017 7v16a3 3 0 01-3 3H10a7 7 0 01-7-7z"
      />
      <path
        fill="#F6F6F6"
        d="M16.242 21.125a1.628 1.628 0 011.569 2.063l-1.092 3.95a1.63 1.63 0 01-1.35 1.196l-.002-.001-2.163.32-.9 3.274a1.67 1.67 0 01-1.348 1.209h.001l-.053.01-.01.002h-.01l-2.03.295L7.888 37a2.15 2.15 0 01-1.78 1.564l-1.81.25H4.3a4.7 4.7 0 01-1.316.02l-.011-.001-.02-.002v-.002A3.214 3.214 0 01.27 34.686l.066-.246c.064-.284.147-.566.214-.783l.805-2.96-.007-.003.008-.033.625-2.264.123-.448.07-.257v-.002l.634-2.288a3.83 3.83 0 013.08-2.764l.011-.002 10.119-1.495.01-.002.011-.001q.104-.013.204-.013"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        fillRule="evenodd"
        d="m1.77 32.989-.23.844a9 9 0 00-.271 1.02 2.216 2.216 0 001.826 2.987 3.7 3.7 0 001.06-.016l1.815-.25a1.15 1.15 0 00.953-.838l1.25-4.59z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M3.541 33.207c-1.914.296-2.307 1.74-2.307 1.74l1.833-6.735 9.579-1.296-1.307 4.745a.67.67 0 01-.546.49l-.053.008-7.252 1.057z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        fillOpacity={0.8}
        d="M3.541 33.207c-1.914.296-2.307 1.74-2.307 1.74l1.833-6.735 9.579-1.296-1.307 4.745a.67.67 0 01-.546.49l-.053.008-7.252 1.057z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="m4.628 28.91 10.604-1.567a.63.63 0 00.521-.46l1.094-3.961a.628.628 0 00-.685-.792L6.046 23.625A2.83 2.83 0 003.77 25.67l-1.46 5.289c.293-1.07.474-1.715 2.317-2.049"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="m4.628 28.91 10.604-1.567a.63.63 0 00.521-.46l1.094-3.961a.628.628 0 00-.685-.792L6.046 23.625A2.83 2.83 0 003.77 25.67l-1.46 5.289c.293-1.07.474-1.715 2.317-2.049"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        fillOpacity={0.4}
        d="m4.628 28.91 10.604-1.567a.63.63 0 00.521-.46l1.094-3.961a.628.628 0 00-.685-.792L6.046 23.625A2.83 2.83 0 003.77 25.67l-1.46 5.289c.293-1.07.474-1.715 2.317-2.049"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M4.628 28.91c-1.536.277-1.917.772-2.171 1.547l-1.223 4.491s.391-1.43 2.282-1.736l7.224-1.052.054-.009a.67.67 0 00.546-.49l1.074-3.902z"
      />
      <path
        fill={'url(#' + iconId + '-k)' + ''}
        fillOpacity={0.2}
        d="M4.628 28.91c-1.536.277-1.917.772-2.171 1.547l-1.223 4.491s.391-1.43 2.282-1.736l7.224-1.052.054-.009a.67.67 0 00.546-.49l1.074-3.902z"
      />
      <path
        fill={'url(#' + iconId + '-l)' + ''}
        fillRule="evenodd"
        d="M3.517 33.213c-1.598.258-2.123 1.316-2.248 1.639a2.218 2.218 0 001.826 2.988q.466.07 1.06-.016l1.815-.25a1.15 1.15 0 00.953-.838l1.14-4.185z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-m)' + ''}
        d="M27.207 22.463a.64.64 0 010 1.074l-6.618 4.047a1.12 1.12 0 01-.792.148h-.003l-.115-.029a1 1 0 01-.128-.045l-.01-.005q-.004-.003-.009-.004l-.12-.065-2.41-1.473.433-1.564 1.454.89.025.015.025.014.122.065.019.01.014.008.022.01.007.003.012.004.016.008q.129.054.24.087l.027.008.025.007.115.027.117.029h.06c.47.06.956-.039 1.375-.295l5.48-3.35z"
      />
      <path
        fill={'url(#' + iconId + '-n)' + ''}
        d="m19.271 25.615.012.003-.006-.002-.023-.006z"
      />
      <path
        fill={'url(#' + iconId + '-o)' + ''}
        d="m19.236 25.604-.025-.008-.006-.003z"
      />
      <path
        fill={'url(#' + iconId + '-p)' + ''}
        d="M27.207 19.463a.64.64 0 010 1.074l-6.618 4.047a1.12 1.12 0 01-.792.148h-.003l-.115-.029a1 1 0 01-.128-.045l-.01-.005q-.004-.003-.009-.004l-.12-.065-1.701-1.04.1-.356a1.626 1.626 0 00-1.773-2.05l-.01.001-.011.002-1.802.266-1.422-.87a.64.64 0 010-1.074l.615-.377 5.48 3.35.026.017.025.013.122.065.019.01.014.008.022.01.007.003.012.004.016.008q.129.054.24.087l.027.008.025.007.115.027.117.029h.06c.47.06.956-.039 1.375-.295l5.48-3.35z"
      />
      <path
        fill={'url(#' + iconId + '-q)' + ''}
        d="m19.271 22.615.012.003-.006-.002-.023-.006z"
      />
      <path
        fill={'url(#' + iconId + '-r)' + ''}
        d="m19.236 22.604-.025-.008-.006-.003z"
      />
      <path
        fill={'url(#' + iconId + '-s)' + ''}
        d="M19.411 12.417a1.12 1.12 0 011.178 0l6.618 4.046a.64.64 0 010 1.074l-6.618 4.047a1.12 1.12 0 01-.792.148h-.003l-.115-.029a1 1 0 01-.128-.045l-.01-.006-.009-.003-.12-.065-6.62-4.047a.64.64 0 010-1.074z"
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
        <linearGradient
          id={iconId + '-d'}
          x1={4.649}
          x2={4.649}
          y1={37.871}
          y2={32.145}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.056} stopColor="#2AAC94" />
          <stop offset={0.155} stopColor="#239C87" />
          <stop offset={0.372} stopColor="#177E71" />
          <stop offset={0.588} stopColor="#0E6961" />
          <stop offset={0.799} stopColor="#095D57" />
          <stop offset={1} stopColor="#085954" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={11.883}
          x2={6.355}
          y1={33.717}
          y2={27.704}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.042} stopColor="#ABE88E" />
          <stop offset={0.549} stopColor="#2AAA92" />
          <stop offset={0.906} stopColor="#117865" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={-1.703}
          x2={3.558}
          y1={33.424}
          y2={31.63}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6AD6F9" />
          <stop offset={1} stopColor="#6AD6F9" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={2.312}
          x2={16.316}
          y1={26.541}
          y2={26.541}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.043} stopColor="#25FFD4" />
          <stop offset={0.874} stopColor="#55DDB9" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={2.312}
          x2={14.926}
          y1={24.584}
          y2={30.442}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6AD6F9" />
          <stop offset={0.23} stopColor="#60E9D0" />
          <stop offset={0.651} stopColor="#6DE9BB" />
          <stop offset={0.994} stopColor="#ABE88E" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={3.479}
          x2={10.338}
          y1={25.68}
          y2={27.197}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0} />
          <stop offset={0.459} stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={5.752}
          x2={5.914}
          y1={31.556}
          y2={26.746}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.205} stopColor="#063D3B" stopOpacity={0} />
          <stop offset={0.586} stopColor="#063D3B" stopOpacity={0.237} />
          <stop offset={0.872} stopColor="#063D3B" stopOpacity={0.75} />
        </linearGradient>
        <linearGradient
          id={iconId + '-k'}
          x1={0.656}
          x2={6.518}
          y1={31.078}
          y2={32.18}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0} />
          <stop offset={0.459} stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-l'}
          x1={4.891}
          x2={3.748}
          y1={36.285}
          y2={30.692}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.064} stopColor="#063D3B" stopOpacity={0} />
          <stop offset={0.17} stopColor="#063D3B" stopOpacity={0.135} />
          <stop offset={0.562} stopColor="#063D3B" stopOpacity={0.599} />
          <stop offset={0.85} stopColor="#063D3B" stopOpacity={0.9} />
          <stop offset={1} stopColor="#063D3B" />
        </linearGradient>
        <linearGradient
          id={iconId + '-m'}
          x1={12.5}
          x2={27.992}
          y1={12.251}
          y2={27.242}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7751B8" />
          <stop offset={1} stopColor="#5A409C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-n'}
          x1={12.5}
          x2={27.992}
          y1={12.251}
          y2={27.242}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7751B8" />
          <stop offset={1} stopColor="#5A409C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-o'}
          x1={12.5}
          x2={27.992}
          y1={12.251}
          y2={27.242}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7751B8" />
          <stop offset={1} stopColor="#5A409C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-p'}
          x1={12.5}
          x2={27.992}
          y1={12.251}
          y2={27.242}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7751B8" />
          <stop offset={1} stopColor="#5A409C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-q'}
          x1={12.5}
          x2={27.992}
          y1={12.251}
          y2={27.242}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7751B8" />
          <stop offset={1} stopColor="#5A409C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-r'}
          x1={12.5}
          x2={27.992}
          y1={12.251}
          y2={27.242}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7751B8" />
          <stop offset={1} stopColor="#5A409C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-s'}
          x1={12.5}
          x2={27.992}
          y1={12.251}
          y2={27.242}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7751B8" />
          <stop offset={1} stopColor="#5A409C" />
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
      </defs>
    </svg>
  )
}
