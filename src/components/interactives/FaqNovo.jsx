import React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { cn } from '../../lib/utils'

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('border-b', className)}
    {...props}
  />
))
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef(
  ({ className, children, colorMode = 'default', ...props }, ref) => {
    let textColor
    switch (colorMode) {
      case 'light':
        textColor = 'text-black'
        break
      case 'dark':
        textColor = 'text-white'
        break
      default:
        textColor = 'text-black'
    }

    return (
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
          ref={ref}
          className={cn(
            `flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all text-left [&[data-state=open]>svg]:rotate-180 ${textColor} font-mainFont`,
            className
          )}
          {...props}
        >
          {children}
          <ChevronDown className="h-4 w-4 shrink-0 text-mutedForeground transition-transform duration-200" />
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
    )
  }
)
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
      ref={ref}
      className={cn(
        'overflow-hidden text-sm font-secondFont',
        'data-[state=open]:animate-accordion-down',
        'data-[state=closed]:animate-accordion-up',
        className
      )}
      {...props}
    >
      <div className="pb-4 pt-0">{children}</div>
    </AccordionPrimitive.Content>
  )
)
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
