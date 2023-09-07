// React is library used to make single page applications

// single page applications -> yeh woh web application hoti hai jo ek hi baar load hoti hai and baki ka kaam js se hota hai
// Like if I want to navigate from one page to another page then I can do it without even reloading the page(bina page ko reload kiye)

// component -> Website ko tukdo mein banane ka process

// React mein hamare pas components hote hain
// Ek component ko ham ek se saada baar use kr sakte hain same website mein and kise dusri website mein bhi aus component ko use kr sakte hain

// Write once use everywhere principle is used

// Components are reusable


// npm -> node package manager (manage krta hai hamare packages ko, we can install a package using it)

// npx -> We are not installing a package hum bs ause tab tak ke liye use kr rahe hain jab ke liye hume woh chahiye (Memory bachane ke liye)

// npm - aapne koi cheez kharide
// npx - aapne koi cheez lend kri


// npx create-react-app name/.

// create-react-app Package -> Ek basic react app setup kr deta (basic folder structure tayaar kr dega react app ka)
// Yeh main manually bhi kr sakta hun, but to save time we use this




// Hum jo components hai ause src ke ander daalenge

// Components -> State and Props

// State -> Ek components ke ander ki information

// Two types of components -> function based and class based

// create-react-app Package hai phele class based component use krta that but ab function based component use krta hai


// JSX -> yeh HTML(90% to 95%) hi hoti hai with a layer of JS ( matlab main HTML ke ander JS likh sakta hun using {} )

// JSX fragment -> <> </>   (multiple elements)

// class attribute -> className
// for attribute -> htmlFor

// bcoz these keywords are reserved in JS



// JSX
// const elem = (
//     <h1 className="greeting">
//         Hello World
//     </h1>
// );


// Bable wil compile JSX down into React.createElement() calls (har ek element ke liye)


// const elem = React.createElement(
//     'h1',
//     {className: 'greeting'},
//     'Hello World'
// );



// Normal Wesbsite -> For every page on the website aapko ek naaye request bhejni padegi to the server and server will give you
//                    Html, CSS and Js for that page


// Single Page Application -> Sirf ek baar hi request kri jaegi server ko and hume ek baar mein hi bohot saari Html, CSS and Js mil jaegi
// and milne ke baad Js will take over -> Toh ab jo bhi hoga woh js ki madad se hoga

// Ek hi page ko baar-baar populate kiya ja raha hai
// API se data lekar aaunga and same page ko hi update kr dunga (kuch components same bhi ho sakte hain ausme)


// node_modules -> Modules which are necessary for your react app (dependecies)

// Hum jab bhi apni react app ko kisi ko denge hum 'node_modules' wala folder nahi dete
// Kyunki ausi dubara se recreate kiya ja sakta hai package.json and pacakage-lock.json ki madad se (npm install or npm i)





// <Navbar />    Agar main Navbar ka component banau toh ('/' lagana zaruri hai) 


// Agar koi element mein opening tag hai par closing tag nahi toh forward slash bhi lagana padega (like <img src="" alt="" />)




// Public folder -> yaha pe hum woh sabhi files rakhte hain jo publicily visible hoti hain (so, never keep any confidential file here)



// let name = "<b>Gurnaj</b>";   // This is not a bug but a safety feature
// Jo bhi external html hoti hai ause aise tarah se dikhaya jaata hai



// Hum kabhi bhi npm start kr ke apni app ko host nahi karenge (bcoz woh build optimized nahi hota - development build)
// npm run build -> To get optimized build



// Do tarah ke export hote hain -> default export and named export

// Module 1 (module1.mjs)

// const a = "Gurnaj";
// const b = "Harry";
// const c = "Rohan";
// const d = "Aman";

// export default a;   // Hum by default export kr rahe hain a ko (default export)
// export {b};  // named export
// export {c};
// export {d};



// Module 2 (module2.mjs)

// import px, {b,c,d} from './module2.mjs';

// console.log(px)
// console.log(b)
// console.log(c)
// console.log(d)










// Props (Properties)

// Aapne ek custom component banaya and aap aus component mein kuch cheezein pass krna chahte ho (unki ko props kahte hain)
// Agar aapne koi component banaya and aap ausme kuch cheezon ko variable ki tarah use krna chahte ho (wahi props hain)


// Props are read-only (you cannot change props inside a component, you can only pass props to a component)
// Component ke ander aap Props ko read kr sakte ho sirf

