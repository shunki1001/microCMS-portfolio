import { ObjectArray } from "../libs/headings-list";
import styles from "./Heading.module.css";

export const Heading = ({ headingsList }) => {
  return (
    <div className={styles.table_of_contents}>
      <p>目次</p>
      <ul>
        {headingsList.map((item: ObjectArray) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.title}</a>
            {item.children.length > 0 && (
              <ul>
                {item.children.map((childItem) => {
                  return (
                    <li key={childItem.id}>
                      <a href={childItem.id}>{childItem.title}</a>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
