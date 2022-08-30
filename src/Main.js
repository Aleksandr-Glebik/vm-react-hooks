import React from "react"
// import { useAlertToggle } from "./alert/AlertContext"
import { useAlert } from "./alert/AlertContext"

export default function Main() {
    const {show} = useAlert()
    return (
        <>
            <h1>Привет в примере с Context</h1>
            <button className="btn btn-success" onClick={() => show('Этот текст из майн')}>Показать alert</button>
        </>
    )
}