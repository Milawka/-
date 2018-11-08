import React from "react";
import {Box, Button, Text} from "grommet";
import {Add} from 'grommet-icons';


export const PostCategory = (props) => (
        <Box
            pad="large"
            round="large"
            border={{
                "side": "all",
                "color": "accent-3",
                "size": "medium"
            }}
        >
                <Text size="large" color="dark-1">{props.title}</Text>

        </Box>
);
//<Button icon={<Add color="accent-3" size="large"/>}></Button>