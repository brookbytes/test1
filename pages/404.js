import Head from 'next/head'
import Link from 'next/link'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found - Qualified Dental Equipment</title>
        <meta name="description" content="The page you're looking for doesn't exist. Browse our premium dental equipment collection for clinics across Tamil Nadu and Karnataka." />
        <meta name="robots" content="noindex, follow" />
      </Head>

      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '60vh',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#00CCB8' }}>
          404 - Page Not Found
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#666' }}>
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link 
          href="/" 
          style={{
            background: 'linear-gradient(135deg, #00FFD1, #00CCB8)',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '600',
            transition: 'transform 0.2s ease'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          Return to Home
        </Link>
      </div>
    </>
  )
}
