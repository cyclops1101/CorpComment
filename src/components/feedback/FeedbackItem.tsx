import { TriangleUpIcon } from "@radix-ui/react-icons";
import { FeedbackItemProps } from "../../lib/types";
import { useState } from "react";

const FeedbackItem = ({ feedback }: FeedbackItemProps) => {
  const [open, setOpen] = useState(false);
  const [upvoteCount, setUpvoteCount] = useState(feedback.upvoteCount);

  const handleUpvote = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setUpvoteCount((prev) => ++prev);
    e.currentTarget.disabled = true;
    e.stopPropagation();
  };

  return (
    <li
      onClick={() => setOpen((prev) => !prev)}
      className={`feedback ${open ? "feedback--expand" : ""}`}
    >
      <button onClick={handleUpvote}>
        <TriangleUpIcon />
        <span>{upvoteCount}</span>
      </button>
      <div>
        <p>{feedback.badgeLetter}</p>
      </div>
      <div>
        <p>{feedback.company}</p>
        <p>{feedback.text}</p>
      </div>
      <p>{feedback.daysAgo === 0 ? "NEW" : `${feedback.daysAgo}d`}</p>
    </li>
  );
};

export default FeedbackItem;
