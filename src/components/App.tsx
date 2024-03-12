import { Toaster } from "react-hot-toast";
import { Container, Footer, HashtagList } from ".";
import { useEffect } from "react";
import { useFeedbackStore } from "../stores/feedback.store";

function App() {
  const { fetchFeedbacks } = useFeedbackStore(state => state);
  useEffect(() => {
    fetchFeedbacks();
  }, []);

  return (
    <div className="app">
      <Footer />
      <Container />
      <HashtagList />
      <Toaster />
    </div>
  );
}

export default App;
