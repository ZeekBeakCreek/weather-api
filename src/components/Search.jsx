const Searchmovie = (props) => {
  return (
    <div className="searchbar">
      <input
        value={props.value}
        onChange={(event) => props.setSearchmovie(event.target.value)}
        placeholder="Search Movie ..."
      ></input>
    </div>
  );
};

export default Searchmovie;
