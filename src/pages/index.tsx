import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Button } from '@/components/Button'
import { useRouter } from 'next/router'
import Link from 'next/link';

export default function Home() {
  const { locale } = useRouter();
  return (
    <main>
      <Button />
      <p>locale: {locale}</p>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <Link href='/' locale='ja'>ja</Link>
        <Link href='/' locale='en'>en</Link>
      </div>
    </main>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    }
  }
}
