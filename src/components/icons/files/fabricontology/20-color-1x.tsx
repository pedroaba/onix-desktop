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
        d="M2 6a2 2 0 012-2h10a4 4 0 014 4v6a2 2 0 01-2 2H6a4 4 0 01-4-4z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M3 6a1 1 0 011-1h10a3 3 0 013 3v6a1 1 0 01-1 1H6a3 3 0 01-3-3z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 6a1 1 0 011-1h10a3 3 0 013 3v6a1 1 0 01-1 1H6a3 3 0 01-3-3z"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M9.257 9.57a1.315 1.315 0 011.129 1.657l-.546 1.981-.002-.001a1.31 1.31 0 01-1.078.953v.001l-.009.002H8.75l-.753.11-.362 1.316c-.133.5-.546.876-1.058.967l.001.003-.026.005-.019.003-.02.002-.69.1-.397 1.462a1.58 1.58 0 01-1.305 1.146l-.9.123.002.001q-.3.045-.593.03l-.226-.02v-.003A2.11 2.11 0 01.572 17.52l-.01-.2c0-.211.034-.415.091-.606H.651l.042-.156a6 6 0 01.117-.42l.386-1.422-.006-.001.02-.071.71-2.575a2.42 2.42 0 011.942-1.744l.013-.002 5.06-.747.01-.002h.011c.031-.005.092-.011.165-.011zM.688 16.604l-.01.028.7.237-.58-.252-.106-.024z"
        clipRule="evenodd"
      />
      <g clipPath={'url(#' + iconId + '-d)' + ''}>
        <path
          fill={'url(#' + iconId + '-e)' + ''}
          fillRule="evenodd"
          d="m1.885 15.994-.115.422a4 4 0 00-.136.51 1.108 1.108 0 00.913 1.494q.233.034.53-.008l.908-.125a.58.58 0 00.476-.419l.625-2.295z"
          clipRule="evenodd"
        />
        <path
          fill={'url(#' + iconId + '-f)' + ''}
          d="M2.77 16.104c-.956.148-1.153.87-1.153.87l.917-3.368 4.789-.647-.653 2.372a.34.34 0 01-.273.244l-.027.005-3.626.528z"
        />
        <path
          fill={'url(#' + iconId + '-g)' + ''}
          fillOpacity={0.8}
          d="M2.77 16.104c-.956.148-1.153.87-1.153.87l.917-3.368 4.789-.647-.653 2.372a.34.34 0 01-.273.244l-.027.005-3.626.528z"
        />
        <path
          fill={'url(#' + iconId + '-h)' + ''}
          d="m3.314 13.955 5.302-.784a.31.31 0 00.26-.23l.547-1.98a.314.314 0 00-.342-.396l-5.06.748a1.41 1.41 0 00-1.136 1.022l-.73 2.644c.147-.535.237-.857 1.159-1.024"
        />
        <path
          fill={'url(#' + iconId + '-i)' + ''}
          d="m3.314 13.955 5.302-.784a.31.31 0 00.26-.23l.547-1.98a.314.314 0 00-.342-.396l-5.06.748a1.41 1.41 0 00-1.136 1.022l-.73 2.644c.147-.535.237-.857 1.159-1.024"
        />
        <path
          fill={'url(#' + iconId + '-j)' + ''}
          fillOpacity={0.4}
          d="m3.314 13.955 5.302-.784a.31.31 0 00.26-.23l.547-1.98a.314.314 0 00-.342-.396l-5.06.748a1.41 1.41 0 00-1.136 1.022l-.73 2.644c.147-.535.237-.857 1.159-1.024"
        />
        <path
          fill={'url(#' + iconId + '-k)' + ''}
          d="M3.314 13.955c-.768.139-.959.386-1.086.773l-.61 2.246s.195-.715 1.14-.868l3.612-.526.027-.004a.34.34 0 00.273-.245l.537-1.952z"
        />
        <path
          fill={'url(#' + iconId + '-l)' + ''}
          fillOpacity={0.2}
          d="M3.314 13.955c-.768.139-.959.386-1.086.773l-.61 2.246s.195-.715 1.14-.868l3.612-.526.027-.004a.34.34 0 00.273-.245l.537-1.952z"
        />
        <path
          fill={'url(#' + iconId + '-m)' + ''}
          fillRule="evenodd"
          d="M2.758 16.106c-.8.13-1.061.659-1.124.82a1.11 1.11 0 00.913 1.494q.233.034.53-.008l.908-.125a.58.58 0 00.476-.419l.57-2.093z"
          clipRule="evenodd"
        />
      </g>
      <path
        fill={'url(#' + iconId + '-n)' + ''}
        d="M12.883 11.773c.156.101.156.352 0 .453l-2.647 1.704a.43.43 0 01-.416.03l-.004-.002-.003-.001-.05-.027-.248-.162a1.3 1.3 0 00.323-.561h.002l.126-.46c.206.008.414-.046.6-.165l1.786-1.15z"
      />
      <path
        fill={'url(#' + iconId + '-o)' + ''}
        d="M12.883 9.773c.156.101.156.352 0 .453l-2.647 1.704q-.025.013-.05.023l.2-.726q.047-.168.049-.352-.001-.11-.02-.215a1 1 0 00.15-.078l1.787-1.15z"
      />
      <path
        fill={'url(#' + iconId + '-p)' + ''}
        d="M9.764 6.07a.43.43 0 01.471 0l2.648 1.703c.156.101.156.352 0 .452L10.235 9.93a.4.4 0 01-.148.056 1.3 1.3 0 00-.83-.417l-.058-.003-2.082-1.34c-.156-.101-.156-.352 0-.453z"
      />
      <path
        fill={'url(#' + iconId + '-q)' + ''}
        d="m8.068 9.703-1.029.152a.25.25 0 01.078-.082l.53-.341z"
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
        <linearGradient
          id={iconId + '-e'}
          x1={3.324}
          x2={3.324}
          y1={18.435}
          y2={15.573}
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
          id={iconId + '-f'}
          x1={6.942}
          x2={4.177}
          y1={16.359}
          y2={13.352}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.042} stopColor="#ABE88E" />
          <stop offset={0.549} stopColor="#2AAA92" />
          <stop offset={0.906} stopColor="#117865" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={0.149}
          x2={2.779}
          y1={16.212}
          y2={15.315}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6AD6F9" />
          <stop offset={1} stopColor="#6AD6F9" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={2.155}
          x2={9.157}
          y1={12.771}
          y2={12.771}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.043} stopColor="#25FFD4" />
          <stop offset={0.874} stopColor="#55DDB9" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={2.155}
          x2={8.463}
          y1={11.792}
          y2={14.721}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6AD6F9" />
          <stop offset={0.23} stopColor="#60E9D0" />
          <stop offset={0.651} stopColor="#6DE9BB" />
          <stop offset={0.994} stopColor="#ABE88E" />
        </linearGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={2.739}
          x2={6.168}
          y1={12.34}
          y2={13.099}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0} />
          <stop offset={0.459} stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-k'}
          x1={3.876}
          x2={3.957}
          y1={15.278}
          y2={12.873}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.205} stopColor="#063D3B" stopOpacity={0} />
          <stop offset={0.586} stopColor="#063D3B" stopOpacity={0.237} />
          <stop offset={0.872} stopColor="#063D3B" stopOpacity={0.75} />
        </linearGradient>
        <linearGradient
          id={iconId + '-l'}
          x1={1.328}
          x2={4.259}
          y1={15.039}
          y2={15.59}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0} />
          <stop offset={0.459} stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-m'}
          x1={3.445}
          x2={2.873}
          y1={17.642}
          y2={14.846}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.064} stopColor="#063D3B" stopOpacity={0} />
          <stop offset={0.17} stopColor="#063D3B" stopOpacity={0.135} />
          <stop offset={0.562} stopColor="#063D3B" stopOpacity={0.599} />
          <stop offset={0.85} stopColor="#063D3B" stopOpacity={0.9} />
          <stop offset={1} stopColor="#063D3B" />
        </linearGradient>
        <linearGradient
          id={iconId + '-n'}
          x1={7}
          x2={14.68}
          y1={6}
          y2={11.76}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7751B8" />
          <stop offset={1} stopColor="#5A409C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-o'}
          x1={7}
          x2={14.68}
          y1={6}
          y2={11.76}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7751B8" />
          <stop offset={1} stopColor="#5A409C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-p'}
          x1={7}
          x2={14.68}
          y1={6}
          y2={11.76}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7751B8" />
          <stop offset={1} stopColor="#5A409C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-q'}
          x1={7}
          x2={14.68}
          y1={6}
          y2={11.76}
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
          gradientTransform="matrix(7.38889 7.91667 -11.0833 2.96875 7.472 7.604)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <clipPath id={iconId + '-d'}>
          <path fill="#fff" d="M1 10h9v9H1z" />
        </clipPath>
      </defs>
    </svg>
  )
}
