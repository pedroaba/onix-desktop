'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.7541 14C18.9961 14 20.0029 15.0069 20.0029 16.2489V17.1673C20.0029 17.7407 19.8237 18.2997 19.4903 18.7662C17.9445 20.9295 15.4202 22.0012 11.9999 22.0012C8.57891 22.0012 6.05595 20.929 4.51379 18.7646C4.18182 18.2987 4.00342 17.7409 4.00342 17.1689V16.2489C4.00342 15.0069 5.01027 14 6.25229 14H17.7541Z"
        fill={'url(#' + iconId + '-paint0_linear_378174_9353)' + ''}
      />
      <path
        d="M17.7541 14C18.9961 14 20.0029 15.0069 20.0029 16.2489V17.1673C20.0029 17.7407 19.8237 18.2997 19.4903 18.7662C17.9445 20.9295 15.4202 22.0012 11.9999 22.0012C8.57891 22.0012 6.05595 20.929 4.51379 18.7646C4.18182 18.2987 4.00342 17.7409 4.00342 17.1689V16.2489C4.00342 15.0069 5.01027 14 6.25229 14H17.7541Z"
        fill={'url(#' + iconId + '-paint1_linear_378174_9353)' + ''}
      />
      <path
        d="M12.0005 2.00464C14.7619 2.00464 17.0005 4.24321 17.0005 7.00464C17.0005 9.76606 14.7619 12.0046 12.0005 12.0046C9.23906 12.0046 7.00049 9.76606 7.00049 7.00464C7.00049 4.24321 9.23906 2.00464 12.0005 2.00464Z"
        fill={'url(#' + iconId + '-paint2_linear_378174_9353)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_378174_9353'}
          x1={7.80816}
          y1={15.0636}
          x2={10.3936}
          y2={23.3188}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.125321} stopColor="#9C6CFE" />
          <stop offset={1} stopColor="#7A41DC" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint1_linear_378174_9353'}
          x1={12.0032}
          y1={13.0475}
          x2={15.6233}
          y2={26.5729}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#885EDB" stopOpacity={0} />
          <stop offset={1} stopColor="#E362F8" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint2_linear_378174_9353'}
          x1={9.37853}
          y1={3.334}
          x2={14.4749}
          y2={11.4718}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.125321} stopColor="#9C6CFE" />
          <stop offset={1} stopColor="#7A41DC" />
        </linearGradient>
      </defs>
    </svg>
  )
}
