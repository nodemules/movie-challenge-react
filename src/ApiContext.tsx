import React, {PropsWithChildren, useCallback, useEffect, useState} from "react";

export const TMDB_API_KEY_LOCAL_STORAGE_NAME = 'TMDB_API_KEY'

type ApiContextType = {
    key: string | undefined,
    keyOperations: {
        set: (key: string) => void,
        clear: () => void
    }
}

const ApiContext = React.createContext<ApiContextType>({} as ApiContextType)

const useApiContext = () => {
    const [key, setKey] = useState<string>()

    const clear = useCallback(() => setKey(undefined), [setKey])

    useEffect(() => {
        key ?
            localStorage.setItem(TMDB_API_KEY_LOCAL_STORAGE_NAME, key)
            :
            localStorage.removeItem(TMDB_API_KEY_LOCAL_STORAGE_NAME)
    }, [key])

    return {
        key,
        keyOperations: {
            set: setKey,
            clear
        }
    } as ApiContextType
}

export const ApiContextProvider = ({children}: PropsWithChildren<any>) => {

    const context = useApiContext()

    return (
        <ApiContext.Provider value={context}>
            {children}
        </ApiContext.Provider>
    )
}

export default ApiContext
