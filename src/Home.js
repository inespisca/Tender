import React from 'react'; 
import './Home.css';

const Home = ({randomUser, newUser, display}) => {
    // console.log("user banana" , randomUser.name)
    return (
        <div>
            <div className="container">
                {
                    randomUser.name!==undefined && 
                    <div>
                        <img className="mainImage" src={randomUser.picture.large} alt="Tender user"/>
                        <h1> {randomUser.name.first} {randomUser.name.last} </h1>
                        <h2> {randomUser.dob.age} years old </h2>
                        <button className="btn"> MORE INFO </button> 
                    </div>
              
                }
                <div className="moreInfo">
                    <h2>Description</h2>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates r
                    epudiandae sint et molestiae non recusandae. 
                    Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                </div>

            
                <button className="btn right"> MARRY ME</button>
                <button className="btn left" onClick ={newUser}> NOBODY LOVES YOU</button>

            </div>
        </div>
    )
}

export default Home; 