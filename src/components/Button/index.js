import style from './style';

const Button = ({ onClick, disable = false }) => {
	if (disable) {
		return (
			<button class={style.searchBtnDisable} disabled>Search</button>
		);
	}
	return (
		<button class={style.searchBtn} onclick={onClick}>Search</button>
	);
};

export default Button;