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
        d="M3 5a2 2 0 0 1 2-2h8a4 4 0 0 1 4 4v8a2 2 0 0 1-2 2H7a4 4 0 0 1-4-4V5z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M4 5a1 1 0 0 1 1-1h8a3 3 0 0 1 3 3v8a1 1 0 0 1-1 1H7a3 3 0 0 1-3-3V5z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M4 5a1 1 0 0 1 1-1h8a3 3 0 0 1 3 3v8a1 1 0 0 1-1 1H7a3 3 0 0 1-3-3V5z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M12.064 6.566A.821.821 0 0 0 11.287 6h-.506a.824.824 0 0 0-.806.679l-.524 2.825.26-.905A.822.822 0 0 1 10.5 8h1.619l.7.93.623-.93h-.31a.821.821 0 0 1-.777-.566l-.29-.868z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M8.033 13.43c.112.34.425.57.778.57h.825a.826.826 0 0 0 .82-.82l.04-2.532-.216.753a.822.822 0 0 1-.787.599H7.867l-.692-.62-.51.62h.307c.353 0 .666.23.778.57l.283.86z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M11.125 6h-3.28c-.938 0-1.5 1.258-1.876 2.517-.444 1.491-1.025 3.485.657 3.485h1.512a.822.822 0 0 0 .79-.604c.24-.857.691-2.454 1.043-3.659.172-.59.316-1.098.536-1.414A.737.737 0 0 1 11.125 6z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M11.125 6h-3.28c-.938 0-1.5 1.258-1.876 2.517-.444 1.491-1.025 3.485.657 3.485h1.512a.822.822 0 0 0 .79-.604c.24-.857.691-2.454 1.043-3.659.172-.59.316-1.098.536-1.414A.737.737 0 0 1 11.125 6z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M8.875 14h3.281c.937 0 1.5-1.258 1.875-2.517C14.475 9.993 15.056 8 13.375 8h-1.513a.822.822 0 0 0-.79.604c-.24.856-.691 2.453-1.042 3.658-.173.59-.316 1.098-.537 1.414a.737.737 0 0 1-.618.325z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M8.875 14h3.281c.937 0 1.5-1.258 1.875-2.517C14.475 9.993 15.056 8 13.375 8h-1.513a.822.822 0 0 0-.79.604c-.24.856-.691 2.453-1.042 3.658-.173.59-.316 1.098-.537 1.414a.737.737 0 0 1-.618.325z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={7.521}
          x2={9.406}
          y1={3}
          y2={17.138}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={7.333}
          x2={8.851}
          y1={4}
          y2={16.144}
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
          gradientTransform="matrix(6.33333 9.5 -9.5 3.5625 7.833 7.125)"
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
          gradientTransform="matrix(-2.26121 -2.85987 -2.44138 2.39876 12.86 9.527)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.096} stopColor="#00AEFF" />
          <stop offset={0.773} stopColor="#2253CE" />
          <stop offset={1} stopColor="#0736C4" />
        </radialGradient>
        <radialGradient
          id={iconId + '-e'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(2.00375 2.52755 2.36538 -2.06303 7.36 11.752)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFB657" />
          <stop offset={0.634} stopColor="#FF5F3D" />
          <stop offset={0.923} stopColor="#C02B3C" />
        </radialGradient>
        <radialGradient
          id={iconId + '-f'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-.29725 -5.31808 29.4063 -1.69594 7.763 12)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.03} stopColor="#FFC800" />
          <stop offset={0.31} stopColor="#98BD42" />
          <stop offset={0.49} stopColor="#52B471" />
          <stop offset={0.844} stopColor="#0D91E1" />
        </radialGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={8.057}
          x2={8.321}
          y1={6}
          y2={12.002}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3DCBFF" />
          <stop offset={0.247} stopColor="#0588F7" stopOpacity={0} />
        </linearGradient>
        <radialGradient
          id={iconId + '-h'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-2.59201 7.52721 -8.8216 -3.32213 13.543 7.411)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.066} stopColor="#8C48FF" />
          <stop offset={0.5} stopColor="#F2598A" />
          <stop offset={0.896} stopColor="#FFB152" />
        </radialGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={13.802}
          x2={13.799}
          y1={7.632}
          y2={9.267}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.058} stopColor="#F8ADFA" />
          <stop offset={0.708} stopColor="#A86EDD" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  )
}
