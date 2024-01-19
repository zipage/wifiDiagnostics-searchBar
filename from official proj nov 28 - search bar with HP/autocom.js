
/*


/* list all type of key words to use to bring up web in/external content 
this is a JS array = let avaKeywords = [] */
/* https://www.sololearn.com/en/compiler-playground/W1lLsDzlkHQR/?ref=app */


let articles = [
    { keyword: 'Wi-Fi: FAQ, Setup Guide, and Troubleshooting', url: 'https://ecobee.com' },
    // 'My ecobee thermostat is not connecting to Wi-Fi. What could be the reason?',
    // 'FAQs',
    // 'Probing Questions',
    // 'Wi-Fi',
    // 'Basic Troubleshooting',
    // 'Advanced Troubleshooting',
    // 'Diagnostics',
    // 'Troubleshoot',
    // 'Ping: ecobee.com',
    // 'Ping: Gateway',
    // 'Troubleshooting',
    // 'ecobee Support',
    // 'Glossary',
    // 'Status Page',
    // 'Physics',
];


console.log(articles.length);

/* these are my variables for [resultsBox, inputBox] */
const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");
// const submitSearch = document.getElementsById("submitSearch");
// const keyword = document.getElementsByClassName("avaliableKeywords");


/* https://www.shecodes.io/athena/36478-how-to-create-a-search-input-and-button-in-javascript#:~:text=addEventListener('keyup'%2C%20function,Enter%20key%20inside%20the%20input. */

/* INPUT BOX */

// input.onkeyup = when anything is being types, then this fuction to display the keyword results runs
inputBox.onkeyup = function () {
    let = result = []; // stores all the filtred keywords that we have
    let input = inputBox.value;
    if (input.length) { // if the input has some value it will store this filtered data in this results "avaliableKeywords.filter" 
        result = articles.filter((article) => { // "keyword" will get each value in keywordslist above 
            return article.keyword.toLowerCase().includes(input.toLowerCase()); // converts input value to lower case and will check if it ".includes" the input keyword 

            // it will return the filtered search term 

        });

        console.log(result); // select "inspect > console" then search -- it is given filtered (auto) result 
    }

    display(result);

    if (!result.length) { // if there is no result based on keyword, the horizontal line is now hidden with this 
        resultsBox.innerHTML = ''; // could put "no results found" 
    }
}


/* PREDITIVE SEARCH WHEN USER TYPES IN SEARCH-BAR */
function display(articleSuggestions) { /* this function displays the results when a keyword is typed (auto) */
    const content = articleSuggestions.map((suggestion) => { // map gives a new array
        // TODO
        // 1. create an element: const suggestionElement = document.createElement('li')

        const keyword = document.createElement('li');

        // 2. append the text content: suggestionElement.append(suggestion.keyword)

        console.log(suggestion)
        keyword.append("Wi-Fi: FAQ, Setup Guide, and Troubleshooting");
        // 👆🏻 right now we are always appending the same string, but you want to show different text for each suggestion right?
        // question: how would you do that?
        // have a look at the output of the console.log above -- do you see some text that you might want to use here?

        // 3. attach the onclick handler: suggestionElement.addEventListener('click', /* event listener function here -- see if you can figure this out based on the onclick handler we had on the li element below! */)

        keyword.addEventListener('click', () => {
            console.log(suggestion);
            // here's where you'll add the code that you want to run when a suggestion is clicked
            // hint: you have a selectInput function defined below that takes in a URL -- think about how to get a URL from the suggestion
            // I adjusted your console.log above so you should see some useful output in the console :)
        });

        return keyword;
    })

    // 4. return it from the map function!

    // return "<li onclick='() => selectInput(" + suggestion.url + ")'>" + suggestion.keyword + "</li>"; /* need to add 1 'li' tag in all the search terms -- store in the above "content" */


    // TODO
    // 1. create an element for the suggestions list: const suggestionListElement = document.createElement('ul')

    const suggestionList = document.createElement('ul');

    // 2. append the array of suggestion elements we created above: suggestionListElement.append(content)

    suggestionList.append(content);

    // 3. replace the contents of resultsBox with the element we just made: resultsBox.replaceChild(suggestionListElement)

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>"; /* we have to display this "content - result.map" wshen we call it it will be displayed on the webpage */
    // right now the line above is saying to take content, which is an array, and join its contents together with an empty string between each element
    // "join" works well on arrays of strings or numbers, but content doesn't contain strings or numbers (you can console.log it to verify that!)
    // so we're probably seeing something like "[object Object]" in the output, which is no good
    // but good news: you already created a UL element that has all your suggestions inside, just one line above!
    // so here you want to replace everything inside resultsBox with suggestionList.
    // instead of setting the innerHTML, try replacing that line with resultsBox.replaceChild(suggestionList)
    // hopefully now you're seeing your suggestions (well, the first one because we removed the rest of them from the array)
};


// For the below function: 
//const url = 'http://${selectInput}/ecobee.com'; 
//const selectInput = 'ecobee.com';

function selectInput(url) { // when you type and click, it will display in the input-box
    console.log(url);

    // TODO set window.location.href to url :)

    window.location.href = '[https://ecobee.com]';
    // on the line above, what do you want to set the window's location to? hint: check this function's arguments

    // I removed the rest of the lines of code here because all this function needs to do is navigate :)
}

/* SEARCH-BTN WHEN USER SELECT/ENTRE'S TEXT AND PRESSES 'SEARCH' */

submitSearch.addEventListener('click', function () { /* when i type and click the result, the rest are hidden */

    // or would i write is as such ('click', function () => { -- wrote the way how i did above.
    // reminder: () => { means a function that returns another function 

    const searchTerm = inputBox.value;
    console.log(`${searchTerm}`);
});

// https://forum.freecodecamp.org/t/how-do-i-write-code-that-adds-li-or-p-text-when-i-click-the-add-button/527564/9
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays


