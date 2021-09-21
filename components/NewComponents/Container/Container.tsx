import { useState } from "react";

const Container = () => {
    const [title, setTitle] = useState<string>()
    return (
        <div className="border bg-gray-200 rounded-lg shadow-lg">
            <h1>Title</h1>
        </div>
    );
}

export default Container;
