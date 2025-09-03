import React, { useState } from "react";
import "./TodoList.css";

export default function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, text: "ออกกำลังกาย", completed: true },
        { id: 2, text: "ทำกับข้าว", completed: true },
        { id: 3, text: "กวาดบ้าน ถูบ้าน", completed: true },
        { id: 4, text: "ส่งงาน SSWP: Assignment week5", completed: true },
        { id: 5, text: "ฟัง Podcast พัฒนาจิตใจ", completed: true },
        { id: 6, text: "ฝึกภาษาอังกฤษ", completed: true },
        { id: 7, text: "จ่ายบิลค่าเน็ตมือถือ", completed: true },
        { id: 8, text: "ไปพิธีคเณศจตุรถถี ศิลปากร พระราชวังสนามจันทร์", completed: true },
        { id: 9, text: "ทิ้งขยะ", completed: true },
        { id: 10, text: "กรอกน้ำ", completed: true }
    ]);

    const toggle = (id) =>
        setTodos(prev => prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));

    const completed = todos.filter(t => t.completed).length;
    const percent = Math.round((completed / todos.length) * 100);

    return (
        <div className="todo-container">
            <h3>📝 To Do List</h3>

            <div className="progress-bar">
                <div
                    className="progress"
                    style={{ width: `${percent}%`, background: "linear-gradient(45deg, #ff9a9e, #fad0c4)" }}
                >
                    {percent}%
                </div>
            </div>

            <div className="todo-items">
                {todos.map(({ id, text, completed }) => (
                    <label key={id} className={`todo-item ${completed ? "done" : ""}`}>
                        <input type="checkbox" checked={completed} onChange={() => toggle(id)} />
                        <span>{text}</span>
                    </label>
                ))}
            </div>

            <div className="summary">
                ✨ ทำเสร็จแล้ว {completed} จาก {todos.length} รายการ
            </div>
        </div>
    );
}
