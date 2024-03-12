export type TFeedbackItem = {
  upvoteCount: number;
  company: string;
  text: string;
  daysAgo: number;
  id: number;
  badgeLetter: string;
};

export type FeedbackItemProps = {
  feedback: TFeedbackItem;
};
