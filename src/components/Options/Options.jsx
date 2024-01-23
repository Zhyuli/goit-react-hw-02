import css from './Options.module.css';

export const Options = ({ onUpdate, isHidden, onReset }) => {
  return (
    <div className={css.optionBox}>
      <button onClick={() => onUpdate('good')} className={css.button}>
        Good
      </button>
      <button onClick={() => onUpdate('neutral')} className={css.button}>
        Neutral
      </button>
      <button onClick={() => onUpdate('bad')} className={css.button}>
        Bad
      </button>
      {!isHidden && (
        <button className={css.button} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};
