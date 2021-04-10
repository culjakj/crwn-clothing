import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => {
  const menuItemClass = size ? `${size} menu-item` : 'menu-item';
  return (
    <div
      className={menuItemClass}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>SHOP</span>
      </div>
    </div>
  );

}

export default MenuItem;