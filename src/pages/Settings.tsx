import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

let settings_values = () => {
    const saved = localStorage.getItem('settings');
    if (saved) {
        const jads = JSON.parse(saved);
        return jads;
    } else {
        return {
            '--background-color': '#fff',
            '--background-light': '#fff',
            '--primary-color': 'rgb(255,0,86)',
            '--shadow-color': 'rgba(0,0,0,0.2',
            '--text-color': '#0a0a0a',
            '--text-light': '#575757',
            '--font-size': '16px',
            '--animation-speed': 1,
        };
    }
};

let selectedColorIndex = () => {
    const saved = localStorage.getItem('primaryColor');
    if (saved) {
        const jhsd = JSON.parse(saved);
        return jhsd;
    } else {
        return 0;
    }
};

let selectedTheme = () => {
    const saved = localStorage.getItem('theme');
    if (saved) {
        const value = JSON.parse(saved);
        return value;
    } else {
        return 'light';
    }
};

let selectedFontSize = () => {
    const saved = localStorage.getItem('fontSize');
    if (saved) {
        const value = JSON.parse(saved);
        return value;
    } else {
        return 1;
    }
};

let selectedAnimationSpeed = () => {
	let saved = localStorage.getItem('animationSpeed')
	if(saved) {
		const value = JSON.parse(saved)
		return value
	}else {
		return 1
	}
}

const Settings = () => {
    const [theme, setTheme] = useState(selectedTheme);
    const [primaryColor, setPrimaryColor] = useState(selectedColorIndex);
    const [animationSpeed, setAnimationSpeed] = useState(selectedAnimationSpeed);
    const [fontSize, setFontSize] = useState(selectedFontSize);

    const [settings, setSettings] = useState(settings_values);

    useEffect(() => {
        const root = document.documentElement;
        for (let key in settings) {
            root.style.setProperty(key, settings[key]);
        }

        localStorage.setItem('settings', JSON.stringify(settings));
        localStorage.setItem('primaryColor', JSON.stringify(primaryColor));
        localStorage.setItem('theme', JSON.stringify(theme));
        localStorage.setItem('fontSize', JSON.stringify(fontSize));
        localStorage.setItem('animationSpeed', JSON.stringify(animationSpeed))

    }, [settings]);

    const themes = [
        {
            '--background-color': '#fff',
            '--background-light': '#fff',
            '--shadow-color': 'rgba(0,0,0,0.2)',
            '--text-color': '#0a0a0a',
            '--text-light': '#575757',
        },
        {
            '--background-color': 'rgb(29,29,29)',
            '--background-light': 'rgb(77,77,77)',
            '--shadow-color': 'rgba(0,0,0,0.2)',
            '--text-color': '#ffffff',
            '--text-light': '#eceaea',
        },
    ];

    const primaryColors = ['rgb(255,0,86)', 'rgb(33,150,243)', 'rgb(255,193,7)', 'rgb(0,200,83)', 'rgb(156,39,176)'];

    const fontSizes = [
        {
            title: 'Small',
            value: '12px',
        },
        {
            title: 'Medium',
            value: '16px',
        },
        {
            title: 'Large',
            value: '20px',
        },
    ];

    const animationSpeeds = [
        {
            title: 'Slow',
            value: 2,
        },
        {
            title: 'Medium',
            value: 1,
        },
        {
            title: 'Fast',
            value: 0.5,
        },
    ];

    function changeTheme(i) {
        const _theme = { ...themes[i] };
        setTheme(i === 0 ? 'light' : 'dark');
        // update settings
        let _settings = { ...settings };
        for (let key in _theme) {
            _settings[key] = _theme[key];
        }

        setSettings(_settings);
    }

    const changeColor = (i) => {
        const _color = primaryColors[i];
        let _settings = { ...settings };
        _settings['--primary-color'] = _color;
        setSettings(_settings);
        setPrimaryColor(i);
    };

    function changeFontSize(i) {
        let _size = fontSizes[i];
        let _settings = { ...settings };
        _settings['--font-size'] = _size.value;
        setFontSize(i);
        setSettings(_settings);
    }

    const changeAnimationSpeed = (i) => {
        let _speed = animationSpeeds[i];
        let _settings = { ...settings };
        _settings['--animation-speed'] = _speed.value;
        setAnimationSpeed(i);
        setSettings(_settings);
    };

    return (
        <>
            <div className='section d-block'>
                <h2>Primary theme</h2>
                <div className='options-container'>
                    <div className='option light' onClick={() => changeTheme(0)}>
                        {theme === 'light' && (
                            <div className='check'>
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                        )}
                    </div>
                    <div className='option dark' onClick={() => changeTheme(1)}>
                        {theme === 'dark' && (
                            <div className='check'>
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className='section d-block'>
                <h2>Preferred color</h2>
                <div className='options-container'>
                    {primaryColors.map((color, index) => (
                        <div
                            key={index}
                            className='option light'
                            style={{ backgroundColor: color }}
                            onClick={() => changeColor(index)}
                        >
                            {primaryColor === index && (
                                <div className='check'>
                                    <FontAwesomeIcon icon={faCheck} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className='section d-block'>
                <h2>Font size</h2>
                <div className='options-container'>
                    {fontSizes.map((size, index) => (
                        <button key={index} className='btn' onClick={() => changeFontSize(index)}>
                            {size.title}
                            {fontSize === index && (
                                <span>
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                            )}
                        </button>
                    ))}
                </div>
            </div>
            <div className='section d-block'>
                <h2>Animation speed</h2>
                <div className='options-container'>
                    {animationSpeeds.map((speed, index) => (
                        <button key={index} className='btn' onClick={() => changeAnimationSpeed(index)}>
                            {speed.title}
                            {animationSpeed === index && (
                                <span>
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Settings;
