import clsx from "clsx"
import React from "react"
import Container from "./Container"
import Header from "./Header"
import Sidebar from "./Sidebar"

type PageProps =
  | React.ComponentProps<any>
  | {
      title?: string
      children: React.ReactNode
      desc?: string
      icon?: string
      sidebar?: boolean
      minimal?: boolean
    }

function Page(props: PageProps) {
  const { children, className, minimal, sidebar, title, icon, ...attrs } = props

  React.useEffect(() => {
    document.title = title || ''
  }, [title]);

  return (
    <div className={clsx("Page", className)} {...attrs}>
      <Container className="Page-container">
        {sidebar && <Sidebar />}

        <div className="Page-content">
          <Header />
          {title && !minimal && (
            <div className="Page-content-header">
              <h2>
                {icon}
                {title}
              </h2>
            </div>
          )}
          <div className="Page-content-main">{props.children}</div>
        </div>
      </Container>
    </div>
  )
}

export default Page
