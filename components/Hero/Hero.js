import React from 'react';
import { Heading } from '../../components';
import styles from './Hero.module.css';
import { cn } from '../../libs/cn';

export default function Hero({ title, level = 'h2', children, className }) {
  return (
    <div className={cn('component', className)}>
      <Heading level={level}>
        <span className={cn('title')}>{title}</span>
      </Heading>
      {children}
    </div>
  );
}
