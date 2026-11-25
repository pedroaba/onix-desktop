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
        d="M18.8858 6.85687C19.241 7.06998 19.3562 7.53068 19.143 7.88586L16.143 12.8859C15.9299 13.241 15.4692 13.3562 15.114 13.1431C14.7589 12.93 14.6437 12.4693 14.8568 12.1141L17.8568 7.11412C18.0699 6.75893 18.5306 6.64376 18.8858 6.85687Z"
        fill={'url(#' + iconId + '-paint0_linear_72095_9710)' + ''}
      />
      <path
        d="M18.8858 6.85687C19.241 7.06998 19.3562 7.53068 19.143 7.88586L16.143 12.8859C15.9299 13.241 15.4692 13.3562 15.114 13.1431C14.7589 12.93 14.6437 12.4693 14.8568 12.1141L17.8568 7.11412C18.0699 6.75893 18.5306 6.64376 18.8858 6.85687Z"
        fill={'url(#' + iconId + '-paint1_radial_72095_9710)' + ''}
      />
      <path
        d="M18.8858 6.85687C19.241 7.06998 19.3562 7.53068 19.143 7.88586L16.143 12.8859C15.9299 13.241 15.4692 13.3562 15.114 13.1431C14.7589 12.93 14.6437 12.4693 14.8568 12.1141L17.8568 7.11412C18.0699 6.75893 18.5306 6.64376 18.8858 6.85687Z"
        fill={'url(#' + iconId + '-paint2_radial_72095_9710)' + ''}
      />
      <path
        d="M18.8858 6.85687C19.241 7.06998 19.3562 7.53068 19.143 7.88586L16.143 12.8859C15.9299 13.241 15.4692 13.3562 15.114 13.1431C14.7589 12.93 14.6437 12.4693 14.8568 12.1141L17.8568 7.11412C18.0699 6.75893 18.5306 6.64376 18.8858 6.85687Z"
        fill={'url(#' + iconId + '-paint3_radial_72095_9710)' + ''}
      />
      <path
        d="M13.6707 14.1646C13.856 14.5351 13.7058 14.9856 13.3353 15.1708L6.33533 18.6708C5.96485 18.8561 5.51434 18.7059 5.3291 18.3354C5.14386 17.9649 5.29403 17.5144 5.66451 17.3292L12.6645 13.8292C13.035 13.6439 13.4855 13.7941 13.6707 14.1646Z"
        fill={'url(#' + iconId + '-paint4_linear_72095_9710)' + ''}
      />
      <path
        d="M13.6707 14.1646C13.856 14.5351 13.7058 14.9856 13.3353 15.1708L6.33533 18.6708C5.96485 18.8561 5.51434 18.7059 5.3291 18.3354C5.14386 17.9649 5.29403 17.5144 5.66451 17.3292L12.6645 13.8292C13.035 13.6439 13.4855 13.7941 13.6707 14.1646Z"
        fill={'url(#' + iconId + '-paint5_radial_72095_9710)' + ''}
      />
      <path
        d="M13.6707 14.1646C13.856 14.5351 13.7058 14.9856 13.3353 15.1708L6.33533 18.6708C5.96485 18.8561 5.51434 18.7059 5.3291 18.3354C5.14386 17.9649 5.29403 17.5144 5.66451 17.3292L12.6645 13.8292C13.035 13.6439 13.4855 13.7941 13.6707 14.1646Z"
        fill={'url(#' + iconId + '-paint6_radial_72095_9710)' + ''}
      />
      <path
        d="M13.6707 14.1646C13.856 14.5351 13.7058 14.9856 13.3353 15.1708L6.33533 18.6708C5.96485 18.8561 5.51434 18.7059 5.3291 18.3354C5.14386 17.9649 5.29403 17.5144 5.66451 17.3292L12.6645 13.8292C13.035 13.6439 13.4855 13.7941 13.6707 14.1646Z"
        fill={'url(#' + iconId + '-paint7_radial_72095_9710)' + ''}
      />
      <circle
        cx={5}
        cy={18}
        r={3}
        fill={'url(#' + iconId + '-paint8_linear_72095_9710)' + ''}
      />
      <circle
        cx={14}
        cy={14}
        r={3}
        fill={'url(#' + iconId + '-paint9_linear_72095_9710)' + ''}
      />
      <circle
        cx={19}
        cy={6}
        r={3}
        fill={'url(#' + iconId + '-paint10_linear_72095_9710)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_72095_9710'}
          x1={5.24976}
          y1={6.74988}
          x2={21.2435}
          y2={22.1798}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B9C0C7" />
          <stop offset={1} stopColor="#70777D" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint1_radial_72095_9710'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(3.81387 18.7498) rotate(16.1417) scale(5.23186 6.25119)"
        >
          <stop offset={0.548597} stopColor="#70777D" />
          <stop offset={1} stopColor="#70777D" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint2_radial_72095_9710'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(19.6086 5.65898) rotate(83.4185) scale(4.63728 5.41306)"
        >
          <stop offset={0.548597} stopColor="#70777D" />
          <stop offset={1} stopColor="#70777D" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint3_radial_72095_9710'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(13.9079 13.9) scale(4.67419 4.67272)"
        >
          <stop offset={0.548597} stopColor="#70777D" />
          <stop offset={1} stopColor="#70777D" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint4_linear_72095_9710'}
          x1={5.24976}
          y1={6.74988}
          x2={21.2435}
          y2={22.1798}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B9C0C7" />
          <stop offset={1} stopColor="#70777D" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint5_radial_72095_9710'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(3.81387 18.7498) rotate(16.1417) scale(5.23186 6.25119)"
        >
          <stop offset={0.548597} stopColor="#70777D" />
          <stop offset={1} stopColor="#70777D" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint6_radial_72095_9710'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(19.6086 5.65898) rotate(83.4185) scale(4.63728 5.41306)"
        >
          <stop offset={0.548597} stopColor="#70777D" />
          <stop offset={1} stopColor="#70777D" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint7_radial_72095_9710'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(13.9079 13.9) scale(4.67419 4.67272)"
        >
          <stop offset={0.548597} stopColor="#70777D" />
          <stop offset={1} stopColor="#70777D" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint8_linear_72095_9710'}
          x1={2.75}
          y1={15.25}
          x2={9.20376}
          y2={22.8844}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#36DFF1" />
          <stop offset={1} stopColor="#0078D4" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint9_linear_72095_9710'}
          x1={17}
          y1={17}
          x2={7.4}
          y2={7.4}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6D37CD" />
          <stop offset={0.640625} stopColor="#EA71EF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint10_linear_72095_9710'}
          x1={21.5}
          y1={7.9}
          x2={17.2}
          y2={3}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E23CB4" />
          <stop offset={1} stopColor="#EA71EF" />
        </linearGradient>
      </defs>
    </svg>
  )
}
