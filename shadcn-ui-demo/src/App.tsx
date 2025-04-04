import { Calendar } from "@/components/ui/calendar";
import React from "react";

function App() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    </>
  );
}

export default App;
