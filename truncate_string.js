let sample_string_1 = "javascript";
let sample_string_2 = "string";
let sample_string_3 = "counter";

let truncate_string = (str, num) => {

    // convert string to array
    let str_to_array = str.split("");

    // use splice method to extract
    let truncate_str = str_to_array.splice(0, num);

    // return string
    return truncate_str.join("");
}

console.log(truncate_string(sample_string_1, 4));   // java
console.log(truncate_string(sample_string_2, 3));   // str
console.log(truncate_string(sample_string_3, 5));   // count