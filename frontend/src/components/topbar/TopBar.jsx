import React from 'react';
import classes from './TopBar.module.css'

const TopBar = () => {
  return (
    <div className={classes.wrap}>
      <div className={classes.header}>О нас</div>
      <div className={classes.header}>Сделать заказ</div>
      <div className={classes.header}>Вход / Регистрация</div>
    </div>
  );
};
export default TopBar;