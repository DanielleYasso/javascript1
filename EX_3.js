// count how many times each item appears in the array
function count_items(obj_types)
{
    for (var obj_type_key in obj_types) 
    {
        if (!obj_types.hasOwnProperty(obj_type_key)) 
        {
            //The current property is not a direct property of obj_types
            continue;
        }
        
        // get length of array for each obj_type_key
        var len = obj_types[obj_type_key].length;

        // iterate over all array items for obj_type_key, 
        // and count occurrences
        var obj_count = {};
        for (var i = 0; i < len; i++)
        {
            // get array item i
            var item = obj_types[obj_type_key][i];

            // count occurrences and add to object count
            // key = array item, value = count
            if (obj_count[item] >= 1)
            {
                obj_count[item] += 1;
            }
            else
            {
               obj_count[item] = 1;
            }
        }

        // replace obj_type_key array with obj_count object
        obj_types[obj_type_key] = obj_count;
    }
    return obj_types;
}

// determine which array items appear more than once in the array
function find_duplicates(obj_types)
{
    var dup_array = [];

    for (var obj_type_key in obj_types) 
    {
        if (!obj_types.hasOwnProperty(obj_type_key)) 
        {
            //The current property is not a direct property of obj_types
            continue;
        }

        // create variable to hold the objects for each object_type_key
        var obj_counts = obj_types[obj_type_key];

        // create key array from obj_counts key (key is original array item)
        var key_array = Object.keys(obj_counts);
        len = key_array.length;

        // loop over each item, and push it to a duplicate array
        for (i = 0; i < len; i++)
        {
            if (obj_counts[key_array[i]] >= 2)
            {
                dup_array.push(key_array[i]);
            }
        }
    }
    return dup_array;
}

// find and return a list of duplicate array items
function is_duplicate(my_array)
{
    var len = my_array.length;
    var obj_types = {"boolean": [],
                 "number": [],
                 "string": [],
                 "symbol": [],
                 "function": [],
                 "object": [],
                 "undefined": []
                };

    var obj_count = {};

    // Create an object of objects from array items
    for (var i = 0; i < len; i++)
    {
        // add array items to obj_types object based on type
        var item_type = typeof my_array[i];
        obj_types[item_type].push(my_array[i]);       
    }

    // for each type key in obj_types, count item occurrences
    obj_types = count_items(obj_types);

    // find the duplicate items in each object for obj_types keys
    var dup_array = find_duplicates(obj_types);

    // return array of duplicate items
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

