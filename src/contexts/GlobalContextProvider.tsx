import useGlobalContextProvider from "../hooks/userGlobalContextProvider"
import GlobalContext from "./GlobalContext"

type Props = {
  children: JSX.Element
}

export function GlobalContextProvider(props: Props) {
  const valuesProvider = useGlobalContextProvider();

  return  (
    <GlobalContext.Provider value ={valuesProvider}>
      {props.children}
    </GlobalContext.Provider>
  )
}