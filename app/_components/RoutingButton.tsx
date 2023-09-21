import React from 'react'
import { RoutingButtonProps } from '../_types/Props';
import Link from 'next/link';
"client component"
const RoutingButton = ({children,href,...props}:RoutingButtonProps) => {
  return (
    <Link href={href} className = "bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded"type="button">{children}</Link>
  )
}

export default RoutingButton;