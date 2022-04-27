import {NavLink, useParams } from "react-router-dom"
import Card from "./shared/Card"
function Post() {
    const params = useParams()
    return (
        <div>
            <h1>Post {params.id}</h1>
            <Card>
              <NavLink activeclassname="active" to={{
                  pathname: "/post/200",
                  search: "?asd"
              }}>
                 POST PAGE
              </NavLink>
              <NavLink to="/" activeclassname="active">HOME</NavLink>
            </Card>
        </div>
    )
}




export default Post
