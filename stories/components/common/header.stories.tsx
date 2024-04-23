import { customRender } from '../../stories-utils'
import { Header } from '@components'
import type { Meta, StoryObj } from '@storybook/react'
import { useArgs } from '@storybook/preview-api'

const meta = {
  title: 'Common/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: () => {
    const [{ coffees = [] }] = useArgs()

    return customRender(<Header />, {
      coffees
    })
  }
} satisfies Meta<typeof Header>

export default meta

export const NoCoffeeInCart: StoryObj = {}

export const WithCoffeeInCart: StoryObj = {
  args: {
    coffees: [{}]
  }
}
