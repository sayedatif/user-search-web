import Card from '../components/Card';

const CardContainer = ({ users }) => (
	<div class="card-container">
		{users.map(item => (
			<Card item={item} />
		))}
	</div>
);

export default CardContainer;