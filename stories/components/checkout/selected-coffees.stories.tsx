import { customRender } from '../../stories-utils'
import type { Meta, StoryObj } from '@storybook/react'
import { SelectedCoffees } from '@components'
import { useArgs } from '@storybook/preview-api'

const meta = {
  title: 'Checkout/Selected Coffees',
  component: SelectedCoffees,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: () => {
    const [{ coffees, deliveryAddress, paymentMethod }] = useArgs()

		return customRender(
			<SelectedCoffees />,
			{
				coffees,
				deliveryAddress,
				paymentMethod
			}
		)
  }
} satisfies Meta<typeof SelectedCoffees>

export default meta

const coffee = {
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

export const WithOneCoffee: StoryObj = {
  args: {
		coffees: [coffee]
  }
}

export const WithMoreCoffees: StoryObj = {
  args: {
		coffees: [coffee, coffee]
  }
}

export const ConfirmedWithOneCoffee: StoryObj = {
  args: {
		coffees: [coffee],
		deliveryAddress: {
			cep: 'a',
			city: 'a',
			neighborhood: 'a',
			number: 'a',
			state: 'a',
			street: 'a'
		},
		paymentMethod: {
        id: 0,
        description: "CARTÃO DE CRÉDITO",
        isSelected: true
    }
  }
}
