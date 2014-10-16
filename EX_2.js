function fibonacci_set(max)
{
    if (max > 1)
    {
        var fib_list=[1];
        var current_fib = 1;
        while (current_fib < max)
        {
            fib_list.push(current_fib);
            len = fib_list.length;
            current_fib = fib_list[len-1] + fib_list[len-2];
        }
        return fib_list;
    }
    else
    {
        return [1,1];
    }
}

function even(n)
{
    return (n % 2 === 0);
}

function filter(my_function, my_array)
{
    var new_array = [];
    var len = my_array.length;
    for (var i = 0; i < len; i++)
    {
        if (my_function(my_array[i]))
        {
            new_array.push(my_array[i]);
        }
    }
    return new_array;
}

function sum(my_array)
{
    var len = my_array.length;
    var total = 0;
    for (var i = 0; i < len; i++)
    {
        total += my_array[i];
    }
    return total;
}

console.log(sum(filter(even, fibonacci_set(4000000))));
