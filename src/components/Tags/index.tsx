import React from 'react';
import styles from './index.less';

interface TagsProps {
  tags: string[];
}
const Tags: React.FC<TagsProps> = ({ tags }) => {
  return (
    <div className={styles.main}>
      {tags.map((tag, index) => (
        <div key={index} className={styles.tag}>
          {tag}
        </div>
      ))}
    </div>
  );
};

export default Tags;
