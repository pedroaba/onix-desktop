import { type SVGProps } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6 3.60412C6 2.25809 7.56085 1.5136 8.60691 2.36069L25.4869 16.0298C26.5048 16.8541 25.9219 18.5 24.6121 18.5H15.2353C14.5561 18.5 13.9132 18.8069 13.486 19.335L8.52404 25.4694C7.68228 26.51 6 25.9148 6 24.5763V3.60412Z"
        fill="currentColor"
      />
    </svg>
  )
}
