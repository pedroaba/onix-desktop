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
        d="M4 13.5A4.5 4.5 0 018.5 9H35a9 9 0 019 9v16.5a4.5 4.5 0 01-4.5 4.5H13a9 9 0 01-9-9z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M5 13.5A3.5 3.5 0 018.5 10H35a8 8 0 018 8v16.5a3.5 3.5 0 01-3.5 3.5H13a8 8 0 01-8-8z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M5 13.5A3.5 3.5 0 018.5 10H35a8 8 0 018 8v16.5a3.5 3.5 0 01-3.5 3.5H13a8 8 0 01-8-8z"
      />
      <path
        fill="#FCFCFC"
        fillRule="evenodd"
        d="M21.046 23.25a1.698 1.698 0 011.636 2.151l-1.216 4.402-.001-.001a1.7 1.7 0 01-1.405 1.237h-.001l-2.476.364-1.018 3.702h.001a1.75 1.75 0 01-1.412 1.271l.001.002-.06.01-.017.002-2.327.338-1.094 4.02a2.28 2.28 0 01-1.886 1.657l-2.01.278a5.1 5.1 0 01-1.433.021l-.02-.002h-.012a3.46 3.46 0 01-3.045-3.437c0-.358.058-.703.16-1.03h-.004l1.206-4.431-.01-.003.038-.135 1.584-5.743a4.14 4.14 0 013.333-2.993l.011-.002 11.242-1.661.011-.002.011-.001q.094-.013.213-.014M5.89 33.099q-.074.157-.133.333a3 3 0 01.133-.333"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        fillRule="evenodd"
        d="m4.968 36.32-.257.939c-.095.3-.229.74-.301 1.133a2.462 2.462 0 002.029 3.319c.346.05.738.047 1.177-.018l2.018-.278a1.28 1.28 0 001.059-.93l1.388-5.101z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M6.935 36.563c-2.126.33-2.563 1.935-2.563 1.935l2.037-7.484 10.642-1.44-1.451 5.272a.75.75 0 01-.607.544l-.06.01-8.057 1.173z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        fillOpacity={0.8}
        d="M6.935 36.563c-2.126.33-2.563 1.935-2.563 1.935l2.037-7.484 10.642-1.44-1.451 5.272a.75.75 0 01-.607.544l-.06.01-8.057 1.173z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="m8.142 31.788 11.782-1.74a.7.7 0 00.578-.512l1.216-4.4a.697.697 0 00-.76-.88l-11.242 1.66a3.14 3.14 0 00-2.527 2.272l-1.622 5.876c.326-1.188.526-1.905 2.575-2.276"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="m8.142 31.788 11.782-1.74a.7.7 0 00.578-.512l1.216-4.4a.697.697 0 00-.76-.88l-11.242 1.66a3.14 3.14 0 00-2.527 2.272l-1.622 5.876c.326-1.188.526-1.905 2.575-2.276"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        fillOpacity={0.4}
        d="m8.142 31.788 11.782-1.74a.7.7 0 00.578-.512l1.216-4.4a.697.697 0 00-.76-.88l-11.242 1.66a3.14 3.14 0 00-2.527 2.272l-1.622 5.876c.326-1.188.526-1.905 2.575-2.276"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M8.142 31.788c-1.706.309-2.13.858-2.412 1.72l-1.358 4.99s.434-1.589 2.535-1.929l8.027-1.169.06-.01a.75.75 0 00.606-.544l1.194-4.336z"
      />
      <path
        fill={'url(#' + iconId + '-k)' + ''}
        fillOpacity={0.2}
        d="M8.142 31.788c-1.706.309-2.13.858-2.412 1.72l-1.358 4.99s.434-1.589 2.535-1.929l8.027-1.169.06-.01a.75.75 0 00.606-.544l1.194-4.336z"
      />
      <path
        fill={'url(#' + iconId + '-l)' + ''}
        fillRule="evenodd"
        d="M6.907 36.57c-1.775.287-2.358 1.463-2.497 1.821a2.464 2.464 0 002.029 3.32q.519.077 1.177-.017l2.018-.279a1.28 1.28 0 001.059-.93l1.265-4.65z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-m)' + ''}
        d="M32.648 26.88a.727.727 0 010 1.243l-7.941 4.685a1.4 1.4 0 01-.95.17h-.004l-.139-.032a1 1 0 01-.153-.053l-.01-.006-.013-.004-.145-.075-3.059-1.804a1.7 1.7 0 001.184-1.061l1.113.657.036.021.037.02.146.075.046.023.006.002.008.005.069.03c.111.047.22.083.318.112l.04.01.037.01.307.07h.085a2.9 2.9 0 001.803-.378l6.743-3.979z"
      />
      <path
        fill={'url(#' + iconId + '-n)' + ''}
        d="M23.02 30.823h-.005l-.001-.002z"
      />
      <path
        fill={'url(#' + iconId + '-o)' + ''}
        d="M32.648 23.38a.727.727 0 010 1.243l-7.941 4.685a1.4 1.4 0 01-.95.17h-.004l-.139-.032a1 1 0 01-.153-.053l-.01-.006-.013-.004-.145-.075-1.454-.859.418-1.511.274.162.036.021.037.02.146.075.046.023.006.002.008.005.069.03c.111.047.22.083.318.112l.04.01.037.01.307.07h.085a2.9 2.9 0 001.803-.378l6.743-3.979z"
      />
      <path
        fill={'url(#' + iconId + '-p)' + ''}
        d="M23.02 27.323h-.005l-.001-.002z"
      />
      <path
        fill={'url(#' + iconId + '-q)' + ''}
        d="M23.293 15.193a1.39 1.39 0 011.414 0l7.941 4.685a.727.727 0 010 1.244l-7.941 4.685a1.4 1.4 0 01-.95.17h-.004l-.139-.032a1 1 0 01-.153-.053l-.01-.006-.013-.004-.145-.075-.622-.367.01-.038a1.698 1.698 0 00-1.849-2.138h-.01l-.01.003-1.46.215-4-2.36a.726.726 0 010-1.244z"
      />
      <path
        fill={'url(#' + iconId + '-r)' + ''}
        d="m16.99 23.831-1.98.292a.72.72 0 01.341-.744l.436-.258z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={16.917}
          x2={19.97}
          y1={9}
          y2={39.528}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={15.556}
          x2={18.184}
          y1={10}
          y2={38.536}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={8.166}
          x2={8.166}
          y1={41.745}
          y2={35.384}
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
          x1={16.204}
          x2={10.061}
          y1={37.13}
          y2={30.449}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.042} stopColor="#ABE88E" />
          <stop offset={0.549} stopColor="#2AAA92" />
          <stop offset={0.906} stopColor="#117865" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={1.109}
          x2={6.954}
          y1={36.805}
          y2={34.812}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6AD6F9" />
          <stop offset={1} stopColor="#6AD6F9" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={5.567}
          x2={21.128}
          y1={29.157}
          y2={29.157}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.043} stopColor="#25FFD4" />
          <stop offset={0.874} stopColor="#55DDB9" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={5.567}
          x2={19.584}
          y1={26.982}
          y2={33.491}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6AD6F9" />
          <stop offset={0.23} stopColor="#60E9D0" />
          <stop offset={0.651} stopColor="#6DE9BB" />
          <stop offset={0.994} stopColor="#ABE88E" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={6.864}
          x2={14.486}
          y1={28.2}
          y2={29.886}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0} />
          <stop offset={0.459} stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={9.392}
          x2={9.572}
          y1={34.729}
          y2={29.384}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.205} stopColor="#063D3B" stopOpacity={0} />
          <stop offset={0.586} stopColor="#063D3B" stopOpacity={0.237} />
          <stop offset={0.872} stopColor="#063D3B" stopOpacity={0.75} />
        </linearGradient>
        <linearGradient
          id={iconId + '-k'}
          x1={3.729}
          x2={10.243}
          y1={34.197}
          y2={35.422}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0} />
          <stop offset={0.459} stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-l'}
          x1={8.434}
          x2={7.164}
          y1={39.983}
          y2={33.769}
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
          x1={15}
          x2={33.001}
          y1={14.999}
          y2={32.999}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7751B8" />
          <stop offset={1} stopColor="#5A409C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-n'}
          x1={15}
          x2={33.001}
          y1={14.999}
          y2={32.999}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7751B8" />
          <stop offset={1} stopColor="#5A409C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-o'}
          x1={15}
          x2={33.001}
          y1={14.999}
          y2={32.999}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7751B8" />
          <stop offset={1} stopColor="#5A409C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-p'}
          x1={15}
          x2={33.001}
          y1={14.999}
          y2={32.999}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7751B8" />
          <stop offset={1} stopColor="#5A409C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-q'}
          x1={15}
          x2={33.001}
          y1={14.999}
          y2={32.999}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7751B8" />
          <stop offset={1} stopColor="#5A409C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-r'}
          x1={15}
          x2={33.001}
          y1={14.999}
          y2={32.999}
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
          gradientTransform="matrix(20.0556 22.1667 -30.0833 8.3125 17.139 17.292)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
      </defs>
    </svg>
  )
}
