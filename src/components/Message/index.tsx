import React, { CSSProperties, FC, ReactNode, useMemo,forwardRef } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './index.less'
import { getClassNameStr } from '@utils/index'
import useStore from './hooks/useStore';
import useTimer from './hooks/useTimer';
import { createPortal } from 'react-dom';
export type Positon = 'top' | 'bottom';
export interface MessageProps {
    style?: CSSProperties,
    className?: string | Array<string>,
    content: ReactNode,
    duration?: number,
    id?: number,
    positon?: Positon,
}
export interface MessageRef {
    add: (messageProps: MessageProps) => void,
    remove: (id: number) => void,
    update: (id: number, messageProps: MessageProps) => void,
    clearAll: () => void
}
interface MessageItemProps extends MessageProps {
    onClose: (id: number) => void
}
const MessageItem: FC<MessageItemProps> = (props) => {
    const { id = -1, duration, onClose, content,style = {},className = '' } = props;
    const { onMouseEnter, onMouseLeave } = useTimer({ id, duration, remove: onClose });
    const cls = getClassNameStr(className);
    return (
        <div style={{...style}} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={`dd-message-item ${cls}`}>
            {content}
        </div>
    )
}
const MessageProviderInner = (_props: unknown,ref: any) => {
    const { messageList, remove,add,update,clearAll } = useStore('top');
    if('current' in ref!) {
        ref.current = {
            add,
            update,
            clearAll,
        }
    }
    // useImperativeHandle(ref,()=>({
    //     remove,
    //     add,
    //     update,
    //     clearAll
    // }),[])
    
    const positions = Object.keys(messageList) as Array<Positon>;
    const messageWrapper = <div className='dd-message-wrapper'>
        {
            positions.map(position => {
                return (
                    <TransitionGroup className={`dd-message-wrapper-${position}`} key={position}>
                        {
                            messageList[position].map(item => {
                                return (
                                    <CSSTransition key={item.id} timeout={1000} classNames='dd-message'>
                                        <MessageItem key={item.id} {...item} onClose={remove} />
                                    </CSSTransition>
                                )
                            })
                        }
                    </TransitionGroup>
                )
            })
        }
    </div>;
    const el = useMemo(() => {
        const el = document.createElement('div');
        el.className = 'dd-wrapper';
        const firstChild = document.body.firstChild;
        document.body.insertBefore(el,firstChild);
        return el
    }, [])

    return createPortal(messageWrapper, el) as any
}
export const MessageProvider = forwardRef<MessageRef>(MessageProviderInner);
