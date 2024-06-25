// pages/dashboard.tsx
import Head from 'next/head';


const DashboardPage = () => {
  const showAlert = () => {
    const showAlert = () => {
        alert('Button on Dashboard clicked!');
      };
   
        if (typeof window !== 'undefined' && (window.clevertap || window.clevertap !== undefined)) {
            
            window.clevertap.event.push('Test_custom');
            // Fire event
        } else {
            console.warn('CleverTap is not defined');
        }
    
  };

  return (
    <div className="container">
      <Head>
        <title>Dashboard Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Dashboard</h1>
        <p>This is your dashboard page.</p>
        <button onClick={showAlert} style={styles.button}>Show Alert</button>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        h1 {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }
      `}</style>
    </div>
  );
};

const styles = {
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    background: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
  }
};

export default DashboardPage;
