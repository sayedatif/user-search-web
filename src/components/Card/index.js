import Avatar from '../Avatar';
import style from './style';

const Card = ({ item }) => (
	<div class={style.card}>
		<Avatar character={item.givenName.charAt(0)} />
		<div class={style.details}>
			<p class={style.detailText}><strong>Name:</strong> {item.givenName}</p>
			<p class={style.detailText}><strong>Middle:</strong> {item.middleName}</p>
			<p class={style.detailText}><strong>Surname:</strong> {item.surname}</p>
		</div>
	</div>
);

export default Card;