function Mynav(){
    return (
    <nav class="navbar  myNavContainer">
        <div class="container-fluid">
          <img src="/src/assets/logo.png" alt="" id="navLogo" />
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success mysearchBtn" type="submit">Search</button>
          </form>
        </div>
      </nav>
      );
}
export default Mynav;