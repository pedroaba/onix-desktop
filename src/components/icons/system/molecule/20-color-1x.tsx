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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.3354 7.17074L6.33537 10.1707L5.66455 8.8291L11.6646 5.8291L12.3354 7.17074Z"
        fill="#212121"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.3354 7.17074L6.33537 10.1707L5.66455 8.8291L11.6646 5.8291L12.3354 7.17074Z"
        fill={'url(#' + iconId + '-paint0_linear_72095_8937)' + ''}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.3354 7.17074L6.33537 10.1707L5.66455 8.8291L11.6646 5.8291L12.3354 7.17074Z"
        fill={'url(#' + iconId + '-paint1_radial_72095_8937)' + ''}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.3354 7.17074L6.33537 10.1707L5.66455 8.8291L11.6646 5.8291L12.3354 7.17074Z"
        fill={'url(#' + iconId + '-paint2_radial_72095_8937)' + ''}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.3354 7.17074L6.33537 10.1707L5.66455 8.8291L11.6646 5.8291L12.3354 7.17074Z"
        fill={'url(#' + iconId + '-paint3_radial_72095_8937)' + ''}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.1646 15.6707L7.16455 13.1707L7.83537 11.8291L12.8354 14.3291L12.1646 15.6707Z"
        fill="#242424"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.1646 15.6707L7.16455 13.1707L7.83537 11.8291L12.8354 14.3291L12.1646 15.6707Z"
        fill={'url(#' + iconId + '-paint4_linear_72095_8937)' + ''}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.1646 15.6707L7.16455 13.1707L7.83537 11.8291L12.8354 14.3291L12.1646 15.6707Z"
        fill={'url(#' + iconId + '-paint5_radial_72095_8937)' + ''}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.1646 15.6707L7.16455 13.1707L7.83537 11.8291L12.8354 14.3291L12.1646 15.6707Z"
        fill={'url(#' + iconId + '-paint6_radial_72095_8937)' + ''}
      />
      <circle
        cx={13}
        cy={6}
        r={4}
        fill={'url(#' + iconId + '-paint7_linear_72095_8937)' + ''}
      />
      <circle
        cx={5.5}
        cy={11.5}
        r={3.5}
        fill={'url(#' + iconId + '-paint8_linear_72095_8937)' + ''}
      />
      <circle
        cx={13.5}
        cy={15.5}
        r={2.5}
        fill={'url(#' + iconId + '-paint9_linear_72095_8937)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_72095_8937'}
          x1={5.66455}
          y1={5.8291}
          x2={6.74627}
          y2={10.578}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B9C0C7" />
          <stop offset={1} stopColor="#70777D" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint1_radial_72095_8937'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(6.41328 9.67223) rotate(151.687) scale(2.35056 2.51001)"
        >
          <stop offset={0.5625} stopColor="#70777D" />
          <stop offset={1} stopColor="#70777D" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint2_radial_72095_8937'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(10.552 7.44256) rotate(-28.3128) scale(2.35056 2.51001)"
        >
          <stop offset={0.5625} stopColor="#70777D" />
          <stop offset={1} stopColor="#70777D" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint3_radial_72095_8937'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(6.41328 9.67223) rotate(151.687) scale(2.35056 2.51001)"
        >
          <stop offset={0.5625} stopColor="#70777D" />
          <stop offset={1} stopColor="#70777D" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint4_linear_72095_8937'}
          x1={7.16455}
          y1={11.8291}
          x2={8.15673}
          y2={16.0139}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B9C0C7" />
          <stop offset={1} stopColor="#70777D" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint5_radial_72095_8937'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(7.39736 12.3353) scale(2.60262 2.94798)"
        >
          <stop offset={0.5625} stopColor="#70777D" />
          <stop offset={1} stopColor="#70777D" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint6_radial_72095_8937'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(13.1231 15.1647) rotate(-90.8835) scale(2.89471 2.77447)"
        >
          <stop offset={0.5625} stopColor="#70777D" />
          <stop offset={1} stopColor="#70777D" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint7_linear_72095_8937'}
          x1={9.28571}
          y1={3.5}
          x2={14.8067}
          y2={9.23607}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2BDABE" />
          <stop offset={1} stopColor="#22918B" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint8_linear_72095_8937'}
          x1={2.25}
          y1={9.3125}
          x2={7.08085}
          y2={14.3316}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC318F" />
          <stop offset={1} stopColor="#B91D6B" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint9_linear_72095_8937'}
          x1={11.7813}
          y1={12.2187}
          x2={15.0625}
          y2={18.4688}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFCD0F" />
          <stop offset={1} stopColor="#FE8401" />
        </linearGradient>
      </defs>
    </svg>
  )
}
