import React from 'react';

function Error() {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: '#f8d7da',
            color: '#721c24',
            fontFamily: 'Arial, sans-serif',
            textAlign: 'center',
        },
        title: {
            fontSize: '3rem',
            fontWeight: 'bold',
        },
        message: {
            fontSize: '1.5rem',
            marginTop: '1rem',
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Error</h1>
            <p style={styles.message}>Something went wrong. Please try again later.</p>
        </div>
    );
}

export default Error;
