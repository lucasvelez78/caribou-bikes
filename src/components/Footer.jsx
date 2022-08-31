function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer>
      <div className="footer-content">
        <ul className="socials">
          <li>
            <a>
              <img src="images/facebook.png"></img>
            </a>
          </li>
          <li>
            <a>
              <img src="images/instagram.png"></img>
            </a>
          </li>
          <li>
            <a>
              <img src="images/twitter.png"></img>
            </a>
          </li>
        </ul>
        <p>copyright &copy;{year} DonkeyVariations</p>
      </div>
    </footer>
  );
}

export default Footer;
