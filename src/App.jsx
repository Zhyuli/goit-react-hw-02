import { useEffect, useState } from 'react';
import './App.css';
import { Options } from './components/Options/Options';
import { Feedback } from './components/Feedback/Feedback';
import { Description } from './components/Description/Description';

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

const getClicks = () => {
  const savedClicks = window.localStorage.getItem('saved-clicks');
  if (savedClicks !== null) {
    return JSON.parse(savedClicks);
  }
  return 0;
};

export const App = () => {
  const [feedbackCategory, setFeedbackCategory] = useState(getFeedbacks);
  const [clicks, setClicks] = useState(getClicks);

  // console.log(feedbackCategory);
  // console.log(setFeedbackCategory);
  // console.log(clicks);
  // console.log(setClicks);

  const onFeedback = option => {
    setFeedbackCategory({
      ...feedbackCategory,
      [option]: feedbackCategory[option] + 1,
    });
    setClicks(clicks + 1);
  };

  const onReset = () => {
    setFeedbackCategory({
      ...feedbackCategory,
      good: 0,
      neutral: 0,
      bad: 0,
    });
    setClicks(0);
  };

  useEffect(() => {
    window.localStorage.setItem('saved-feedbacks', JSON.stringify(feedbackCategory));
    window.localStorage.setItem('saved-clicks', clicks);
  }, [feedbackCategory, clicks]);

  return (
    <div>
      <Description />
      <Options onUpdate={onFeedback} />
      <Feedback feedbackCategory={feedbackCategory} />
    </div>
  );
};
