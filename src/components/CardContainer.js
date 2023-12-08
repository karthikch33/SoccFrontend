import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Card } from 'antd';

const tabList = [
    {
      key: 'tab1',
      tab: 'Session',
    },
    {
      key: 'tab2',
      tab: 'Outcomes',
    },
  ];

  

const CardContainer = (props) => {


    const {sessionDescription,outcomeDescription,sessionId,sessiontitle} = props
    const contentList = {
        tab1: sessionDescription,
        tab2: outcomeDescription,
      };

      const [activeTabKey1, setActiveTabKey1] = useState('tab1');

      const onTab1Change = (key) => {
        setActiveTabKey1(key);
      };
  return (
    <div className="row my-4">
        <div className="col-12">
        <Card
        style={{
          width: '100%',
        }}
        title= {sessiontitle}
        extra={<Link to={`/registrations/${sessionId}`}>Register Here</Link>}
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={onTab1Change}
      >
        {contentList[activeTabKey1]}
      </Card>
        </div>
       </div>
        
  )
}

export default CardContainer