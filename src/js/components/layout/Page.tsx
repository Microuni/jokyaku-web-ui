import clsx from 'clsx';
import React from 'react'
import Container from './Container'
import Sidebar from './Sidebar';

type PageProps = React.ComponentProps<any> | {
  title?: string;
  children: React.ReactNode;
  desc?: string;
  icon?: string;
  sidebar?: boolean;
};

function Page(props: PageProps) {
  const { children, className, ...attrs } = props;

  return (
    <div className={clsx('Page', className)} {...attrs}>
      <Container className="Page-container">

        {props.sidebar && (
          <Sidebar />
        )}

        <div className="Page-content">
          {props.children}
        </div>

      </Container>
    </div>
  )
}

export default Page
