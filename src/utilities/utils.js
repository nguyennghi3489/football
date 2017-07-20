class Constant {
    static search = (input, data) => {
        // console.log("hello Wolrd abc 123");
        // debounce(()=>{
        //     console.log("RUN")
        // },1000)
        return data;
    }
    static debounce(fn, delay) {
        console.log(fn)
        console.log(delay)
        var timer = null;
        return function () {
            var context = this, args = arguments;
            clearTimeout(timer);
            timer = setTimeout(function () {
                fn.apply(context, args);
            }, delay);
        };
    }
}

export default Constant;