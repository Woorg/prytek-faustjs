import { cn } from '../../libs/cn';
import styles from './ContentWrapper.module.css';

export default function ContentWrapper({ content, children, className }) {
  return (
    <article className={cn('component', className)}>
      <div dangerouslySetInnerHTML={{ __html: content ?? '' }} />
      {children}
    </article>
  );
}
