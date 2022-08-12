

function Navbar() {
    function navSlide() {
      const nav = document.querySelector(".navLinks");
      const navigationLinks = document.querySelectorAll(".navLinks a");
      nav.classList.toggle("navActive");
      navigationLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.2
          }s`;
        }
      });
    }
  
    return (
      <nav>
        <div className="logo">
          <h1>Caribou</h1>
        </div>
        <ul className="navLinks">
          <li>
            <a href="/">Bicycles<span><img className="arrowDown" src="dropdown.png"></img></span></a>
          </li>
          <li>
            <a href="/">Log in</a>
          </li>
          <li>
          <a className="shoppingCart" href="/shop"><img src="cart.png" className="shoppingCartIcon"></img></a>
          </li>
        </ul>
        <div className="burger" onClick={navSlide}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;