
import { useRouter } from 'next/router';
import Script from 'next/script';

export default function Home() {

  const router = useRouter();

  const handleClick = () => {
    console.log('Button clicked!');
    router.push('/dashboard'); // Redirect to the dashboard page
  };


 
  
  return (
    
    <div>
    {/* Navigation Bar */}
    <nav style={{ backgroundColor: '#333', padding: '10px', color: '#fff' }}>
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-between', maxWidth: '300px' }}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li id='inbox'>Inbox</li>
      </ul>
    </nav>

    {/* Hero Section */}
    <section style={{ backgroundColor: '#f2f2f2', padding: '140px 0', textAlign: 'center' }}>
      <div>
        <h1 style={{ fontSize: '36px' }}>Welcome to Our Website</h1>
        <p style={{ fontSize: '20px', color: '#666' }}>We provide amazing services for you.</p>
        <button onClick={handleClick} style={{ padding: '10px 20px', fontSize: '16px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Get Started
        </button>
      </div>
    </section>

    {/* Clevertap Banner / carousel */}
    <div id='heroDiv'></div>
    
    {/* Call-to-action Section */}
    <section style={{ backgroundColor: '#007bff', padding: '60px 0', textAlign: 'center', color: '#fff' }}>
      <h2 style={{ fontSize: '30px' }}>Sign Up Now</h2>
      <p style={{ fontSize: '18px' }}>Join us and experience the best services.</p>
      <button style={{ padding: '10px 20px', fontSize: '16px', background: '#fff', color: '#007bff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Sign Up
      </button>
      <Script>
          {`
            var clevertap = {event:[], profile:[], account:[], onUserLogin:[], notifications:[], privacy:[]};
            clevertap.account.push({ "id": "TEST-487-669-RW7Z" });
            clevertap.privacy.push({optOut: false}); //set the flag to true, if the user of the device opts out of sharing their data
            clevertap.privacy.push({useIP: false}); //set the flag to true, if the user agrees to share their IP data
            (function () {
                var wzrk = document.createElement('script');
                wzrk.type = 'text/javascript';
                wzrk.async = true;
                wzrk.src = 'https://d2r1yp2w7bby2u.cloudfront.net/js/clevertap.min.js';
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(wzrk, s);
            })();

            clevertap.event.push('Web Test')
          `}
        </Script>

        <Script>
          {`
            
let pushEvent = () => {
			if (window.CleverTap) {
				// Call Android interface             
				CleverTap.pushEvent("EVENT from webview");
				testalert();
			}
			else {
				clevertap.event.push("EVENT from website");
				console.log("EVENT from website");
				// clevertap.event.push("TestApiEvent");
			}
		};
          `}
        </Script>
    </section>
  </div>
  )
}