const Search = ({ searchText, onChange, data }) => {
  // const containSearchString = data.filter(((row)=>row["&id"].toString().includes(searchText)));
  return <input type="text" value={searchText} onChange={onChange} />
}

export default Search
