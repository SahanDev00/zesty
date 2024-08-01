import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from '@chakra-ui/react'

  export function Accordian() {
    return (
        <Accordion allowToggle className='text-white w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[50%] mx-auto border p-5 space-y-2 rounded-3xl mt-10 mb-20'>
            <AccordionItem className='border-b border-t p-3 rounded-xl'>
                <h2>
                <AccordionButton>
                    <Box as='span' flex='1' textAlign='left' className='font-semibold text-[16px] sm:text-[17px] md:text-lg'>
                    Section 1 title
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className='text-gray-200 dark:text-gray-400'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem className='border-b border-t p-3 rounded-xl'>
                <h2>
                <AccordionButton>
                    <Box as='span' flex='1' textAlign='left' className='font-semibold text-[16px] sm:text-[17px] md:text-lg'>
                    Section 2 title
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className='text-gray-200 dark:text-gray-400'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem className='border-b border-t p-3 rounded-xl'>
                <h2>
                <AccordionButton>
                    <Box as='span' flex='1' textAlign='left' className='font-semibold text-[16px] sm:text-[17px] md:text-lg'>
                    Section 3 title
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className='text-gray-200 dark:text-gray-400'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem className='border-b border-t p-3 rounded-xl'>
                <h2>
                <AccordionButton>
                    <Box as='span' flex='1' textAlign='left' className='font-semibold text-[16px] sm:text-[17px] md:text-lg'>
                    Section 4 title
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className='text-gray-200 dark:text-gray-400'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
  }