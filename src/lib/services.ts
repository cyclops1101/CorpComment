import { TFeedbackItem } from "./types";

export const getFeedbackList = async () => {
  const response = await fetch(
    "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch feedback");
  }
  const data = await response.json();

  return data.feedbacks;
};

export const createFeedback = async (feedback: string) => {
  const response = await fetch(
    "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
    {
      method: "POST",
      body: JSON.stringify(feedback),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to post feedback");
  }
  await response.json();
};