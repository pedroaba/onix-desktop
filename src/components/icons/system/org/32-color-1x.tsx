'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 15H9.5C8.11929 15 7 16.1193 7 17.5V22H9V17.5C9 17.2239 9.22386 17 9.5 17H22.5C22.7761 17 23 17.2239 23 17.5V22H25V17.5C25 16.1193 23.8807 15 22.5 15H17V10H15V15Z"
        fill={'url(#' + iconId + '-paint0_linear_378174_9223)' + ''}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 15H9.5C8.11929 15 7 16.1193 7 17.5V22H9V17.5C9 17.2239 9.22386 17 9.5 17H22.5C22.7761 17 23 17.2239 23 17.5V22H25V17.5C25 16.1193 23.8807 15 22.5 15H17V10H15V15Z"
        fill={'url(#' + iconId + '-paint1_radial_378174_9223)' + ''}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 15H9.5C8.11929 15 7 16.1193 7 17.5V22H9V17.5C9 17.2239 9.22386 17 9.5 17H22.5C22.7761 17 23 17.2239 23 17.5V22H25V17.5C25 16.1193 23.8807 15 22.5 15H17V10H15V15Z"
        fill={'url(#' + iconId + '-paint2_radial_378174_9223)' + ''}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 15H9.5C8.11929 15 7 16.1193 7 17.5V22H9V17.5C9 17.2239 9.22386 17 9.5 17H22.5C22.7761 17 23 17.2239 23 17.5V22H25V17.5C25 16.1193 23.8807 15 22.5 15H17V10H15V15Z"
        fill={'url(#' + iconId + '-paint3_radial_378174_9223)' + ''}
      />
      <path
        d="M29 25C29 27.7614 26.7614 30 24 30C21.2386 30 19 27.7614 19 25C19 22.2386 21.2386 20 24 20C26.7614 20 29 22.2386 29 25Z"
        fill={'url(#' + iconId + '-paint4_radial_378174_9223)' + ''}
      />
      <path
        d="M13 25C13 27.7614 10.7614 30 8 30C5.23858 30 3 27.7614 3 25C3 22.2386 5.23858 20 8 20C10.7614 20 13 22.2386 13 25Z"
        fill={'url(#' + iconId + '-paint5_radial_378174_9223)' + ''}
      />
      <path
        d="M21 7C21 9.76142 18.7614 12 16 12C13.2386 12 11 9.76142 11 7C11 4.23858 13.2386 2 16 2C18.7614 2 21 4.23858 21 7Z"
        fill={'url(#' + iconId + '-paint6_radial_378174_9223)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_378174_9223'}
          x1={7}
          y1={10}
          x2={10.0551}
          y2={23.094}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B9C0C7" />
          <stop offset={1} stopColor="#70777D" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint1_radial_378174_9223'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(16 6.39423) rotate(90) scale(7.60577 11.4087)"
        >
          <stop offset={0.695323} stopColor="#70777D" />
          <stop offset={1} stopColor="#70777D" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint2_radial_378174_9223'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(7.9 24.7981) rotate(-90.2157) scale(7.47121 11.2068)"
        >
          <stop offset={0.548597} stopColor="#70777D" />
          <stop offset={1} stopColor="#70777D" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint3_radial_378174_9223'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(24.0719 24.7692) rotate(-89.5636) scale(7.38483 11.0773)"
        >
          <stop offset={0.548597} stopColor="#70777D" />
          <stop offset={1} stopColor="#70777D" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint4_radial_378174_9223'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(12.9583 8.85417) rotate(53.6156) scale(27.0426 23.1608)"
        >
          <stop offset={0.528807} stopColor="#7B7BFF" />
          <stop offset={1} stopColor="#4A43CB" />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint5_radial_378174_9223'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(-3.04167 8.85417) rotate(53.6156) scale(27.0426 23.1608)"
        >
          <stop offset={0.528807} stopColor="#1EC8B0" />
          <stop offset={1} stopColor="#1A7F7C" />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint6_radial_378174_9223'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(4.95833 -9.14583) rotate(53.6156) scale(27.0426 23.1608)"
        >
          <stop offset={0.528807} stopColor="#0FAFFF" />
          <stop offset={1} stopColor="#0067BF" />
        </radialGradient>
      </defs>
    </svg>
  )
}
