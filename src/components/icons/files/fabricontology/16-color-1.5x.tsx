'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M2 6a2 2 0 012-2h14a4 4 0 014 4v10a2 2 0 01-2 2H6a4 4 0 01-4-4z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M3 6a1 1 0 011-1h14a3 3 0 013 3v10a1 1 0 01-1 1H6a3 3 0 01-3-3z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 6a1 1 0 011-1h14a3 3 0 013 3v10a1 1 0 01-1 1H6a3 3 0 01-3-3z"
      />
      <path
        fill="#fff"
        d="M11.023 11.625a1.35 1.35 0 011.3 1.708v.001l-.607 2.2h-.001a1.35 1.35 0 01-1.117.98h-.001l-.91.134-.423 1.54h-.001a1.37 1.37 0 01-1.104.992h.001l-.03.006-.009.002h-.01l-.84.123-.46 1.694a1.64 1.64 0 01-1.358 1.192l-1 .138a3 3 0 01-.845.014l-.011-.001-.02-.002v-.002a2.23 2.23 0 01-1.87-2.813l.003-.012.004-.013.014-.045.036-.138c.04-.17.088-.337.128-.464l.432-1.59H2.32l.012-.042.408-1.485.001-.002.39-1.413a2.57 2.57 0 012.07-1.856l.012-.002 5.621-.83.01-.002.011-.001a1 1 0 01.17-.011"
      />
      <g clipPath={'url(#' + iconId + '-d)' + ''}>
        <path
          fill={'url(#' + iconId + '-e)' + ''}
          fillRule="evenodd"
          d="m2.983 18.66-.128.47c-.048.15-.114.37-.15.566q-.079.204-.08.436a1.23 1.23 0 001.094 1.223q.26.039.588-.008l1.01-.14a.64.64 0 00.529-.465l.694-2.55z"
          clipRule="evenodd"
        />
        <path
          fill={'url(#' + iconId + '-f)' + ''}
          d="M3.967 18.782c-1.063.164-1.281.967-1.281.967l1.018-3.742 5.321-.72-.726 2.636a.37.37 0 01-.303.272l-.03.005-4.029.587z"
        />
        <path
          fill={'url(#' + iconId + '-g)' + ''}
          fillOpacity={0.8}
          d="M3.967 18.782c-1.063.164-1.281.967-1.281.967l1.018-3.742 5.321-.72-.726 2.636a.37.37 0 01-.303.272l-.03.005-4.029.587z"
        />
        <path
          fill={'url(#' + iconId + '-h)' + ''}
          d="m4.571 16.394 5.891-.87a.35.35 0 00.29-.256l.608-2.2a.35.35 0 00-.38-.44l-5.622.83a1.57 1.57 0 00-1.263 1.136l-.81 2.938c.162-.594.262-.953 1.286-1.138"
        />
        <path
          fill={'url(#' + iconId + '-i)' + ''}
          d="m4.571 16.394 5.891-.87a.35.35 0 00.29-.256l.608-2.2a.35.35 0 00-.38-.44l-5.622.83a1.57 1.57 0 00-1.263 1.136l-.81 2.938c.162-.594.262-.953 1.286-1.138"
        />
        <path
          fill={'url(#' + iconId + '-j)' + ''}
          fillOpacity={0.4}
          d="m4.571 16.394 5.891-.87a.35.35 0 00.29-.256l.608-2.2a.35.35 0 00-.38-.44l-5.622.83a1.57 1.57 0 00-1.263 1.136l-.81 2.938c.162-.594.262-.953 1.286-1.138"
        />
        <path
          fill={'url(#' + iconId + '-k)' + ''}
          d="M4.57 16.394c-.852.154-1.064.43-1.205.86l-.68 2.495s.218-.794 1.268-.964l4.014-.585.03-.005a.37.37 0 00.303-.272l.597-2.168z"
        />
        <path
          fill={'url(#' + iconId + '-l)' + ''}
          fillOpacity={0.2}
          d="M4.57 16.394c-.852.154-1.064.43-1.205.86l-.68 2.495s.218-.794 1.268-.964l4.014-.585.03-.005a.37.37 0 00.303-.272l.597-2.168z"
        />
        <path
          fill={'url(#' + iconId + '-m)' + ''}
          fillRule="evenodd"
          d="M3.953 18.785c-.888.143-1.18.731-1.249.91a1.232 1.232 0 001.015 1.66q.26.039.588-.008l1.01-.14a.64.64 0 00.529-.465l.633-2.325z"
          clipRule="evenodd"
        />
      </g>
      <path
        fill={'url(#' + iconId + '-n)' + ''}
        d="M16.084 13.661c.22.151.22.527 0 .678l-3.75 2.556a.58.58 0 01-.589.045l-.005-.003-.005-.002-.07-.04-.709-.485c.315-.139.565-.392.7-.71.373.102.772.038 1.1-.185l3.023-2.06z"
      />
      <path
        fill={'url(#' + iconId + '-o)' + ''}
        d="M16.084 11.661c.22.151.22.527 0 .678l-3.75 2.556a.58.58 0 01-.467.087l.347-1.253c.19-.031.376-.1.543-.214l3.022-2.06z"
      />
      <path
        fill={'url(#' + iconId + '-p)' + ''}
        d="M11.666 7.105a.58.58 0 01.668 0l3.75 2.556c.22.151.221.527 0 .678l-3.718 2.532a1.35 1.35 0 00-1.512-1.235h-.01l-.011.003-.83.122-2.087-1.422c-.221-.151-.221-.527 0-.678z"
      />
      <path
        fill={'url(#' + iconId + '-q)' + ''}
        d="m8.908 11.922-1.148.17c-.032-.159.02-.338.156-.43l.304-.209z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={8.458}
          x2={10.193}
          y1={4}
          y2={20.259}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={8}
          x2={9.386}
          y1={5}
          y2={19.254}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={4.582}
          x2={4.582}
          y1={21.372}
          y2={18.192}
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
          x1={8.602}
          x2={5.53}
          y1={19.065}
          y2={15.725}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.042} stopColor="#ABE88E" />
          <stop offset={0.549} stopColor="#2AAA92" />
          <stop offset={0.906} stopColor="#117865" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={1.054}
          x2={3.977}
          y1={18.903}
          y2={17.906}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6AD6F9" />
          <stop offset={1} stopColor="#6AD6F9" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={3.284}
          x2={11.064}
          y1={15.079}
          y2={15.079}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.043} stopColor="#25FFD4" />
          <stop offset={0.874} stopColor="#55DDB9" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={3.284}
          x2={10.293}
          y1={13.991}
          y2={17.245}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6AD6F9" />
          <stop offset={0.23} stopColor="#60E9D0" />
          <stop offset={0.651} stopColor="#6DE9BB" />
          <stop offset={0.994} stopColor="#ABE88E" />
        </linearGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={3.933}
          x2={7.743}
          y1={14.6}
          y2={15.443}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0} />
          <stop offset={0.459} stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-k'}
          x1={5.195}
          x2={5.285}
          y1={17.864}
          y2={15.192}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.205} stopColor="#063D3B" stopOpacity={0} />
          <stop offset={0.586} stopColor="#063D3B" stopOpacity={0.237} />
          <stop offset={0.872} stopColor="#063D3B" stopOpacity={0.75} />
        </linearGradient>
        <linearGradient
          id={iconId + '-l'}
          x1={2.364}
          x2={5.621}
          y1={17.599}
          y2={18.211}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0} />
          <stop offset={0.459} stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-m'}
          x1={4.717}
          x2={4.082}
          y1={20.491}
          y2={17.384}
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
          x1={7.75}
          x2={17.619}
          y1={7}
          y2={15.389}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7751B8" />
          <stop offset={1} stopColor="#5A409C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-o'}
          x1={7.75}
          x2={17.619}
          y1={7}
          y2={15.389}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7751B8" />
          <stop offset={1} stopColor="#5A409C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-p'}
          x1={7.75}
          x2={17.619}
          y1={7}
          y2={15.389}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7751B8" />
          <stop offset={1} stopColor="#5A409C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-q'}
          x1={7.75}
          x2={17.619}
          y1={7}
          y2={15.389}
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
          gradientTransform="matrix(9.5 11.0833 -14.25 4.15625 8.75 8.646)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <clipPath id={iconId + '-d'}>
          <path fill="#fff" d="M2 12h10v10H2z" />
        </clipPath>
      </defs>
    </svg>
  )
}
