import { useFeedbackStore } from "../../stores/feedback.store";
import Hashtag from "./Hashtag";

const HashtagList = () => {
  const { feedbackItems } = useFeedbackStore((state) => state);
  const uniqueCompanies = Array.from(new Set(feedbackItems.map(item => item.company)));
  
  return (
    <ul className="hashtags">
      {uniqueCompanies.map(company => (
        <Hashtag key={company} company={company} />
      ))}
    </ul>
  );
};

export default HashtagList;
