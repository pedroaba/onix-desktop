'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M2 8a3 3 0 013-3h19a6 6 0 016 6v13a3 3 0 01-3 3H8a6 6 0 01-6-6z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M3 8a2 2 0 012-2h19a5 5 0 015 5v13a2 2 0 01-2 2H8a5 5 0 01-5-5z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 8a2 2 0 012-2h19a5 5 0 015 5v13a2 2 0 01-2 2H8a5 5 0 01-5-5z"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M12.88 17.82a1.453 1.453 0 011.25 1.833v.001l-.787 2.85c-.148.56-.62.988-1.207 1.068h-.001l-1.38.202-.602 2.19c-.15.552-.609.974-1.182 1.071v.002l-.037.007-.017.003-.017.002-1.286.186-.65 2.393a1.83 1.83 0 01-1.516 1.332l-1.303.18a3.7 3.7 0 01-1.021.015h-.012l-.02-.003v-.002a2.6 2.6 0 01-2.28-2.578c0-.266.043-.521.117-.76H.927l.044-.163c.05-.227.115-.452.168-.62l.572-2.1-.007-.001.009-.029 1.046-3.793a3.04 3.04 0 012.448-2.198l.012-.002 7.307-1.079.011-.002h.01a2 2 0 01.183-.012zM.957 27.72l.69.236-.41-.194-.273-.059zm.031-.075v.002l-.003.002v.003l.056.016c-.052-.025-.053-.023-.053-.023"
        clipRule="evenodd"
      />
      <g clipPath={'url(#' + iconId + '-d)' + ''}>
        <path
          fill={'url(#' + iconId + '-e)' + ''}
          fillRule="evenodd"
          d="m2.278 26.659-.166.61a6 6 0 00-.196.736 1.6 1.6 0 001.319 2.157q.338.05.765-.011l1.311-.181c.33-.046.6-.284.688-.605l.903-3.315z"
          clipRule="evenodd"
        />
        <path
          fill={'url(#' + iconId + '-f)' + ''}
          d="M3.558 26.816c-1.383.214-1.666 1.257-1.666 1.257l1.323-4.864 6.918-.936-.943 3.426a.49.49 0 01-.395.354l-.038.006-5.238.763z"
        />
        <path
          fill={'url(#' + iconId + '-g)' + ''}
          fillOpacity={0.8}
          d="M3.558 26.816c-1.383.214-1.666 1.257-1.666 1.257l1.323-4.864 6.918-.936-.943 3.426a.49.49 0 01-.395.354l-.038.006-5.238.763z"
        />
        <path
          fill={'url(#' + iconId + '-h)' + ''}
          d="m4.342 23.712 7.659-1.13a.45.45 0 00.376-.334l.79-2.86a.452.452 0 00-.437-.576l-.057.004-7.308 1.08a2.04 2.04 0 00-1.642 1.476l-1.054 3.82c.212-.773.342-1.239 1.673-1.48"
        />
        <path
          fill={'url(#' + iconId + '-i)' + ''}
          d="m4.342 23.712 7.659-1.13a.45.45 0 00.376-.334l.79-2.86a.452.452 0 00-.437-.576l-.057.004-7.308 1.08a2.04 2.04 0 00-1.642 1.476l-1.054 3.82c.212-.773.342-1.239 1.673-1.48"
        />
        <path
          fill={'url(#' + iconId + '-j)' + ''}
          fillOpacity={0.4}
          d="m4.342 23.712 7.659-1.13a.45.45 0 00.376-.334l.79-2.86a.452.452 0 00-.437-.576l-.057.004-7.308 1.08a2.04 2.04 0 00-1.642 1.476l-1.054 3.82c.212-.773.342-1.239 1.673-1.48"
        />
        <path
          fill={'url(#' + iconId + '-k)' + ''}
          d="M4.342 23.712c-1.109.2-1.384.558-1.567 1.118l-.883 3.244s.282-1.033 1.647-1.254l5.218-.76.038-.006a.49.49 0 00.395-.354l.776-2.819z"
        />
        <path
          fill={'url(#' + iconId + '-l)' + ''}
          fillOpacity={0.2}
          d="M4.342 23.712c-1.109.2-1.384.558-1.567 1.118l-.883 3.244s.282-1.033 1.647-1.254l5.218-.76.038-.006a.49.49 0 00.395-.354l.776-2.819z"
        />
        <path
          fill={'url(#' + iconId + '-m)' + ''}
          fillRule="evenodd"
          d="M3.54 26.82c-1.155.187-1.534.951-1.624 1.184a1.602 1.602 0 001.318 2.158q.338.05.766-.011l1.311-.181c.33-.046.6-.284.688-.605l.823-3.023z"
          clipRule="evenodd"
        />
      </g>
      <path
        fill={'url(#' + iconId + '-n)' + ''}
        d="M21.766 18.525c.312.203.312.706 0 .909l-5.294 3.424a.86.86 0 01-.944 0l-1.937-1.253.425-1.535.97.628a1.86 1.86 0 002.029 0l4.054-2.624z"
      />
      <path
        fill={'url(#' + iconId + '-o)' + ''}
        d="M21.766 15.525c.312.203.312.706 0 .909l-5.294 3.424a.86.86 0 01-.944 0l-1.377-.89a1.44 1.44 0 00-.359-.694l-.033-.033a1.5 1.5 0 00-.317-.241l-.023-.014a1.4 1.4 0 00-.244-.103l-.047-.015-.089-.021-.028-.007a1 1 0 00-.131-.02l-.15-.008q-.107.002-.182.012l-.01.001-.012.002-.112.016-2.18-1.41c-.312-.202-.312-.705 0-.908l.685-.443 4.068 2.618c.622.4 1.404.4 2.026 0l4.067-2.618z"
      />
      <path
        fill={'url(#' + iconId + '-p)' + ''}
        d="M15.528 9.14a.86.86 0 01.944 0l5.294 3.408c.312.201.312.703 0 .904l-5.294 3.407a.86.86 0 01-.831.062l-.007-.004-.008-.003-.098-.055-5.294-3.407c-.312-.201-.312-.703 0-.904z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={11.042}
          x2={13.385}
          y1={5}
          y2={27.366}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={10.222}
          x2={12.181}
          y1={6}
          y2={26.367}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={4.357}
          x2={4.357}
          y1={30.185}
          y2={26.05}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.056} stopColor="#2AAC94" />
          <stop offset={0.155} stopColor="#239C87" />
          <stop offset={0.372} stopColor="#177E71" />
          <stop offset={0.588} stopColor="#0E6961" />
          <stop offset={0.799} stopColor="#095D57" />
          <stop offset={1} stopColor="#085954" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={9.582}
          x2={5.59}
          y1={27.184}
          y2={22.841}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.042} stopColor="#ABE88E" />
          <stop offset={0.549} stopColor="#2AAA92" />
          <stop offset={0.906} stopColor="#117865" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={-0.23}
          x2={3.57}
          y1={26.973}
          y2={25.677}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6AD6F9" />
          <stop offset={1} stopColor="#6AD6F9" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={2.669}
          x2={12.783}
          y1={22.002}
          y2={22.002}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.043} stopColor="#25FFD4" />
          <stop offset={0.874} stopColor="#55DDB9" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={2.669}
          x2={11.78}
          y1={20.588}
          y2={24.819}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6AD6F9" />
          <stop offset={0.23} stopColor="#60E9D0" />
          <stop offset={0.651} stopColor="#6DE9BB" />
          <stop offset={0.994} stopColor="#ABE88E" />
        </linearGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={3.512}
          x2={8.466}
          y1={21.38}
          y2={22.476}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0} />
          <stop offset={0.459} stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-k'}
          x1={5.154}
          x2={5.272}
          y1={25.624}
          y2={22.15}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.205} stopColor="#063D3B" stopOpacity={0} />
          <stop offset={0.586} stopColor="#063D3B" stopOpacity={0.237} />
          <stop offset={0.872} stopColor="#063D3B" stopOpacity={0.75} />
        </linearGradient>
        <linearGradient
          id={iconId + '-l'}
          x1={1.474}
          x2={5.707}
          y1={25.278}
          y2={26.074}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0} />
          <stop offset={0.459} stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-m'}
          x1={4.532}
          x2={3.706}
          y1={29.039}
          y2={25}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.064} stopColor="#063D3B" stopOpacity={0} />
          <stop offset={0.17} stopColor="#063D3B" stopOpacity={0.135} />
          <stop offset={0.562} stopColor="#063D3B" stopOpacity={0.599} />
          <stop offset={0.85} stopColor="#063D3B" stopOpacity={0.9} />
          <stop offset={1} stopColor="#063D3B" />
        </linearGradient>
        <linearGradient
          id={iconId + '-n'}
          x1={10}
          x2={23.835}
          y1={9}
          y2={20.859}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7751B8" />
          <stop offset={1} stopColor="#5A409C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-o'}
          x1={10}
          x2={23.835}
          y1={9}
          y2={20.859}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7751B8" />
          <stop offset={1} stopColor="#5A409C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-p'}
          x1={10}
          x2={23.835}
          y1={9}
          y2={20.859}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7751B8" />
          <stop offset={1} stopColor="#5A409C" />
        </linearGradient>
        <radialGradient
          id={iconId + '-c'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(13.7222 15.8333 -20.5833 5.9375 11.306 11.208)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <clipPath id={iconId + '-d'}>
          <path fill="#fff" d="M1 18h13v13H1z" />
        </clipPath>
      </defs>
    </svg>
  )
}
