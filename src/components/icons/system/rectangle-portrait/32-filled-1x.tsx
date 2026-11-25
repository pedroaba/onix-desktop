import { type SVGProps } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.5 30C6.01472 30 4 27.9853 4 25.5V6.5C4 4.01472 6.01472 2 8.5 2H23.5C25.9853 2 28 4.01472 28 6.5V25.5C28 27.9853 25.9853 30 23.5 30H8.5Z"
        fill="currentColor"
      />
    </svg>
  )
}
