import locationIcon from '../assets/images/icon-location.png'

export default function TopBar() {
  return (
    <div className="bg-brand-pink-soft">
      <div className="mx-auto flex max-w-[1366px] items-center justify-center gap-2 px-4 py-2.5 text-sm">
        <img src={locationIcon} alt="" className="h-4 w-3" />
        <span className="text-brand-gray">Allow location access to find stores near you</span>
        <button
          type="button"
          className="ml-2 rounded-full bg-brand-magenta px-5 py-1.5 font-semibold text-white transition hover:bg-brand-magenta-dark cursor-pointer"
        >
          Set Location
        </button>
      </div>
    </div>
  )
}
