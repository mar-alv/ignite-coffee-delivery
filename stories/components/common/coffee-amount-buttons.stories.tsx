import { CoffeeAmountButtons } from '@components'
import { customRender } from '../../stories-utils'
import type { Meta, StoryObj } from '@storybook/react'
import { useArgs } from '@storybook/preview-api'

const meta = {
  title: 'Common/CoffeeAmountButtons',
  component: CoffeeAmountButtons,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: ({ ...args }) => {
    const [{ amount }, updateArgs] = useArgs()

		function handleDecreaseAmount() {
			if (amount > 1)
				updateArgs({ amount: amount - 1 })
		}

		function handleIncreaseAmount() {
			updateArgs({ amount: amount + 1 })
		}

		return customRender(
			<CoffeeAmountButtons
				amount={args.amount}
				onDecreaseAmount={handleDecreaseAmount}
				onIncreaseAmount={handleIncreaseAmount}
			/>)
  }
} satisfies Meta<typeof CoffeeAmountButtons>

export default meta

export const WithCoffeeInCart: StoryObj = {
  args: {
		amount: 1,
		onDecreaseAmount() {},
		onIncreaseAmount() {}
  }
}
