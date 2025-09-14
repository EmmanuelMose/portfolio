import React from "react";
import "../Footer/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-icons">
          <a href="https://github.com/.">
            <i className="bx bxl-github"></i>
          </a>
          <a href="https://wa.me/254718146250">
            <i className="bx bxl-whatsapp"></i>
          </a>
          <a href="https://x.com/home">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100086807377245">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="https://www.instagram.com/combmose/">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="https://www.tiktok.com/@user7984862204094">
            <i className="bx bxl-tiktok"></i>
          </a>
          <a href="https://www.youtube.com/@EmmanuelMose-cd9ee">
            <i className="bx bxl-youtube"></i>
          </a>
          <a href="https://t.me/+254718146250">
            <i className="bx bxl-telegram"></i>
          </a>
          <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
