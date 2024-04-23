import { CoffeeCard } from '@components'
import { customRender } from '../../stories-utils'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Home/CoffeeCard',
  component: CoffeeCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: ({ ...args }) => {
		return customRender(
			<CoffeeCard
				coffee={args.coffee}
			/>
		)
  }
} satisfies Meta<typeof CoffeeCard>

export default meta

export const Default: StoryObj = {
  args: {
		coffee: {
			id: 0,
			name: 'Expresso Tradicional',
			description: 'O tradicional café feito com água quente e grãos moídos',
			price: 9.9,
			image: './src/assets/espressoImage.png',
			tags: [
				{
					id: 0,
					description: 'TRADICIONAL'
				}
			]
		}
  }
}
