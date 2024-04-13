import { Tabs } from 'antd';
import { useNavigate } from 'react-router-dom'
import TabContent from './tabContent';


export default function TabBars() {
    const navigate = useNavigate()
    const items = [
        {
            key: '1',
            label: 'ALL',
            children: <TabContent content_key={'ALL'} />,
        },
        {
            key: '2',
            label: 'TRENDING ARTICLES',
            children: <TabContent content_key={'TRENDING_ARTICLES'} />,
        },
        {
            key: '3',
            label: 'AI & ML',
            children: <TabContent content_key={'AI&ML'} />,
        },
        {
            key: '4',
            label: 'BLOCKCHAIN',
            children: <TabContent content_key={'BLOCKCHAIN'} />,
        },
        {
            key: '5',
            label: 'CLOUD COMPUTING',
            children: <TabContent content_key={'CLOUD_COMPUTING'} />,
        },
        {
            key: '6',
            label: 'CYBER SECURITY',
            children: <TabContent content_key={'CYBER_SECURITY'} />,
        },
        {
            key: '7',
            label: 'DATA SCIENCE',
            children: <TabContent content_key={'DATA_SCIENCE'} />,
        },
        {
            key: '8',
            label: 'FULL STACK DEVELOPMENT',
            children: <TabContent content_key={'FULLSTACK_DEVELOPMENT'} />,
        },
        {
            key: '9',
            label: 'UI & UX DESIGNIING',
            children: <TabContent content_key={'UI/UX_DESIGNING'} />,
        },
    ];

    function handleTabChange(key) {
        if (key === "1") {
            navigate('/#/all');
        } else if (key === '2') {
            navigate('/#/trendingArticles');
        } else if (key === '3') {
            navigate('/#/ai_ml');
        } else if (key === '4') {
            navigate('/#/blockchain');
        } else if (key === '5') {
            navigate('/#/cloudComputing');
        } else if (key === '6') {
            navigate('/#/cyberSecurity');
        } else if (key === '7') {
            navigate('/#/dataScience');
        } else if (key === '8') {
            navigate('/#/devops');
        } else if (key === '9') {
            navigate('/#/digitalMarketing');
        } else if (key === '10') {
            navigate('/#/fullStackDevelopment');
        } else if (key === '11') {
            navigate('/#/softwareAutomationTesting');
        } else if (key === '12') {
            navigate('/#/ui_uxDesigning');
        }
    }

    return (
        <Tabs style={{ width: "100%" }} defaultActiveKey="1" items={items} onChange={(activeKey) => { handleTabChange(activeKey) }} />
    )

}