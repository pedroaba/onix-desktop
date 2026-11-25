'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 48 48"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M6 10.5A4.5 4.5 0 0 1 10.5 6H33a9 9 0 0 1 9 9v22.5a4.5 4.5 0 0 1-4.5 4.5H15a9 9 0 0 1-9-9V10.5z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M7 10.5A3.5 3.5 0 0 1 10.5 7H33a8 8 0 0 1 8 8v22.5a3.5 3.5 0 0 1-3.5 3.5H15a8 8 0 0 1-8-8V10.5z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M7 10.5A3.5 3.5 0 0 1 10.5 7H33a8 8 0 0 1 8 8v22.5a3.5 3.5 0 0 1-3.5 3.5H15a8 8 0 0 1-8-8V10.5z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M28.316 16.273A1.91 1.91 0 0 0 26.504 15h-1.182c-.92 0-1.71.642-1.88 1.527l-1.222 6.358.607-2.037a1.91 1.91 0 0 1 1.837-1.348h3.778l1.633 2.094L31.53 19.5h-.725a1.91 1.91 0 0 1-1.812-1.273l-.677-1.954z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M18.908 31.719A1.91 1.91 0 0 0 20.723 33h1.924c1.044 0 1.896-.82 1.913-1.843l.096-5.698-.506 1.693a1.908 1.908 0 0 1-1.836 1.348h-3.793l-1.615-1.395-1.191 1.395h.718a1.91 1.91 0 0 1 1.814 1.281l.66 1.938z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M26.125 15H18.47c-2.188 0-3.5 2.832-4.375 5.663-1.036 3.355-2.393 7.841 1.531 7.841h3.53c.855 0 1.606-.553 1.84-1.359a973.54 973.54 0 0 1 2.435-8.231c.402-1.33.737-2.47 1.251-3.182A1.737 1.737 0 0 1 26.125 15z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M26.125 15H18.47c-2.188 0-3.5 2.832-4.375 5.663-1.036 3.355-2.393 7.841 1.531 7.841h3.53c.855 0 1.606-.553 1.84-1.359a973.54 973.54 0 0 1 2.435-8.231c.402-1.33.737-2.47 1.251-3.182A1.737 1.737 0 0 1 26.125 15z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M20.875 33h7.655c2.188 0 3.5-2.832 4.375-5.663 1.036-3.354 2.392-7.84-1.531-7.84h-3.53c-.855 0-1.606.553-1.84 1.36a973.28 973.28 0 0 1-2.435 8.23c-.402 1.328-.737 2.47-1.251 3.18a1.737 1.737 0 0 1-1.443.733z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M20.875 33h7.655c2.188 0 3.5-2.832 4.375-5.663 1.036-3.354 2.392-7.84-1.531-7.84h-3.53c-.855 0-1.606.553-1.84 1.36a973.28 973.28 0 0 1-2.435 8.23c-.402 1.328-.737 2.47-1.251 3.18a1.737 1.737 0 0 1-1.443.733z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={17.625}
          x2={22.472}
          y1={6}
          y2={42.354}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={16.444}
          x2={20.745}
          y1={7}
          y2={41.407}
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
          gradientTransform="matrix(17.9444 26.9167 -26.9167 10.0937 17.861 15.854)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <radialGradient
          id={iconId + '-d'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-5.27588 -6.4347 -5.69624 5.39721 30.174 22.937)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.096} stopColor="#00AEFF" />
          <stop offset={0.773} stopColor="#2253CE" />
          <stop offset={1} stopColor="#0736C4" />
        </radialGradient>
        <radialGradient
          id={iconId + '-e'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(4.67516 5.68698 5.51892 -4.64183 17.337 27.942)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFB657" />
          <stop offset={0.634} stopColor="#FF5F3D" />
          <stop offset={0.923} stopColor="#C02B3C" />
        </radialGradient>
        <radialGradient
          id={iconId + '-f'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-.69355 -11.9657 68.611 -3.81586 18.28 28.5)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.03} stopColor="#FFC800" />
          <stop offset={0.31} stopColor="#98BD42" />
          <stop offset={0.49} stopColor="#52B471" />
          <stop offset={0.844} stopColor="#0D91E1" />
        </radialGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={18.966}
          x2={19.538}
          y1={15}
          y2={28.506}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3DCBFF" />
          <stop offset={0.247} stopColor="#0588F7" stopOpacity={0} />
        </linearGradient>
        <radialGradient
          id={iconId + '-h'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-6.0477 16.9362 -20.5826 -7.4748 31.767 18.174)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.066} stopColor="#8C48FF" />
          <stop offset={0.5} stopColor="#F2598A" />
          <stop offset={0.896} stopColor="#FFB152" />
        </radialGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={32.372}
          x2={32.364}
          y1={18.672}
          y2={22.35}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.058} stopColor="#F8ADFA" />
          <stop offset={0.708} stopColor="#A86EDD" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  )
}
