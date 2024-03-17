import css from './SearchBox.module.css'

export default function SearchBox({ value, onFilter }) {
    return (
        <div className={css.box}>
            <label htmlFor="filter">Find contacts by name</label>
            <input type="text" name="filter" value={value} onChange={ (e) => onFilter(e.target.value) } />
        </div>
    )
}