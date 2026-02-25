import styles from "./Timeline.module.css";

export type ExperienceItem = {
  company: string;
  role: string;
  dates: string;
  bullets: string[];
  tech?: string;
};

type Props = {
  items: ExperienceItem[];
};

export default function Timeline({ items }: Props) {
  return (
    <div className={styles.timeline}>
      {items.map((item, index) => (
        <div key={item.company + item.role} className={styles.item}>
          <div className={styles.marker} aria-hidden />
          <div className={styles.content}>
            <p className={styles.dates}>{item.dates}</p>
            <h3 className={styles.role}>{item.role}</h3>
            <p className={styles.company}>{item.company}</p>
            {item.tech && <p className={styles.tech}>{item.tech}</p>}
            <ul className={styles.list}>
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
