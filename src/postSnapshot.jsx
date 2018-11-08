import React from "react"
import {Box, Text, Image} from "grommet"

export const PostSnapshot = (props) => (
    <Box
        height="medium"
        width="medium"
        gap="small"
        align="center"
    >
        <Text size="medium" color="dark-1" weight="bold">{props.title}</Text>
        <Box
            height="small" width="small">
            <Image src={props.source} fit="contain"/>
        </Box>
    </Box>
);