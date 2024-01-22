import { useState } from 'react';
import './App.css';
import { Options } from './components/Options/Options';
import { Feedback } from './components/Feedback/Feedback';
import { Description } from './components/Description/Description';

function App() {
  const [feedbackCategory, setFeedbackCategory] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  console.log(feedbackCategory);
  console.log(setFeedbackCategory);

  return (
    <div>
      <Description />
      <Options />
      <Feedback />
    </div>
  );
}

export default App;
