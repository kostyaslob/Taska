import { useState } from "react";

interface Values {
    x: number;
    y: number
}

export default function Coordinate() {
    const [values, setValues] = useState<Values>({
        x: 0, y: 0
    })

    // const updateX = () => {
    //     setValues({ ...values, x:  values.x + 1})
    // }

    //  const updateY = () => {
    //    setValues({ ...values, y: values.y + 1 });
    // };

    const updateValues = (key: keyof Values) => {
        setValues({
            ...values,
            [key]: values[key] + 1
        }
        )
    }
    
    return (
      <div>
        <button onClick={() => updateValues("x")}>UpdateX: {values.x}</button>
        <button onClick={() => updateValues("y")}>UpdateY: {values.y}</button>
      </div>
    );
}