function addOne(x){
    return x+1;
};

function square(x){
    return x*x;
};

function compose(f,g){
    return (x) => {
        return f(g(x));
    }
};

const addOneSquare = compose(square, addOne);

console.log(addOneSquare(2));