// Phele hi aapne checking krli taki aap galat value na pass krdo
// Navbar.propTypes = {
//     title : PropTypes.string.isRequired,        // isRequired -> you need to pass the value (either yourself or by default)
//     aboutText : PropTypes.string
// }


// Navbar.defaultProps = {
//     title : "TextUtils",
//     aboutText : "about"
// }
// Agar hum kuch bhi pass na karein component pe toh by default yeh set kr dena


// ***imp -> Never change the props within the function component


// npm start or npm run start







// State -> Awasta

// import {useState} from 'react'

// useState -> It is a hook
// hooks -> Hum class based component ke features ko use kr sakte hain in function based component using hooks


// let [text, setText] = useState("Enter a text");        // This is how you can create state variables (Ais tarah se hum kaye saarein state variables bana sakte hain)
// text = "jhsgdfjhsd";     This is wrong
// setText("jhsgdfjhsd");   This is right (updation function)





// Title ko flash kiya ja sakta hai aapka dhyaan kichne ke liye



// Why we need React Router ?

// Routing is not build-in in React (par Angular mein routing build-in hoti hai)

// '/user' --> Component-1
// '/user/home' --> Component-2 (Par yeh bhi component-1 ko hi refer karega toh problem ho jaegi)

// Use 'exact' if you want exact match nahi toh react partial matching hi krti hai





// Global styles (index.css) -> isme hum woh styles daal sakte hain jo hum globally chahte hain










// class based component -> 'rcc'

// We cannot set the state directly -> We need to use this.setState() function


// Ek component ko zaada se zaada resuable banao (generalize karo aus component ko -> like it can be used in any other website too)






// React Component Lifecycle -> Jab ek component existence mein aata hai from mounting to unmounting aus time pe jo series of events hota hain
//                              ause ek component ki lifecycle kaha jaata hai



// Mounting -> Birth of a component
// Updating -> Growth of a component
// Unmounting -> Death of a component



// Lifecycle Methods (yeh sirf class based component mein hote hain)

// render() -> Used to render html of a component in DOM. It is called during mounting and during updating a component.
//             It should be pure means we cannot change state inside render() function



// componentDidUpdate() -> It is invoked after the component has been updated (like changing state or giving new props)


// componentDidMount() -> It is called after the component has been mounted (Agar main component ko remount krta hun tab bhi aise call kiya jaega)


// componentWillUnmount() -> Aise tab call kiya jaata hai jab component unmount hone hi wala hoga (just before component is unmounted usually to perform cleanups)


// constructor() is executed only once which is during mounting (sabse phele)



// Diagram -> https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/




// ***impt -> state and props ko ek saath use krte hain matlab state ko hum pass krte hain as Props




// Kaye baar async await syntax lagana padh jaata hai due to ayschronous nature




// Hum Enviroment Vairables bana sakte hain to avoid accidental exposure of some private variables

// Make a .env.local file 
// All enviroment variables should start with 'REACT_APP_' taki hum unhe access kr payein
// process.env.variable_name -> To access enviroment variables









// React Hooks -> Hooks are functions that allows us to use features of class based component into function based component
// 'Hook' ka matlab hum ki hum class based component ke features ko hook krke function based mein la rahe hain


// Commonly used hooks

// useState -> state ko create krne ke liye and auski initial value set krne ke liye

// useEffect -> It is equivalent to componentDidUpdate(), matlab agar aapke component mein kuch update hota hai and aap koi side effect perform krna chahte hain

// useContext -> hum context api use kr sakte hain
// Jab hamare pas bohot saare components hote hain like component ke ander component ause ke ander ek aor component
// toh hamare pas ek complex component tree ban jaata hai -> Toh agar humein app.js se down of tree kuch bhejna hai toh
// humein bohot baar Prop drill krna padta hai (like phele ek component ko Prop bhejenge phir ausse dusre ko and so on)

// Toh context api kya krti hume globally availaible kra deti hai ais tarah ke function




// useRef -> returns mutable reference object jis ke ander ek .current property hoti hai like a holder jisme koi DOM ka element rakha ja sakta hai
// Ais ke madad se hum DOM ke ander aise kise element pe point kra sakte hain (Reference to an element)













// Kya hamare react app mein kuch components function based and kuch components class based ho sakte hain -> YES