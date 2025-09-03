import React from 'react';
import Welcome from './Welcome';
import Greeting from './Greeting';
import Clock from './Clock';
import TodoList from './TodoList';
import UserCard from './UserCard';
import chin from './chin.gif';
const People = () => (
    <img 
        src={chin}
        alt="User Avatar"
        style={{
            borderRadius: '80%',
            width: '250px',
            height: '250px',
        }}
    />
);
function ComponentExamples() {
    return (
        <div style={{
            maxWidth: '900px',
            margin: '0 auto',
            marginBottom: '5px',
            padding: '5px',
            fontFamily: 'Arial, sans-serif'
        }}>
             <Welcome />
            <h1 style={{
                textAlign: 'center',
                color: '#896C6C',
                marginBottom: '40px'
            }}>
                내 웹사이트에 오신 것을 환영합니다.
            </h1>
            <h3 style={{
                textAlign: 'center',
                color: '#E5BEB5',
                marginBottom: '40px'
            }}>
                Welcome to my website.
            </h3>
                <People />
               
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                borderRadius: '8px',
                backgroundColor: '#F5FAE1'
            }}>
                <h2 style={{ color: '#896C6C', marginBottom: '20px' }}>
                    Client-Side Web Programming
                </h2>
                
                <Greeting />
            </section>
            
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                borderRadius: '8px',
                backgroundColor: '#F5FAE1'
            }}>
                <h2 style={{ color: '#896C6C', marginBottom: '20px' }}>
                    The Current Moment
                </h2>
                <Clock />
            </section>
            
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                borderRadius: '8px',
                backgroundColor: '#F5FAE1'
            }}>
                <h2 style={{ color: '#896C6C', marginBottom: '20px' }}>
                    About Me
                </h2>
                <UserCard />
            </section>
            
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #eee',
                borderRadius: '8px',
                backgroundColor: '#F5FAE1'
            }}>
                <h2 style={{ color: '#896C6C', marginBottom: '20px' }}>
                   - Notes -
                </h2>
                <TodoList />
            </section>
        </div>
    );
}

export default ComponentExamples;