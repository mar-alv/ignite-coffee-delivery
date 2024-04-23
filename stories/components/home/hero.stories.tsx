import { Hero } from '@components'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Home/Hero',
  component: Hero,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: () => <Hero />
} satisfies Meta<typeof Hero>

export default meta

export const Default: StoryObj = {}
