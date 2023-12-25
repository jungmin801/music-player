import React, { useEffect, useRef } from "react";
import styles from "./css/modal.module.css";

const Modal = ({ setShowModal }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className={styles.modalBg}>
      <div className={styles.modalContainer}>
        <p>저장할 재생 목록의 이름을 입력해주세요.</p>
        <input type="text" ref={inputRef} />
        <div>
          <button
            type="button"
            onClick={() => {
              setShowModal(false);
            }}
          >
            취소
          </button>
          <button type="button">확인</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
