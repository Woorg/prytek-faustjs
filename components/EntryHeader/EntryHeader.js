import { Heading, PostInfo, Container, FeaturedImage } from '../../components';
import { cn } from '../../libs/cn';
import styles from './EntryHeader.module.css';

export default function EntryHeader({ title, image, date, author, className }) {
  const hasText = title || date || author;

  return (
    <div className={cn('component', className)}>
      {image && (
        <FeaturedImage
          image={image}
          className={cn('image')}
          priority
        />
      )}

      {hasText && (
        <div className={cx('text', { 'has-image': image })}>
          <Container>
            {!!title && <Heading className={cx('title')}>{title}</Heading>}
            <PostInfo
              className={cx('byline')}
              author={author}
              date={date}
            />
          </Container>
        </div>
      )}
    </div>
  );
}
