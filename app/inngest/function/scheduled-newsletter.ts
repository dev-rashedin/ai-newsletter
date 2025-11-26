import { inngest } from "../client";



export default inngest.createFunction(
  { id: 'newsletter/scheduled' },
  {event: 'newsletter.schedule'},
  {}
)