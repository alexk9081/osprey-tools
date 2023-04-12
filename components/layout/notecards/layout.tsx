import { useState } from "react";

export default function NotecardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [testState, setTestState] = useState("Hello");
  return (
    <>
      <div>
        <div>
          <h1>THis is a large title</h1>
        </div>
        <button onClick={() => setTestState("Hello There")}>Change</button>
        {testState}
        <div>{children}</div>
      </div>
    </>
  );
}
