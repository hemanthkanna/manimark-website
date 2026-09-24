import { Link } from 'react-router-dom'
import RatingStars from '../RatingStars'

const dateFormatter = new Intl.DateTimeFormat('en-IN', {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
})

export default function StoreCard({ store }) {
  const openingDate = dateFormatter.format(new Date(store.openingDate))

  return (
    <div className="flex flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
      <Link to={`/store/${store.id}`} className="block aspect-[16/10] overflow-hidden">
        <img
          src={store.photo}
          alt={`${store.name} store front`}
          className="h-full w-full object-cover transition duration-300 hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <Link to={`/store/${store.id}`} className="font-semibold text-neutral-900 hover:text-brand-magenta">
            {store.name}
          </Link>
          <p className="mt-1 text-xs text-brand-gray">Store Opening Date: {openingDate}</p>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <RatingStars rating={store.rating} />
          <Link
            to={`/store/${store.id}`}
            className="rounded-full bg-brand-yellow px-5 py-2 text-sm font-semibold text-neutral-900 transition hover:brightness-105"
          >
            Location
          </Link>
        </div>
      </div>
    </div>
  )
}
