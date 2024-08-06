import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

function TabsComponents() {
    return (
        <div className='text-white relative w-[95%] md:w-[50%] mx-auto mt-20'>
            <h1 className='mt-20 bg-gradient-to-b uppercase from-gray-200 to-gray-400 bg-clip-text text-center text-5xl sm:text-6xl font-semibold leading-snug text-transparent dark:from-white dark:to-slate-500/40'>Our Work</h1>
            <Tabs isFitted variant='enclosed-colored' className='w-full mt-10 md:mt-20'>
                <TabList mb='1em'>
                    <Tab className='border w-[100px] h-[40px] hover:bg-white hover:text-black font-semibold'>Tab One</Tab>
                    <Tab className='border w-[100px] h-[40px] hover:bg-white hover:text-black font-semibold'>Tab Two</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <p className='text-wrap mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eos repudiandae at iusto?</p>
                        <p className='text-wrap mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eos repudiandae at iusto?</p>
                        <p className='text-wrap mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eos repudiandae at iusto?</p>
                        <p className='text-wrap mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eos repudiandae at iusto?</p>
                        <p className='text-wrap mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eos repudiandae at iusto?</p>
                        <p className='text-wrap mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eos repudiandae at iusto?</p>
                    </TabPanel>
                    <TabPanel>
                        <p className='text-wrap mb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                        <p className='text-wrap mb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                        <p className='text-wrap mb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                        <p className='text-wrap mb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}

export default TabsComponents