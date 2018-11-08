import React from "react"
import {CategoryContainer} from "./containerOfCategories"
import {SearchPost} from "./searchLine"
import {Box, Button} from "grommet"
import {PieChart} from "grommet-icons"
import {Link} from "react-router-dom";

export const MainComponent = () => (
    <Box
        direction="column"
        gap="xlarge"
        fill align="center"
        pad={{top: "large"}}
    >
        <SearchPost/>
        <CategoryContainer/>

        <Link to="/statistics">
            <Button icon={<PieChart color="neutral-2"/>}/>
        </Link>
    </Box>
);