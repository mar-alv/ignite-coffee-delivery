import type { Meta, StoryObj } from '@storybook/react'
import { RemoveCoffeeButton } from '@components'

const meta = {
  title: 'Checkout/Remove Coffee Button',
  component: RemoveCoffeeButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: () => <RemoveCoffeeButton coffeeId={0} />
} satisfies Meta<typeof RemoveCoffeeButton>

export default meta

export const Default: StoryObj = {}
