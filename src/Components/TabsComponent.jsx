import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

function TabsComponents() {
    return (
        <div className='text-white relative w-[95%] md:w-[50%] mx-auto mt-20'>
            <h1 className='mt-20 bg-gradient-to-b uppercase from-gray-200 to-gray-400 bg-clip-text text-center text-5xl sm:text-6xl font-semibold leading-snug text-transparent dark:from-white dark:to-slate-500/40'>Our Work</h1>
            <Tabs isFitted variant='enclosed-colored' className='w-full mt-10 md:mt-20'>
                <TabList mb='1em' className='gap-2'>
                    <Tab 
                        _selected={{ bg: 'white', color: 'black' }} 
                        className='border font-semibold px-3 py-2'
                    >
                        SOFTWARE DEVELOPMENT
                    </Tab>
                    <Tab 
                        _selected={{ bg: 'white', color: 'black' }} 
                        className='border font-semibold px-3 py-2'
                    >
                        WEB DEVELOPMENT
                    </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <p className='text-wrap mb-3'>
                            <strong>Custom Software Solutions:</strong> Tailored solutions to meet unique business needs, focusing on efficiency, scalability, and performance.
                        </p>
                        <p className='text-wrap mb-3'>
                            <strong>Application Development:</strong> Design and development of desktop and mobile applications using a variety of programming languages and frameworks.
                        </p>
                        <p className='text-wrap mb-3'>
                            <strong>System Integration:</strong> Seamless integration with existing systems and databases to enhance workflow and data consistency.
                        </p>
                        <p className='text-wrap mb-3'>
                            <strong>Software Maintenance & Support:</strong> Ongoing support and maintenance to ensure software reliability, performance, and regular updates.
                        </p>
                        <p className='text-wrap mb-3'>
                            <strong>Consulting Services:</strong> Expert advice on software architecture, design, and strategic planning for optimal software implementation.
                        </p>
                        <p className='text-wrap mb-3'>
                            <strong>Enterprise Solutions:</strong> Robust solutions for large-scale enterprises focusing on security, compliance, and data management.
                        </p>
                        <p className='text-wrap mb-3'>
                            <strong>Quality Assurance & Testing:</strong> Comprehensive testing strategies to ensure the highest quality of software through automated and manual approaches.
                        </p>
                        <p className='text-wrap mb-3'>
                            <strong>Cloud Services:</strong> Cloud-based solutions providing scalability and flexibility, with expertise in various cloud platforms.
                        </p>
                    </TabPanel>
                    <TabPanel>
                        <p className='text-wrap mb-3'>
                            <strong>Responsive Web Design:</strong> Creating websites that adapt seamlessly to all device sizes and screen resolutions for a unified user experience.
                        </p>
                        <p className='text-wrap mb-3'>
                            <strong>Front-End Development:</strong> Utilizing modern frameworks like React and Tailwind CSS to build interactive and visually appealing user interfaces.
                        </p>
                        <p className='text-wrap mb-3'>
                            <strong>Back-End Development:</strong> Building robust server-side applications and APIs with a focus on various back-end technologies and databases.
                        </p>
                        <p className='text-wrap mb-3'>
                            <strong>E-Commerce Solutions:</strong> Developing online stores with secure payment integrations and customizable product catalogs for a seamless shopping experience.
                        </p>
                        <p className='text-wrap mb-3'>
                            <strong>Content Management Systems (CMS):</strong> Implementing CMS platforms like WordPress or custom solutions to make content management easy and intuitive.
                        </p>
                        <p className='text-wrap mb-3'>
                            <strong>SEO Optimization:</strong> Enhancing search engine rankings and visibility through strategic SEO techniques, both on-page and off-page.
                        </p>
                        <p className='text-wrap mb-3'>
                            <strong>Performance Optimization:</strong> Improving website speed and performance with best practices for fast-loading and efficient web applications.
                        </p>
                        <p className='text-wrap mb-3'>
                            <strong>Maintenance & Support:</strong> Providing regular updates, troubleshooting, and ensuring the ongoing security and functionality of web applications.
                        </p>
                        <p className='text-wrap mb-3'>
                            <strong>3D Web Applications:</strong> Developing immersive 3D experiences with advanced graphics and interactive features, utilizing technologies like Three.js.
                        </p>
                        <p className='text-wrap mb-3'>
                            <strong>Modern UI Applications:</strong> Designing and building modern user interfaces with a focus on aesthetics, usability, and responsive design principles.
                        </p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}

export default TabsComponents
