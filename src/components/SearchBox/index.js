import style from './style';

const SearchBox = ({ onChange, value, placeholder = 'Search users' }) => (
	<input type="text" class={style.searchBox} oninput={onChange} value={value} placeholder={placeholder} />
);

export default SearchBox;