import { useFeedbackStore } from "../../stores/feedback.store";

type HashtagProps = {
  company: string;
};

const Hashtag = ({ company }: HashtagProps) => {
  const { selectCompany, selectedCompany } = useFeedbackStore((state) => state);

  const handleClick = (e) => {
    e.preventDefault();
    if (selectedCompany === company) {
      selectCompany("");
    } else {
      selectCompany(company);
    }
    e.stopPropogation();
  };
  return (
    <li>
      <button className={`${selectedCompany === company && 'selected'}`} onClick={handleClick}>#{company}</button>
    </li>
  );
};

export default Hashtag;
