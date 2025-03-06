import { MessageProps,Positon } from '@components/Message/index'
import { useState } from 'react'
type MessageList = {
    top: Array<MessageProps>,
    bottom: Array<MessageProps>,
}
const initailValue = {
    top:[],
    bottom:[]
}
//自增id
let count = 1;
//生成id
export const getId = (messageProps:MessageProps) => {
        if(messageProps.id){
            return messageProps.id
        }
        count += 1;
        return count;
};
//获取位置
export const getMessagePositon = (messageList:MessageList,id:number) => {
    for (const [postion,list] of Object.entries(messageList)) {
        if(list.find(item => item.id === id)){
            return postion as Positon
        }
    }
}
//获取位置下标信息
export const findMessage = (messageList:MessageList,id:number) => {
    const position = getMessagePositon(messageList,id);
    const index = position ? messageList[position].findIndex(item=>item.id === id) : -1;
    return {
        position,
        index,
    }

}
const useStore = (defaultPositon:Positon) => {
    const [messageList,setMessageList] = useState<MessageList>({...initailValue});

    return  {
        messageList,
        add(messageProps:MessageProps){
            const id = getId(messageProps);
            setMessageList((preState)=>{
                if(messageProps.id){
                    const position = getMessagePositon(preState,messageProps.id);
                    if(position){
                        return preState
                    }
                }
                const position = messageProps.positon || defaultPositon;
                const isTop = position.includes('top');
                const messages = isTop ?
                [{...messageProps,id},...(preState[position] ?? [])] :
                [...(preState[position] ?? []),{...messageProps,id}];
                return {
                    ...preState,
                    [position]:messages,
                }

            })
        },
        update(id:number,messageProps:MessageProps){
            if(!id) return;
            setMessageList((preState)=>{
                const nextState = {...preState};
                const {position,index} = findMessage(nextState,id);
                if(position && index !== -1){
                    nextState[position][index] = {...nextState[position][index],...messageProps}
                }
                return nextState
            })
        },
        remove(id:number){
            setMessageList((preState)=>{
                const position = getMessagePositon(preState,id);
                if(!position) return preState;
                return {
                    ...preState,
                    [position]: preState[position].filter(item=>item.id !== id),
                }
            })
        },
        clearAll(){
            setMessageList({...initailValue})
        }
    }
}

export default useStore