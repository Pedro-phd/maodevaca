import { usePathname, useRouter, useSearchParams } from 'next/navigation'

function useCustomSearchParams() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const current = new URLSearchParams(Array.from(searchParams.entries()))

  const setSearchParams = (key: string, value: string) => {
    const normalizedValue = value.trim()
    const normalizedKey = key.trim()
    if (!value) {
      current.delete(normalizedKey)
    } else {
      current.set(normalizedKey, normalizedValue)
    }
    const search = current.toString()
    const query = search ? `?${search}` : ''
    router.push(`${pathname}${query}`)
  }

  const clear = () => router.push(`${pathname}`)

  return { searchParams, setSearchParams, clear }
}

export default useCustomSearchParams
