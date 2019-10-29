import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { RED } from '../../@style/colors';

const TimeLineIcon = styled.div`
    width: 80px;
    height: 80px;
    border: 1px solid #faebd7;
    display: inline-block;
    border-radius: 50%;
    box-shadow: 0px 0px 0px 2px #faebd7;
    background-color: #faebd7;
    text-align: center;
    line-height: 2em;
    font-size: 20px;
`;

const TimeLineHeader = styled.div`
    padding: 10px;
    padding-right: 20px;
    padding-left: 20px;
    background-color: #faebd7;
    display: inline-block;
    box-sizing: border-box;
    vertical-align: middle;
    line-height: 2.5em;
    margin: auto;
    font-family: Roboto Mono;
    color: #000;
    border-radius: 3px;
    margin-bottom: 50px;

    @media only screen and (max-width: 800px) {
        font-size: 1em;
        line-height: 1em;
    }
`;

const TimeLineDay = styled.div`
    margin-bottom: 20px;
    position: relative;
`;

const Line = styled.div`
    position: absolute;
    z-index: -1;
    border-left: 3px solid #faebd7;
    left: 50%;
    padding: 20px;
    height: 100%;
    @media only screen and (max-width: 800px) {
        display: none;
    }
`;

const HourPoint = styled.div`
    width: 15px;
    height: 15px;
    background-color: #faebd7;
    border-radius: 100%;
    display: block;
    margin-left: calc(50% - 6px);

    @media only screen and (max-width: 800px) {
        display: none;
    }
`;

const HourTitle = styled.h3`
    display: inline-block;
    margin-left: 40px;
    color: #faebd7;
    font-family: Vollkorn;
    @media only screen and (max-width: 800px) {
        margin-left: 20px;
    }
`;

const Content = styled.div`
    margin-left: 72px;
    margin-top: 10px;
    @media only screen and (max-width: 800px) {
        margin-left: 20px;
    }
`;

const Hour = styled.div`
    position: relative;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 50%;
    margin-left: 50%;
    text-align: left;
    margin-top: -56px;

    &:nth-child(4n - 3) {
        margin-left: 0;
    }
`;

TimelineComponent.propTypes = {};

function TimelineComponent({ data }) {
    return (
        <div style={{ position: 'relative', margin: 10, textAlign: 'center' }}>
            <div>
                <Line />
                {data.map((dayItem, k) => (
                    <TimeLineDay>
                        <TimeLineHeader>{dayItem.day}</TimeLineHeader>
                        {dayItem.hours.map((hourItem, i) => (
                            <Fragment>
                                <HourPoint />
                                <Hour>
                                    <HourTitle>{hourItem.hour}</HourTitle>
                                    <Content>{hourItem.content}</Content>
                                </Hour>
                            </Fragment>
                        ))}
                    </TimeLineDay>
                ))}
            </div>
        </div>
    );
}

export default TimelineComponent;
