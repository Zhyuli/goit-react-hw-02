export const Options = ({ onUpdate, isHidden, onReset }) => {
  return (
    <div>
      <button onClick={() => onUpdate('good')} className="good">
        Good
      </button>
      <button onClick={() => onUpdate('neutral')} className="neutral">
        Neutral
      </button>
      <button onClick={() => onUpdate('bad')} className="bad">
        Bad
      </button>
      {!isHidden && <button onClick={onReset}>Reset</button>}
    </div>
  );
};
