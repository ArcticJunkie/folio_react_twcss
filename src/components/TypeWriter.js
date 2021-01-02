import Typical from 'react-typical';

function TypeWriter() {
    return (
        <span className="inline font-poppins"><Typical
            loop={2}
            wrapper="n"
            steps={[
                2250,
                ' experiences.',
                2250,
                ' interfaces.',
                2250,
                ' websites.',
                8000
            ]}
        /></span>
    );
}

export default TypeWriter;