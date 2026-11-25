import { type SVGProps } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.30664 8.21094C7.48683 8.38899 7.68234 8.61139 7.8291 9H4.16406C4.31081 8.61139 4.50634 8.38899 4.68652 8.21094C4.75788 8.14043 4.82806 8.07737 4.91309 8H7.08105C7.16579 8.07733 7.23535 8.1405 7.30664 8.21094Z"
        fill="currentColor"
      />
    </svg>
  )
}
