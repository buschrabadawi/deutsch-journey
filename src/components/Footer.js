
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="socialMedia">
        <a
          href="https://www.instagram.com/"
          aria-label="Instagram"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon />
        </a>

        <a
          href="https://www.youtube.com/"
          aria-label="YouTube"
          target="_blank"
          rel="noreferrer"
        >
          <YouTubeIcon />
        </a>

        <a
          href="https://www.linkedin.com/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>

        <a
          href="https://www.tiktok.com/login"
          aria-label="TikTok"
          target="_blank"
          rel="noreferrer"
        >
         <MusicNoteIcon />
        </a>
      </div>

      <p>© 2027 Deutsch Journey</p>

      <p>
        Made with <FavoriteIcon className="heartIcon" /> by
        Buschra Badawi for the German learning community.
      </p>
    </footer>
  );
};

export default Footer;
