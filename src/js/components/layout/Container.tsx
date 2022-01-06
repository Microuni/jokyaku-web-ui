import clsx from 'clsx';
import React from 'react'

type ContainerProps = any;

function Container(props: ContainerProps) {
  const { children, className, ...attrs } = props;

  return (
    <div className={clsx('Container', className)} {...attrs}>
      {children}
    </div>
  )
}

export default Container
