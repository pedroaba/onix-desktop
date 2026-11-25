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
      <circle
        cx={10.5}
        cy={9.5}
        r={6.5}
        fill={'url(#' + iconId + '-paint0_radial_74105_6464)' + ''}
      />
      <circle
        cx={10.5}
        cy={9.5}
        r={6.5}
        fill={'url(#' + iconId + '-paint1_radial_74105_6464)' + ''}
        fillOpacity={0.6}
      />
      <circle
        cx={10.5}
        cy={9.5}
        r={6.5}
        fill={'url(#' + iconId + '-paint2_radial_74105_6464)' + ''}
        fillOpacity={0.6}
      />
      <rect
        x={10}
        y={9}
        width={12}
        height={12}
        rx={3}
        fill={'url(#' + iconId + '-paint3_radial_74105_6464)' + ''}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 16C14.0899 16 17 13.0898 17 9.49997C17 9.33173 16.9936 9.16499 16.9811 8.99997H13C11.3431 8.99997 10 10.3431 10 12V15.981C10.165 15.9936 10.3318 16 10.5 16Z"
        fill={'url(#' + iconId + '-paint4_linear_74105_6464)' + ''}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 16C14.0899 16 17 13.0898 17 9.49997C17 9.33173 16.9936 9.16499 16.9811 8.99997H13C11.3431 8.99997 10 10.3431 10 12V15.981C10.165 15.9936 10.3318 16 10.5 16Z"
        fill={'url(#' + iconId + '-paint5_linear_74105_6464)' + ''}
      />
      <path
        d="M7.5 13.9483C7.5 19.2172 6.03906 21.9688 4.75 21.9688C3.63281 21.9688 2 19.6855 2 13.9483C2 9.05011 3.23122 8.26953 4.75 8.26953C6.10352 8.26953 7.5 8.67934 7.5 13.9483Z"
        fill={'url(#' + iconId + '-paint6_linear_74105_6464)' + ''}
      />
      <path
        d="M7.5 13.9483C7.5 19.2172 6.03906 21.9688 4.75 21.9688C3.63281 21.9688 2 19.6855 2 13.9483C2 9.05011 3.23122 8.26953 4.75 8.26953C6.10352 8.26953 7.5 8.67934 7.5 13.9483Z"
        fill={'url(#' + iconId + '-paint7_radial_74105_6464)' + ''}
        fillOpacity={0.5}
      />
      <path
        d="M7.5 13.9483C7.5 19.2172 6.03906 21.9688 4.75 21.9688C3.63281 21.9688 2 19.6855 2 13.9483C2 9.05011 3.23122 8.26953 4.75 8.26953C6.10352 8.26953 7.5 8.67934 7.5 13.9483Z"
        fill={'url(#' + iconId + '-paint8_linear_74105_6464)' + ''}
      />
      <path
        d="M7.5 13.9483C7.5 19.2172 6.03906 21.9688 4.75 21.9688C3.63281 21.9688 2 19.6855 2 13.9483C2 9.05011 3.23122 8.26953 4.75 8.26953C6.10352 8.26953 7.5 8.67934 7.5 13.9483Z"
        fill={'url(#' + iconId + '-paint9_radial_74105_6464)' + ''}
        fillOpacity={0.7}
      />
      <path
        d="M2.06311 12.2056C2.33244 8.85641 3.43316 8.26953 4.75008 8.26953C5.93603 8.26953 7.15497 8.58415 7.4386 12.2064C6.67706 12.6893 5.75068 12.9725 4.75147 12.9725C3.75172 12.9725 2.82488 12.689 2.06311 12.2056Z"
        fill="white"
        fillOpacity={0.15}
      />
      <path
        d="M5.57489 2.07403C5.83474 2.19892 6 2.4617 6 2.75001C6 3.49518 6.32769 4.08141 6.73156 4.68175C7.0641 5.17579 7.5 5.8234 7.5 6.75001C7.5 7.22276 7.38071 7.66766 7.17058 8.05623C6.70564 8.91598 5.79602 9.5 4.75 9.5C3.70764 9.5 2.80073 8.92007 2.33432 8.06525C2.12115 7.67455 2 7.22642 2 6.75C2 6.38181 2.00034 5.74888 2.38341 4.93168C2.75829 4.13192 3.47066 3.21301 4.78148 2.16436C5.00661 1.98425 5.31504 1.94914 5.57489 2.07403Z"
        fill={'url(#' + iconId + '-paint10_radial_74105_6464)' + ''}
      />
      <defs>
        <radialGradient
          id={iconId + '-paint0_radial_74105_6464'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(5.20743 19.1796) rotate(-78.3815) scale(17.5863 17.5863)"
        >
          <stop offset={0.221888} stopColor="#4E46E2" />
          <stop offset={0.577558} stopColor="#625DF6" />
          <stop offset={0.954926} stopColor="#E37DFF" />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint1_radial_74105_6464'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(2.29212 12.9136) rotate(-17.2815) scale(7.09946 9.29311)"
        >
          <stop offset={0.566147} stopColor="#251FBA" />
          <stop offset={1} stopColor="#5E51E4" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint2_radial_74105_6464'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(1.80624 8.09222) rotate(8.25944) scale(6.53056 6.67552)"
        >
          <stop offset={0.566147} stopColor="#251FBA" />
          <stop offset={1} stopColor="#5E51E4" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint3_radial_74105_6464'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(11.5328 9.85709) rotate(42.4623) scale(14.1885 19.2719)"
        >
          <stop stopColor="#C354FF" />
          <stop offset={0.157798} stopColor="#B339F0" />
          <stop offset={0.429343} stopColor="#F24A9D" />
          <stop offset={0.748908} stopColor="#FF835C" />
          <stop offset={1} stopColor="#FFC470" />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint4_linear_74105_6464'}
          x1={16.3125}
          y1={15.8973}
          x2={11.0804}
          y2={8.20812}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.194812} stopColor="#6D37CD" />
          <stop offset={0.764931} stopColor="#EA71EF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint5_linear_74105_6464'}
          x1={17.4196}
          y1={17.7053}
          x2={9.07613}
          y2={6.04378}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.194812} stopColor="#7631FF" />
          <stop offset={0.885651} stopColor="#E63080" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint6_linear_74105_6464'}
          x1={0.710938}
          y1={14.0849}
          x2={6.87199}
          y2={20.6102}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0FAFFF" />
          <stop offset={1} stopColor="#2764E7" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint7_radial_74105_6464'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(4.52084 7.41333) rotate(81.2237) scale(13.6117 33.7531)"
        >
          <stop offset={0.5} stopColor="#DD3CE2" stopOpacity={0} />
          <stop offset={1} stopColor="#DD3CE2" />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint8_linear_74105_6464'}
          x1={9.5625}
          y1={14.5445}
          x2={-0.0624995}
          y2={14.5445}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.307407} stopColor="#0D91E1" />
          <stop offset={0.760677} stopColor="#52B471" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint9_radial_74105_6464'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(3.00353 8.07664) rotate(-68.5039) scale(6.92266 13.36)"
        >
          <stop offset={0.168605} stopColor="#02888D" />
          <stop offset={0.259941} stopColor="#02888D" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint10_radial_74105_6464'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(5.91705 4.45048) rotate(108.105) scale(5.75565 6.22878)"
        >
          <stop stopColor="#FF9532" />
          <stop offset={0.251092} stopColor="#FF835C" />
          <stop offset={1} stopColor="#F24A9D" />
        </radialGradient>
      </defs>
    </svg>
  )
}
