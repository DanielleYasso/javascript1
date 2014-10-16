function is_duplicate(my_array)
{
    var len = my_array.length;
    var d_obj = {};
    var dup_array = [];
    // Create a dictionary of array items
    for (var i = 0; i < len; i++)
    {
        if (my_array[i] === "true")
        {
            my_array[i] = "true_string";
        }

        if (d_obj[my_array[i]] >= 1)
        {
            d_obj[my_array[i]] += 1;
        }
        else
        {
           d_obj[my_array[i]] = 1;
        }
    }
     var key_array = Object.keys(d_obj);
     len = key_array.length;
     for (i = 0; i < len; i++)
     {
        if (d_obj[key_array[i]] >= 2)
        {
            dup_array.push(key_array[i]);
        }
     }
     return dup_array;
}

var votesToGoEatCake = [true, true, true, true];
var hackbrightStudents = ["katie", "amy", "jenny", "katie", "kelley", "katie", "amy"];
var classroomIds = ["47","12", "19", "22", "26", "99", "30", "50", "324", "003", "44",
    "33", "346", "354", "44", "235", "45", "34", "44", "590", "09", "099", "0", "1", "3", "33", "999", "9"];
var randomJunkIFound = ["katie", "true", true, 19, "gargoyles", "!", 2 + 3, "2 + 3", 19, "19", 19 === "19", 6, false, false];

console.log(is_duplicate(votesToGoEatCake));
console.log(is_duplicate(hackbrightStudents));
console.log(is_duplicate(classroomIds));
console.log(is_duplicate(randomJunkIFound));

