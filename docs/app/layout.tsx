import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: 'Ultimate AI Agents',
  description: 'AI agents and workflows — every platform, every department.',
}

const navbar = <Navbar logo={<strong>Ultimate AI Agents</strong>} projectLink="https://github.com/stratpoint/ultimate-ai-agents" />
const footer = <Footer>MIT {new Date().getFullYear()} &copy; Stratpoint. Built with Nextra.</Footer>

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/stratpoint/ultimate-ai-agents/tree/main/docs"
          footer={footer}
          sidebar={{ defaultMenuCollapseLevel: 2, toggleButton: true }}
          toc={{ backToTop: true }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
