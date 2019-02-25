import style from './style';

const getColor = () => {
	const letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color.indexOf('FFF') === -1 ? color : getColor();
};

const Avatar = ({ character }) => (
	<div class={style.avatar} style={{ backgroundColor: getColor() }}>
		{character}
	</div>
);

export default Avatar;