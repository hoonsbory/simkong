export const throttling = () => {
    let throttleCheck;

    return {
        throttle(callback, milliseconds){
            console.log(throttleCheck)
            if(!throttleCheck){
                // setTimeout은 timer id를 반환한다.
                throttleCheck = setTimeout(() => {
                    callback(...arguments);
                    throttleCheck = false;
                }, milliseconds);
            }
        }
    };
};