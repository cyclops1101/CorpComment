import { useFeedbackStore } from "../../stores/feedback.store";
import Hashtag from "./Hashtag";

const companies = ["netflix", "mcdonalds", "nike", "bobs burgers", "starbucks"];
const HashtagList = () => {
  const { feedbackItems } = useFeedbackStore((state) => state);
  return (
    <ul className="hashtags">
      {feedbackItems.map(({ id, company }) => (
        <Hashtag key={id} company={company} />
      ))}
    </ul>
  );
};

export default HashtagList;
