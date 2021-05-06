import React from 'react';

import { Grid } from './styles';

import MainHeader from '../mainHeader';
import Aside from '../aside';
import Content from '../content'


const Layout: React.FC = ({ children }) => (
    <Grid>
        <MainHeader />
        <Aside />
        <Content>
            {children}
        </Content>
    </Grid>
)

export default Layout;