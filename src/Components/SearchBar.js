import { useEffect, useState } from 'react';
import './SearchBar.css'
import GetResponse from './GetResponse';

import ParentResponse from './ParentRespose';
import 'bootstrap/dist/css/bootstrap.min.css';


function SearchBar(props) {

    let [userInput, setUserInput] = useState('')
    let [userInputMsg, setUserInputMsg] = useState('')
    let [output, setResponseOutput] = useState('')
    let [buttonClicked, updatedButtonClickStatus] = useState(false);
    let [displaySearching, updatedDisplaySearching] = useState(false);
    let [counterOn, setCounterStatus] = useState(false);
    let [buttonColor, setButtonColor] = useState('search-button');
    let [displaySpinner, setSpinnerStatus] = useState(false);
    //let [intervalId, setIntervalId] = useState(0);
    let intervalId;
    let [remainedSec, updatedSec] = useState(30);
    const getResponse = GetResponse;

    function getUserInput(event) {
        setUserInput('');
        setResponseOutput('');
        if (event.target.value.trim() === null) {
            setResponseOutput('');
            return;
        } else {
            setResponseOutput('');
        }
        let typedInput = event.target.value
        setUserInput(typedInput);


    }





    function decreamentCounter() {
        setCounterStatus(true);

        remainedSec = remainedSec - 1;
        //   console.log(remainedSec);
        updatedSec(remainedSec);
        if (remainedSec === 0) {
            clearInterval(intervalId);
            // setButtonStatus(false);
            updatedSec(30);
            updatedButtonClickStatus(false);
            setCounterStatus(false);
            setButtonColor('search-button');

        }

        //  console.log("button disbaled ? " + buttonClicked);
    }


    useEffect(() => {
        // console.log(localStorage.getItem('sec'));


        if (buttonClicked && output === '') {


            setButtonColor('button-off');
            updatedDisplaySearching(true);
            fetchData();
            updatedButtonClickStatus(false);
            updatedDisplaySearching(false);
            setSpinnerStatus(true);
            // setUserInput('');
        }
    }, [buttonClicked, userInput]);


    async function fetchData() {
        updatedSec(30);
        //  console.log("inside fetch ");
        if (props.functionName === "checkgrammer") {
            //   console.log("fetch is called");
            //  console.log("button disbaled ? " + buttonClicked);
            const response = await fetch('https://api.openai.com/v1/chat/completions', {

                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo",
                    messages: [
                        {
                            "role": "system",
                            "content": "You will be provided with statements, and your task is to convert them to standard English."
                        },
                        {
                            "role": "user",
                            "content": userInput
                        },
                    ],
                    temperature: 0,
                    max_tokens: 256,
                    top_p: 1,
                    frequency_penalty: 0,
                    presence_penalty: 0,


                })
            }).then(getResponse);

            //  console.log("button click status :" + buttonClicked);
            //  console.log(response);
            const outputVal = response.choices[0].message.content;



            //  console.log(outputVal);
            setResponseOutput(outputVal);

        }
        else if (props.functionName === "learnwithai") {
            //  console.log("fetch is called");
            const response = await fetch('https://api.openai.com/v1/chat/completions', {

                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo",
                    messages: [
                        {
                            "role": "system",
                            "content": "You are a Socratic tutor. Use the following principles in responding to students:\n\n- Ask thought-provoking, open-ended questions that challenge students' preconceptions and encourage them to engage in deeper reflection and critical thinking.\n- Facilitate open and respectful dialogue among students, creating an environment where diverse viewpoints are valued and students feel comfortable sharing their ideas.\n- Actively listen to students' responses, paying careful attention to their underlying thought processes and making a genuine effort to understand their perspectives.\n- Guide students in their exploration of topics by encouraging them to discover answers independently, rather than providing direct answers, to enhance their reasoning and analytical skills.\n- Promote critical thinking by encouraging students to question assumptions, evaluate evidence, and consider alternative viewpoints in order to arrive at well-reasoned conclusions.\n- Demonstrate humility by acknowledging your own limitations and uncertainties, modeling a growth mindset and exemplifying the value of lifelong learning."
                        },
                        {
                            "role": "user",
                            "content": userInput
                        },
                    ],
                    temperature: 0,
                    max_tokens: 350,
                    top_p: 1,
                    frequency_penalty: 0,
                    presence_penalty: 0,


                })
            }).then(getResponse);

            //  console.log("button click status :" + buttonClicked);
            //   console.log(response);
            const outputVal = response.choices[0].message.content;



            //  console.log(outputVal);
            setResponseOutput(outputVal);

        }
        else if (props.functionName === "chatbot") {
            //  console.log("fetch is called");
            const response = await fetch('https://api.openai.com/v1/chat/completions', {

                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo",
                    messages: [
                        {
                            "role": "system",
                            "content": "You are Marv, a chatbot that reluctantly answers questions with sarcastic responses."
                        },
                        {
                            "role": "user",
                            "content": userInput
                        },
                    ],
                    temperature: 0,
                    max_tokens: 256,
                    top_p: 1,
                    frequency_penalty: 0,
                    presence_penalty: 0,


                })
            }).then(getResponse);

            //  console.log("button click status :" + buttonClicked);
            //   console.log(response);
            const outputVal = response.choices[0].message.content;



            //   console.log(outputVal);
            setResponseOutput(outputVal);

        }
        else if (props.functionName === "createquestions") {
            // console.log("fetch is called");
            const response = await fetch('https://api.openai.com/v1/chat/completions', {

                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo",
                    messages: [
                        {
                            "role": "assistant",
                            "content": "Create a list of 8 questions for an interview with a science fiction author."
                        },
                        {
                            "role": "user",
                            "content": userInput
                        },
                    ],
                    temperature: 0,
                    max_tokens: 400,
                    top_p: 1,
                    frequency_penalty: 0,
                    presence_penalty: 0,


                })
            }).then(getResponse);

            //  console.log("button click status :" + buttonClicked);
            //   console.log(response);
            const outputVal = response.choices[0].message.content;

            console.log(outputVal);
            setResponseOutput(outputVal);

        }
        setUserInputMsg(userInput);
        setUserInput('');
        intervalId = setInterval(decreamentCounter, 1000);
        setSpinnerStatus(false);
        updatedSec(30);
    }



    function handleClick() {

        const prevTimestamp = localStorage.getItem('timestamp')
        if (prevTimestamp === 'undefined') {
            updatedButtonClickStatus(true);

            localStorage.setItem('timestamp', Date.now());

        } else {
            const setCurrentTimestamp = localStorage.setItem('timestamp', Date.now());
            const getCurrentTimestamp = localStorage.getItem('timestamp')
            // console.log("current timestamp" + getCurrentTimestamp);
            // console.log("previous timestamp" + prevTimestamp);
            // console.log("timestamp difference is " + Math.round((getCurrentTimestamp - prevTimestamp) / 1000));
            if (Math.round((getCurrentTimestamp - prevTimestamp) / 1000) >= 30) {

                //  console.log('u can click again');
                localStorage.setItem('timestamp', Date.now());
                updatedButtonClickStatus(true);
                setResponseOutput('');
            } else {
                // updatedButtonClickStatus(false)
                setCounterStatus(true);
                alert('please wait for 30 sec')
                // setButtonColor('button-off')
                intervalId = setInterval(decreamentCounter, 1000);
                if (remainedSec === 0) {

                    clearInterval(intervalId);
                    setCounterStatus(false);
                }
            }

        }

        // setCounterStatus(false);
        // updatedButtonClickStatus(true);
        // setButtonColor('search-button')
    }
    // console.log(response);


    //  console.log("parsed json" + response.choices[0].message.content);



    return (


        <div className="container">



            <div className='main-container'>
                <ParentResponse InputValue={userInputMsg} OutputValue={output} className={displaySearching} spinnerStatus={displaySpinner}></ParentResponse>
                {counterOn ? <div className='counter-container'><p className='counter'>take a breath for : {remainedSec}</p></div> : <></>}
            </div>

            <div className='search-container'>

                <input className="user-input" onChange={getUserInput} placeholder={props.placeHolderValue} value={userInput}></input>
                <button  className={buttonColor} onClick={handleClick} value={userInput} disabled={buttonClicked}>{props.buttonName}</button>
            </div>



        </div>

    )


}
export default SearchBar;