import React from "react";
import {PostCategory} from "./postCategory";
import {Box} from "grommet"
import {Link} from "react-router-dom";


let name = "art";

export class CategoryContainer extends React.Component {

    render() {
        return (
            <Box
                direction="row"
                gap="large">


                <Link to={"/category/" + name}>
                    <PostCategory title={name}/>
                </Link>

                <PostCategory title=" + "/>
            </Box>
        )
    }
}
