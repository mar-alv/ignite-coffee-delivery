import { customRender } from '../../stories-utils'
import type { Meta, StoryObj } from '@storybook/react'
import { PaymentResume } from '@components'

const meta = {
  title: 'Checkout/Payment Resume',
  component: PaymentResume,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: () => {
		return customRender(
			<PaymentResume />,
			{
				coffees: [
					{
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
				]
			}
		)
  }
} satisfies Meta<typeof PaymentResume>

export default meta

export const WithOneCoffee: StoryObj = {}
