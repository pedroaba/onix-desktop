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
        d="M11.2459 14.995C13.0203 14.995 14.2568 12.9392 14.8968 11.8932C15.0501 11.6426 15.0329 11.3271 14.8445 11.0983L12.5017 8.25382C11.8879 7.50857 10.6675 7.55065 10.1146 8.33612L9.39961 9.35547C9.39961 9.35547 8.92624 9.81607 8.64938 9.81607C8.37253 9.81607 6.87289 11.0405 6.87289 11.0405L6.28052 13.8022C7.00118 12.7748 7.53804 13.135 7.89964 13.3246C8.99513 13.8991 9.92112 14.995 11.2459 14.995Z"
        fill={'url(#' + iconId + '-paint0_radial_75848_7921)' + ''}
      />
      <path
        d="M11.2459 14.995C13.0203 14.995 14.2568 12.9392 14.8968 11.8932C15.0501 11.6426 15.0329 11.3271 14.8445 11.0983L12.5017 8.25382C11.8879 7.50857 10.6675 7.55065 10.1146 8.33612L9.39961 9.35547C9.39961 9.35547 8.92624 9.81607 8.64938 9.81607C8.37253 9.81607 6.87289 11.0405 6.87289 11.0405L6.28052 13.8022C7.00118 12.7748 7.53804 13.135 7.89964 13.3246C8.99513 13.8991 9.92112 14.995 11.2459 14.995Z"
        fill={'url(#' + iconId + '-paint1_radial_75848_7921)' + ''}
        fillOpacity={0.5}
      />
      <path
        d="M4.75428 7.72C2.97987 7.72 1.74336 9.77588 1.10333 10.8219C0.950005 11.0725 0.967195 11.3879 1.15568 11.6168L3.49845 14.4612C4.11225 15.2065 5.33261 15.1644 5.88552 14.3789L9.71962 8.91288C8.99895 9.94029 8.4621 9.58008 8.10049 9.39043C7.00501 8.8159 6.07901 7.72 4.75428 7.72Z"
        fill={'url(#' + iconId + '-paint2_linear_75848_7921)' + ''}
      />
      <path
        d="M4.75428 7.72C2.97987 7.72 1.74336 9.77588 1.10333 10.8219C0.950005 11.0725 0.967195 11.3879 1.15568 11.6168L3.49845 14.4612C4.11225 15.2065 5.33261 15.1644 5.88552 14.3789L9.71962 8.91288C8.99895 9.94029 8.4621 9.58008 8.10049 9.39043C7.00501 8.8159 6.07901 7.72 4.75428 7.72Z"
        fill={'url(#' + iconId + '-paint3_radial_75848_7921)' + ''}
      />
      <path
        d="M4.75428 7.72C2.97987 7.72 1.74336 9.77588 1.10333 10.8219C0.950005 11.0725 0.967195 11.3879 1.15568 11.6168L3.49845 14.4612C4.11225 15.2065 5.33261 15.1644 5.88552 14.3789L9.71962 8.91288C8.99895 9.94029 8.4621 9.58008 8.10049 9.39043C7.00501 8.8159 6.07901 7.72 4.75428 7.72Z"
        fill={'url(#' + iconId + '-paint4_linear_75848_7921)' + ''}
      />
      <circle
        cx={5}
        cy={4}
        r={2}
        fill={'url(#' + iconId + '-paint5_linear_75848_7921)' + ''}
      />
      <circle
        cx={5}
        cy={4}
        r={2}
        fill={'url(#' + iconId + '-paint6_radial_75848_7921)' + ''}
      />
      <circle
        cx={5}
        cy={4}
        r={2}
        fill={'url(#' + iconId + '-paint7_radial_75848_7921)' + ''}
      />
      <circle
        cx={11}
        cy={4}
        r={2}
        fill={'url(#' + iconId + '-paint8_linear_75848_7921)' + ''}
      />
      <circle
        cx={11}
        cy={4}
        r={2}
        fill={'url(#' + iconId + '-paint9_radial_75848_7921)' + ''}
      />
      <circle
        cx={11}
        cy={4}
        r={2}
        fill={'url(#' + iconId + '-paint10_radial_75848_7921)' + ''}
      />
      <defs>
        <radialGradient
          id={iconId + '-paint0_radial_75848_7921'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(6.29055 10.0539) rotate(21.9848) scale(10.0195 6.99872)"
        >
          <stop offset={0.13554} stopColor="#003580" />
          <stop offset={0.365657} stopColor="#0057AA" />
          <stop offset={1} stopColor="#0FAFFF" />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint1_radial_75848_7921'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(5.69919 9.79859) rotate(37.4601) scale(5.12632 4.91861)"
        >
          <stop stopColor="#76EB95" />
          <stop offset={0.407158} stopColor="#76EB95" stopOpacity={0.338449} />
          <stop offset={1} stopColor="#76EB95" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint2_linear_75848_7921'}
          x1={8.84763}
          y1={7.72}
          x2={5.44549}
          y2={16.248}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3BD5FF" />
          <stop offset={1} stopColor="#0095FF" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint3_radial_75848_7921'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(9.42894 7.99495) rotate(111.85) scale(8.59053 8.94905)"
        >
          <stop stopColor="#2BDABE" />
          <stop offset={0.443217} stopColor="#13ACCF" />
          <stop offset={1} stopColor="#0078D4" />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint4_linear_75848_7921'}
          x1={4.50003}
          y1={12.0895}
          x2={4.23018}
          y2={6.79287}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#16BBDA" stopOpacity={0} />
          <stop offset={1} stopColor="#76EB95" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint5_linear_75848_7921'}
          x1={4}
          y1={2}
          x2={5.93138}
          y2={5.81639}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3BD5FF" />
          <stop offset={1} stopColor="#006EE3" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint6_radial_75848_7921'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(5.26667 2) rotate(113.199) scale(4.06175)"
        >
          <stop stopColor="#2BDABE" />
          <stop offset={0.518073} stopColor="#16BBDA" />
          <stop offset={0.75} stopColor="#119FC5" />
          <stop offset={1} stopColor="#0078D4" />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint7_radial_75848_7921'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(6.27181 2.54545) rotate(-49.6355) scale(4.77251 4.94029)"
        >
          <stop stopColor="#76EB95" />
          <stop offset={1} stopColor="#16BBDA" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint8_linear_75848_7921'}
          x1={10}
          y1={2}
          x2={11.9314}
          y2={5.81639}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3BD5FF" />
          <stop offset={1} stopColor="#006EE3" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint9_radial_75848_7921'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(11.2667 2) rotate(113.199) scale(4.06175)"
        >
          <stop stopColor="#2BDABE" />
          <stop offset={0.518073} stopColor="#16BBDA" />
          <stop offset={0.75} stopColor="#119FC5" />
          <stop offset={1} stopColor="#0078D4" />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint10_radial_75848_7921'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(12.2718 2.54545) rotate(-49.6355) scale(4.77251 4.94029)"
        >
          <stop stopColor="#76EB95" />
          <stop offset={1} stopColor="#16BBDA" stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  )
}
