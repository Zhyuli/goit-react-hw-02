import css from './Notification.module.css';

export const Notification = () => {
  return (
    <div className={css.box}>
      <p className={css.text}>No feedback yet.</p>
    </div>
  );
};
