import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/erik-ferreira.png" alt="Erik Ferreira" />
      <div>
        <strong>Erik Ferreira</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 11
        </p>
      </div>
    </div>
  );
}
