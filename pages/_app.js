import 'font-awesome/css/font-awesome.min.css';
import '../styles/globals.css'
import '../styles/components.css'
import Layout from '../components/Layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Viewport and Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5, viewport-fit=cover" />
        
        {/* SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Performance Optimization */}
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Qualified Dental" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#00FFD1" />
        <meta name="msapplication-TileColor" content="#00FFD1" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Preload Critical Resources */}
        <link rel="preload" href="/images/logo.png" as="image" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;500;600&display=swap" as="style" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="//www.google.com" />
        
        {/* Open Graph Fallback */}
        <meta property="og:site_name" content="Qualified Dental" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Fallback */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@qualifieddental" />
        <meta name="twitter:creator" content="@qualifieddental" />
        
        {/* Additional Meta for Social Sharing */}
        <meta name="twitter:label1" content="Products" />
        <meta name="twitter:data1" content="Dental Chairs, Autoclaves, RVG Sensors, Compressors" />
        <meta name="twitter:label2" content="Service Areas" />
        <meta name="twitter:data2" content="Tamil Nadu & Karnataka - All Districts" />
        
        {/* Performance Monitoring */}
        <meta name="monetization" content="$ilp.uphold.com/your-payment-pointer" />
        
        {/* Security Headers (Note: These are typically set in server config, but included here for reference) */}
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com;" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        
        {/* Lazy Loading Configuration */}
        {typeof window !== 'undefined' && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                if ('loading' in HTMLImageElement.prototype) {
                  // Browser supports native lazy loading
                  const images = document.querySelectorAll('img[loading="lazy"]');
                  images.forEach(img => {
                    if (img.complete) {
                      if (img.naturalHeight !== 0) return;
                      img.src = img.dataset.src;
                      img.srcset = img.dataset.srcset || '';
                    }
                  });
                } else {
                  // Fallback for browsers without native lazy loading
                  const script = document.createElement('script');
                  script.async = true;
                  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lozad.js/1.16.0/lozad.min.js';
                  document.body.appendChild(script);
                  
                  script.onload = function() {
                    const observer = lozad('.lazy-load', {
                      rootMargin: '50px 0px',
                      threshold: 0.1,
                      loaded: function(el) {
                        el.classList.add('loaded');
                      }
                    });
                    observer.observe();
                  };
                }
              `,
            }}
          />
        )}
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
