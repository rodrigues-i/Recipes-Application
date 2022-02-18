import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Settings from './pages/Settings';
import FooterSection from './components/FooterSection';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { animationSpeeds, fontSizes, primaryColors } from './settingStyles';

export interface settingsProps {
    '--background-color': string;
    '--background-light': string;
    '--primary-color': string;
    '--shadow-color': string;
    '--text-color': string;
    '--text-light': string;
    '--font-size': string;
    '--animation-speed': string;
}

let settings_values: () => settingsProps = () => {
    const saved = localStorage.getItem('settings');
    if (saved) {
        const value = JSON.parse(saved);
        return value;
    } else {
        return {
            '--background-color': '#fff',
            '--background-light': '#fff',
            '--primary-color': 'rgb(255,0,86)',
            '--shadow-color': 'rgba(0,0,0,0.2',
            '--text-color': '#0a0a0a',
            '--text-light': '#575757',
            '--font-size': '16px',
            '--animation-speed': '1',
        };
    }
};

const selectedTheme: () => 'light' | 'dark' = () => {
    const saved = localStorage.getItem('settings');
    if (saved) {
        const value = JSON.parse(saved);
        if (value['--background-color'] === '#fff') {
            return 'light';
        } else {
            return 'dark';
        }
    } else {
        return 'light';
    }
};

const selectedPrimaryColor: () => number = () => {
    const saved = localStorage.getItem('settings');
    if (saved) {
        const value = JSON.parse(saved)['--primary-color'];
        const obj = primaryColors.indexOf(value);

        return obj;
    } else {
        return 0;
    }
};

const selectedFontSize: () => number = () => {
    const saved = localStorage.getItem('settings');
    if (saved) {
        const value = JSON.parse(saved)['--font-size'];
        const [obj] = fontSizes.filter((item) => item.value === value);

        return fontSizes.indexOf(obj);
    } else {
        return 1;
    }
};

const selectedAnimationSpeed: () => string = () => {
    const saved = localStorage.getItem('settings');
    if (saved) {
        const value = JSON.parse(saved)['--animation-speed'];
        const [obj] = animationSpeeds.filter((item) => String(item.value) === value);

        return String(animationSpeeds.indexOf(obj));
    } else {
        return '1';
    }
};

function App() {
    const [settings, setSettings] = useState(settings_values);
    const [theme, setTheme] = useState(selectedTheme);
    const [primaryColor, setPrimaryColor] = useState(selectedPrimaryColor);
    const [fontSize, setFontSize] = useState(selectedFontSize);
    const [animationSpeed, setAnimationSpeed] = useState(selectedAnimationSpeed);

    useEffect(() => {
        const root = document.documentElement;
        for (let key in settings) {
            root.style.setProperty(key, settings[key as keyof typeof settings]);
        }
    }, [settings]);

    return (
        <Router>
            <Navbar />
            <div className='container main'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/recipes' element={<Recipes />} />
                    <Route
                        path='/settings'
                        element={
                            <Settings
                                settings={settings}
                                setSettings={setSettings}
                                theme={theme}
                                setTheme={setTheme}
                                primaryColor={primaryColor}
                                setPrimaryColor={setPrimaryColor}
                                fontSize={fontSize}
                                setFontSize={setFontSize}
                                animationSpeed={animationSpeed}
                                setAnimationSpeed={setAnimationSpeed}
                            />
                        }
                    />
                </Routes>
            </div>
            <FooterSection />
        </Router>
    );
}

export default App;
