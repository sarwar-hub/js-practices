//মাষ্ট শিখবে ES6, একটা জাভাস্ক্রিপ্ট এর ফাইল খুলে নিচের জিনিসগুলা প্রাকটিস করে ফেলো।  

/* ১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো। */

const author = 'Sarwar'; // author name cant be changed
let user = 'Dipu' // user are changable


*** ডাইনামিক অ্যারে ডিক্লেয়ারেশন
let x = 5;
let y = 6;
let z = 7;

const array = [x, y, z]; // here, property name 'x' and its value is 5(value of it)

/*
২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। */

const myMobile = {name: 'Nokia 2.2', price: 22000, color: 'Black'};
const phoneName = myMobile.name;
const color = myMobile.color;
const price = myMobile.price;
const aboutMobile = `My phone ${phoneName} is ${color} and the price is ${price}tk`;
//console.log(aboutMobile);




/*
৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে। */

const divide5 = x => x/5;
//console.log( divide5(20) );





/*
৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো */

const math1 = (x,y) => (x+2)*(y+2);

//console.log( math1(2,2) );




/*
৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে।  */

const multiply = (x,y,z) => {
    return x*y*z;
}
//console.log( multiply(1,2,3) );







/*
৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। */

const math2 = (x,y) => {
    const sum1 = x+2;
    const sum2 = y+2;
    return sum1 * sum2;
}

//console.log( math(2,2) );





// হোম ওয়ার্ক
/*
৪. একটু গুগলে সার্চ দাও: javascript function declaration vs arrow function তারপর কয়েকটা আর্টিকেল পড়ে বুঝার চেষ্টা করো। 
৪.৫. জাভাস্ক্রিপ্ট এর var, let, const এর মধ্যে প্রার্থক্য কি? */









/*
৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। */

const numbers = [1,2,3,4,5];
const numbers5 = numbers.map( x => x*5 );
//console.log(numbers5);






/*
৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো */

const odds = numbers.filter(x => x%2 !== 0);
//console.log(odds);






/*
৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। */

const mobiles = [ 
    {name: 'Nokia', price: 25000, color: 'Black'},
    {name: 'LG', price: 20000, color: 'Black'},
    {name: 'HTC', price: 15000, color: 'Black'},
    {name: 'CAT', price: 5000, color: 'Black'},
];

const cheap = mobiles.find(x => x.price == 5000);
//console.log(cheap);






/*
৭.৫ [এক্সট্রা] জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো। 

/**
 * map(): map() will get all the elements from array, make changes of every elements according to direction and puts them in a new array, returns the array.
 
 * forEach(): acts as map() but, it returns undefine
 
 * filter(): filter() will filter elements according to functions condition and puts filtered elements in a new array, returns the array.

 * find(): find() can get first matched element according to condition and returns it.

*/


/*
৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। */

const mobile = {name: 'Nokia', price: 25000, color: 'Black'};

const {name} = mobile;
//console.log(name);





/*
৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে।  */

const names = ['Sarwar', 'Anik', 'Ashik'];
const [one, two, three] = names;
//console.log(three);








/*
১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭। */

const sum3 = (x,y,z=7) => x+y+z;
//console.log( sum3(1,2   ) );





/* [অপশনাল]
১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট ) */
১২. উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো। */

const student = { 
    personal: {name: 'Sarwar', age: 23},
    academic: {
        section: 'A',
        roll: "12",
        subjects: ['Bangla', 'English', 'Math', 'Chemistry'],
        marks: {bangla: 78, english: 67, math: 80, chemistry: 76}
    }
}

// get subjects
const subjects = student.academic.subjects;
//console.log(subjects);

// get marks subject wise
const {bangla, english, ...rest} = student.academic.marks;
//console.log(rest);

// optional chaining
const address = student.personal?.address?.home;
//console.log(address);


/*
