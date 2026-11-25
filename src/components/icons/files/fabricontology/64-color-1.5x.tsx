'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 96 96"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M8 27a9 9 0 019-9h53c9.941 0 18 8.059 18 18v33a9 9 0 01-9 9H26c-9.941 0-18-8.059-18-18z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M10 27a7 7 0 017-7h53c8.837 0 16 7.163 16 16v33a7 7 0 01-7 7H26c-8.837 0-16-7.163-16-16z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M10 27a7 7 0 017-7h53c8.837 0 16 7.163 16 16v33a7 7 0 01-7 7H26c-8.837 0-16-7.163-16-16z"
      />
      <path fill="#F6F6F6" d="m21.625 43.375 17.563 1.75.656 19.188H21z" />
      <path
        fill="#fff"
        d="M42.27 48.505a3.395 3.395 0 013.094 4.297h.001l-2.431 8.801h-.001a3.4 3.4 0 01-2.794 2.47v.001l-4.97.734-2.041 7.417-.001-.001a3.49 3.49 0 01-2.817 2.53l-.01.002-.01.003-.002-.001-.097.016-.017.003-.017.003-4.656.679-2.187 8.036a4.56 4.56 0 01-3.774 3.316l-4.036.558h-.001c-1.007.146-1.96.161-2.848.04a6.924 6.924 0 01-5.83-8.975l2.403-8.83-.021-.004.016-.058 3.227-11.698a8.29 8.29 0 016.664-5.985l.026-.004 22.484-3.323.041-.006q.226-.027.429-.026z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        fillRule="evenodd"
        d="m9.934 74.642-.512 1.876c-.191.6-.459 1.481-.603 2.266a4.924 4.924 0 004.057 6.638c.693.1 1.476.094 2.355-.035l4.035-.557a2.56 2.56 0 002.118-1.86l2.777-10.202z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M13.87 75.126c-4.253.659-5.126 3.868-5.126 3.868l4.074-14.967 21.285-2.88L31.2 71.692a1.49 1.49 0 01-1.214 1.088l-.119.02-16.116 2.347z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        fillOpacity={0.8}
        d="M13.87 75.126c-4.253.659-5.126 3.868-5.126 3.868l4.074-14.967 21.285-2.88L31.2 71.692a1.49 1.49 0 01-1.214 1.088l-.119.02-16.116 2.347z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="m16.284 65.576 23.564-3.48a1.4 1.4 0 001.158-1.025l2.432-8.8q.05-.18.05-.376a1.395 1.395 0 00-1.572-1.384l-22.484 3.322a6.29 6.29 0 00-5.054 4.543l-3.242 11.752c.65-2.377 1.05-3.81 5.148-4.552"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="m16.284 65.576 23.564-3.48a1.4 1.4 0 001.158-1.025l2.432-8.8q.05-.18.05-.376a1.395 1.395 0 00-1.572-1.384l-22.484 3.322a6.29 6.29 0 00-5.054 4.543l-3.242 11.752c.65-2.377 1.05-3.81 5.148-4.552"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        fillOpacity={0.4}
        d="m16.284 65.576 23.564-3.48a1.4 1.4 0 001.158-1.025l2.432-8.8q.05-.18.05-.376a1.395 1.395 0 00-1.572-1.384l-22.484 3.322a6.29 6.29 0 00-5.054 4.543l-3.242 11.752c.65-2.377 1.05-3.81 5.148-4.552"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M16.285 65.577c-3.413.617-4.26 1.716-4.824 3.439l-2.717 9.98s.868-3.178 5.07-3.857l16.054-2.338.119-.02a1.49 1.49 0 001.214-1.088l2.388-8.673z"
      />
      <path
        fill={'url(#' + iconId + '-k)' + ''}
        fillOpacity={0.2}
        d="M16.285 65.577c-3.413.617-4.26 1.716-4.824 3.439l-2.717 9.98s.868-3.178 5.07-3.857l16.054-2.338.119-.02a1.49 1.49 0 001.214-1.088l2.388-8.673z"
      />
      <path
        fill={'url(#' + iconId + '-l)' + ''}
        fillRule="evenodd"
        d="M13.814 75.14c-3.551.574-4.717 2.926-4.995 3.642a4.924 4.924 0 004.057 6.64c.693.1 1.476.094 2.355-.035l4.035-.557a2.56 2.56 0 002.118-1.86l2.532-9.302z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-m)' + ''}
        d="M65.297 53.644c.938.603.937 2.108 0 2.712L49.415 66.578a2.58 2.58 0 01-2.493.185l-.02-.012-.024-.009-.293-.164-4.895-3.15q.335-.251.598-.575l.016-.019q.077-.096.146-.198.015-.02.027-.04.063-.092.119-.19l.021-.038a3 3 0 00.103-.199l.024-.05q.045-.1.085-.206l.02-.049q.046-.129.084-.261l.19-.686 1.838 1.184.078.05.373.208.082.047.037.018.018.01.12.055a5.58 5.58 0 005.37-.387V62.1l13.7-8.818z"
      />
      <path
        fill={'url(#' + iconId + '-n)' + ''}
        d="M45.955 62.597h-.003l-.014-.005-.006-.003z"
      />
      <path
        fill={'url(#' + iconId + '-o)' + ''}
        d="M65.297 46.644c.938.603.937 2.108 0 2.712L49.415 59.579a2.58 2.58 0 01-2.187.303l-.002-.001-.017-.005-.135-.048-.152-.064-.02-.012-.024-.009-.293-.164-2.625-1.69.805-2.914.196.127.078.05.373.208.082.047.037.018.018.01.12.055a5.58 5.58 0 005.37-.387V55.1l13.7-8.818z"
      />
      <path
        fill={'url(#' + iconId + '-p)' + ''}
        d="M45.955 55.597h-.003l-.014-.005-.006-.003z"
      />
      <path
        fill={'url(#' + iconId + '-q)' + ''}
        d="M46.585 29.422a2.58 2.58 0 012.83 0l15.882 10.222c.938.603.937 2.108 0 2.712L49.415 52.579a2.58 2.58 0 01-2.187.303l-.002-.001-.017-.005-.135-.048-.152-.064-.02-.012-.024-.009-.293-.164-1.098-.707v-.016a3.4 3.4 0 00-.102-.791l-.02-.072a3.4 3.4 0 00-.97-1.589l-.075-.071q-.041-.034-.084-.066a3.37 3.37 0 00-1.967-.76l-.175-.006q-.204 0-.429.026l-.041.006-1.078.16-9.843-6.336c-.937-.604-.937-2.109 0-2.712z"
      />
      <path
        fill={'url(#' + iconId + '-r)' + ''}
        d="m36.038 49.357-4.337.641-.998-.642c-.937-.604-.937-2.109 0-2.712l.559-.36z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={33.833}
          x2={39.939}
          y1={18}
          y2={79.056}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={31.111}
          x2={36.368}
          y1={20}
          y2={77.071}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={16.331}
          x2={16.331}
          y1={85.491}
          y2={72.768}
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
          x1={32.408}
          x2={20.122}
          y1={76.26}
          y2={62.898}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.042} stopColor="#ABE88E" />
          <stop offset={0.549} stopColor="#2AAA92" />
          <stop offset={0.906} stopColor="#117865" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={2.217}
          x2={13.909}
          y1={75.61}
          y2={71.623}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6AD6F9" />
          <stop offset={1} stopColor="#6AD6F9" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={11.136}
          x2={42.256}
          y1={60.314}
          y2={60.314}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.043} stopColor="#25FFD4" />
          <stop offset={0.874} stopColor="#55DDB9" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={11.136}
          x2={39.169}
          y1={55.964}
          y2={68.981}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6AD6F9" />
          <stop offset={0.23} stopColor="#60E9D0" />
          <stop offset={0.651} stopColor="#6DE9BB" />
          <stop offset={0.994} stopColor="#ABE88E" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={13.729}
          x2={28.972}
          y1={58.4}
          y2={61.772}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0} />
          <stop offset={0.459} stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={18.784}
          x2={19.144}
          y1={71.458}
          y2={60.769}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.205} stopColor="#063D3B" stopOpacity={0} />
          <stop offset={0.586} stopColor="#063D3B" stopOpacity={0.237} />
          <stop offset={0.872} stopColor="#063D3B" stopOpacity={0.75} />
        </linearGradient>
        <linearGradient
          id={iconId + '-k'}
          x1={7.459}
          x2={20.485}
          y1={70.395}
          y2={72.845}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0} />
          <stop offset={0.459} stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-l'}
          x1={16.868}
          x2={14.327}
          y1={81.966}
          y2={69.538}
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
          x1={30}
          x2={67.945}
          y1={29}
          y2={64.947}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7751B8" />
          <stop offset={1} stopColor="#5A409C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-n'}
          x1={30}
          x2={67.945}
          y1={29}
          y2={64.947}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7751B8" />
          <stop offset={1} stopColor="#5A409C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-o'}
          x1={30}
          x2={67.945}
          y1={29}
          y2={64.947}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7751B8" />
          <stop offset={1} stopColor="#5A409C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-p'}
          x1={30}
          x2={67.945}
          y1={29}
          y2={64.947}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7751B8" />
          <stop offset={1} stopColor="#5A409C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-q'}
          x1={30}
          x2={67.945}
          y1={29}
          y2={64.947}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7751B8" />
          <stop offset={1} stopColor="#5A409C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-r'}
          x1={30}
          x2={67.945}
          y1={29}
          y2={64.947}
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
          gradientTransform="matrix(40.1111 44.3333 -60.1667 16.625 34.278 34.583)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
      </defs>
    </svg>
  )
}
