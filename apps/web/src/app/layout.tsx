// These styles apply to every route in the application
import { VerticalMenu } from '@/components/VerticalMenu'
import './globals.css'
import { TooltipProvider } from '@/components/ui/tooltip'
import QueryProvider from '@/lib/reactQueryProvider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <TooltipProvider>
            <div className="flex bg-muted">
              <VerticalMenu />
              <div className="flex w-full p-8">{children}</div>
            </div>
          </TooltipProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
