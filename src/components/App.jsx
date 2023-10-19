import { useState } from 'react';
import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Notification } from './Notification';

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleClick = ({ target }) => {
    const btnName = target.name;
    setFeedback(prevState => ({
      ...prevState,
      [btnName]: prevState[btnName] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const total = Object.values(feedback);
    return total.reduce((acc, el) => el + acc, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.floor((100 * feedback.good) / countTotalFeedback());
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        onLeaveFeedback={handleClick}
        options={Object.keys(feedback)}
      />
      {countTotalFeedback() < 1 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Statistics
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      )}
    </Section>
  );
};
