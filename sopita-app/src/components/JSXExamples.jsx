import React from 'react';

function JSXExamples() {
    const greetings = [
        '🌸 สวัสดีจ้า! วันนี้สดใสมั้ย?',
        '🦋 หวัดดีค่ะ! หวังว่าจะมีวันที่ดี',
        '🌺 ยินดีต้อนรับสู่โลกแสนสวย!',
        '🍭 สวยยยยย! วันนี้หวานๆ นะ'
    ];

    // เพิ่มบรรทัดนี้เพื่อสุ่ม greeting
    const greeting = greetings[Math.floor(Math.random() * greetings.length)];

    const name = 'Sopita';
    const age = 20;

    const currentYear = new Date().getFullYear();

    const user = {
        firstName: 'Sopita',
        lastName: 'Jengsriwong',
        age: 20,
        hobbies: ['ดูหนัง/ซีรีย์', 'ฟังเพลง', 'เล่นเกม'],
        mood: 'มีความสุข',
        favoriteColor: 'ชมพูพาสเทล'
    };

    const formatName = (user) => {
        return `${user.firstName} ${user.lastName}`;
    };

    const isLoggedIn = true;
    const hasNotification = 9;

    return (
        <div className="jsx-examples">
            <h1>CSWP</h1>

            <section>
                <h2>📝 การแสดงผลข้อมูล</h2>
                <h3>{greeting}</h3> {/* ย้ายมาใส่ใน section และเปลี่ยนเป็น h3 */}
                <p>สวัสดีคุณ {name} อายุ {age} ปี</p>
                <p>ปีนี้คือปี {currentYear}</p>
                <p>ชื่อเต็ม: {formatName(user)}</p>
                <p>🌟 อารมณ์วันนี้: {user.mood}</p>
                <p>🎨 สีที่ชอบ: {user.favoriteColor}</p>
            </section>

            <section>
                <h2>🎨 Attributes ใน JSX</h2>
                <div className="card">
                    <p className="text-primary">Silpakorn University</p>
                </div>

                <button
                    onClick={() => alert('เย่! กดได้แล้ว!')}
                    onMouseEnter={() => console.log('เมาส์มาแล้วนะ')}
                >
                    ลองกดหรือชี้เมาส์ดู
                </button>

                <div style={{
                    backgroundColor: '#FFF3E0',
                    padding: '20px',
                    borderRadius: '12px',
                    marginTop: '15px',
                    border: '2px solid #FFB74D'
                }}>
                    <p style={{ color: '#2D4A2B', fontWeight: 'bold' }}>
                        Inline styles ใช้ object
                    </p>
                </div>
            </section>

            <section>
                <h2>🔀 Conditional Rendering</h2>

                <p>
                    สถานะ: {isLoggedIn ? '✅ ล็อกอินแล้ว' : '❌ ยังไม่ได้ล็อกอิน'}
                </p>

                {hasNotification > 0 && (
                    <div className="notification">
                        🔔 คุณมี {hasNotification} การแจ้งเตือนใหม่
                    </div>
                )}

                {(() => {
                    if (user.age >= 18) {
                        return <p>✅ {formatName(user)} เป็นผู้ใหญ่แล้ว</p>;
                    } else {
                        return <p>👶 {formatName(user)} ยังเป็นเด็ก</p>;
                    }
                })()}
            </section>

            <section>
                <h2>📋 การแสดงผล Lists</h2>
                <h3>งานอดิเรกของ {user.firstName}:</h3>
                <ul>
                    {user.hobbies.map((hobby, index) => (
                        <li key={index}>
                            {index + 1}. {hobby}
                        </li>
                    ))}
                </ul>

                <div className="product-list">
                    <h3>🎮 รายการสินค้าเกมมิ่ง</h3>
                    {[
                        { id: 1, name: 'จอยสติก PS5', price: 2490, inStock: true },
                        { id: 2, name: 'เกม GTA V', price: 890, inStock: false },
                        { id: 3, name: 'หูฟังเกมมิ่ง', price: 1590, inStock: true },
                        { id: 4, name: 'คีย์บอร์ดเกมมิ่ง', price: 3290, inStock: true }
                    ].map(product => (
                        <div key={product.id} className="product-item">
                            <span>🎮 {product.name}</span>
                            <span> - ฿{product.price.toLocaleString()}</span>
                            <span className={product.inStock ? 'in-stock' : 'out-stock'}>
                                {product.inStock ? ' ✅ พร้อมส่ง' : ' ⏳ สินค้าหมด'}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2>🧩 React Fragment</h2>
                <p>ใช้เมื่อไม่ต้องการ wrapper element:</p>

                <React.Fragment>
                    <h3>🎯 เป้าหมายสำหรับปีนี้</h3>
                    <p>เรียนรู้ React ให้เก่ง</p>
                </React.Fragment>

                <>
                    <h3>💡 แผนการเรียนรู้</h3>
                    <p>ทำโปรเจ็กต์จริงให้ได้</p>
                </>
            </section>

            <section>
                <h2>🎯 Event Handling ใน JSX</h2>
                <input
                    type="text"
                    placeholder="🔍 ค้นหาอะไรก็ได้..."
                    onChange={(e) => console.log('กำลังพิมพ์:', e.target.value)}
                />

                <select onChange={(e) => alert(`เลือก: ${e.target.value} แล้ว!`)}>
                    <option value="">-- เลือกเครื่องดื่ม --</option>
                    <option value="coffee">☕ กาแฟ</option>
                    <option value="tea">🍵 ชา</option>
                    <option value="juice">🧃 น้ำผลไม้</option>
                    <option value="water">💧 น้ำเปล่า</option>
                </select>
            </section>

            <section>
                <h2>🌈 Greeting แบบสุ่ม</h2>
                <p>ทุกครั้งที่ refresh หน้า จะได้ greeting ใหม่!</p>
                <button 
                    onClick={() => {
                        const newGreeting = greetings[Math.floor(Math.random() * greetings.length)];
                        alert(newGreeting);
                    }}
                    style={{
                        backgroundColor: '#FFE4E1',
                        border: '2px solid #FFB6C1',
                        borderRadius: '10px',
                        padding: '10px 15px',
                        cursor: 'pointer'
                    }}
                >
                    🎲 สุ่ม Greeting ใหม่
                </button>
            </section>

            <section>
                <h2>💬 Comments ใน JSX</h2>
                <p>Comment ใน JSX ต้องอยู่ในเครื่องหมาย curly braces</p>
                {/* 
                    นี่คือ comment ใน JSX นะ
                    เขียนอะไรก็ได้ที่นี่
                    สามารถเขียนหลายบรรทัดได้
                */}
                <p>Comment ข้างบนจะไม่แสดงในหน้าเว็บ</p>
            </section>
        </div>
    );
}

export default JSXExamples;