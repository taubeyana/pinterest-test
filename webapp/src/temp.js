const pins = [
    /* 1 */
{
    "_id" : "5b7e4a3aaf96de46e85867d2",
    "title" : "How to Choose Website & Logo Fonts - Infographic",
    "body" : "Are you in the process of creating a new website or logo? Need help choosing the right font to portray your business image?",
    "img" : "https://i.pinimg.com/564x/b5/7d/30/b57d30f6be68bb343168617d67fe21c0.jpg",
    "link" : "https://blog.red-website-design.co.uk/2018/07/26/website-logo-fonts-infographic/",
    "category" : "Tech",
},

/* 2 */
{
    "_id" : "5b7e4a3aaf96de46e85867d3",
    "title" : "7 Free JavaScript E-Books and Tutorials",
    "body" : "JavaScript has never been hotter, thanks to projects like Node.js, JQuery and PhoneGap.",
    "img" : "https://i.pinimg.com/564x/47/2e/93/472e93e0a83b58aa3b7fabbce198de50.jpg",
    "link" : "https://readwrite.com/2010/12/04/6-free-javascript-e-books",
    "category" : "Tech",
},

/* 3 */
{
    "_id" : "5b7e4a3aaf96de46e85867d4",
    "title" : "Apps: 10 Things You Didn't Know You Could Do With Your Smartphone",
    "body" : "You might not have thought of all you can do with your smartphone. Here are 10 apps with useful functions to help you complete physical-world tasks.",
    "img" : "https://i.pinimg.com/564x/34/fe/33/34fe33f894403bcc15017b0abdb471b8.jpg",
    "link" : "https://mashable.com/2013/01/05/10-things-smartphone/#wno1ZwIPnPqo",
    "category" : "Tech",
},

/* 4 */
{
    "_id" : "5b7e4a3aaf96de46e85867d5",
    "title" : "60 Must-Have Digital Marketing Tools in 2018",
    "body" : "If you work as a marketer, you probably do everything – set ads, analyze campaigns, write emails, articles, and even create designs. That’s why it’s very useful to have a list of digital marketing",
    "img" : "https://i.pinimg.com/564x/cf/d3/94/cfd39440d487be4d859f9c6b5a0993f3.jpg",
    "link" : "https://marketinghits.com/blog/60-must-have-digital-marketing-tools-in-2018-infographic/",
    "category" : "Tech",
    "__v" : 0
}
]

const filterArr = (arr, id) => {
    return arr.filter(pin => pin._id !==id )
}

let ar2 = [...pins]
console.log(ar2)
const arr = filterArr(pins, '5b7e4a3aaf96de46e85867d5')
// console.log(arr)
// console.log(arr.length)