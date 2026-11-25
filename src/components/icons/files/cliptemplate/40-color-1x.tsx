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
        d="M5 9a4 4 0 014-4h18a8 8 0 018 8v18a4 4 0 01-4 4H13a8 8 0 01-8-8z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M5 9a4 4 0 014-4h18a8 8 0 018 8v18a4 4 0 01-4 4H13a8 8 0 01-8-8z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M8.99 33.36a.5.5 0 01.678-.202c.99.537 2.125.842 3.332.842h2.842a.5.5 0 010 1H13a8 8 0 01-3.809-.963.5.5 0 01-.2-.678m15.852.64a.5.5 0 010 1h-5.684a.5.5 0 010-1zM34 31v-2.842a.5.5 0 011 0V31a4 4 0 01-4 4h-2.842a.5.5 0 010-1H31a3 3 0 003-3M5 27v-2.842a.5.5 0 011 0V27c0 1.207.305 2.342.842 3.332a.5.5 0 11-.88.477A8 8 0 015 27m29-2.158v-5.684a.5.5 0 011 0v5.684a.5.5 0 01-1 0m-29-4v-5.684a.5.5 0 011 0v5.684a.5.5 0 01-1 0m29-5V13a7 7 0 00-.842-3.332.5.5 0 11.88-.477A8 8 0 0135 13v2.842a.5.5 0 01-1 0m-29-4V9a4 4 0 014-4h2.842l.101.01a.5.5 0 010 .98l-.101.01H9a3 3 0 00-3 3v2.842a.5.5 0 01-1 0M27 5l.258.004a7.96 7.96 0 013.55.959.5.5 0 01-.476.879 7 7 0 00-2.883-.827L27 6h-2.842a.5.5 0 010-1zm-6.158 0 .101.01a.5.5 0 010 .98l-.101.01h-5.684a.5.5 0 010-1z"
      />
      <path
        fill="#7611F0"
        d="M12.237 16.738c.175.828.99 1.367 1.82 1.206l12.647-2.458a1.645 1.645 0 001.3-1.962l-.169-.8a1.71 1.71 0 00-1.993-1.321l-12.504 2.43a1.645 1.645 0 00-1.3 1.962z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        fillOpacity={0.9}
        d="M12.237 16.738c.175.828.99 1.367 1.82 1.206l12.647-2.458a1.645 1.645 0 001.3-1.962l-.169-.8a1.71 1.71 0 00-1.993-1.321l-12.504 2.43a1.645 1.645 0 00-1.3 1.962z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        fillOpacity={0.6}
        d="M12.237 16.738c.175.828.99 1.367 1.82 1.206l12.647-2.458a1.645 1.645 0 001.3-1.962l-.169-.8a1.71 1.71 0 00-1.993-1.321l-12.504 2.43a1.645 1.645 0 00-1.3 1.962z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        fillOpacity={0.4}
        d="M12.237 16.738c.175.828.99 1.367 1.82 1.206l12.647-2.458a1.645 1.645 0 001.3-1.962l-.169-.8a1.71 1.71 0 00-1.993-1.321l-12.504 2.43a1.645 1.645 0 00-1.3 1.962z"
      />
      <path
        fill="#BC7FFF"
        d="M12.004 19.278c0 .945.767 1.712 1.712 1.712H26.04a2.05 2.05 0 012.05 2.05v.791-4.702c0-1.03-.835-1.864-1.864-1.864H13.868a1.864 1.864 0 01-1.864-1.864v-.75z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M12.004 19.278c0 .945.767 1.712 1.712 1.712H26.04a2.05 2.05 0 012.05 2.05v.791-4.702c0-1.03-.835-1.864-1.864-1.864H13.868a1.864 1.864 0 01-1.864-1.864v-.75z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        fillOpacity={0.8}
        d="M12.004 19.278c0 .945.767 1.712 1.712 1.712H26.04a2.05 2.05 0 012.05 2.05v.791-4.702c0-1.03-.835-1.864-1.864-1.864H13.868a1.864 1.864 0 01-1.864-1.864v-.75z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M12.004 19.278c0 .945.767 1.712 1.712 1.712H26.04a2.05 2.05 0 012.05 2.05v.791-4.702c0-1.03-.835-1.864-1.864-1.864H13.868a1.864 1.864 0 01-1.864-1.864v-.75z"
      />
      <path
        fill="#7611F0"
        d="M12.004 25.765a2.237 2.237 0 002.237 2.237h11.985c1.03 0 1.864-.835 1.864-1.864v-1.072c0-1.03-.835-1.864-1.864-1.864H14.71a2.707 2.707 0 01-2.707-2.707z"
      />
      <path
        fill="#A966FF"
        fillOpacity={0.2}
        d="M12.004 25.765a2.237 2.237 0 002.237 2.237h11.985c1.03 0 1.864-.835 1.864-1.864v-1.072c0-1.03-.835-1.864-1.864-1.864H14.71a2.707 2.707 0 01-2.707-2.707z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        fillOpacity={0.4}
        d="M12.004 25.765a2.237 2.237 0 002.237 2.237h11.985c1.03 0 1.864-.835 1.864-1.864v-1.072c0-1.03-.835-1.864-1.864-1.864H14.71a2.707 2.707 0 01-2.707-2.707z"
      />
      <path
        fill={'url(#' + iconId + '-k)' + ''}
        fillOpacity={0.15}
        d="M12.004 25.765a2.237 2.237 0 002.237 2.237h11.985c1.03 0 1.864-.835 1.864-1.864v-1.072c0-1.03-.835-1.864-1.864-1.864H14.71a2.707 2.707 0 01-2.707-2.707z"
      />
      <path
        fill={'url(#' + iconId + '-l)' + ''}
        fillOpacity={0.3}
        d="M12.004 25.765a2.237 2.237 0 002.237 2.237h11.985c1.03 0 1.864-.835 1.864-1.864v-1.072c0-1.03-.835-1.864-1.864-1.864H14.71a2.707 2.707 0 01-2.707-2.707z"
      />
      <path
        fill={'url(#' + iconId + '-m)' + ''}
        fillOpacity={0.2}
        d="M12.004 25.765a2.237 2.237 0 002.237 2.237h11.985c1.03 0 1.864-.835 1.864-1.864v-1.072c0-1.03-.835-1.864-1.864-1.864H14.71a2.707 2.707 0 01-2.707-2.707z"
      />
      <path
        fill="#974CFF"
        d="M12.004 22.37a2.05 2.05 0 002.05 2.05h12.172c1.03 0 1.864.836 1.864 1.865v.235-3.82a1.863 1.863 0 00-1.864-1.862H14.054a2.05 2.05 0 01-2.05-2.05v-.705z"
      />
      <path
        fill="#A966FF"
        fillOpacity={0.35}
        d="M12.004 22.37a2.05 2.05 0 002.05 2.05h12.172c1.03 0 1.864.836 1.864 1.865v.235-3.82a1.863 1.863 0 00-1.864-1.862H14.054a2.05 2.05 0 01-2.05-2.05v-.705z"
      />
      <path
        fill={'url(#' + iconId + '-n)' + ''}
        fillOpacity={0.4}
        d="M12.004 22.37a2.05 2.05 0 002.05 2.05h12.172c1.03 0 1.864.836 1.864 1.865v.235-3.82a1.863 1.863 0 00-1.864-1.862H14.054a2.05 2.05 0 01-2.05-2.05v-.705z"
      />
      <path
        fill={'url(#' + iconId + '-o)' + ''}
        fillOpacity={0.4}
        d="M12.004 22.37a2.05 2.05 0 002.05 2.05h12.172c1.03 0 1.864.836 1.864 1.865v.235-3.82a1.863 1.863 0 00-1.864-1.862H14.054a2.05 2.05 0 01-2.05-2.05v-.705z"
      />
      <path
        fill={'url(#' + iconId + '-p)' + ''}
        fillOpacity={0.6}
        d="M12.004 22.37a2.05 2.05 0 002.05 2.05h12.172c1.03 0 1.864.836 1.864 1.865v.235-3.82a1.863 1.863 0 00-1.864-1.862H14.054a2.05 2.05 0 01-2.05-2.05v-.705z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={13.333}
          x2={17.128}
          y1={5}
          y2={35.359}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-c'}
          x1={14.865}
          x2={18.769}
          y1={5.5}
          y2={34.785}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={16.391}
          x2={12.003}
          y1={18.959}
          y2={18.959}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BC80FF" stopOpacity={0} />
          <stop offset={0.836} stopColor="#ECB4FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={22.761}
          x2={28.09}
          y1={18.959}
          y2={18.959}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BC7FFF" stopOpacity={0} />
          <stop offset={0.836} stopColor="#ECB4FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={22.326}
          x2={21.83}
          y1={24.249}
          y2={27.088}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#330072" />
          <stop offset={1} stopColor="#7611F0" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-k'}
          x1={15.614}
          x2={15.614}
          y1={24.254}
          y2={28.459}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9136F2" stopOpacity={0} />
          <stop offset={0.836} stopColor="#B76AFF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-l'}
          x1={16.391}
          x2={12.003}
          y1={23.98}
          y2={24.018}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9136F2" stopOpacity={0} />
          <stop offset={0.836} stopColor="#B76AFF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-m'}
          x1={23.247}
          x2={30.011}
          y1={24.018}
          y2={29.419}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9136F2" stopOpacity={0} />
          <stop offset={0.836} stopColor="#B76AFF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-n'}
          x1={21.568}
          x2={21.34}
          y1={17.931}
          y2={23.16}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6200D5" />
          <stop offset={1} stopColor="#3E008D" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-o'}
          x1={23.704}
          x2={28.091}
          y1={22.13}
          y2={22.13}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9B54FD" stopOpacity={0} />
          <stop offset={0.836} stopColor="#ECB4FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-p'}
          x1={16.391}
          x2={12.003}
          y1={22.13}
          y2={22.13}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#944EF6" stopOpacity={0} />
          <stop offset={0.836} stopColor="#ECB4FF" />
        </linearGradient>
        <radialGradient
          id={iconId + '-b'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(15.8333 23.75 -23.75 8.90625 14.583 12.813)"
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
          gradientTransform="matrix(-13.1392 7.29731 9.05909 15.7384 20.07 3.868)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.625} stopColor="#974CFF" />
          <stop offset={1} stopColor="#5000B0" />
        </radialGradient>
        <radialGradient
          id={iconId + '-e'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-11.9911 5.6158 13.498 27.2761 28.407 10.062)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.147} stopColor="#DE91FF" />
          <stop offset={0.678} stopColor="#D373FC" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-f'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-4.87862 6.98963 20.332 8.68658 21.518 7.585)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC7A3" />
          <stop offset={0.831} stopColor="#DE67FD" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-i'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-5.24935 8.5917 10.5983 20.2926 25.296 7.987)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC7A3" />
          <stop offset={0.831} stopColor="#DE67FD" stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  )
}
