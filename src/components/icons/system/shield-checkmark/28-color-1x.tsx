'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.5596 2.14208C13.8218 1.95264 14.1759 1.95264 14.4381 2.14208C15.0807 2.60639 16.526 3.45355 18.335 4.18311C20.1454 4.9133 22.2575 5.5 24.2476 5.5C24.6618 5.5 24.9976 5.83579 24.9976 6.25V14.002C24.9976 17.0293 23.295 19.8431 21.1605 21.9516C19.0272 24.0589 16.3331 25.5914 14.1275 25.9756L13.9988 25.998L13.8701 25.9756C11.6645 25.5914 8.97042 24.0589 6.83716 21.9516C4.70264 19.8431 3 17.0293 3 14.002V6.25C3 5.83579 3.33579 5.5 3.75 5.5C5.74138 5.5 7.85341 4.91328 9.6635 4.18313C11.4721 3.45359 12.9169 2.60645 13.5596 2.14208Z"
        fill={'url(#' + iconId + '-paint0_radial_378174_9624)' + ''}
      />
      <path
        d="M13.5596 2.14208C13.8218 1.95264 14.1759 1.95264 14.4381 2.14208C15.0807 2.60639 16.526 3.45355 18.335 4.18311C20.1454 4.9133 22.2575 5.5 24.2476 5.5C24.6618 5.5 24.9976 5.83579 24.9976 6.25V14.002C24.9976 17.0293 23.295 19.8431 21.1605 21.9516C19.0272 24.0589 16.3331 25.5914 14.1275 25.9756L13.9988 25.998L13.8701 25.9756C11.6645 25.5914 8.97042 24.0589 6.83716 21.9516C4.70264 19.8431 3 17.0293 3 14.002V6.25C3 5.83579 3.33579 5.5 3.75 5.5C5.74138 5.5 7.85341 4.91328 9.6635 4.18313C11.4721 3.45359 12.9169 2.60645 13.5596 2.14208Z"
        fill={'url(#' + iconId + '-paint1_radial_378174_9624)' + ''}
        fillOpacity={0.5}
      />
      <path
        d="M27 20.5C27 24.0899 24.0899 27 20.5 27C16.9101 27 14 24.0899 14 20.5C14 16.9101 16.9101 14 20.5 14C24.0899 14 27 16.9101 27 20.5Z"
        fill="#404040"
      />
      <path
        d="M27 20.5C27 24.0899 24.0899 27 20.5 27C16.9101 27 14 24.0899 14 20.5C14 16.9101 16.9101 14 20.5 14C24.0899 14 27 16.9101 27 20.5Z"
        fill={'url(#' + iconId + '-paint2_linear_378174_9624)' + ''}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.3536 17.6464C24.5488 17.8417 24.5488 18.1583 24.3536 18.3536L19.3536 23.3536C19.1583 23.5488 18.8417 23.5488 18.6464 23.3536L16.6464 21.3536C16.4512 21.1583 16.4512 20.8417 16.6464 20.6464C16.8417 20.4512 17.1583 20.4512 17.3536 20.6464L19 22.2929L23.6464 17.6464C23.8417 17.4512 24.1583 17.4512 24.3536 17.6464Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.3536 17.6464C24.5488 17.8417 24.5488 18.1583 24.3536 18.3536L19.3536 23.3536C19.1583 23.5488 18.8417 23.5488 18.6464 23.3536L16.6464 21.3536C16.4512 21.1583 16.4512 20.8417 16.6464 20.6464C16.8417 20.4512 17.1583 20.4512 17.3536 20.6464L19 22.2929L23.6464 17.6464C23.8417 17.4512 24.1583 17.4512 24.3536 17.6464Z"
        fill={'url(#' + iconId + '-paint3_linear_378174_9624)' + ''}
      />
      <defs>
        <radialGradient
          id={iconId + '-paint0_radial_378174_9624'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(-5.64193 -11.4989) rotate(53.9995) scale(57.4728 51.0658)"
        >
          <stop offset={0.337728} stopColor="#0FAFFF" />
          <stop offset={0.529425} stopColor="#367AF2" />
          <stop offset={0.682436} stopColor="#5750E2" />
          <stop offset={0.860903} stopColor="#CC23D1" />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint1_radial_378174_9624'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(20.5 22.5) rotate(90) scale(8 8.38074)"
        >
          <stop offset={0.5} stopColor="#1E1868" />
          <stop offset={1} stopColor="#1E1868" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint2_linear_378174_9624'}
          x1={14.4643}
          y1={16.4375}
          x2={23.4359}
          y2={25.7586}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#52D17C" />
          <stop offset={1} stopColor="#22918B" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint3_linear_378174_9624'}
          x1={18}
          y1={18.112}
          x2={19.4271}
          y2={24.8292}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset={1} stopColor="#E3FFD9" />
        </linearGradient>
      </defs>
    </svg>
  )
}
