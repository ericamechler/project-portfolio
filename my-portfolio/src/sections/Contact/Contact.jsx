import { Image } from "../../components/ImageElements/Image";
import linkedinSvg from "../../assets/icons/Btn - linkedin.svg";
import githubSvg from "../../assets/icons/Btn - github.svg";
import { TickerTape } from "../../components/TickerTape/TickerTape";
import "./Contact.css";

export const Contact = ({ avatarUrl }) => {
  return (
    <section className="contact-container">
      <div className="profile-image">
        <img src={avatarUrl} alt="profile-image" className="circle-image" />
      </div>
    </section>
  );
};