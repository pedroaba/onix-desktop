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
        d="M2 9.5A3.5 3.5 0 0 1 5.5 6H27a7 7 0 0 1 7 7v13.5a3.5 3.5 0 0 1-3.5 3.5H9a7 7 0 0 1-7-7V9.5z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M3 9.5A2.5 2.5 0 0 1 5.5 7H27a6 6 0 0 1 6 6v13.5a2.5 2.5 0 0 1-2.5 2.5H9a6 6 0 0 1-6-6V9.5z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 9.5A2.5 2.5 0 0 1 5.5 7H27a6 6 0 0 1 6 6v13.5a2.5 2.5 0 0 1-2.5 2.5H9a6 6 0 0 1-6-6V9.5z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M21.935 15.328c1.973.337 3.692.924 4.93 1.695 1.221.76 2.086 1.773 2.086 2.981 0 .79-.374 1.501-.965 2.103-.588.599-1.415 1.116-2.398 1.539-1.939.835-4.573 1.344-7.46 1.358l.253.173a.5.5 0 1 1-.564.826L16.29 24.96a.6.6 0 0 1 0-.99l1.528-1.043a.5.5 0 1 1 .564.826l-.37.251c2.83-.001 5.369-.496 7.181-1.276.909-.391 1.611-.845 2.08-1.322.467-.476.68-.949.68-1.402-.001-.69-.504-1.44-1.616-2.132-1.095-.681-2.677-1.236-4.57-1.56a.5.5 0 0 1 .169-.985z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M14.066 15.328a.5.5 0 1 1 .17.985c-1.893.323-3.476.878-4.571 1.56-1.112.691-1.614 1.44-1.614 2.131 0 .691.502 1.44 1.614 2.133 1.095.681 2.678 1.236 4.57 1.56a.5.5 0 0 1-.169.985c-1.973-.337-3.69-.924-4.93-1.695-1.22-.76-2.085-1.774-2.085-2.983 0-1.208.865-2.221 2.086-2.981 1.238-.771 2.956-1.358 4.93-1.695z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M17.219 14.475a1 1 0 0 1 1.56 0l3.92 4.898a1 1 0 0 1-.782 1.625l-7.838-.008a1 1 0 0 1-.78-1.625l3.92-4.89z"
      />
      <circle
        cx={22.5}
        cy={11.5}
        r={1.5}
        fill={'url(#' + iconId + '-g)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={12.333}
          x2={14.776}
          y1={6}
          y2={30.422}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={11.333}
          x2={13.389}
          y1={7}
          y2={29.423}
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
          gradientTransform="matrix(15.8333 17.4167 -23.75 6.53125 12.583 12.73)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={12.526}
          x2={14.763}
          y1={11.794}
          y2={26.766}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={12.526}
          x2={14.763}
          y1={11.794}
          y2={26.766}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={12.526}
          x2={14.763}
          y1={11.794}
          y2={26.766}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={21}
          x2={24.259}
          y1={8.125}
          y2={14.365}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
