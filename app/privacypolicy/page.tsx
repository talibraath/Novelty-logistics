// pages/privacy-policy.js

import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Novelty Logistics</title>
        <meta name="description" content="Learn how NoveltyLogistics.com collects, uses, and protects your data. Our privacy policy ensures that your data remains secure and transparent." />
        <meta name="keywords" content="Novelty Logistics, privacy policy, trucking privacy, data security, logistics privacy, truck dispatch, trucker data protection, data protection policies" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Privacy Policy | Novelty Logistics" />
        <meta property="og:description" content="At Novelty Logistics, your privacy is important. Learn how we safeguard and manage your personal information." />
        <meta property="og:url" content="https://noveltylogistics.vercel.app/privacy-policy" />
      </Head>

      <Header />

      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Privacy Policy</h1>
          <p className="text-lg text-gray-600 text-center mb-12">Effective Date: September 6, 2024</p>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
              <p className="text-gray-600 mb-6">
                At Novelty Logistics, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website, 
                <a href="https://noveltylogistics.vercel.app" className="text-blue-600 underline ml-1"> https://noveltylogistics.vercel.app</a>, or use our services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
              <p className="text-gray-600 mb-6">
                We collect both personal and non-personal information when you use our services. The personal information we collect may include, but is not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Location information (IP Address)</li>
                <li>Usage data (pages visited, time spent on the site)</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 mb-6">We may use the information we collect from you to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide and improve our trucking and dispatch services</li>
                <li>Send you important updates about your services or upcoming changes</li>
                <li>Personalize your experience on our website</li>
                <li>Analyze usage trends and improve our website</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sharing of Information</h2>
              <p className="text-gray-600">
                Novelty Logistics does not sell or rent your personal information to third parties. However, we may share information with trusted partners for the purpose of delivering our services, such as payment processors, web hosting providers, and customer support platforms.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Security of Your Information</h2>
              <p className="text-gray-600">
                We use industry-standard security measures to protect your data, including encryption, firewalls, and secure servers. However, no data transmission over the internet can be guaranteed to be 100% secure.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-gray-600">
                We use cookies and similar tracking technologies to monitor site usage and deliver a more personalized experience. You can adjust your browser settings to decline cookies, though this may limit your ability to use certain features on our site.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Rights</h2>
              <p className="text-gray-600">
                You have the right to access, update, or delete your personal information at any time. If you wish to exercise these rights, please contact us at
                <a href="mailto:support@noveltylogistics.com" className="text-blue-600 underline ml-1">support@noveltylogistics.com</a>.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-600">
                We reserve the right to make changes to this Privacy Policy at any time. When we make updates, we will post them on this page and update the effective date.
              </p>
            </section>
            <section className="mb-10">
  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Protection in Logistics and Truck Dispatch Services</h2>
  <p className="text-gray-600 mb-6">
    At Novelty Logistics, we recognize the importance of securing sensitive information in the logistics and truck dispatch industry. Our policies ensure that the personal data of our clients, including fleet operators, truckers, and businesses, is safeguarded at all times. We use cutting-edge encryption and follow industry best practices to protect data related to freight, route planning, driver scheduling, and other logistical information.
  </p>
  <p className="text-gray-600 mb-6">
    Our trucking dispatch platform is designed with privacy and security at its core, ensuring that any data you provide, from load tracking to communication with drivers, remains confidential. Novelty Logistics complies with international data protection standards such as the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).
  </p>
</section>

<section className="mb-10">
  <h2 className="text-2xl font-semibold text-gray-800 mb-4">FAQs on Privacy and Data Protection</h2>
  <p className="text-gray-600 mb-6">
    <strong>How does Novelty Logistics handle customer data?</strong><br />
    We collect only the information necessary to provide our services, including name, contact details, and route preferences. This data is used solely for service delivery and is never sold to third parties.
  </p>
  <p className="text-gray-600 mb-6">
    <strong>What types of data does Novelty Logistics collect?</strong><br />
    We collect personal data like contact details, as well as operational data like truck routes, delivery schedules, and load preferences. All data is stored securely and handled in accordance with data protection laws.
  </p>
</section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions or concerns about this Privacy Policy, please contact us at 
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
