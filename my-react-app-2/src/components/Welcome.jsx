import React from 'react';
import './Welcome.css';

function Welcome() {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">My React App ✧˖°. </div>
      </nav>

      <main className="content">
        <h1 className="title">พร้อมชมสิ่งเจ๋ง ๆ ด้วย React แล้วหรือยัง? 💌</h1>
        <button
          className="button"
          onClick={() =>
            alert('ขอให้วันนี้เป็นวันที่ดีนะคะ✨🩷🎉 มาเริ่มกันเลย')
          }
        >
          พร้อมแล้ว
        </button>
      </main>
    </div>
  );
}

export default Welcome;
