/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const Error = ({
  width = 100,
  height = 100,
}: {
  width?: number
  height?: number
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 100 100'
      width={`${width}`}
      height={`${height}`}
      css={css`
        shape-rendering: geometricprecision;
      `}
    >
      <path
        d='M149.069 80.073a51.831 51.831 0 0 0-1.143-2.591c7.788-14.021 9.177-24.166 3.966-29.378-5.21-5.21-15.354-3.823-29.374 3.964a52.489 52.489 0 0 0-2.596-1.141 52.965 52.965 0 0 0-9.813-2.908 53.48 53.48 0 0 0-20.218 0A52.748 52.748 0 0 0 62.56 62.558a53.442 53.442 0 0 0-6.781 8.303 52.75 52.75 0 0 0-7.757 19.026c-.643 3.321-.969 6.723-.969 10.109s.326 6.788.969 10.109a53.008 53.008 0 0 0 2.909 9.813c.355.875.738 1.739 1.141 2.595-7.787 14.018-9.176 24.162-3.964 29.374 2.074 2.074 4.927 3.106 8.494 3.106 5.746-.001 13.347-2.678 22.525-7.99l.017-.01.05-.03c11.793-6.835 25.189-17.5 37.731-30.043 10.547-10.546 19.758-21.694 26.49-31.989a45.933 45.933 0 0 1 1.69 6.283c.558 2.886.841 5.84.841 8.78s-.283 5.895-.841 8.779a45.93 45.93 0 0 1-2.522 8.512 45.725 45.725 0 0 1-10.095 15.198 46.151 46.151 0 0 1-7.21 5.89 45.606 45.606 0 0 1-16.499 6.725 47.069 47.069 0 0 1-9.56.836c-1.909-.073-3.526 1.506-3.56 3.438a3.499 3.499 0 0 0 3.438 3.56 53.306 53.306 0 0 0 11.01-.961 52.974 52.974 0 0 0 9.813-2.908 52.725 52.725 0 0 0 9.214-4.849 53.247 53.247 0 0 0 8.303-6.782 53.28 53.28 0 0 0 6.783-8.304 52.686 52.686 0 0 0 7.757-19.026 53.326 53.326 0 0 0 0-20.217 52.987 52.987 0 0 0-2.908-9.812zm-96.011 66.866c-1.889-1.889-1.448-7.831 3.136-17.211a53.29 53.29 0 0 0 6.367 7.707 53.347 53.347 0 0 0 7.708 6.367c-9.381 4.584-15.321 5.026-17.211 3.137zm58.918-34.967c-11.55 11.55-23.787 21.412-34.672 27.974a45.285 45.285 0 0 1-2.582-1.571 46.421 46.421 0 0 1-13.101-13.1 45.805 45.805 0 0 1-4.203-7.988 45.908 45.908 0 0 1-2.522-8.512 46.247 46.247 0 0 1 0-17.558 45.93 45.93 0 0 1 2.522-8.512 45.754 45.754 0 0 1 10.093-15.197 46.35 46.35 0 0 1 7.211-5.89 45.679 45.679 0 0 1 16.5-6.726 46.438 46.438 0 0 1 17.558 0 45.613 45.613 0 0 1 16.5 6.726 46.159 46.159 0 0 1 5.535 4.295 3.5 3.5 0 0 0 4.699-5.188 52.936 52.936 0 0 0-5.778-4.537c9.379-4.583 15.317-5.023 17.207-3.135 2.227 2.227 1.237 10.068-5.993 22.563-6.538 11.298-16.827 24.209-28.974 36.356z'
        transform='matrix(.7274 0 0 .72736 -22.74 -22.735)'
        fill='#111'
      />
    </svg>
  )
}

export default Error