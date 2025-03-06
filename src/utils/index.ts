//处理className数组
export const getClassNameStr = (className:string | Array<string>) => {
        if(typeof className === 'string'){
            return className;
        }
        if(Array.isArray(className)){
            return className.filter(Boolean).join(' ')
        };
        return className
}