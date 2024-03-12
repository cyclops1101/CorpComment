import FeedbackItem from "./FeedbackItem";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import { useFeedbackStore } from "../../stores/feedback.store";

const FeedbackList = () => {
  const {
    loading,
    error,
    selectedCompany,
    getSortedFeedbacks,
    getFilteredFeedbacks,
  } = useFeedbackStore();
  const feedbackList =
    selectedCompany !== ""
      ? getFilteredFeedbacks(selectedCompany)
      : getSortedFeedbacks();
  return (
    <ol className="feedback-list">
      {loading && <Spinner />}
      {error && <ErrorMessage message={error} />}

      {feedbackList.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedback={feedbackItem} />
      ))}
    </ol>
  );
};

export default FeedbackList;
