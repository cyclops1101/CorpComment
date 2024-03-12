import { create } from "zustand";
import { TFeedbackItem } from "../lib/types";
import { createFeedback, getFeedbackList } from "../lib/services";


interface FeedbackState {
  feedbackItems: TFeedbackItem[];
  loading: boolean;
  error: string;
  selectedCompany: string;
  getFilteredFeedbacks: (company: string) => TFeedbackItem[];
  selectCompany: (company: string) => void;
  addFeedback: (text: string) => Promise<void>;
  fetchFeedbacks: () => Promise<void>;
  getCompanyList: () => string[];
  getSortedFeedbacks: () => TFeedbackItem[];
}

export const useFeedbackStore = create<FeedbackState>((set, get) => ({
  feedbackItems: [],
  loading: false,
  error: "",
  selectedCompany: "",
  getCompanyList: () => {
    return get()
      .feedbackItems.map((item) => item.company)
      .filter((company, index, array) => {
        return array.indexOf(company) === index;
      });
  },
  getFilteredFeedbacks: (company: string) => {
    return get()
      .feedbackItems.filter((item) => item.company === company)
      .sort((a, b) => b.upvoteCount - a.upvoteCount);
  },
  getSortedFeedbacks: () => {
    return get()
      .feedbackItems.sort((a, b) => b.upvoteCount - a.upvoteCount);
  },
  selectCompany: (company: string) => {
    set({ selectedCompany: company });
  },
  addFeedback: async (text: string) => {
    try {
      const companyName = text
        .split(" ")
        .find((word) => word.includes("#"))!
        .substring(1);

      const newItem: TFeedbackItem = {
        id: new Date().getTime(),
        text: text,
        upvoteCount: 0,
        daysAgo: 0,
        company: companyName,
        badgeLetter: companyName.substring(0, 1).toUpperCase(),
      };

      set((state) => ({
        feedbackItems: [...state.feedbackItems, newItem],
      }));
      await createFeedback(text);
    } catch (error: any) {
      set({ error: error.message });
    }
  },
  fetchFeedbacks: async () => {
    set({ loading: true });
    try {
      const feedbackItems = await getFeedbackList();
      set({ feedbackItems });
    } catch (error: any) {
      set({ error: error.message });
    }
    set({ loading: false });
  },
}));
