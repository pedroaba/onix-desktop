'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3 3.5C3 2.67157 3.67157 2 4.5 2H8.5C9.32843 2 10 2.67157 10 3.5V14H3.5C3.22386 14 3 13.7761 3 13.5V3.5Z"
        fill={'url(#' + iconId + '-paint0_linear_378174_8567)' + ''}
      />
      <path
        d="M3 3.5C3 2.67157 3.67157 2 4.5 2H8.5C9.32843 2 10 2.67157 10 3.5V14H3.5C3.22386 14 3 13.7761 3 13.5V3.5Z"
        fill={'url(#' + iconId + '-paint1_radial_378174_8567)' + ''}
      />
      <path
        d="M3 3.5C3 2.67157 3.67157 2 4.5 2H8.5C9.32843 2 10 2.67157 10 3.5V14H3.5C3.22386 14 3 13.7761 3 13.5V3.5Z"
        fill={'url(#' + iconId + '-paint2_radial_378174_8567)' + ''}
      />
      <path
        d="M6 9.5C6 9.77614 5.77614 10 5.5 10C5.22386 10 5 9.77614 5 9.5C5 9.22386 5.22386 9 5.5 9C5.77614 9 6 9.22386 6 9.5Z"
        fill={'url(#' + iconId + '-paint3_linear_378174_8567)' + ''}
      />
      <path
        d="M8 7C8 7.27614 7.77614 7.5 7.5 7.5C7.22386 7.5 7 7.27614 7 7C7 6.72386 7.22386 6.5 7.5 6.5C7.77614 6.5 8 6.72386 8 7Z"
        fill={'url(#' + iconId + '-paint4_linear_378174_8567)' + ''}
      />
      <path
        d="M6 7C6 7.27614 5.77614 7.5 5.5 7.5C5.22386 7.5 5 7.27614 5 7C5 6.72386 5.22386 6.5 5.5 6.5C5.77614 6.5 6 6.72386 6 7Z"
        fill={'url(#' + iconId + '-paint5_linear_378174_8567)' + ''}
      />
      <path
        d="M8 4.5C8 4.77614 7.77614 5 7.5 5C7.22386 5 7 4.77614 7 4.5C7 4.22386 7.22386 4 7.5 4C7.77614 4 8 4.22386 8 4.5Z"
        fill={'url(#' + iconId + '-paint6_linear_378174_8567)' + ''}
      />
      <path
        d="M6 4.5C6 4.77614 5.77614 5 5.5 5C5.22386 5 5 4.77614 5 4.5C5 4.22386 5.22386 4 5.5 4C5.77614 4 6 4.22386 6 4.5Z"
        fill={'url(#' + iconId + '-paint7_linear_378174_8567)' + ''}
      />
      <path
        d="M13.75 14C15.4 14 16 13.0876 16 12.2C16 11.5373 15.4627 11 14.8 11H12.7C12.0373 11 11.5 11.5373 11.5 12.2C11.5 13.0876 12.1 14 13.75 14Z"
        fill={'url(#' + iconId + '-paint8_linear_378174_8567)' + ''}
      />
      <path
        d="M13.75 14C15.4 14 16 13.0876 16 12.2C16 11.5373 15.4627 11 14.8 11H12.7C12.0373 11 11.5 11.5373 11.5 12.2C11.5 13.0876 12.1 14 13.75 14Z"
        fill={'url(#' + iconId + '-paint9_radial_378174_8567)' + ''}
        fillOpacity={0.5}
      />
      <path
        d="M15 8.75C15 9.44036 14.4404 10 13.75 10C13.0596 10 12.5 9.44036 12.5 8.75C12.5 8.05964 13.0596 7.5 13.75 7.5C14.4404 7.5 15 8.05964 15 8.75Z"
        fill={'url(#' + iconId + '-paint10_linear_378174_8567)' + ''}
      />
      <path
        d="M10 15C12.2 15 13 13.7835 13 12.6C13 11.7163 12.2837 11 11.4 11H8.6C7.71634 11 7 11.7163 7 12.6C7 13.7835 7.8 15 10 15Z"
        fill={'url(#' + iconId + '-paint11_linear_378174_8567)' + ''}
      />
      <path
        d="M10 15C12.2 15 13 13.7835 13 12.6C13 11.7163 12.2837 11 11.4 11H8.6C7.71634 11 7 11.7163 7 12.6C7 13.7835 7.8 15 10 15Z"
        fill={'url(#' + iconId + '-paint12_linear_378174_8567)' + ''}
      />
      <path
        d="M11.75 8.25C11.75 9.2165 10.9665 10 10 10C9.0335 10 8.25 9.2165 8.25 8.25C8.25 7.2835 9.0335 6.5 10 6.5C10.9665 6.5 11.75 7.2835 11.75 8.25Z"
        fill={'url(#' + iconId + '-paint13_linear_378174_8567)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_378174_8567'}
          x1={3}
          y1={2.375}
          x2={13.9809}
          y2={10.5756}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29C3FF" />
          <stop offset={1} stopColor="#2764E7" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint1_radial_378174_8567'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(8.90625 13.2812) rotate(-0.871723) scale(4.10811 3.27976)"
        >
          <stop stopColor="#4A43CB" />
          <stop offset={0.914422} stopColor="#4A43CB" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint2_radial_378174_8567'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(8.7118 9.96875) rotate(88.7793) scale(2.28177 1.77523)"
        >
          <stop stopColor="#4A43CB" />
          <stop offset={1} stopColor="#4A43CB" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint3_linear_378174_8567'}
          x1={5.9}
          y1={3.33333}
          x2={9.50849}
          y2={9.82862}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FDFDFD" />
          <stop offset={1} stopColor="#B3E0FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint4_linear_378174_8567'}
          x1={5.9}
          y1={3.33333}
          x2={9.50849}
          y2={9.82862}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FDFDFD" />
          <stop offset={1} stopColor="#B3E0FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint5_linear_378174_8567'}
          x1={5.9}
          y1={3.33333}
          x2={9.50849}
          y2={9.82862}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FDFDFD" />
          <stop offset={1} stopColor="#B3E0FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint6_linear_378174_8567'}
          x1={5.9}
          y1={3.33333}
          x2={9.50849}
          y2={9.82862}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FDFDFD" />
          <stop offset={1} stopColor="#B3E0FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint7_linear_378174_8567'}
          x1={5.9}
          y1={3.33333}
          x2={9.50849}
          y2={9.82862}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FDFDFD" />
          <stop offset={1} stopColor="#B3E0FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint8_linear_378174_8567'}
          x1={12.5701}
          y1={11.3988}
          x2={13.7785}
          y2={14.2931}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.125321} stopColor="#9C6CFE" />
          <stop offset={1} stopColor="#7A41DC" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint9_radial_378174_8567'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(10.9292 12.5) rotate(-8.4036) scale(2.9936 3.52614)"
        >
          <stop offset={0.392122} stopColor="#3B148A" />
          <stop offset={1} stopColor="#3B148A" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint10_linear_378174_8567'}
          x1={13.0945}
          y1={7.83234}
          x2={14.3686}
          y2={9.86678}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.125321} stopColor="#9C6CFE" />
          <stop offset={1} stopColor="#7A41DC" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint11_linear_378174_8567'}
          x1={8.42682}
          y1={11.5317}
          x2={10.038}
          y2={15.3908}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.125321} stopColor="#BD96FF" />
          <stop offset={1} stopColor="#9C6CFE" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint12_linear_378174_8567'}
          x1={10}
          y1={10.5238}
          x2={12.2935}
          y2={16.9516}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#885EDB" stopOpacity={0} />
          <stop offset={1} stopColor="#E362F8" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint13_linear_378174_8567'}
          x1={9.08231}
          y1={6.96527}
          x2={10.866}
          y2={9.81349}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.125321} stopColor="#BD96FF" />
          <stop offset={1} stopColor="#9C6CFE" />
        </linearGradient>
      </defs>
    </svg>
  )
}
