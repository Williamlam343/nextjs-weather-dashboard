import Link from "next/link";
import Head from "next/head";
import { useState } from "react"

let passwordParams = ""
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const uppercase = lowercase.toUpperCase()
const numbers = "1234567890"
const spChars = "!@#$%^&*()_+=-"

const password = () => {

    const handleCheck = (e) => {
        console.log(`${e.target.id.toUpperCase()} is checked:`, e.target.checked)

        if (e.target.checked === true && e.target.id === "uppercase") {
            passwordParams += uppercase
        } else if (e.target.checked === false && e.target.id === "uppercase") {
            try {
                passwordParams = passwordParams.split("").filter(arr => { arr.includes(uppercase.split("")) })
            } catch (error) {
                passwordParams = ""
            }
        }

        if (e.target.checked === true && e.target.id === "lowercase") {
            passwordParams += lowercase
        } else if (e.target.checked === false && e.target.id === "lowercase") {
            try {
                passwordParams = passwordParams.split("").filter(arr => { arr.includes(lowercase.split("")) })
            } catch (error) {
                passwordParams = ""
            }
        }

        if (e.target.checked === true && e.target.id === "number") {
            passwordParams += numbers

        }
        else if (e.target.checked === false && e.target.id === "number") {
            try {
                passwordParams = passwordParams.split("").filter(arr => { arr.includes(numbers.split("")) })
            } catch (error) {
                passwordParams = ""
            }
        }

        if (e.target.checked === true && e.target.id === "spChar") {
            passwordParams += spChars
        } else if (e.target.checked === false && e.target.id === "spChar") {
            try {
                passwordParams = passwordParams.split("").filter(arr => { arr.includes(spChars.split("")) })
            } catch (error) {
                passwordParams = ""
            }
        }


    }
    const [userPW, setUserPW] = useState("Hello World!")
    const [pwLength, setPwLength] = useState("8")

    const passwordGen = () => {
        let userPassword = ""
        console.log(!passwordParams)
        if (!passwordParams) {
            passwordParams = lowercase

        }
        else {

            for (let i = 0; i < pwLength; i++) {
                console.log(passwordParams)
                let index = Math.random() * passwordParams.length
                userPassword += passwordParams.substring(index, index + 1)
            }

        }

        setUserPW(userPassword)
    }

    return (
        <>
            <Head>
                <title>Password Generator</title>
            </Head>
            <div className="md:m-auto mt-10 p-10 min-h-screen">
                <div className="text-center text-3xl m-3">
                    Password Generator
                </div>
                <div>
                    <label>
                        <span>Password Length:</span>
                        <input className="bg-blue-100 shadow-2xl opacity-70 rounded-sm mx-1 text-center"
                            value={pwLength}
                            type="number" max="128"
                            onChange={(e) => {
                                if (e.target.value < 0 || e.target.value > 128) {
                                    return (<h1>password must be between 6-128 characters!</h1>)

                                } else {
                                    setPwLength(e.target.value)
                                    console.log(e.target.value)
                                }
                            }
                            }
                        /><span className="text-sm text-gray-600"> (8-128 characters)</span>
                    </label>

                </div>
                <div className="flex flex-row p-1 justify-between w-full lg:w-2/3">

                    <div>
                        <label className="">
                            <span>Uppercase </span>
                            <input type="checkbox" id="uppercase"
                                onChange={(e) => { handleCheck(e) }}
                            />
                        </label>
                    </div>
                    <div>
                        <label className="">
                            <span>Lowercase </span>
                            <input type="checkbox" id="lowercase"
                                onChange={(e) => { handleCheck(e) }} />
                        </label>
                    </div>
                    <div>
                        <label className="">
                            <span>Numbers </span>
                            <input type="checkbox" id="number"
                                onChange={(e) => { handleCheck(e) }} />
                        </label>
                    </div>
                    <div>
                        <label className="">
                            <span>Special Characters </span>
                            <input type="checkbox" id="spChar"
                                onChange={(e) => { handleCheck(e) }} />
                        </label>
                    </div>
                </div>
                <div className="border-2 border-blue-300 border-solid rounded text-center p-5">
                    {userPW}
                </div>
                <div className="flex m-3 justify-center">

                    <button className="bg-red-500 ring-2 ring-red-400 shadow-lg p-1 active:bg-red-400 text-white rounded-sm"
                        onClick={() => passwordGen()}
                    >Generate Password</button>
                </div>

            </div>

        </>
    )
}

export default password;