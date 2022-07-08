/* eslint-disable @next/next/no-css-tags */
import Head from 'next/head';

export default function MedicalDisclaimer() {
  return (
    <div className="privacy-policy">
    <Head>
      <title>Medical Disclaimer</title>
      <meta name="description" content="ENdi: Medical Disclaimer" />
      <link rel='stylesheet' href='./global.css'></link>
    </Head>
    <h1>Medical Disclaimer</h1>
    <p>Last updated: May 11, 2022</p>
    <p>ENdi App is not medical or treatment advice, professional diagnosis, opinion, or services – and may not be treated as such by the user. As such, this App may not be relied upon for the purposes of medical diagnosis or as a recommendation for medical care or treatment. If you have any concerns or questions about your health, you should always consult with a Doctor or other health-care professional.</p>
  </div>
  )
}