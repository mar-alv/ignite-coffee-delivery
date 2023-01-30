import { CoffeeTag } from '@interfaces'

export interface Coffee {
  id: number
  name: string
  image: string
  price: string
  tags: CoffeeTag[]
  description: string
}
