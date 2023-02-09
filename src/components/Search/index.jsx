import styles from "./Search.modal.scss";

function Search({ searchText, setSearchText }) {
  return (
    <div className="search-wrapper">
      <svg class="Search_icon__XMmYc" enable-background="new 0 0 32 32" id="EditableLine" version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><circle cx="14" cy="14" fill="none" id="XMLID_42_" r="9" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></circle><line fill="none" id="XMLID_44_" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="27" x2="20.366" y1="27" y2="20.366"></line></svg>
      <input value={searchText} onChange={(event)=>setSearchText(event.target.value)} placeholder="Найти пиццу..." className="search" />
    </div>
  );
}

export default Search;
