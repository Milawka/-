import React from "react"
import {PostSnapshot} from "./postSnapshot"
import {Box} from "grommet"
import {Link} from "react-router-dom";
import f from "./images/flow.jpg"
import fl from "./images/flowe.jpeg"
import ff from "./images/flowers.jpg"

let name1 = "summer";
let name2 = "flowers";
let name3 = "bouquet";

export class SnapContainer extends React.Component {
    render() {
        return (
            <Box
                direction="row"
                gap="large"
                aligh="center"
                justify="center"
            >
                <Link to={"/post/" + name1}>
                    <PostSnapshot title="Summer" source={"/flow.jpg"}/>
                </Link>
                <Link to={"/post/" + name2}>
                    <PostSnapshot title="flowers" source={"/flowe.jpeg"}/>
                </Link>
                <Link to={"/post/" + name3}>
                    <PostSnapshot title="bouquet" source={"/flowers.jpg"}/>
                </Link>
            </Box>
        )
    }
}