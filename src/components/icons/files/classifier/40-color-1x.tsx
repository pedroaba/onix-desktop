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
        d="M6 6a4 4 0 0 1 4-4h16a8 8 0 0 1 8 8v24a4 4 0 0 1-4 4H14a8 8 0 0 1-8-8V6z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M7 6a3 3 0 0 1 3-3h16a7 7 0 0 1 7 7v24a3 3 0 0 1-3 3H14a7 7 0 0 1-7-7V6z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M7 6a3 3 0 0 1 3-3h16a7 7 0 0 1 7 7v24a3 3 0 0 1-3 3H14a7 7 0 0 1-7-7V6z"
      />
      <path
        fill="#5E438F"
        d="M12.53 22.906a.569.569 0 0 0-.377.187.596.596 0 0 0 .178.93l8.03 3.883a.97.97 0 0 0 .896-.032l6.61-3.733a.257.257 0 0 0 .06-.397.245.245 0 0 0-.13-.072L20.8 22.277l-8.261.63h-.01z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M12.536 22.906a.569.569 0 0 0-.378.187.596.596 0 0 0 .178.93l8.03 3.883a.97.97 0 0 0 .896-.032l6.61-3.733a.25.25 0 0 0 .103-.11.258.258 0 0 0-.043-.287.245.245 0 0 0-.13-.072l-6.996-1.395-8.262.63h-.008z"
        style={{
          mixBlendMode: 'multiply',
        }}
      />
      <path
        fill="#159CA2"
        d="M27.546 13.51a.79.79 0 0 0 .41-.977.82.82 0 0 0-.362-.425c-.167-.095-.362-.129-.55-.095l-14.637 2.3a.479.479 0 0 0-.405.474v1.309a.48.48 0 0 0 .318.452l5.062 1.798 10.15-4.828.014-.009z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="m27.546 13.51-.051.026-10.113 4.811-4.978 2.362-.084.04a.56.56 0 0 0-.318.503v2.228a.559.559 0 0 1 .515-.558h.009l8.008-.624 6.54-.51.185-.014a.8.8 0 0 0 .737-.799V12.8a.786.786 0 0 1-.45.712z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M27.546 13.51a.79.79 0 0 0 .41-.977.82.82 0 0 0-.362-.425c-.167-.095-.362-.129-.55-.095l-14.637 2.3a.479.479 0 0 0-.405.474v1.309a.48.48 0 0 0 .318.452l5.062 1.798 10.15-4.828.014-.009z"
        style={{
          mixBlendMode: 'multiply',
        }}
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={15.042}
          x2={21.203}
          y1={2}
          y2={37.944}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={14.222}
          x2={19.786}
          y1={3}
          y2={37.035}
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
          gradientTransform="matrix(13.72225 26.91667 -20.42161 10.41103 15.306 11.854)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={24.012}
          x2={12.283}
          y1={25.761}
          y2={21.266}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5E438F" stopOpacity={0} />
          <stop offset={0.99} stopColor="#5E438F" stopOpacity={0.7} />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={12.002}
          x2={27.996}
          y1={18.139}
          y2={18.139}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4AA5E8" />
          <stop offset={1} stopColor="#48E6F3" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={11.979}
          x2={28.187}
          y1={14.253}
          y2={15.699}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#159CA2" stopOpacity={0} />
          <stop offset={0.99} stopColor="#159CA2" stopOpacity={0.8} />
        </linearGradient>
      </defs>
    </svg>
  )
}
