import React from "react";
import {Box, Text, Image, Button} from "grommet";
import vk from "./images/vk.jpg"
import {Link} from "react-router-dom";
import {MainComponent} from "./mainPage";


export const Login = () => (
    <Box
        align="center"
        justify="center"
        direction="column"
    >
        <Text
            size="xxlarge"
            color="#3e6590"
            weight="bold"
        >
            Welcome!
        </Text>
        <Text
            color="#d7d5d7"
            sizr="medium"
        >
            Please, press button to use application :)
        </Text>

        <Link to="/main">
        <Button>
            <Box height="small" width="small">
                <Image src={vk} fit="contain"/>
            </Box>
        </Button>
        </Link>
    </Box>
);


