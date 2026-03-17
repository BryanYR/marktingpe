import { tv } from 'tailwind-variants'

export const marqueeRoot = tv({
  base: 'pointer-events-none absolute inset-0 overflow-hidden',
})

export const marqueeRail = tv({
  base: 'absolute left-0 right-0',
})

export const marqueeTrack = tv({
  base: 'marquee-track flex w-[200%] items-center whitespace-nowrap will-change-transform',
})

export const marqueeLine = tv({
  base: 'flex min-w-[100%] items-center gap-10',
})
