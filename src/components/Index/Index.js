import React from 'react';
import Contact from '../Contact';
import Hero from '../Hero';
import Projects from '../Projects/index';
import { IndexWrapper } from './style';

export default function Index() {
    return (
        <IndexWrapper>
            <Hero />
            <Projects />
            <Contact />
        </IndexWrapper>
    );
}
