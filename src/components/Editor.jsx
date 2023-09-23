import {Box , styled} from '@mui/material';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

import '../App.css';

import {Controlled as ControlledEditor} from 'react-codemirror2';
import { useState } from 'react';

import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';

const Heading = styled(Box)`
    background: #1d1e22;
    display: flex;
    padding: 9px 12px;
`

const InnerHeader = styled(Box)`
    display: flex;
    background: #060606;
    color: #AAAEBC;
    justify-content: space-between;
`
const Container = styled(Box)`
    flex-grow: 1;
    flex-basic: 0;
    display: flex;
    flex-direction: column;
    padding: 0 8px 8px;
`

export default function Editor ({heading,icon,color,value,onChange}) {
    
    const [open,setOpen] = useState(true);
    
    function handleChange(editor,data,value){
        onChange(value);
    }
    
    return(
        <Container style={open ? null : {flexGrow:0}}>
            <InnerHeader>
                <Heading>
                    <Box style={{
                        background:color,
                        height:20,
                        width:20,
                        placeContent: 'center',
                        display: 'flex',
                        borderRadius: 5,
                        marginRight: 5,
                        paddingBottom: 2,
                        color: '#000'
                    }}
                    >{icon}</Box>
                    {heading}
                </Heading>
                <CloseFullscreenIcon
                    fontSize='small'
                    style={{alignSelf: 'center'}}
                    onClick={()=>setOpen(prevState => !prevState)}
                />
            </InnerHeader>
            <ControlledEditor
            className='controlled-editor'
            value={value}
            onBeforeChange={handleChange}
            options={{
                theme: 'material',
                lineNumbers: true
            }}
            />
        </Container>
    )
}