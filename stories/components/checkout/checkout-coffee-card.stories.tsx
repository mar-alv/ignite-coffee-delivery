import { CheckoutCoffeeCard } from '@components'
import { customRender } from '../../stories-utils'
import type { Meta, StoryObj } from '@storybook/react'
import { useArgs } from '@storybook/preview-api'

const meta = {
  title: 'Checkout/Checkout Coffee Card',
  component: CheckoutCoffeeCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: () => {
    const [{ coffee }, updateArgs] = useArgs()

		return customRender(
			<CheckoutCoffeeCard coffee={coffee} />,
			{
				decreaseAmountInCart(coffeeId) {
					if (coffee.amount > 1)
						updateArgs({ coffee: { ...coffee, amount: coffee.amount - 1 }})
				},
				increaseAmountInCart(coffeeId) {
					updateArgs({ coffee: { ...coffee, amount: coffee.amount + 1 }})
				}
			}
		)
  }
} satisfies Meta<typeof CheckoutCoffeeCard>

export default meta

export const Selected: StoryObj = {
  args: {
		coffee: {
			id: 0,
			name: 'Expresso Tradicional',
			description: 'O tradicional café feito com água quente e grãos moídos',
			price: 9.9,
			amount: 1,
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
