import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Incident Timeline Generator — Auto Post-Mortems from Slack & Logs',
  description: 'Automatically reconstruct incident timelines from Slack conversations, log entries, and deployment events. Generate comprehensive post-mortem reports in seconds.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6ae90593-6abd-42cb-85ea-37d48960e444"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
