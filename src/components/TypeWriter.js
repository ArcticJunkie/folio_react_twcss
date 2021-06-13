import Typical from 'react-typical';


function TypeWriter() {
    return (
        <div className="inline"><Typical
            loop={2}
            wrapper="span"
            steps={[
                2500,
                ' experiences.',
                4000,
                ' interfaces.',
                4000,
                ' websites.',
                6000
            ]}
        /></div>
    );
}

export default TypeWriter;