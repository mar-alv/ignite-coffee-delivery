import { CheckoutForm, Payment } from "@components";
import { StyledCompleteYourOrder } from "./styles";

export function CompleteYourOrder() {
	return (
		<StyledCompleteYourOrder>
			<h2 className='title-xs'>
				Complete seu pedido
			</h2>

			<CheckoutForm />
			<Payment />
		</StyledCompleteYourOrder>
	)
}
