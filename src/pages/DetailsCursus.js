import React from 'react';
import {Link,useParams} from "react-router-dom";


function DetailsCursus(){

    const{idCursus}=useParams()


//    op basis van cursusnummer de juiste cursus van de backend ophalen
   const currentCursus={
        name: null,
       details: 'sdbv',
   }

   console.log(currentCursus)

return(

    <section>
        {/*ternary operator*/}

        {/*{!currentCursus ? <p>Deze cursus bestaat niet</p> :<>*/}
        {/*nog even goed uitzoeken*/}
        {currentCursus.name=null ? <p>Deze cursus bestaat niet</p> :<>


            <h1> details-cursus page van cursus {idCursus} !</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, doloremque dolorum ducimus
                et eum id ipsum laudantium maiores nam porro ut vel vitae? Ad aut deleniti dolor dolorum
                eligendi fugit iste itaque iure laboriosam mollitia nam necessitatibus, nisi, odio odit
                officiis porro provident, qui quo quos reprehenderit ullam voluptatibus voluptatum?
            </p>

        </>}


        <Link to="/">Terug naar HomePage</Link>
    </section>




);



}

export default DetailsCursus;