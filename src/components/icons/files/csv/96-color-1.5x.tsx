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
        d="M8 27a9 9 0 0 1 9-9h53c9.941 0 18 8.059 18 18v33a9 9 0 0 1-9 9H26c-9.941 0-18-8.059-18-18V27z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M10 27a7 7 0 0 1 7-7h53c8.837 0 16 7.163 16 16v33a7 7 0 0 1-7 7H26c-8.837 0-16-7.163-16-16V27z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M10 27a7 7 0 0 1 7-7h53c8.837 0 16 7.163 16 16v33a7 7 0 0 1-7 7H26c-8.837 0-16-7.163-16-16V27z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M73.5 58.5A1.5 1.5 0 0 1 75 60c0 3.665-.031 7.065-2.329 9.938a1.5 1.5 0 0 1-2.342-1.876C71.871 66.135 72 63.835 72 60a1.5 1.5 0 0 1 1.5-1.5z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M53.497 29.5c3.648 0 7.268.91 10.007 3.106C66.294 34.844 68 38.28 68 42.936V64a1.5 1.5 0 0 1-3 0v-2.835c-.472.386-.995.769-1.565 1.136-2.689 1.728-6.52 3.199-11.146 3.199-1.537 0-2.972-.153-4.289-.462v-3.105c1.216.365 2.64.567 4.29.567 3.983 0 7.258-1.267 9.523-2.723 1.134-.73 1.989-1.49 2.542-2.13.277-.322.458-.59.562-.786.053-.1.075-.162.083-.186V45.347c-.269.046-.543.07-.823.071-1.112.005-2.26-.334-3.337-.677-2.23-.71-4.868-1.681-8.705-1.681-3.679 0-6.167 1.401-7.757 3.265a9.89 9.89 0 0 0-1.805 3.193 10.931 10.931 0 0 0-2.771-1.157 12.844 12.844 0 0 1 2.294-3.983C44.27 41.83 47.6 40.06 52.135 40.06c4.376 0 7.45 1.135 9.614 1.823 1.12.356 1.84.538 2.414.535.292-.001.552-.051.82-.2-.16-3.455-1.483-5.77-3.355-7.272-2.05-1.644-4.933-2.446-8.13-2.446-3.013 0-6.802.185-9.25 2.548a1.5 1.5 0 0 1-2.085-2.158c3.433-3.313 8.465-3.39 11.334-3.39z"
      />
      <rect
        width={40}
        height={40}
        x={6}
        y={50}
        fill={'url(#' + iconId + '-f)' + ''}
        rx={9}
      />
      <rect
        width={40}
        height={40}
        x={6}
        y={50}
        fill={'url(#' + iconId + '-g)' + ''}
        fillOpacity={0.3}
        rx={9}
      />
      <path
        fill="#fff"
        d="M37.02 82h-6.463l-4.058-7.648a23.57 23.57 0 0 1-.334-.636c-.067-.168-.14-.358-.217-.57h-.067c-.1.268-.195.486-.284.653-.089.167-.195.374-.317.62L21.072 82h-6.095l7.314-12.017L15.477 58h6.38l3.607 6.829c.144.278.267.524.367.736.111.2.223.44.334.72h.067c.156-.324.278-.58.367-.77L27 64.76 30.74 58h6.08l-6.914 11.8L37.02 82z"
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
        <linearGradient
          id={iconId + '-d'}
          x1={88.781}
          x2={36.959}
          y1={90.627}
          y2={22.196}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.168} stopColor="#15561C" />
          <stop offset={0.541} stopColor="#15561C" />
          <stop offset={1} stopColor="#297C2D" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={88.781}
          x2={36.959}
          y1={90.627}
          y2={22.196}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.168} stopColor="#15561C" />
          <stop offset={0.541} stopColor="#15561C" />
          <stop offset={1} stopColor="#297C2D" />
        </linearGradient>
        <radialGradient
          id={iconId + '-f'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="rotate(45 -57.355 32.243) scale(56.5685 161.035)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#20A85E" />
          <stop offset={0.944} stopColor="#09442A" />
        </radialGradient>
        <radialGradient
          id={iconId + '-g'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 28 -32.25 0 26 74)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.58} stopColor="#33A662" stopOpacity={0} />
          <stop offset={0.974} stopColor="#98F0B0" />
        </radialGradient>
      </defs>
    </svg>
  )
}
