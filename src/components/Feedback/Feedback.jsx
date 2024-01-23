export const Feedback = ({
  feedbackCategory: { good, neutral, bad },
  totalFeedbacks,
  positiveFeedbacks,
}) => {
  return (
    <div>
      <p>
        Good: <span className="catigory">{good}</span>
      </p>
      <p>
        Neutral: <span className="catigory">{neutral}</span>
      </p>
      <p>
        Bad: <span className="catigory">{bad}</span>
      </p>
      <p>
        Total: <span className="catigory">{totalFeedbacks}</span>
      </p>
      <p>
        Positive: <span className="catigory">{positiveFeedbacks}</span>
      </p>
    </div>
  );
};
