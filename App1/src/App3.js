import React from "react"
import Comment from "./components/comment"

function App(){
    return(
        <>
            <h1>Comentários</h1>
            <Comment
                title="Comentário Um" 
                comment="Este é o comentário um" 
                author="Osório Cazola">
            </Comment>

            <Comment 
                title="Comentário dois"
                comment="Este é o comentário dois"
                author="Osório Cazola">
            </Comment>
            
            <Comment 
                title="Comentário três" 
                comment="Este é o comentário três" 
                author="Osório Cazola">
            </Comment>
        </>
    )
}
export default App