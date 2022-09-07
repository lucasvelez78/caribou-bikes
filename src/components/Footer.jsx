function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer>
      <div className="footer-content">
        <ul className="socials">
          <li>
            <a href="https://www.facebook.com/">
              <img src="images/facebook.png" alt="logo"></img>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <img src="images/instagram.png" alt="logo"></img>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/">
              <img src="images/twitter.png" alt="logo"></img>
            </a>
          </li>
        </ul>
        <p>copyright &copy;{year} DonkeyVariations</p>
      </div>
    </footer>
  );
}

export default Footer;
