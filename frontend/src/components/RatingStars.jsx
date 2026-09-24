import StarIcon from './StarIcon'

// Single star + numeric rating, matching the store card treatment in the
// Store PSD (one gold star icon + "4.7").
export default function RatingStars({ rating, className = '' }) {
  return (
    <span className={'inline-flex items-center gap-1.5 ' + className}>
      <StarIcon className="h-4 w-4" fill="#FFD705" />
      <span className="text-sm font-semibold text-neutral-900">{rating}</span>
    </span>
  )
}
