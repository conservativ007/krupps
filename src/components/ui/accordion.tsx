'use client'

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useState } from 'react'

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('border-b', className)}
    {...props}
  />
))
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <AccordionPrimitive.Header className='flex'>
      <AccordionPrimitive.Trigger
        onClick={handleClick}
        ref={ref}
        className={cn(
          'flex flex-1 items-center py-4 font-medium transition-all hover:underline [&[data-state=open]>div]:rotate-0',
          className,
        )}
        {...props}
      >
        <div className='relative mr-2 h-4 w-4 shrink-0 transition-transform duration-200'>
          <div className='absolute w-[20px] h-[3px] bg-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-200'></div>
          <div
            className={`absolute w-[20px] h-[3px] bg-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
              isOpen ? 'rotate-0' : 'rotate-90'
            } transition-transform duration-200`}
          ></div>
          {/* <div
            className={`absolute w-[20px] h-[3px] bg-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
              isOpen ? 'rotate-0' : 'rotate-90'
            } transition-transform duration-200`}
          ></div> */}
        </div>
        <p className='m-auto'>{children}</p>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
})
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className='overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down'
    {...props}
  >
    <div className={cn('pb-4 pt-0', className)}>{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
