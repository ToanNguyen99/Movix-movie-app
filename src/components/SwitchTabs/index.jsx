/* eslint-disable react/prop-types */
import { useState } from "react";
import "./style.scss";

const SwithTabs = ({ data, onTabChange }) => {
    const [selectTab, setSelectTab] = useState(0);
    const [left, setLeft] = useState(0);

    const handleActiveTab = (tab, index) => {
        setLeft(index * 100);
        setTimeout(() => {
            setSelectTab(index);
        }, 300);

        onTabChange(tab, index);
    };

    return (
        <div className="switchingTabs">
            <div className="tabItems">
                {data?.map((tab, index) => (
                    <span key={index} className={`tabItem ${selectTab === index ? "active" : ""}`} onClick={() => handleActiveTab(tab, index)}>
                        {tab}
                    </span>
                ))}
                <span className="movingBg" style={{left}}/>
            </div>
        </div>
    );
};

export default SwithTabs;
