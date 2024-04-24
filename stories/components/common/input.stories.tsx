import { customRender } from '../../stories-utils'
import { DeliveryAddress } from '@interfaces'
import { Input } from '@components'
import type { Meta, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'

const meta = {
  title: 'Common/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: ({ ...args }) => {
		const defaultValues: DeliveryAddress = {
			cep: '',
			city: '',
			complement: '',
			neighborhood: '',
			number: '',
			state: '',
			street: ''
		}
	
		const { register  } = useForm({ defaultValues })

		return customRender(
			<Input
				name={args.name}
				register={register}
				placeholder={args.placeholder}
				required={args.required}
			/>
		)
  }
} satisfies Meta<typeof Input>

export default meta

export const Obligatory: StoryObj = {
  args: {
		name: 'cep',
		placeholder: 'CEP',
		required: true
  }
}

export const Optional: StoryObj = {
  args: {
		name: 'cep',
		placeholder: 'CEP'
  }
}
