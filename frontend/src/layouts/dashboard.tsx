import Sidebar from '@/components/Sidebar'
import { Layout } from 'antd'
import { BookOutlined, HomeOutlined, CarryOutOutlined, CoffeeOutlined, UserSwitchOutlined, ShopOutlined, BankOutlined, ReconciliationOutlined } from '@ant-design/icons'
import Headers from '@/components/Headers'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'


const Dashboard = ({children} : {children:any}) => {
    const [collapsed, setCollapsed] = useState(false)
    const { Content } = Layout
    const router = useRouter()
    const navigation = [
        {
            name: 'Home',
            icon: <HomeOutlined />,
            href: '/'
        },
        {
            name: 'Task',
            icon: <CarryOutOutlined />,
            href: '/dashboard/hr/officeboy'
        },
        {
            name: 'Resepsionis',
            icon: <BookOutlined />,
            href: '/'
        },
        {
            name: 'Resto',
            icon: <CoffeeOutlined />,
            href: '/dashboard/resto'
        },
        {
            name: 'Human resources',
            icon: <UserSwitchOutlined />,
            href: '/dashboard/hr'
        },
        {
            name: 'Hotels',
            icon: <ShopOutlined />,
            href: '/dashboard/hotel'
        },
        {
            name: 'Payments',
            icon: <BankOutlined />,
            href: '/dashboard/payment'
        },
        {
            name: 'Purchasing',
            icon: <ReconciliationOutlined />,
            href: '/dashboard/purchasing'
        }
    ]
    const collapse = () => {
        setCollapsed(!collapsed)
    }

    return(
        <>
            <Head>
                <title>Hotel App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/assets/icons.png" />
            </Head>
            <Layout className='bg-white  max-h-screen' hasSider>
                <Sidebar nav={navigation} collapsed={collapsed} logo="/assets/icons.png" locations={router.asPath}/>
                <Content style={{ minHeight: "100vh" }}>
                    <Headers click={collapse}/>
                    <Content className='px-5 py-8' style={{minHeight: '80%'}}>
                        {children}
                    </Content>
                    <div className='p-5 text-center'>
                        Copyright by Hotelapp 2023
                    </div>
                </Content>
            </Layout>
        </>
    )
}

export default Dashboard