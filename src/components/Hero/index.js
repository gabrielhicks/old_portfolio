import React from 'react';
import { HeroContainer, Title } from './style';

export default function Hero() {
    return (
        <HeroContainer>
            <Title>
                Gabriel Hicks{' '}
                <i style={{ fontSize: '4vw', position: 'relative' }}>
                    Software Engineer
                </i>
            </Title>
        </HeroContainer>
    );
}
