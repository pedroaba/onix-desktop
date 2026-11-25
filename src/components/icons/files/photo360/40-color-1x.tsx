'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M2 10a4 4 0 0 1 4-4h24a8 8 0 0 1 8 8v16a4 4 0 0 1-4 4H10a8 8 0 0 1-8-8V10z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M3 10a3 3 0 0 1 3-3h24a7 7 0 0 1 7 7v16a3 3 0 0 1-3 3H10a7 7 0 0 1-7-7V10z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 10a3 3 0 0 1 3-3h24a7 7 0 0 1 7 7v16a3 3 0 0 1-3 3H10a7 7 0 0 1-7-7V10z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="m14.55 20.54 4.297-5.157a1.5 1.5 0 0 1 2.305 0l4.298 5.157c.814.977.119 2.46-1.153 2.46h-8.595c-1.271 0-1.966-1.483-1.152-2.46z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M15.875 16.268a.5.5 0 0 1-.41.575c-2.27.38-4.174 1.03-5.495 1.835C8.628 19.494 8 20.392 8 21.237c0 .845.628 1.742 1.97 2.559 1.321.804 3.225 1.455 5.494 1.834a.5.5 0 1 1-.164.986c-2.349-.392-4.386-1.075-5.85-1.966C8.005 23.77 7 22.61 7 21.237c0-1.374 1.005-2.534 2.45-3.413 1.465-.892 3.501-1.575 5.85-1.967a.5.5 0 0 1 .575.41z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M24.084 16.268a.5.5 0 0 1 .576-.41c2.348.391 4.385 1.074 5.85 1.966 1.445.879 2.45 2.04 2.45 3.413 0 .898-.435 1.709-1.128 2.4-.692.688-1.668 1.285-2.834 1.776-2.333.983-5.522 1.578-9.018 1.578-.284 0-.567-.003-.846-.011l.614.41a.5.5 0 1 1-.555.831l-1.846-1.23a.6.6 0 0 1 0-.999l1.846-1.23a.5.5 0 1 1 .555.832l-.58.386c.268.008.539.011.812.011 3.396 0 6.447-.58 8.63-1.5 1.093-.46 1.945-.995 2.516-1.563.57-.567.834-1.138.834-1.691 0-.845-.628-1.743-1.97-2.56-1.322-.804-3.226-1.455-5.495-1.834a.5.5 0 0 1-.41-.575z"
      />
      <circle cx={24} cy={13} r={2} fill={'url(#' + iconId + '-g)' + ''} />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={13.625}
          x2={16.578}
          y1={6}
          y2={34.472}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={12.444}
          x2={14.976}
          y1={7}
          y2={33.48}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <radialGradient
          id={iconId + '-c'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(17.9444 20.5833 -26.9167 7.71875 13.861 13.77)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={13.49}
          x2={15.875}
          y1={12.255}
          y2={29.102}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={13.49}
          x2={15.875}
          y1={12.255}
          y2={29.102}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={13.49}
          x2={15.875}
          y1={12.255}
          y2={29.102}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={22}
          x2={26.345}
          y1={8.5}
          y2={16.82}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
