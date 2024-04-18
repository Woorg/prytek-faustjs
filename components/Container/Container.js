import { cn } from '../../libs/cn';
import styles from './Container.module.css';

export default function Container({ children, className }) {
  return (
    <div className={cn('component', className)}>
      {children}
    </div>
  );
}
