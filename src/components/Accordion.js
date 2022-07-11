import { AccordionItem } from './AccordionItem'
export const Accordion = (props) => {
    return (
        <div className="accordion accordion-flush" id="accordionFlushExample">
            {
                props.forecast.map((hour, index) => <AccordionItem key={index} index={index} data={hour} />)
            }
        </div>
    )
}