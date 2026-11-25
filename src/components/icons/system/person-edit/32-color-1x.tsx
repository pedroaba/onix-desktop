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
        d="M25.125 18.0556V22.2222L17.0299 29.9714C16.69 29.9904 16.3465 30 15.9999 30C12.8015 30 9.85906 29.177 7.68492 27.7934C5.52264 26.4174 4.00003 24.3935 4.00001 22.0001L4 21.5001C3.99994 19.5671 5.56696 18 7.5 18H24.5C24.7133 18 24.9222 18.0191 25.125 18.0556Z"
        fill={'url(#' + iconId + '-paint0_linear_75380_30967)' + ''}
      />
      <path
        d="M25.125 18.0556V22.2222L17.0299 29.9714C16.69 29.9904 16.3465 30 15.9999 30C12.8015 30 9.85906 29.177 7.68492 27.7934C5.52264 26.4174 4.00003 24.3935 4.00001 22.0001L4 21.5001C3.99994 19.5671 5.56696 18 7.5 18H24.5C24.7133 18 24.9222 18.0191 25.125 18.0556Z"
        fill={'url(#' + iconId + '-paint1_linear_75380_30967)' + ''}
      />
      <path
        d="M25.125 18.0556V22.2222L17.0299 29.9714C16.69 29.9904 16.3465 30 15.9999 30C12.8015 30 9.85906 29.177 7.68492 27.7934C5.52264 26.4174 4.00003 24.3935 4.00001 22.0001L4 21.5001C3.99994 19.5671 5.56696 18 7.5 18H24.5C24.7133 18 24.9222 18.0191 25.125 18.0556Z"
        fill={'url(#' + iconId + '-paint2_radial_75380_30967)' + ''}
        fillOpacity={0.75}
      />
      <path
        d="M25.125 18.0556V22.2222L17.0299 29.9714C16.69 29.9904 16.3465 30 15.9999 30C12.8015 30 9.85906 29.177 7.68492 27.7934C5.52264 26.4174 4.00003 24.3935 4.00001 22.0001L4 21.5001C3.99994 19.5671 5.56696 18 7.5 18H24.5C24.7133 18 24.9222 18.0191 25.125 18.0556Z"
        fill={'url(#' + iconId + '-paint3_radial_75380_30967)' + ''}
        fillOpacity={0.75}
      />
      <path
        d="M16 16C19.866 16 23 12.866 23 8.99998C23 5.134 19.866 2 16 2C12.134 2 9 5.134 9 8.99998C9 12.866 12.134 16 16 16Z"
        fill={'url(#' + iconId + '-paint4_linear_75380_30967)' + ''}
      />
      <path
        d="M21.5386 29.4689L29.1482 21.9258L29.1491 17.8516H25.0757L17.509 25.4916L17.8167 29.1874L21.5386 29.4689Z"
        fill={'url(#' + iconId + '-paint5_linear_75380_30967)' + ''}
      />
      <path
        d="M21.5386 29.4693C21.6135 29.3949 21.6879 29.3209 21.7617 29.2471C21.7617 29.2471 20.0364 28.586 19.2274 27.777C18.4183 26.9679 17.7573 25.2427 17.7573 25.2427C17.7573 25.2427 17.5921 25.4082 17.509 25.492C17.1778 25.8261 16.9411 26.2421 16.8232 26.6976L16.0329 29.749C15.842 30.4864 16.5124 31.1581 17.2498 30.9683L20.2693 30.1907C20.7489 30.0672 21.187 29.8182 21.5386 29.4693Z"
        fill={'url(#' + iconId + '-paint6_linear_75380_30967)' + ''}
      />
      <path
        d="M27.9372 23.1403L30.1481 20.9264C31.2553 19.8277 31.2872 18.047 30.2199 16.9094C29.1039 15.7198 27.2241 15.6938 26.0756 16.8521L23.8381 19.0935L27.9372 23.1403Z"
        fill={'url(#' + iconId + '-paint7_linear_75380_30967)' + ''}
      />
      <path
        d="M25.0942 17.8384C25.5743 19.852 27.1749 21.4302 29.1996 21.8758L27.6497 23.4275C25.6242 22.9815 24.0232 21.4021 23.5439 19.3873L25.0942 17.8384Z"
        fill={'url(#' + iconId + '-paint8_linear_75380_30967)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_75380_30967'}
          x1={9.70729}
          y1={19.5952}
          x2={13.5843}
          y2={31.9766}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.125321} stopColor="#9C6CFE" />
          <stop offset={1} stopColor="#7A41DC" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint1_linear_75380_30967'}
          x1={16}
          y1={16.5714}
          x2={21.4286}
          y2={36.8572}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#885EDB" stopOpacity={0} />
          <stop offset={1} stopColor="#E362F8" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint2_radial_75380_30967'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(20.724 34.2858) rotate(-59.2675) scale(18.9466 9.80314)"
        >
          <stop stopColor="#0A1852" stopOpacity={0.75} />
          <stop offset={1} stopColor="#0A1852" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint3_radial_75380_30967'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(26 21.5) rotate(-90) scale(5.5 7.25)"
        >
          <stop stopColor="#0A1852" stopOpacity={0.75} />
          <stop offset={1} stopColor="#0A1852" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint4_linear_75380_30967'}
          x1={12.3293}
          y1={3.8611}
          x2={19.4641}
          y2={15.2539}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.125321} stopColor="#9C6CFE" />
          <stop offset={1} stopColor="#7A41DC" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint5_linear_75380_30967'}
          x1={20.8614}
          y1={19.9479}
          x2={27.0445}
          y2={26.1486}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFA43D" />
          <stop offset={1} stopColor="#FB5937" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint6_linear_75380_30967'}
          x1={15.1744}
          y1={26.847}
          x2={19.325}
          y2={30.9751}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.255} stopColor="#FFD394" />
          <stop offset={1} stopColor="#FF921F" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint7_linear_75380_30967'}
          x1={29.5019}
          y1={17.4855}
          x2={26.869}
          y2={19.9687}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F97DBD" />
          <stop offset={1} stopColor="#DD3CE2" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint8_linear_75380_30967'}
          x1={26.4694}
          y1={21.6636}
          x2={22.4888}
          y2={19.9022}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF921F" />
          <stop offset={1} stopColor="#FFE994" />
        </linearGradient>
      </defs>
    </svg>
  )
}
