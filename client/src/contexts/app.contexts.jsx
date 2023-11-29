import { createContext, useState } from "react";
import { getProfileFromLS } from "~/utils/auth";
import PropTypes from 'prop-types'

// eslint-disable-next-line react-refresh/only-export-components
export const getInitialAppContext = () => ({
  isAuthenticated: Boolean(getProfileFromLS()),
  setIsAuthenticated: () => null,
  profile: getProfileFromLS(),
  setProfile: () => null,
  address: {},
  setAddress: () => null,
  extendedPurchases: [],
  setExtendedPurchases: () => null,
  reset: () => null
})

const initialAppContext = getInitialAppContext()

export const AppContext = createContext(initialAppContext)

const AppProvider = ({ children, defaultValue = initialAppContext }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(defaultValue?.isAuthenticated)
  const [extendedPurchases, setExtendedPurchases] = useState(defaultValue?.extendedPurchases)
  const [profile, setProfile] = useState(defaultValue?.profile)
  const [address, setAddress] = useState(defaultValue?.address)

  const reset = () => {
    setIsAuthenticated(false)
    setExtendedPurchases([])
    setProfile(null)
    setAddress(null)
  }

  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        profile,
        setProfile,
        address,
        setAddress,
        extendedPurchases,
        setExtendedPurchases,
        reset
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

AppProvider.propTypes = {
  children: PropTypes.element,
  defaultValue: PropTypes.any
}

export default AppProvider