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
        d="M4 7.5A3.5 3.5 0 017.5 4H25a7 7 0 017 7v17.5a3.5 3.5 0 01-3.5 3.5H11a7 7 0 01-7-7z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M4 7.5A3.5 3.5 0 017.5 4H25a7 7 0 017 7v17.5a3.5 3.5 0 01-3.5 3.5H11a7 7 0 01-7-7z"
      />
      <path
        stroke={'url(#' + iconId + '-c)' + ''}
        strokeDasharray="5 3.5"
        strokeLinecap="round"
        d="M4.5 7.5a3 3 0 013-3H25a6.5 6.5 0 016.5 6.5v17.5a3 3 0 01-3 3H11A6.5 6.5 0 014.5 25z"
      />
      <path
        fill="#7611F0"
        d="M10.237 14.738c.175.828.99 1.367 1.82 1.206l12.647-2.458a1.645 1.645 0 001.3-1.962l-.169-.8a1.71 1.71 0 00-1.993-1.321l-12.504 2.43a1.645 1.645 0 00-1.3 1.962z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        fillOpacity={0.9}
        d="M10.237 14.738c.175.828.99 1.367 1.82 1.206l12.647-2.458a1.645 1.645 0 001.3-1.962l-.169-.8a1.71 1.71 0 00-1.993-1.321l-12.504 2.43a1.645 1.645 0 00-1.3 1.962z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        fillOpacity={0.6}
        d="M10.237 14.738c.175.828.99 1.367 1.82 1.206l12.647-2.458a1.645 1.645 0 001.3-1.962l-.169-.8a1.71 1.71 0 00-1.993-1.321l-12.504 2.43a1.645 1.645 0 00-1.3 1.962z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        fillOpacity={0.4}
        d="M10.237 14.738c.175.828.99 1.367 1.82 1.206l12.647-2.458a1.645 1.645 0 001.3-1.962l-.169-.8a1.71 1.71 0 00-1.993-1.321l-12.504 2.43a1.645 1.645 0 00-1.3 1.962z"
      />
      <path
        fill="#BC7FFF"
        d="M10.004 17.278c0 .945.767 1.712 1.712 1.712H24.04a2.05 2.05 0 012.05 2.05v.791-4.702c0-1.03-.835-1.864-1.864-1.864H11.868a1.864 1.864 0 01-1.864-1.864v-.75z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M10.004 17.278c0 .945.767 1.712 1.712 1.712H24.04a2.05 2.05 0 012.05 2.05v.791-4.702c0-1.03-.835-1.864-1.864-1.864H11.868a1.864 1.864 0 01-1.864-1.864v-.75z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        fillOpacity={0.8}
        d="M10.004 17.278c0 .945.767 1.712 1.712 1.712H24.04a2.05 2.05 0 012.05 2.05v.791-4.702c0-1.03-.835-1.864-1.864-1.864H11.868a1.864 1.864 0 01-1.864-1.864v-.75z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M10.004 17.278c0 .945.767 1.712 1.712 1.712H24.04a2.05 2.05 0 012.05 2.05v.791-4.702c0-1.03-.835-1.864-1.864-1.864H11.868a1.864 1.864 0 01-1.864-1.864v-.75z"
      />
      <path
        fill="#7611F0"
        d="M10.004 23.765a2.237 2.237 0 002.237 2.237h11.985c1.03 0 1.864-.835 1.864-1.864v-1.072c0-1.03-.835-1.864-1.864-1.864H12.71a2.707 2.707 0 01-2.707-2.707z"
      />
      <path
        fill="#A966FF"
        fillOpacity={0.2}
        d="M10.004 23.765a2.237 2.237 0 002.237 2.237h11.985c1.03 0 1.864-.835 1.864-1.864v-1.072c0-1.03-.835-1.864-1.864-1.864H12.71a2.707 2.707 0 01-2.707-2.707z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        fillOpacity={0.4}
        d="M10.004 23.765a2.237 2.237 0 002.237 2.237h11.985c1.03 0 1.864-.835 1.864-1.864v-1.072c0-1.03-.835-1.864-1.864-1.864H12.71a2.707 2.707 0 01-2.707-2.707z"
      />
      <path
        fill={'url(#' + iconId + '-k)' + ''}
        fillOpacity={0.15}
        d="M10.004 23.765a2.237 2.237 0 002.237 2.237h11.985c1.03 0 1.864-.835 1.864-1.864v-1.072c0-1.03-.835-1.864-1.864-1.864H12.71a2.707 2.707 0 01-2.707-2.707z"
      />
      <path
        fill={'url(#' + iconId + '-l)' + ''}
        fillOpacity={0.3}
        d="M10.004 23.765a2.237 2.237 0 002.237 2.237h11.985c1.03 0 1.864-.835 1.864-1.864v-1.072c0-1.03-.835-1.864-1.864-1.864H12.71a2.707 2.707 0 01-2.707-2.707z"
      />
      <path
        fill={'url(#' + iconId + '-m)' + ''}
        fillOpacity={0.2}
        d="M10.004 23.765a2.237 2.237 0 002.237 2.237h11.985c1.03 0 1.864-.835 1.864-1.864v-1.072c0-1.03-.835-1.864-1.864-1.864H12.71a2.707 2.707 0 01-2.707-2.707z"
      />
      <path
        fill="#974CFF"
        d="M10.004 20.37a2.05 2.05 0 002.05 2.05h12.172c1.03 0 1.864.836 1.864 1.865v.235-3.82a1.863 1.863 0 00-1.864-1.862H12.054a2.05 2.05 0 01-2.05-2.05v-.705z"
      />
      <path
        fill="#A966FF"
        fillOpacity={0.35}
        d="M10.004 20.37a2.05 2.05 0 002.05 2.05h12.172c1.03 0 1.864.836 1.864 1.865v.235-3.82a1.863 1.863 0 00-1.864-1.862H12.054a2.05 2.05 0 01-2.05-2.05v-.705z"
      />
      <path
        fill={'url(#' + iconId + '-n)' + ''}
        fillOpacity={0.4}
        d="M10.004 20.37a2.05 2.05 0 002.05 2.05h12.172c1.03 0 1.864.836 1.864 1.865v.235-3.82a1.863 1.863 0 00-1.864-1.862H12.054a2.05 2.05 0 01-2.05-2.05v-.705z"
      />
      <path
        fill={'url(#' + iconId + '-o)' + ''}
        fillOpacity={0.4}
        d="M10.004 20.37a2.05 2.05 0 002.05 2.05h12.172c1.03 0 1.864.836 1.864 1.865v.235-3.82a1.863 1.863 0 00-1.864-1.862H12.054a2.05 2.05 0 01-2.05-2.05v-.705z"
      />
      <path
        fill={'url(#' + iconId + '-p)' + ''}
        fillOpacity={0.6}
        d="M10.004 20.37a2.05 2.05 0 002.05 2.05h12.172c1.03 0 1.864.836 1.864 1.865v.235-3.82a1.863 1.863 0 00-1.864-1.862H12.054a2.05 2.05 0 01-2.05-2.05v-.705z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={11.778}
          x2={15.32}
          y1={4}
          y2={32.335}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-c'}
          x1={13.219}
          x2={16.854}
          y1={4.5}
          y2={31.765}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={14.391}
          x2={10.003}
          y1={16.959}
          y2={16.959}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BC80FF" stopOpacity={0} />
          <stop offset={0.836} stopColor="#ECB4FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={20.761}
          x2={26.09}
          y1={16.959}
          y2={16.959}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BC7FFF" stopOpacity={0} />
          <stop offset={0.836} stopColor="#ECB4FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={20.326}
          x2={19.83}
          y1={22.249}
          y2={25.088}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#330072" />
          <stop offset={1} stopColor="#7611F0" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-k'}
          x1={13.614}
          x2={13.614}
          y1={22.254}
          y2={26.459}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9136F2" stopOpacity={0} />
          <stop offset={0.836} stopColor="#B76AFF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-l'}
          x1={14.391}
          x2={10.003}
          y1={21.98}
          y2={22.018}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9136F2" stopOpacity={0} />
          <stop offset={0.836} stopColor="#B76AFF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-m'}
          x1={21.247}
          x2={28.011}
          y1={22.018}
          y2={27.419}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9136F2" stopOpacity={0} />
          <stop offset={0.836} stopColor="#B76AFF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-n'}
          x1={19.568}
          x2={19.34}
          y1={15.931}
          y2={21.16}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6200D5" />
          <stop offset={1} stopColor="#3E008D" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-o'}
          x1={21.704}
          x2={26.091}
          y1={20.13}
          y2={20.13}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9B54FD" stopOpacity={0} />
          <stop offset={0.836} stopColor="#ECB4FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-p'}
          x1={14.391}
          x2={10.003}
          y1={20.13}
          y2={20.13}
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
          gradientTransform="matrix(14.7778 22.1667 -22.1667 8.3125 12.944 11.292)"
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
          gradientTransform="matrix(-13.1392 7.29731 9.05909 15.7384 18.07 1.868)"
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
          gradientTransform="matrix(-11.9911 5.6158 13.498 27.2761 26.407 8.062)"
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
          gradientTransform="matrix(-4.87862 6.98963 20.332 8.68658 19.518 5.585)"
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
          gradientTransform="matrix(-5.24935 8.5917 10.5983 20.2926 23.296 5.987)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC7A3" />
          <stop offset={0.831} stopColor="#DE67FD" stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  )
}
