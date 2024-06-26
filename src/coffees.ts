import { Coffee } from '@interfaces'

export const coffees: Coffee[] = [
	{
			id: 0,
			name: 'Expresso Tradicional',
			description: 'O tradicional café feito com água quente e grãos moídos',
			price: 8.5,
			amount: 1,
			image: './src/assets/espressoImage.png',
			tags: [
					{
							id: 0,
							description: 'TRADICIONAL'
					}
			]
	},
	{
			id: 1,
			name: 'Expresso Americano',
			description: 'Expresso diluído, menos intenso que o tradicional',
			price: 8.7,
			amount: 1,
			image: './src/assets/americanCoffeeImage.png',
			tags: [
					{
							id: 0,
							description: 'TRADICIONAL'
					}
			]
	},
	{
			id: 2,
			name: 'Expresso Cremoso',
			description: 'Café expresso tradicional com espuma cremosa',
			price: 8.9,
			amount: 1,
			image: './src/assets/creamyEspressoImage.png',
			tags: [
					{
							id: 0,
							description: 'TRADICIONAL'
					}
			]
	},
	{
			id: 3,
			name: 'Expresso Gelado',
			description: 'Bebida preparada com café expresso e cubos de gelo',
			price: 9.2,
			amount: 1,
			image: './src/assets/coldCoffeeImage.png',
			tags: [
					{
							id: 0,
							description: 'TRADICIONAL'
					},
					{
							id: 1,
							description: 'GELADO'
					}
			]
	},
	{
			id: 4,
			name: 'Café com Leite',
			description: 'Meio a meio de expresso tradicional com leite vaporizado',
			price: 9.5,
			amount: 1,
			image: './src/assets/milkCoffeeImage.png',
			tags: [
					{
							id: 0,
							description: 'TRADICIONAL'
					},
					{
							id: 1,
							description: 'COM LEITE'
					}
			]
	},
	{
			id: 5,
			name: 'Latte',
			description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
			price: 10.0,
			amount: 1,
			image: './src/assets/latteImage.png',
			tags: [
					{
							id: 0,
							description: 'TRADICIONAL'
					},
					{
							id: 1,
							description: 'COM LEITE'
					}
			]
	},
	{
			id: 6,
			name: 'Capuccino',
			description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
			price: 10.5,
			amount: 1,
			image: './src/assets/capuccinoImage.png',
			tags: [
					{
							id: 0,
							description: 'TRADICIONAL'
					},
					{
							id: 1,
							description: 'COM LEITE'
					}
			]
	},
	{
			id: 7,
			name: 'Macchiato',
			description: 'Café expresso misturado com um pouco de leite quente e espuma',
			price: 11.0,
			amount: 1,
			image: './src/assets/macchiatoImage.png',
			tags: [
					{
							id: 0,
							description: 'TRADICIONAL'
					},
					{
							id: 1,
							description: 'COM LEITE'
					}
			]
	},
	{
			id: 8,
			name: 'Mochaccino',
			description: 'Café expresso com calda de chocolate, pouco leite e espuma',
			price: 11.5,
			amount: 1,
			image: './src/assets/mochaccinoImage.png',
			tags: [
					{
							id: 0,
							description: 'TRADICIONAL'
					},
					{
							id: 1,
							description: 'COM LEITE'
					}
			]
	},
	{
			id: 9,
			name: 'Chocolate Quente',
			description: 'Bebida feita com chocolate dissolvido no leite quente e café',
			price: 12.5,
			amount: 1,
			image: './src/assets/hotChocolateImage.png',
			tags: [
					{
							id: 0,
							description: 'ESPECIAL'
					},
					{
							id: 1,
							description: 'COM LEITE'
					}
			]
	},
	{
			id: 10,
			name: 'Cubano',
			description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
			price: 13.0,
			amount: 1,
			image: './src/assets/cubanCoffeeImage.png',
			tags: [
					{
							id: 0,
							description: 'ESPECIAL'
					},
					{
							id: 1,
							description: 'ALCOÓLICO'
					},
					{
							id: 2,
							description: 'GELADO'
					}
			]
	},
	{
			id: 11,
			name: 'Havaino',
			description: 'Bebida adocicada preparada com café e leite de coco',
			price: 13.5,
			amount: 1,
			image: './src/assets/hawaiianCoffeeImage.png',
			tags: [
					{
							id: 0,
							description: 'ESPECIAL'
					}
			]
	},
	{
			id: 12,
			name: 'Árabe',
			description: 'Bebida preparada com grãos de café árabe e especiarias',
			price: 14.0,
			amount: 1,
			image: './src/assets/arabCoffeeImage.png',
			tags: [
					{
							id: 0,
							description: 'ESPECIAL'
					}
			]
	},
	{
			id: 13,
			name: 'Irlandês',
			description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
			price: 14.5,
			amount: 1,
			image: './src/assets/irishCoffeeImage.png',
			tags: [
					{
							id: 0,
							description: 'ESPECIAL'
					},
					{
							id: 1,
							description: 'ALCOÓLICO'
					}
			]
	}
]
