import { Coffee } from '@interfaces'
import { ShoppingCart } from 'phosphor-react'
import { CoffeeAmountButtons } from '@components'

interface Props {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: Props) {
  const { name, tags, image, price, description } = coffee

  return (
    <div className='bg-baseCard w-64 p-5 flex justify-center relative flex-col items-center rounded-tl-md rounded-br-md rounded-tr-[2.25rem] rounded-bl-[2.25rem]'>
      <img
        src={image}
        className='absolute -top-5 w-32 h-32'
        alt={`Imagem ilustrativa da bebida ${name.toLocaleLowerCase()}`}
      />
      <div className='mt-28'>
        {tags.map(tag =>
          <span key={tag.id} className='bg-yellowLight rounded-full p-1 text-yellowDark text-[0.625rem] font-bold font-roboto'>
            {tag.description}
          </span>
        )}
      </div>
      <span className='text-baseSubTitle mt-4 text-xl font-bold font-baloo2'>
        {name}
      </span>
      <span className='text-baseLabel mt-2 text-sm font-baloo2'>
        {description}
      </span>
      <footer className='flex gap-2 mt-8'>
        <span className='text-baseText'>
          <span className='font-roboto text-sm'>
            R$
          </span>
          <span className='font-baloo2 text-2xl font-extrabold'>
            {price}
          </span>
        </span>
        <CoffeeAmountButtons />
        <button className='w-[2.375rem] h-[2.375rem] bg-purpleDark flex items-center justify-center rounded-md hover:bg-purple'>
          <ShoppingCart size={22} className='text-baseCard' weight='fill' />
        </button>
      </footer>
    </div>
  )
}
