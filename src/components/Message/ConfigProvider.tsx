import React,{ RefObject,PropsWithChildren,createContext,useRef, FC } from 'react'
import { MessageProvider,MessageRef } from '@components/Message'
interface ConfigProviderProps {
    messageRef?: RefObject<MessageRef>
}
export const MessageConfigContext = createContext<ConfigProviderProps>({})
const ConfigProvider:FC<PropsWithChildren> = (props) => {
    const { children } = props;
    const messageRef = useRef<MessageRef>(null) as unknown as RefObject<MessageRef>
  return (
    <MessageConfigContext.Provider  value={{messageRef}}>
        <MessageProvider ref={messageRef}></MessageProvider>
        {children}
    </MessageConfigContext.Provider>
  )
}

export default ConfigProvider