import React from 'react';
import styles from './NavigationItems.module.css';
import NavigationItem from './NaviagationItem/NavigationItem';

const navigationItems = () => (
    <ul className={styles.NavigationItems}>
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link ="/">Checkout Page</NavigationItem>
    </ul>
);
 
export default navigationItems;