'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.5 13C1.5 11.8954 2.39543 11 3.5 11H10C11.1046 11 12 11.8954 12 13C12 13 12 17 6.75 17C1.5 17 1.5 13 1.5 13Z"
        fill={'url(#' + iconId + '-paint0_linear_72095_8589)' + ''}
      />
      <path
        d="M1.5 13C1.5 11.8954 2.39543 11 3.5 11H10C11.1046 11 12 11.8954 12 13C12 13 12 17 6.75 17C1.5 17 1.5 13 1.5 13Z"
        fill={'url(#' + iconId + '-paint1_linear_72095_8589)' + ''}
      />
      <path
        d="M1.5 13C1.5 11.8954 2.39543 11 3.5 11H10C11.1046 11 12 11.8954 12 13C12 13 12 17 6.75 17C1.5 17 1.5 13 1.5 13Z"
        fill={'url(#' + iconId + '-paint2_linear_72095_8589)' + ''}
        fillOpacity={0.75}
      />
      <path
        d="M14.5 10C15.8807 10 17 8.88071 17 7.5C17 6.11929 15.8807 5 14.5 5C13.1193 5 12 6.11929 12 7.5C12 8.88071 13.1193 10 14.5 10Z"
        fill={'url(#' + iconId + '-paint3_linear_72095_8589)' + ''}
      />
      <path
        d="M6.75 10C8.54493 10 10 8.54493 10 6.75C10 4.95507 8.54493 3.5 6.75 3.5C4.95507 3.5 3.5 4.95507 3.5 6.75C3.5 8.54493 4.95507 10 6.75 10Z"
        fill={'url(#' + iconId + '-paint4_linear_72095_8589)' + ''}
      />
      <path
        d="M10 12C10 10.8954 10.8954 10 12 10H17C18.1046 10 19 10.8954 19 12V17C19 18.1046 18.1046 19 17 19H12C10.8954 19 10 18.1046 10 17V12Z"
        fill={'url(#' + iconId + '-paint5_linear_72095_8589)' + ''}
      />
      <path
        d="M12.5 12C12.2239 12 12 12.2239 12 12.5C12 12.7761 12.2239 13 12.5 13H16.5C16.7761 13 17 12.7761 17 12.5C17 12.2239 16.7761 12 16.5 12H12.5ZM12.5 14C12.2239 14 12 14.2239 12 14.5C12 14.7761 12.2239 15 12.5 15H16.5C16.7761 15 17 14.7761 17 14.5C17 14.2239 16.7761 14 16.5 14H12.5ZM12.5 16C12.2239 16 12 16.2239 12 16.5C12 16.7761 12.2239 17 12.5 17H16.5C16.7761 17 17 16.7761 17 16.5C17 16.2239 16.7761 16 16.5 16H12.5Z"
        fill={'url(#' + iconId + '-paint6_linear_72095_8589)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_72095_8589'}
          x1={3.99694}
          y1={11.7976}
          x2={6.15341}
          y2={17.8235}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.125321} stopColor="#BD96FF" />
          <stop offset={1} stopColor="#9C6CFE" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint1_linear_72095_8589'}
          x1={6.75}
          y1={10.2857}
          x2={9.78985}
          y2={20.2252}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#885EDB" stopOpacity={0} />
          <stop offset={1} stopColor="#E362F8" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint2_linear_72095_8589'}
          x1={14.5}
          y1={14.5}
          x2={8.5}
          y2={14.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0A1852" stopOpacity={0.75} />
          <stop offset={1} stopColor="#0A1852" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint3_linear_72095_8589'}
          x1={13.189}
          y1={5.66468}
          x2={15.7372}
          y2={9.73356}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.125321} stopColor="#9C6CFE" />
          <stop offset={1} stopColor="#7A41DC" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint4_linear_72095_8589'}
          x1={5.04572}
          y1={4.36408}
          x2={8.35837}
          y2={9.65362}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.125321} stopColor="#BD96FF" />
          <stop offset={1} stopColor="#9C6CFE" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint5_linear_72095_8589'}
          x1={13.2143}
          y1={10}
          x2={16.6624}
          y2={18.5148}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B3E0FF" />
          <stop offset={1} stopColor="#8CD0FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint6_linear_72095_8589'}
          x1={9.5003}
          y1={8.5}
          x2={17}
          y2={17}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0FAFFF" />
          <stop offset={1} stopColor="#2764E7" />
        </linearGradient>
      </defs>
    </svg>
  )
}
