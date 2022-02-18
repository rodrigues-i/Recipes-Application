import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { themes, primaryColors, fontSizes, animationSpeeds } from '../settingStyles';
import { settingsProps } from '../App';

type Props = {
    settings: settingsProps;
    setSettings: React.Dispatch<React.SetStateAction<settingsProps>>;
    theme: 'light' | 'dark';
    setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
    primaryColor: number;
    setPrimaryColor: React.Dispatch<React.SetStateAction<number>>;
    fontSize: number;
    setFontSize: React.Dispatch<React.SetStateAction<number>>;
    animationSpeed: string;
    setAnimationSpeed: React.Dispatch<React.SetStateAction<string>>;
};

const Settings: React.FC<Props> = ({
    settings,
    setSettings,
    theme,
    setTheme,
    primaryColor,
    setPrimaryColor,
    fontSize,
    setFontSize,
    animationSpeed,
    setAnimationSpeed,
}) => {
    useEffect(() => {
        localStorage.setItem('settings', JSON.stringify(settings));
    }, [settings]);

    function changeTheme(i: number) {
        const _theme = { ...themes[i] };
        setTheme(i === 0 ? 'light' : 'dark');
        // update settings
        let _settings = { ...settings };
        for (let key in _theme) {
            _settings[key as keyof typeof _settings] = _theme[key as keyof typeof _theme];
        }

        setSettings(_settings);
    }

    const changeColor = (i: number) => {
        const _color = primaryColors[i];
        let _settings = { ...settings };
        _settings['--primary-color'] = _color;
        setSettings(_settings);
        setPrimaryColor(i);
    };

    function changeFontSize(i: number) {
        let _size = fontSizes[i];
        let _settings = { ...settings };
        _settings['--font-size'] = _size.value;
        setFontSize(i);
        setSettings(_settings);
    }

    const changeAnimationSpeed = (i: number) => {
        let _speed = animationSpeeds[i];
        let _settings = { ...settings };
        _settings['--animation-speed'] = String(_speed.value);
        setAnimationSpeed(String(i));
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
                            {parseInt(animationSpeed) === index && (
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
