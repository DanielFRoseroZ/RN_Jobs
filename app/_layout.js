import React, { useEffect, useState } from 'react';
import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';

const Layout = () => {
    const [isFontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    });

    const [areFontsLoaded, setAreFontsLoaded] = useState(false);

    useEffect(() => {
        if (isFontsLoaded) {
            setAreFontsLoaded(true);
        }
    }, [isFontsLoaded]);

    if (!areFontsLoaded) {
        return null;
    }

    return <Stack />;
};

export default Layout;
