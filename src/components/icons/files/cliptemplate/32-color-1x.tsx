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
        d="M3 6a3 3 0 013-3h17a6 6 0 016 6v17a3 3 0 01-3 3H9a6 6 0 01-6-6z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M3 6a3 3 0 013-3h17a6 6 0 016 6v17a3 3 0 01-3 3H9a6 6 0 01-6-6z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M6.163 27.74a.5.5 0 01.667-.234A5 5 0 009 28h2.429a.5.5 0 010 1H9a6 6 0 01-2.604-.593.5.5 0 01-.233-.668M19.93 28a.5.5 0 010 1h-4.86a.5.5 0 010-1zM28 26v-2.429a.5.5 0 011 0V26a3 3 0 01-3 3h-2.429a.5.5 0 010-1H26a2 2 0 002-2M3 23v-2.429a.5.5 0 011 0V23c0 .778.178 1.514.494 2.17a.5.5 0 01-.901.434A6 6 0 013 23m25-3.071V15.07a.5.5 0 011 0v4.858a.5.5 0 01-1 0m-25-3V12.07a.5.5 0 011 0v4.858a.5.5 0 01-1 0m25-5.5V9a5 5 0 00-.494-2.17.5.5 0 01.901-.434A6 6 0 0129 9v2.429a.5.5 0 01-1 0m-25-3V6a3 3 0 013-3h2.429a.5.5 0 010 1H6a2 2 0 00-2 2v2.429a.5.5 0 01-1 0M23 3a6 6 0 012.605.593.5.5 0 01-.435.901A5 5 0 0023 4h-2.429a.5.5 0 010-1zm-6.071 0a.5.5 0 010 1H12.07a.5.5 0 010-1z"
      />
      <path
        fill="#7611F0"
        d="M9.15 13.419c.15.741.874 1.23 1.618 1.092L21.614 12.5a1.47 1.47 0 001.178-1.744l-.1-.493a1.53 1.53 0 00-1.772-1.197l-10.718 1.988a1.47 1.47 0 00-1.177 1.743z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        fillOpacity={0.9}
        d="M9.15 13.419c.15.741.874 1.23 1.618 1.092L21.614 12.5a1.47 1.47 0 001.178-1.744l-.1-.493a1.53 1.53 0 00-1.772-1.197l-10.718 1.988a1.47 1.47 0 00-1.177 1.743z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        fillOpacity={0.6}
        d="M9.15 13.419c.15.741.874 1.23 1.618 1.092L21.614 12.5a1.47 1.47 0 001.178-1.744l-.1-.493a1.53 1.53 0 00-1.772-1.197l-10.718 1.988a1.47 1.47 0 00-1.177 1.743z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        fillOpacity={0.4}
        d="M9.15 13.419c.15.741.874 1.23 1.618 1.092L21.614 12.5a1.47 1.47 0 001.178-1.744l-.1-.493a1.53 1.53 0 00-1.772-1.197l-10.718 1.988a1.47 1.47 0 00-1.177 1.743z"
      />
      <path
        fill="#BC7FFF"
        d="M8.996 15.807c0 .845.685 1.53 1.531 1.53h10.644c1.012 0 1.833.821 1.833 1.834v.707-4.204c0-.921-.746-1.667-1.667-1.667H10.663c-.92 0-1.667-.746-1.667-1.667v-.67z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M8.996 15.807c0 .845.685 1.53 1.531 1.53h10.644c1.012 0 1.833.821 1.833 1.834v.707-4.204c0-.921-.746-1.667-1.667-1.667H10.663c-.92 0-1.667-.746-1.667-1.667v-.67z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        fillOpacity={0.8}
        d="M8.996 15.807c0 .845.685 1.53 1.531 1.53h10.644c1.012 0 1.833.821 1.833 1.834v.707-4.204c0-.921-.746-1.667-1.667-1.667H10.663c-.92 0-1.667-.746-1.667-1.667v-.67z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M8.996 15.807c0 .845.685 1.53 1.531 1.53h10.644c1.012 0 1.833.821 1.833 1.834v.707-4.204c0-.921-.746-1.667-1.667-1.667H10.663c-.92 0-1.667-.746-1.667-1.667v-.67z"
      />
      <path
        fill="#7611F0"
        d="M8.996 21.003a2 2 0 002 2h10.341c.92 0 1.667-.747 1.667-1.667v-.038c0-.92-.746-1.666-1.667-1.666h-9.873a2.47 2.47 0 01-2.468-2.468z"
      />
      <path
        fill="#A966FF"
        fillOpacity={0.2}
        d="M8.996 21.003a2 2 0 002 2h10.341c.92 0 1.667-.747 1.667-1.667v-.038c0-.92-.746-1.666-1.667-1.666h-9.873a2.47 2.47 0 01-2.468-2.468z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        fillOpacity={0.4}
        d="M8.996 21.003a2 2 0 002 2h10.341c.92 0 1.667-.747 1.667-1.667v-.038c0-.92-.746-1.666-1.667-1.666h-9.873a2.47 2.47 0 01-2.468-2.468z"
      />
      <path
        fill={'url(#' + iconId + '-k)' + ''}
        fillOpacity={0.15}
        d="M8.996 21.003a2 2 0 002 2h10.341c.92 0 1.667-.747 1.667-1.667v-.038c0-.92-.746-1.666-1.667-1.666h-9.873a2.47 2.47 0 01-2.468-2.468z"
      />
      <path
        fill={'url(#' + iconId + '-l)' + ''}
        fillOpacity={0.3}
        d="M8.996 21.003a2 2 0 002 2h10.341c.92 0 1.667-.747 1.667-1.667v-.038c0-.92-.746-1.666-1.667-1.666h-9.873a2.47 2.47 0 01-2.468-2.468z"
      />
      <path
        fill={'url(#' + iconId + '-m)' + ''}
        fillOpacity={0.2}
        d="M8.996 21.003a2 2 0 002 2h10.341c.92 0 1.667-.747 1.667-1.667v-.038c0-.92-.746-1.666-1.667-1.666h-9.873a2.47 2.47 0 01-2.468-2.468z"
      />
      <path
        fill="#974CFF"
        d="M8.996 18.142c0 1.012.82 1.833 1.833 1.833h10.508c.92 0 1.667.746 1.667 1.667v.21-3.204c0-.92-.746-1.666-1.667-1.666H10.83a1.833 1.833 0 01-1.833-1.833v-.977z"
      />
      <path
        fill="#A966FF"
        fillOpacity={0.35}
        d="M8.996 18.142c0 1.012.82 1.833 1.833 1.833h10.508c.92 0 1.667.746 1.667 1.667v.21-3.204c0-.92-.746-1.666-1.667-1.666H10.83a1.833 1.833 0 01-1.833-1.833v-.977z"
      />
      <path
        fill={'url(#' + iconId + '-n)' + ''}
        fillOpacity={0.4}
        d="M8.996 18.142c0 1.012.82 1.833 1.833 1.833h10.508c.92 0 1.667.746 1.667 1.667v.21-3.204c0-.92-.746-1.666-1.667-1.666H10.83a1.833 1.833 0 01-1.833-1.833v-.977z"
      />
      <path
        fill={'url(#' + iconId + '-o)' + ''}
        fillOpacity={0.4}
        d="M8.996 18.142c0 1.012.82 1.833 1.833 1.833h10.508c.92 0 1.667.746 1.667 1.667v.21-3.204c0-.92-.746-1.666-1.667-1.666H10.83a1.833 1.833 0 01-1.833-1.833v-.977z"
      />
      <path
        fill={'url(#' + iconId + '-p)' + ''}
        fillOpacity={0.6}
        d="M8.996 18.142c0 1.012.82 1.833 1.833 1.833h10.508c.92 0 1.667.746 1.667 1.667v.21-3.204c0-.92-.746-1.666-1.667-1.666H10.83a1.833 1.833 0 01-1.833-1.833v-.977z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={10.222}
          x2={13.511}
          y1={3}
          y2={29.311}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-c'}
          x1={11.396}
          x2={14.897}
          y1={3}
          y2={29.256}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={12.816}
          x2={8.995}
          y1={15.522}
          y2={15.522}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BC80FF" stopOpacity={0} />
          <stop offset={0.836} stopColor="#ECB4FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={18.363}
          x2={23.004}
          y1={15.522}
          y2={15.522}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BC7FFF" stopOpacity={0} />
          <stop offset={0.836} stopColor="#ECB4FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={17.985}
          x2={17.512}
          y1={20.586}
          y2={23.166}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#330072" />
          <stop offset={1} stopColor="#7611F0" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-k'}
          x1={12.14}
          x2={12.14}
          y1={20.59}
          y2={24.424}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9136F2" stopOpacity={0} />
          <stop offset={0.836} stopColor="#B76AFF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-l'}
          x1={12.816}
          x2={8.995}
          y1={20.34}
          y2={20.372}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9136F2" stopOpacity={0} />
          <stop offset={0.836} stopColor="#B76AFF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-m'}
          x1={18.786}
          x2={24.885}
          y1={20.375}
          y2={25.026}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9136F2" stopOpacity={0} />
          <stop offset={0.836} stopColor="#B76AFF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-n'}
          x1={17.325}
          x2={17.115}
          y1={14.172}
          y2={18.848}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6200D5" />
          <stop offset={1} stopColor="#3E008D" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-o'}
          x1={19.184}
          x2={23.005}
          y1={17.927}
          y2={17.927}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9B54FD" stopOpacity={0} />
          <stop offset={0.836} stopColor="#ECB4FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-p'}
          x1={12.816}
          x2={8.995}
          y1={17.927}
          y2={17.927}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#944EF6" stopOpacity={0} />
          <stop offset={0.836} stopColor="#ECB4FF" />
        </linearGradient>
        <radialGradient
          id={iconId + '-b'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(13.7222 20.5833 -20.5833 7.71875 11.306 9.77)"
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
          gradientTransform="matrix(-11.4251 6.09419 7.62467 13.2519 16.081 2.708)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.625} stopColor="#974CFF" />
          <stop offset={1} stopColor="#5000B0" />
        </radialGradient>
        <radialGradient
          id={iconId + '-e'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-10.4141 4.68448 11.3142 22.9603 23.2 7.938)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.147} stopColor="#DE91FF" />
          <stop offset={0.678} stopColor="#D373FC" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-f'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-4.29421 5.85956 17.4366 7.35857 17.286 5.836)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC7A3" />
          <stop offset={0.831} stopColor="#DE67FD" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-i'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-4.57116 7.68199 9.22906 18.144 20.571 5.711)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC7A3" />
          <stop offset={0.831} stopColor="#DE67FD" stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  )
}
