import { CoffeeCard } from '@components'

export function CoffeeList() {
  // TODO: Change for coffee objects array
  const coffees = [...Array(16)]

  return (
    <div className='px-[10%]'>
      <header className='pt-8 font-baloo2 text-[2rem] text-baseSubTitle font-extrabold'>
        Nossos cafés
      </header>
      <div className='flex flex-wrap gap-8'>
        {coffees.map(coffee => <CoffeeCard key={coffee} />)}
      </div>
    </div>
  )
}
