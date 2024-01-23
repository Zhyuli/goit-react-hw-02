import css from './Feedback.module.css';

export const Feedback = ({
  feedbackCategory: { good, neutral, bad },
  totalFeedbacks,
  positiveFeedbacks,
}) => {
  return (
    <div className={css.feedbackBox}>
      <p className={css.feedback}>
        Good: <span className={css.span}>{good}</span>
      </p>
      <p className={css.feedback}>
        Neutral: <span className={css.span}>{neutral}</span>
      </p>
      <p className={css.feedback}>
        Bad: <span className={css.span}>{bad}</span>
      </p>
      <p className={css.feedback}>
        Total: <span className={css.span}>{totalFeedbacks}</span>
      </p>
      <p className={css.feedback}>
        Positive: <span className={css.span}>{positiveFeedbacks}%</span>
      </p>
    </div>
  );
};
