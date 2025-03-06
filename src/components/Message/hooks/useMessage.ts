import { MessageConfigContext } from "@components/Message/ConfigProvider";
import { useContext } from "react";
import { MessageRef } from '../index'
const useMessage = ():MessageRef => {
    const { messageRef  } = useContext(MessageConfigContext);
    if(!messageRef){
        throw new Error("请再最外层添加 ConfigProvider 组件");
    }
    return (messageRef.current as MessageRef) 
}

export default useMessage