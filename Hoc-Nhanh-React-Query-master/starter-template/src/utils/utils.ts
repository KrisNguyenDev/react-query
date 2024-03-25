import { useSearchParams } from 'react-router-dom'

export const useQueryString = () => {
  const [seacrchParams] = useSearchParams()
  const seacrchParamsObject = Object.fromEntries([...seacrchParams])
  return seacrchParamsObject
}
