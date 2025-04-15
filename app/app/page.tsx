import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section style={{
          minHeight: 'calc(100vh - 80px)', // Adjust based on header height
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '4rem 0', // Add padding
          // Basic background gradient/image could go here
          background: 'linear-gradient(rgba(10, 15, 31, 0.8), rgba(10, 15, 31, 0.9)), url(/placeholder-bg.jpg)', // Add a placeholder bg image to public folder later
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>
            Welcome to Ahlcon Academy
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-color)', maxWidth: '700px', margin: '0 auto 2rem auto' }}>
            Shaping the Innovators of 2050. Experience education redefined through seamless integration of AI, VR, and personalized learning pathways.
          </p>
          <Link href="/about" className="button">
            Discover the Future
          </Link>
        </div>
      </section>

      {/* Placeholder for Features Section */}
      <section>
        <div className="container">
          <h2>Why Choose Ahlcon?</h2>
          {/* Add feature cards or content here later */}
          <p style={{textAlign: 'center', marginTop: '2rem'}}>
              [Feature blocks showcasing AI Tutors, VR Labs, Holographic Interfaces coming soon...]
          </p>
        </div>
      </section>

      {/* Placeholder for another section */}
       <section style={{ backgroundColor: 'var(--surface-color)'}}>
        <div className="container">
          <h2>Our Vision</h2>
           <p>
            [More details about the school's philosophy and technology focus...]
           </p>
        </div>
      </section>
    </>
  );
}