import { useState } from 'react'

const useButtonToggle = (defaultValue: boolean): [boolean, () => void] => {
  const [flag, setFlag] = useState(defaultValue)

  const toggleFunction = () => setFlag((flag) => !flag)

  return [flag, toggleFunction]
}

export default useButtonToggle
