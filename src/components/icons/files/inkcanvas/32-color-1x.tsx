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
        d="M4 6a2 2 0 012-2h17a5 5 0 015 5v17a2 2 0 01-2 2H9a5 5 0 01-5-5z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M4 6a2 2 0 012-2h17a5 5 0 015 5v17a2 2 0 01-2 2H9a5 5 0 01-5-5z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M8.03 14.576a2 2 0 011.623-2.317l8.668-1.528a2 2 0 012.317 1.622l1.37 7.768a2 2 0 01-1.623 2.317l-8.668 1.528A2 2 0 019.4 22.344z"
      />
      <rect
        width={14}
        height={13}
        x={10}
        y={8}
        fill={'url(#' + iconId + '-e)' + ''}
        rx={2}
      />
      <rect
        width={14}
        height={13}
        x={10}
        y={8}
        fill={'url(#' + iconId + '-f)' + ''}
        fillOpacity={0.6}
        rx={2}
      />
      <path
        fill="#000"
        d="M14.729 10.06c.506-.112.943-.078 1.346-.017.803.133 1.494.406 2.153.718 1.004.5 1.93 1.065 2.78 1.841a15 15 0 01.4-1.52.3.3 0 01.093-.14.23.23 0 01.156-.05.23.23 0 01.147.074.3.3 0 01.071.152q.026.168.049.335.2 1.485.09 2.945a.64.64 0 01-.576.575l-.035.003a14.2 14.2 0 01-3.315-.142.3.3 0 01-.154-.072.23.23 0 01-.072-.146.23.23 0 01.05-.156.3.3 0 01.14-.093 15 15 0 011.523-.397 11 11 0 00-2.196-1.495c-.538-.275-1.106-.505-1.62-.607-.254-.05-.495-.062-.647-.034-.156.034-.17.046-.221.11-.346.268.265 1.285 1.062 2.137.72.929 1.896 1.664 2.055 3.499-.012.229-.017.463-.166.793-.075.16-.226.366-.45.485a1.1 1.1 0 01-.616.121c-.631-.094-.897-.333-1.226-.526-.311-.201-.594-.406-.871-.587-.26-.177-.598-.347-.682-.354a.3.3 0 00-.072-.002c-.074-.002-.194.405-.17.753.01.36.081.764.204 1.069.039.089.044.19.013.283a.37.37 0 01-.465.233.4.4 0 01-.219-.18 3.9 3.9 0 01-.402-1.334c-.026-.455-.152-.995.406-1.583.199-.18.48-.261.705-.264 1.12.14 1.538.638 2.167.932.157.087.34.17.48.223q.002-.03.002-.062c-.043-.656-1.025-1.571-1.859-2.411-.432-.443-.884-.898-1.276-1.532-.395-.574-.686-1.736-.157-2.58.277-.53.88-.9 1.375-.998"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M14.729 10.06c.506-.112.943-.078 1.346-.017.803.133 1.494.406 2.153.718 1.004.5 1.93 1.065 2.78 1.841a15 15 0 01.4-1.52.3.3 0 01.093-.14.23.23 0 01.156-.05.23.23 0 01.147.074.3.3 0 01.071.152q.026.168.049.335.2 1.485.09 2.945a.64.64 0 01-.576.575l-.035.003a14.2 14.2 0 01-3.315-.142.3.3 0 01-.154-.072.23.23 0 01-.072-.146.23.23 0 01.05-.156.3.3 0 01.14-.093 15 15 0 011.523-.397 11 11 0 00-2.196-1.495c-.538-.275-1.106-.505-1.62-.607-.254-.05-.495-.062-.647-.034-.156.034-.17.046-.221.11-.346.268.265 1.285 1.062 2.137.72.929 1.896 1.664 2.055 3.499-.012.229-.017.463-.166.793-.075.16-.226.366-.45.485a1.1 1.1 0 01-.616.121c-.631-.094-.897-.333-1.226-.526-.311-.201-.594-.406-.871-.587-.26-.177-.598-.347-.682-.354a.3.3 0 00-.072-.002c-.074-.002-.194.405-.17.753.01.36.081.764.204 1.069.039.089.044.19.013.283a.37.37 0 01-.465.233.4.4 0 01-.219-.18 3.9 3.9 0 01-.402-1.334c-.026-.455-.152-.995.406-1.583.199-.18.48-.261.705-.264 1.12.14 1.538.638 2.167.932.157.087.34.17.48.223q.002-.03.002-.062c-.043-.656-1.025-1.571-1.859-2.411-.432-.443-.884-.898-1.276-1.532-.395-.574-.686-1.736-.157-2.58.277-.53.88-.9 1.375-.998"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
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
          id={iconId + '-b'}
          x1={10.667}
          x2={13.703}
          y1={4}
          y2={28.287}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={17.233}
          x2={17.233}
          y1={8}
          y2={21}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC7A3" stopOpacity={0.8} />
          <stop offset={0.186} stopColor="#FFC7A3" stopOpacity={0} />
          <stop offset={0.807} stopColor="#F08AF4" stopOpacity={0} />
          <stop offset={1} stopColor="#F08AF4" stopOpacity={0.9} />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={0.883}
          x2={26.142}
          y1={-6.02}
          y2={5.894}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.024} stopColor="#FFC8D7" />
          <stop offset={0.807} stopColor="#fff" />
        </linearGradient>
        <radialGradient
          id={iconId + '-c'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(12.6667 19 -19 7.125 11.667 10.25)"
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
          gradientTransform="rotate(124.476 4.208 11.556)scale(9.96782)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.434} stopColor="#5C1488" />
          <stop offset={1} stopColor="#844BFA" />
        </radialGradient>
        <radialGradient
          id={iconId + '-e'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(16.0999 14.7266 -16.9166 14.0156 7.9 8)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.087} stopColor="#FFC470" />
          <stop offset={0.302} stopColor="#FF835C" />
          <stop offset={0.584} stopColor="#F24A9D" />
          <stop offset={0.953} stopColor="#B339F0" />
        </radialGradient>
      </defs>
    </svg>
  )
}
