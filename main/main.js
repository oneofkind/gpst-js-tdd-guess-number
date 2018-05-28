module.exports = main


// Write your cade below:
function main(system_number, user_number) {
    var system_arr = system_number.toString().split("");
    var user_arr = user_number.toString().split("");

    var a = 0;
    var b = 0;
    user_arr.forEach(((user_value, index) => {
        if (user_value == system_arr[index]) {
            a++;
        } else if (includesUserValue(user_value)) {
            b++;
        }
    }));

    function includesUserValue(user_value) {
        // return system_arr.includes(user_value) 
        var result = false;
        system_arr.forEach(sys_value => {
            if (sys_value == user_value) {
                result = true;
            }
        })
        return result
    }
    return a + "A" + b + "B";
};