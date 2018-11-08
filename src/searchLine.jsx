import React from "react";
import {Box, Button, TextInput} from 'grommet';
import {Search, Filter} from 'grommet-icons';

export const SearchPost = () =>
    (
        <Box
            width="large"
            direction="row"
            align="center"
            pad={{horizontal: "small", vertical: "xsmall"}}
            round="small"
            border={{
                side: "all",
                color: "neutral-4"
            }}
        >
            <TextInput
                plain={true}
                placeholder="Enter name of post"
                size="large"
            />

            <Button icon={<Search color="neutral-4"/>}></Button>
            <Button icon={<Filter color="neutral-4"/>}></Button>

        </Box>

    );
