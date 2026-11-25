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
      <circle
        cx={14}
        cy={13}
        r={9}
        fill={'url(#' + iconId + '-paint0_radial_74105_6438)' + ''}
      />
      <circle
        cx={14}
        cy={13}
        r={9}
        fill={'url(#' + iconId + '-paint1_radial_74105_6438)' + ''}
        fillOpacity={0.6}
      />
      <circle
        cx={14}
        cy={13}
        r={9}
        fill={'url(#' + iconId + '-paint2_radial_74105_6438)' + ''}
        fillOpacity={0.6}
      />
      <rect
        x={13}
        y={12}
        width={17}
        height={17}
        rx={4.5}
        fill={'url(#' + iconId + '-paint3_radial_74105_6438)' + ''}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 22C18.9706 22 23 17.9706 23 13C23 12.662 22.9814 12.3284 22.9451 12H17.5C15.0147 12 13 14.0147 13 16.5V21.9451C13.3283 21.9814 13.662 22 14 22Z"
        fill={'url(#' + iconId + '-paint4_linear_74105_6438)' + ''}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 22C18.9706 22 23 17.9706 23 13C23 12.662 22.9814 12.3284 22.9451 12H17.5C15.0147 12 13 14.0147 13 16.5V21.9451C13.3283 21.9814 13.662 22 14 22Z"
        fill={'url(#' + iconId + '-paint5_linear_74105_6438)' + ''}
      />
      <path
        d="M10 18.6266C10 26.0982 7.875 30 6 30C4.375 30 2 26.7623 2 18.6266C2 11.6808 3.79086 10.5739 6 10.5739C7.96875 10.5739 10 11.155 10 18.6266Z"
        fill={'url(#' + iconId + '-paint6_linear_74105_6438)' + ''}
      />
      <path
        d="M10 18.6266C10 26.0982 7.875 30 6 30C4.375 30 2 26.7623 2 18.6266C2 11.6808 3.79086 10.5739 6 10.5739C7.96875 10.5739 10 11.155 10 18.6266Z"
        fill={'url(#' + iconId + '-paint7_radial_74105_6438)' + ''}
        fillOpacity={0.5}
      />
      <path
        d="M10 18.6266C10 26.0982 7.875 30 6 30C4.375 30 2 26.7623 2 18.6266C2 11.6808 3.79086 10.5739 6 10.5739C7.96875 10.5739 10 11.155 10 18.6266Z"
        fill={'url(#' + iconId + '-paint8_linear_74105_6438)' + ''}
      />
      <path
        d="M10 18.6266C10 26.0982 7.875 30 6 30C4.375 30 2 26.7623 2 18.6266C2 11.6808 3.79086 10.5739 6 10.5739C7.96875 10.5739 10 11.155 10 18.6266Z"
        fill={'url(#' + iconId + '-paint9_radial_74105_6438)' + ''}
        fillOpacity={0.7}
      />
      <path
        d="M2.0918 16.1555C2.48355 11.4062 4.08459 10.5739 6.00011 10.5739C7.72513 10.5739 9.49814 11.0201 9.91069 16.1566C8.803 16.8414 7.45553 17.243 6.00213 17.243C4.54795 17.243 3.19983 16.8409 2.0918 16.1555Z"
        fill="white"
        fillOpacity={0.15}
      />
      <path
        d="M7.75048 2.97725C7.74184 2.59376 7.5146 2.249 7.16558 2.08988C6.81655 1.93075 6.40726 1.98529 6.11209 2.23027C4.3932 3.65686 3.34891 4.83675 2.74381 5.9391C2.11864 7.07801 2.00073 8.06458 2.00073 8.99977C2.00073 11.2089 3.79159 12.9998 6.00073 12.9998C8.20987 12.9998 10.0007 11.2089 10.0007 8.99977C10.0007 7.71998 9.3748 6.76964 8.8852 6.0263C8.83555 5.95092 8.78729 5.87765 8.74124 5.8064C8.21987 4.99971 7.7784 4.21694 7.75048 2.97725Z"
        fill={'url(#' + iconId + '-paint10_radial_74105_6438)' + ''}
      />
      <defs>
        <radialGradient
          id={iconId + '-paint0_radial_74105_6438'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(6.67183 26.4025) rotate(-78.3815) scale(24.3503 24.3503)"
        >
          <stop offset={0.221888} stopColor="#4E46E2" />
          <stop offset={0.577558} stopColor="#625DF6" />
          <stop offset={0.954926} stopColor="#E37DFF" />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint1_radial_74105_6438'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(2.63524 17.7265) rotate(-17.2815) scale(9.83002 12.8674)"
        >
          <stop offset={0.566147} stopColor="#251FBA" />
          <stop offset={1} stopColor="#5E51E4" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint2_radial_74105_6438'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(1.96249 11.0508) rotate(8.25944) scale(9.04231 9.24303)"
        >
          <stop offset={0.566147} stopColor="#251FBA" />
          <stop offset={1} stopColor="#5E51E4" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint3_radial_74105_6438'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(15.1715 13.2142) rotate(42.4623) scale(20.1004 27.3018)"
        >
          <stop stopColor="#C354FF" />
          <stop offset={0.157798} stopColor="#B339F0" />
          <stop offset={0.429343} stopColor="#F24A9D" />
          <stop offset={0.748908} stopColor="#FF835C" />
          <stop offset={1} stopColor="#FFC470" />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint4_linear_74105_6438'}
          x1={22.1007}
          y1={21.913}
          x2={14.8339}
          y2={11.2336}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.194812} stopColor="#6D37CD" />
          <stop offset={0.764931} stopColor="#EA71EF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint5_linear_74105_6438'}
          x1={23.6384}
          y1={24.4241}
          x2={12.0502}
          y2={8.22752}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.194812} stopColor="#7631FF" />
          <stop offset={0.885651} stopColor="#E63080" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint6_linear_74105_6438'}
          x1={0.125}
          y1={18.8203}
          x2={8.8461}
          y2={28.2949}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0FAFFF" />
          <stop offset={1} stopColor="#2764E7" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint7_radial_74105_6438'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(5.66667 9.35978) rotate(81.0015) scale(19.3137 49.0656)"
        >
          <stop offset={0.5} stopColor="#DD3CE2" stopOpacity={0} />
          <stop offset={1} stopColor="#DD3CE2" />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint8_linear_74105_6438'}
          x1={13}
          y1={19.4721}
          x2={-0.999999}
          y2={19.4721}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.307407} stopColor="#0D91E1" />
          <stop offset={0.760677} stopColor="#52B471" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint9_radial_74105_6438'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(3.45968 10.3004) rotate(-68.0028) scale(9.85094 19.365)"
        >
          <stop offset={0.168605} stopColor="#02888D" />
          <stop offset={0.259941} stopColor="#02888D" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint10_radial_74105_6438'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(7.69826 5.5938) rotate(107.965) scale(8.43491 9.06726)"
        >
          <stop stopColor="#FF9532" />
          <stop offset={0.251092} stopColor="#FF835C" />
          <stop offset={1} stopColor="#F24A9D" />
        </radialGradient>
      </defs>
    </svg>
  )
}
