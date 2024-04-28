import '@testing-library/jest-dom'
import { customRender } from '../test-utils'
import { Input } from '@components'
import { fireEvent, screen } from '@testing-library/react'

jest.mock('react-hook-form', () => ({
  useForm: jest.fn(() => ({ register: jest.fn() })),
}));

describe('input tests', () => {
	const registerMock = jest.fn();

  it('should not show the optional label when the field is required', () => {
		// arrange
    customRender(
			<Input
				name='cep'
				register={registerMock}
				required
			/>
		)

    // assert
    expect(screen.queryByText('Opcional')).not.toBeInTheDocument()
  })

	it('should show the optional label when the field is optional', () => {
		// arrange
    customRender(
			<Input
				name='cep'
				register={registerMock}
			/>
		)

    // assert
    expect(screen.queryByText('Opcional')).toBeInTheDocument()
  })

	it('should update the input when typing on it', () => {
		// arrange
    customRender(
			<Input
				name='cep'
				register={registerMock}
				required
			/>
		)

    const input: HTMLInputElement = screen.getByTestId('input')

		fireEvent.change(input, {
      target: {
        value: '12345678'
      }
    })

    // assert
    expect(input.value).toBe('12345678')
  })
})
