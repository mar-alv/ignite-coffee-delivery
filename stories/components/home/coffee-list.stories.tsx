import { CoffeeList } from '@components'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Home/CoffeeList',
  component: CoffeeList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: () => <CoffeeList />,
} satisfies Meta<typeof CoffeeList>

export default meta

export const Default: StoryObj = {}
