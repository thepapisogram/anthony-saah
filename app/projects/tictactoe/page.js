/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import '@/app/styles/projects/tictactoe.css'
import BackLink from '@/app/components/universal/BackLink';

export default function page() {

  return (
    <div className="p-2 my-3">
      <BackLink link="/projects" text="Projects" />
      <div className="tictactoe">
        
      </div>
    </div>
  )
}
