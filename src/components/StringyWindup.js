import { useWindupString } from "windups";
// Make a new component
const StringyWindup = () => {
    const [text] = useWindupString("Hello world!");
    return <span>{text}</span>;
};

export default StringyWindup;