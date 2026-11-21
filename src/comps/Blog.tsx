import { useState } from 'react'
import { posts } from '../data'

export default function Blog() {
  const [page, setPage] = useState(0)
  const pages = Array.from({ length: Math.ceil(posts.length / 3) }, (_, i) => i)

  return (
    <section>

    </section>
  )
}
