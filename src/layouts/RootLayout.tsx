import { Helmet } from 'react-helmet-async';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <Helmet>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        <link rel="icon" href="/images/favicon.ico" />
        <title>株式会社Senrigan</title>
        <meta name="description" content="株式会社Senriganは、ユーザー体験を重視した美しいデザインと確かな技術力で、お客様のビジネスに最適なWebシステムを提供します。" />
      </Helmet>
      {children}
    </>
  );
};

export default RootLayout;