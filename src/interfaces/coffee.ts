import { CoffeeTag } from '@interfaces'

export interface Coffee {
  id: number
  amount?: number
  description: string
  image: string
  name: string
  price: number
  tags: CoffeeTag[]
}
