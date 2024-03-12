import FeedbackItem from "./FeedbackItem";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import { useFeedbackStore } from "../../stores/feedback.store";

const FeedbackList = () => {
  const { feedbackItems, loading, error } = useFeedbackStore();
  return (
    <ol className="feedback-list">
      {loading && <Spinner />}
      {error && <ErrorMessage message={error} />}

      {feedbackItems
        .sort((a, b) => b.upvoteCount - a.upvoteCount)
        .map((feedbackItem) => (
          <FeedbackItem key={feedbackItem.id} feedback={feedbackItem} />
        ))}
    </ol>
  );
};

export default FeedbackList;
