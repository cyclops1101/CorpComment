import { FeedbackForm, Logo, Pattern } from "..";

const Header = () => {
  return (
    <header>
      <Pattern />
      <Logo />
      <h1>
        Give Feedback. <span>Publicly.</span>
      </h1>
      <FeedbackForm />
    </header>
  );
};

export default Header;
