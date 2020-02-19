import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Counter.css';
import routes from '../../constants/routes.json';
import { counterActions, counterSelectors } from '../../state/counter';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(counterSelectors.getCount);

  const handleIncrementButtonClick = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrementButtonClick = () => {
    dispatch(counterActions.decrement());
  };

  const handleAsyncButtonClick = () => {
    dispatch(counterActions.incrementAsync());
  };

  return (
    <div>
      <div className={styles.backButton} data-tid="backButton">
        <Link to={routes.HOME}>
          <i className="fa fa-arrow-left fa-3x" />
        </Link>
      </div>
      <div className={`counter ${styles.counter}`} data-tid="counter">
        {count}
      </div>
      <div className={styles.btnGroup}>
        <button
          className={styles.btn}
          onClick={handleIncrementButtonClick}
          data-tclass="btn"
          type="button"
        >
          <i className="fa fa-plus" />
        </button>
        <button
          className={styles.btn}
          onClick={handleDecrementButtonClick}
          data-tclass="btn"
          type="button"
        >
          <i className="fa fa-minus" />
        </button>
        <button
          className={styles.btn}
          onClick={handleAsyncButtonClick}
          data-tclass="btn"
          type="button"
        >
          async
        </button>
      </div>
    </div>
  );
};

export default Counter;
