import { useEffect, useState } from 'react';
import './App.css';
import { Options } from './components/Options/Options';
import { Feedback } from './components/Feedback/Feedback';
import { Description } from './components/Description/Description';
import { Notification } from './components/Notification/Notification';

const getFeedbacks = () => {
  const savedFeedbacks = window.localStorage.getItem('saved-feedbacks');
  if (savedFeedbacks !== null) {
    return JSON.parse(savedFeedbacks);
  }
  return {
    good: 0,
    neutral: 0,
    bad: 0,
  };
};

export const App = () => {
  const [feedbackCategory, setFeedbackCategory] = useState(getFeedbacks);

  const onFeedback = option => {
    setFeedbackCategory({
      ...feedbackCategory,
      [option]: feedbackCategory[option] + 1,
    });
  };

  const onReset = () => {
    setFeedbackCategory({
      ...feedbackCategory,
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    window.localStorage.setItem('saved-feedbacks', JSON.stringify(feedbackCategory));
  }, [feedbackCategory]);

  const totalFeedbacks = feedbackCategory.good + feedbackCategory.neutral + feedbackCategory.bad;
  const positiveFeedbacks = Math.round(
    ((feedbackCategory.good + feedbackCategory.neutral) / totalFeedbacks) * 100
  );
  const isHidden = totalFeedbacks === 0;

  return (
    <div>
      <Description />
      <Options onUpdate={onFeedback} onReset={onReset} isHidden={isHidden} />
      {isHidden ? (
        <Notification />
      ) : (
        <Feedback
          feedbackCategory={feedbackCategory}
          totalFeedbacks={totalFeedbacks}
          positiveFeedbacks={positiveFeedbacks}
        />
      )}
    </div>
  );
};
