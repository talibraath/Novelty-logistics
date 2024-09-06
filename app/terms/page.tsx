// pages/terms-and-conditions.js

import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms and Conditions | Novelty Logistics</title>
        <meta name="description" content="Review the terms and conditions for using Novelty Logistics' dispatch and logistics services. Stay informed about your rights and obligations." />
        <meta name="keywords" content="Novelty Logistics terms, dispatch service terms, logistics terms and conditions, trucking policies, freight dispatch rules, dispatch service terms and conditions" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Terms and Conditions | Novelty Logistics" />
        <meta property="og:description" content="Explore the terms and conditions governing your use of Novelty Logistics services, including truck dispatch and freight management." />
        <meta property="og:url" content="https://noveltylogistics.vercel.app/terms-and-conditions" />
      </Head>

      <Header />

      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Terms and Conditions</h1>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
              <p className="text-gray-600">
                These Terms and Conditions govern the use of the services provided by Novelty Logistics, including, but not limited to, our truck dispatching and logistics management services. By using our services, you agree to comply with and be bound by these terms.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Services Offered</h2>
              <p className="text-gray-600">
                Novelty Logistics offers a range of dispatch services to truck drivers, owner-operators, and trucking companies. These services include, but are not limited to, finding and assigning loads, managing freight schedules, and providing route planning assistance. The terms of service for each type of service are outlined in the respective agreements entered into between Novelty Logistics and its clients.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Use of Our Website</h2>
              <p className="text-gray-600">
                By accessing or using our website (<a href="https://noveltylogistics.vercel.app" className="text-blue-600 underline">https://noveltylogistics.vercel.app</a>), you agree to be bound by these terms. Any use of our website in a way that violates these terms or any applicable law may result in suspension or termination of access to our services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Payment and Fees</h2>
              <p className="text-gray-600">
                All fees and payment terms are governed by the individual agreements entered into between Novelty Logistics and its clients. We reserve the right to modify the pricing structure or payment terms at any time with reasonable notice.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Client Responsibilities</h2>
              <p className="text-gray-600">
                Clients are responsible for providing accurate and complete information to Novelty Logistics. This includes, but is not limited to, vehicle information, route preferences, and delivery requirements. Clients must ensure that all laws and regulations applicable to their trucking operations are followed.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Limitation of Liability</h2>
              <p className="text-gray-600">
                Novelty Logistics will not be held liable for any damages or losses resulting from the use of our services. This includes, but is not limited to, delays, miscommunication, or errors in load assignments. We strive to provide accurate and timely services, but unforeseen circumstances may arise.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Termination of Services</h2>
              <p className="text-gray-600">
                Either party may terminate the service agreement with proper notice. Upon termination, any outstanding fees for services rendered will be due immediately. Novelty Logistics reserves the right to suspend or terminate services without notice if these terms are violated.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Governing Law</h2>
              <p className="text-gray-600">
                These Terms and Conditions are governed by and construed in accordance with the laws of the state in which Novelty Logistics operates. Any disputes arising under these terms will be resolved in the appropriate legal venue within that state.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Changes to These Terms</h2>
              <p className="text-gray-600">
                We reserve the right to modify these terms at any time. Any changes will be posted on this page and will become effective immediately upon posting. We encourage users to regularly review these terms to stay informed of any updates.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions or concerns about these Terms and Conditions, please contact us at 
                <a href="mailto:support@noveltylogistics.com" className="text-blue-600 underline ml-1">support@noveltylogistics.com</a>.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
